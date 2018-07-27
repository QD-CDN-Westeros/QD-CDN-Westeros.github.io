
console.log("Actualizado el 19-07-2016");
var mapsStores = {
  lat_act : 0,
  lon_act : 0,
  active_postion:false,
  counter:0,
  markers:[],
  a_counter:0,
  infowindow:{},
  data_Countries:{},
  icon : "/arquivos/pinStore.png",
  defaultCountry: "Colombia",
  defaultLat : 4.729727,
  defaultLng : -74.059696,
  /*
  Inicialización del script
  @param {String} N/A
  return {String} N/A
  */
  init:function(){
    mapsStores.loadApiGoogle(function(){
      mapsStores.data_Countries = mapsStores.getAllData();  
      mapsStores.getLocation();
      var div = document.createElement("div");
      div.id = "container_country";
      var div_city =  document.createElement("div");
      div_city.id = "container_city";
      document.getElementsByClassName("search-tools")[0].appendChild(div);
      document.getElementsByClassName("search-tools")[0].appendChild(div_city);
      document.getElementsByClassName("search-tools")[0].innerHTML += '<div id="storeContent"></div><div id="stores" class="stores_ul"></div>';
    });
  },  
  loadApiGoogle:function($callback){
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                $callback();
            }
        };
    } else {
        script.onload = function () {
            $callback();
        };
    }
    script.src = "//maps.google.com/maps/api/js?sensor=false";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  /*
  Inicialización del script
  @param {String} N/A
  return {String} N/A
  */
  getLocation:function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(mapsStores.showPosition,mapsStores.showError);
    }else{
      document.getElementById("error").innerHTML = "Geolocalización no es compatible con este navegador.";
    }
  },
  /*
  Crea el map con las opciones que se le suministren
  @param {Obj} $options - Opciones para la carga del mapa con sus coordenadas
  return {Obj} map - mapa creado
  */
  createMap:function($options){
    mapholder = document.getElementById('map-canvas')
      mapholder.style.height = '600px';
      mapholder.style.width = '62%';
    var map = new google.maps.Map(document.getElementById("map-canvas"),$options);
    return map;
  },
  /*
  Crea las opciones para la creacion del mapa con geolocalizacion y todas las tiendas alrededor
  @param {Obj} $position - objeto que define la fucionalidaad de geoloclizacion
  return {String} N/A
  */
  showPosition:function($position){
    mapsStores.active_postion = true;
    console.log('------------------------------------------------------ se jecuta showPosition -----------------------------------------------------  ')
      lat = $position.coords.latitude;
      lon = $position.coords.longitude;
      mapsStores.lat_act = lat;
      mapsStores.lon_act = lon;
      latlon = new google.maps.LatLng(lat, lon);

      mapsStores.verificateCountry(function($data){
      //  mapsStores.showError(true);
        console.log($data);
        var myOptions = {
        center:latlon,zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
      };
      var map = mapsStores.createMap(myOptions);
      var marker = new google.maps.Marker({position:latlon,map:map,title:"Tu estas aca!",animation: google.maps.Animation.DROP});  
        mapsStores.painstStores(map,$data,function(){
          mapsStores.addMarker(map);
          });
      });
      mapsStores.loadList();
      if( typeof mapsStores.defaultCountry !== "undefined" && mapsStores.defaultCountry != "" ) {
        $("#countries").val($("#countries option[country='" + mapsStores.defaultCountry + "'").val()).change();
      }
  },
  /*
  Pinta todas las tiendas en el mapa
  @param {Obj} $map - Mapa donde se pintaran todas las tiendas
  @param {Array} $data - datos de todas las tiendas 
  @param {Function} $callback - funcion que se ejecuta al momento de fializar toda la funcionalidad
  return {Obj} map - mapa creado
  */
  painstStores:function($map,$data,$callback,$centinela){
  
    mapsStores.markers = [];  
    for (var i = 0; i < $data.length; i++) {
        var store = $data[i];
        var marker = new google.maps.Marker({
          data_complete:store,
          position: {lat: store[2], lng: store[1]},
          map: $map,
          content:store[3],
          icon: mapsStores.icon,
          title: store[0]
        });
        mapsStores.markers.push(marker);
     }
    var data = mapsStores.markers;
    var mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {

      var listHTML = '<select id="list_mobile">';
      for(var i=0; i < data.length; i++){        
        listHTML += '<option value="'+i+'" style="cursor:pointer">'+data[i].content.name+'</option>';
      }
      listHTML += '</select>';
      document.getElementById("stores").innerHTML = listHTML;
      $("#list_mobile").change(function(){
        mapsStores.storeInMap(this.options[this.selectedIndex].value);
      })
    }else{      

      var listHTML = '<ul>';
      for(var i=0; i < data.length; i++){        
        listHTML += '<li onclick="mapsStores.storeInMap('+i+')" style="cursor:pointer">'+data[i].content.name+'</li>';
      }
      listHTML += '</ul>';
      document.getElementById("stores").innerHTML = listHTML;
    }

    if($callback != undefined){
      $callback();
    }
  },
  /*
  Agrega a todas las marcas de cada tienda la funcionalidad de mesaje al momento de darle click
  @param {Obj} $map - Mapa donde se encuentran las marcas de cada tienda
  return {String} N/A
  */
  addMarker:function($map){
      if(mapsStores.a_counter < mapsStores.markers.length){
        var i = mapsStores.a_counter;
        var markers_alls = mapsStores.markers;
        var marker = markers_alls[i];
          google.maps.event.addListener(marker, 'click', function() {             
            if (mapsStores.infowindow.content != undefined ) {
                  mapsStores.infowindow.close();
            }
            mapsStores.infowindow = new google.maps.InfoWindow({
              content: mapsStores.contentHTML(marker.content,marker.content.name)
            });
            document.getElementById("storeContent").innerHTML = mapsStores.contentHTML(marker.content,marker.content.name);
            $map.setZoom(15);
            $map.setCenter(marker.getPosition());
            mapsStores.infowindow.open($map, marker);
            $map.panTo(marker.getPosition());
          });
            mapsStores.a_counter++;
         mapsStores.addMarker($map);    
      }else{
        mapsStores.a_counter = 0;
      }
  },
  /*
  Crea en contenido HTML para el mensaje que se mostrara en cada tienda al dar click
  @param {Obj} $store - datos de la tienda que se mostrara
  @param {String} $storeName - Nombre de la tienda
  @param {String} $city - ciudada de la tienda
  @param {String} $country - Nombre del pais
  return {String} contentString - codigo HTML con mensaje
  */
  contentHTML:function($store, $storeName, $city, $country){
    var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h2 id="firstHeading" class="firstHeading">'+ $storeName +'</h2>'+
              '<div id="bodyContent">'+
             // '<p><strong>Ciudad: </strong> ' + $city + '</p>' +       
             // '<p><strong>Pais: </strong> ' + $country + '</p>' +
              ($store.address != null && $.trim($store.address) != "" 
                ? '<p><strong>Dirección: </strong> ' + $store.address + '</p>' 
                : '') +
              
              ($store.phone != null && $.trim($store.phone) != ""
                ? '<p><strong>Teléfono: </strong> ' + $store.phone + '</p>' 
                : '') +
              ($store.horario != null && $.trim($store.horario) != ""
                ? '<p><strong>Horarios: </strong> ' + $store.horario + '</p>'
                : '') +
              '</div>'+
              '</div>';
     return contentString;
  },
  /*
  Verifica el pais con las coordenadas que se obtubieron de la geolocalizacino
  @param {Obj} $callBack - funcion que se ejecuta al momento de finalizar
  return {String} N/A
  */
  verificateCountry:function($callBack){
    $.ajax({
      url:"//maps.googleapis.com/maps/api/geocode/json?latlng="+mapsStores.lat_act+","+mapsStores.lon_act+"&sensor=false",
      taype:"GET",
      success:function(_data){
        console.log(_data);
        var name_count = _data.results[_data.results.length - 1].formatted_address.toUpperCase().split(" ").join("");
        var data_all = mapsStores.data_Countries;
        var centinela = false;
        for(name in data_all){
          var name_obj = name.toUpperCase().split(" ").join("");
            if(name_obj == name_count){
              centinela = true;
              mapsStores.verificateCities(data_all[name],_data,$callBack);
            }            
        } 
        if(centinela == false){
            mapsStores.loadMapDefault();
        }
      }
    });   
  },
  /*
  Verifica el pais con las coordenadas que se obtubieron de la geolocalizacino
  @param {Obj} $data_country - datos del pais en que se encuentra obtenidos de la variable creada
  @param {Obj} $data_ajax - datos del pais en que se enncuentra obtenidos de la consulta al api de google
  @param {Obj} $callBack - funcion que se ejecuta al finalizar 
  return {String} N/A
  */
  verificateCities:function($data_country,$data_ajax,$callBack){
    var data = $data_country.cities;
    var city_act = $data_ajax.results[0].formatted_address.toUpperCase().split(" ").join("");
    var centinela = false;
    for(name in data){
      var city_obj = name.toUpperCase().split(" ").join("");
      if(city_act.indexOf(city_obj) >= 0){
        mapsStores.createStoresMap(data[name].stores,$callBack);
        centinela = true;
      }
    }
    if(centinela == false){
      mapsStores.createStoresMap($data_country,$callBack)
    }
  },
  /*
  Crea objeto con todas las tiendas que se encuentran y solo se ejecuta si esta actia la geolocalizacion
  @param {Obj} $stores - objeto con todas las tiendas que se desean pintar
  @param {String} $city
  @param {Function} $callBack - funcion que se ejecuta al momento de finalizar la funcionalidad
  @return {String} N/A
  */
  createStoresMap:function($stores,$callBack){
    var stores_map = {type: 'FeatureCollection',features:[]};
    var coor_stores = [];
    if($stores.cities != undefined){
      $stores = $stores.cities;
      for(name_city in $stores){
        var data_city = $stores[name_city].stores;
        console.log(data_city);
        for(name in data_city){
            var data = data_city[name];
            coor_stores.push([name,Number(data.lng), Number(data.lat),{name: name , phone:data.phone , address:data.address , horario : data.schedules}]);
         }
      }
      mapsStores.loadList();
    }else{
      for(name in $stores){
        var data = $stores[name];
        coor_stores.push([name,Number(data.lng), Number(data.lat),{name: name , phone:data.phone , address:data.address , horario : data.schedules}]);
      }
    }
    $callBack(coor_stores);
  },
  loadList:function(){
    var list = document.createElement("select");
          list.id = "countries";
          list.style.width = "100%";
          list.onchange = function(){
            console.log('cambia la lista de paises')
            document.getElementById("storeContent").innerHTML = ""
            if(this.value != "NULL"){
              var list_city = document.createElement("select");
              list_city.id = "cities";
              list_city.style.width = "100%";
              list_city.onchange = function(){
                console.log('cambia la lista de ciudades')
                document.getElementById("storeContent").innerHTML = ""
                mapsStores.detectedStoresPaint(mapsStores.getOption("countries").text,mapsStores.getOption("cities").text);
              }
              document.getElementById("container_city").innerHTML = "";
              document.getElementById("container_city").appendChild(list_city);
              mapsStores.fullList("city");
              mapsStores.detectedStoresPaint(mapsStores.getOption("countries").text,"");
            }else{
              document.getElementById("container_city").innerHTML = "";
            }
          };
        document.getElementById("container_country").appendChild(list);
        mapsStores.fullList("country");
  },
  /*
  Funcion que se ejecuta al momento de no aceptar la geolocalizacion
  @param {String} N/A
  @return {String} N/A
  */
  showError:function($centinela){
    console.log('-------------------------------------- se ejecuta showError ---------------------------------------------------');    
    console.log(mapsStores.active_postion);
    if(mapsStores.active_postion == false){
        var obj = mapsStores.data_Countries;
        var country = mapsStores.getURLParam("pais");
        var city = mapsStores.getURLParam("ciudad");
        mapsStores.loadList();
        console.log(country);
        console.log(city);
        if($centinela != true){
          if(country == "" && city == ""){
            if( typeof mapsStores.defaultCountry !== "undefined" && mapsStores.defaultCountry != "" ) {
              $("#countries").val($("#countries option[country='" + mapsStores.defaultCountry + "'").val()).change();
              mapsStores.detectedStoresPaint(mapsStores.defaultCountry,"");
            }
          }else{
            if( typeof mapsStores.defaultCountry !== "undefined" && mapsStores.defaultCountry != "" ) {
              $("#countries").val($("#countries option[country='" + mapsStores.defaultCountry + "'").val()).change();
              mapsStores.detectedStoresPaint(country,city);
            }
            
          }
        } 
      } 
    },
    /*
    detecta las tiendas que se deben pintar segun las condiciones del pais y de ciudad
    @param {String} $country - pais que se debe seleccionar
    @param {String} $city - ciudad que se debe seleccionar
    @return {String} N/A
    */
    detectedStoresPaint:function($country,$city){
      var obj = mapsStores.data_Countries;
      var pais = "";
      var cuidad = "";
      var options_map = {zoom: 6,mapTypeId: google.maps.MapTypeId.ROADMAP};
      var stores_arr = [];
      var centinela_global = false;
      console.log($country);
      console.log($city);

      if($country != "" && $city == ""){
        pais = obj[$country];
        console.log(pais);
        if(pais != undefined){  
          options_map["center"] = new google.maps.LatLng(pais.lat,pais.lng);
          var cudades = pais.cities;
          for(name in cudades){
            var stores = cudades[name].stores;
            for(name_store in stores){
              var store = stores[name_store];
              stores_arr.push([name_store,store.lng, store.lat,{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
            }
          }
        }else{
          centinela_global = true;
          mapsStores.loadMapDefault();
        } 
      }
      
      if($country == "" && $city != ""){
        var centinela = false;
        for(name in obj){
          var city = obj[name].cities[$city];
          if(city != undefined){
            centinela = true;
            options_map.zoom = 12;
            options_map["center"] = new google.maps.LatLng(city.lat,city.lng);
            var stores = city.stores;
            for(name_store in stores){
              var store = stores[name_store];
              stores_arr.push([name_store,store.lng, store.lat,{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
            }
          }else{
            console.log("no esta la ciudad");
          }
        }
        if(centinela == false){
          centinela_global = true;
          mapsStores.loadMapDefault();
        }
      }

      if($country == "" && $city == ""){
        centinela_global = true;
        mapsStores.loadMapDefault();
      }

      if($country != "" && $city != ""){
        pais = obj[$country];
        if(pais != undefined){
          var centinela = false;
          cuidad = pais.cities[$city];
          if(cuidad != undefined){
            centinela = true;
            options_map.zoom = 12;
            options_map["center"] = new google.maps.LatLng(cuidad.lat,cuidad.lng);
            var stores = cuidad.stores;
            for(name_store in stores){
              var store = stores[name_store];
              stores_arr.push([name_store,store.lng, store.lat,{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
            }
          }
          if(centinela == false){
            options_map["center"] = new google.maps.LatLng(pais.lat,pais.lng);
            var cudades = pais.cities;
            for(name in cudades){
              var stores = cudades[name].stores;
              for(name_store in stores){
                var store = stores[name_store];
                stores_arr.push([name_store,store.lng, store.lat,{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
              }
            }
          }
          
        }else{
          var centinela = false;
          for(name in obj){
            var city = obj[name].cities[$city];
            if(city != undefined){
              centinela = true;
              options_map.zoom = 12;
              options_map["center"] = new google.maps.LatLng(city.lat,city.lng);
              var stores = city.stores;
              for(name_store in stores){
                var store = stores[name_store];
                stores_arr.push([name_store,store.lng, store.lat,{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
              }
            }
          }
          if(centinela == false){
            centinela_global = true;
            mapsStores.loadMapDefault();
          }
        }     
      }
      if(centinela_global == false){
        var map = mapsStores.createMap(options_map);
        mapsStores.painstStores(map,stores_arr,function(){
          mapsStores.addMarker(map);
        });
      }
    },
    /*
    se ejecuta al momento de dar click en un elemento de la lista de tiendas y acerca y muestra mensaje de la tienda seleccionada en el mapa
    @param {String} $position - posicion del marcador que se selecciono
    @return {String} N/A
    */
    storeInMap:function($position){      
      var marker = mapsStores.markers[$position];
      marker.map.setZoom(16);
      marker.map.setCenter(marker.getPosition());      
      if(mapsStores.infowindow.content != undefined ) {
        mapsStores.infowindow.close();
      }
      mapsStores.infowindow = new google.maps.InfoWindow({
        content: mapsStores.contentHTML(marker.content,marker.content.name)
      });
      mapsStores.infowindow.open(marker.map, marker);
      document.getElementById("storeContent").innerHTML = mapsStores.contentHTML(marker.content,marker.content.name);
    },
    /*
    Pinta un mapa por default
    @param {String} N/A
    @return {String} N/A
    */
    loadMapDefault:function(){
      console.log("se pinta el mapa por default");
        var options_map = {zoom: 6,mapTypeId: google.maps.MapTypeId.ROADMAP};
        var obj = mapsStores.data_Countries;
        var ciudades = "";
        var stores_arr = [];
        options_map["center"] = new google.maps.LatLng(mapsStores.defaultLat, mapsStores.defaultLng);
        ciudades = obj[mapsStores.defaultCountry].cities;
        for(name in ciudades){
          var stores = ciudades[name].stores;
          for(name_store in stores){
            var store = stores[name_store];
            stores_arr.push([name_store,Number(store.lng), Number(store.lat),{name: name_store , phone:store.phone , address:store.address , horario : store.schedules}]);
          }
        } 
        var map = mapsStores.createMap(options_map);
        
        mapsStores.painstStores(map,stores_arr,function(){
          mapsStores.addMarker(map);
        });
    },
    /*
    Obtine la opcion de la lista que se indique
    @param {String} $id - id de la lista que se desea optener la opcion que se selecciona
    @return {Element} option_selected - opcion HTML que se encuentra seleccionada en la lista
    */
    getOption:function($id){
        var option_selected = document.getElementById($id);
        option_selected = option_selected.options[option_selected.selectedIndex];
        return option_selected;
    },
    /*
    Obtine el parametro undicado de la url
    @param {String} $name - nombre del parametro que s desea obtener el valor
    @return {String} $value - valor del parametro 
    */
    getURLParam: function ($name){
          var value = decodeURIComponent((new RegExp('[?|&]' + $name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
          if (value == null) {
              return '';
          } else {
              return value;
          }
    },
     /*
    Llena la lista de pais o ciudad
    @param {String} $list - Nombre de la lista que se desea llenar
    @return {String} N/A
    */
    fullList:function($list){
      if($list == "country"){
        var data = mapsStores.data_Countries;
    var options = '<option value="NULL">Paises</option>';
        for(name in data){
          options+='<option country="' + name + '" value="'+String(data[name].lat)+','+String(data[name].lng)+'">'+name+'</option>';
        }
        document.getElementById("countries").innerHTML = options;
    
    
      }else{
        var data = mapsStores.data_Countries;
        var options = '<option value="NULL">Ciudades</option>';
        var option_selected = mapsStores.getOption("countries").text;
        for(name in data){
          if(option_selected == name){
            var city = data[name].cities;
            for(name_atri in city){
              options+='<option value="'+String(city[name_atri].lat)+','+String(city[name_atri].lng)+'">'+name_atri+'</option>';  
            }
          }         
        }
        document.getElementById("cities").innerHTML = options;
      }
    
    
    },
    /*
    se pinta los datos de los paises ciudades y tiendas
    @param {String} N/A
    @return {String} N/A
    */
    getAllData:function(){
      var data = {
    	"Colombia": {
    		"lat": 10.990262,
        "lng": -74.78924,
        "cities": {
          "Barranquilla": {
            "lat": 10.990262,
            "lng": -74.78924,
            "stores": {
              "Portal del prado": {
                "lat": 10.990262,
                "lng": -74.78924,
                "address": "cc portal del prado local 66-67-71",
                "phone": "3851757 ext 8188",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados de 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Unico": {
                "lat": 10.989695,
                "lng": -74.81211,
                "address": "CC UNICO LOCAL 115",
                "phone": "2905466 EXT 8307",
                "schedules": "Lunes a Jueves 9:30 am a 8:00 pm / Viernes y Sábados de 9:30 am a 9:00 pm / Domingos y festivos 9:30 a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Viva": {
                "lat": 11.008176,
                "lng": -74.82167,
                "address": "CC VIVA LOCAL 344",
                "phone": "2905466 EXT 8328",
                "schedules": "Lunes a Sábado 10:00 a 9:00 pm/ Domingos y festivos 11:00 a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Bogotá": {
            "lat": 4.648311,
            "lng": -74.12046,
            "stores": {
              "Montevideo": {
                "lat": 4.648311,
                "lng": -74.12046,
                "address": "CLL 19 NO.69B-07",
                "phone": "2805466 ext 8116",
                "schedules": "Lunes a Sábados 10:00 am a 7:00 pm / Domingos y festivos 11:00 am a 5:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Calima": {
                "lat": 4.618912,
                "lng": -74.086844,
                "address": "CC CALIMA A NO.41-42",
                "phone": "2905466 EXT 8144",
                "schedules": "Lunes a Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:30 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Cedritos": {
                "lat": 4.71733,
                "lng": -74.031872,
                "address": "CLLE 140 # 7 C 65",
                "phone": "2905466 EXT 8287",
                "schedules": "Lunes a Jueves 10:00 am a 7:30 pm / Viernes y Sábados 10:00 am a 8:00 pm /Domingos y festivos 11:00 am a 6:30 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Centro Nariño": {
                "lat": 4.628904,
                "lng": -74.085123,
                "address": "CRRA 33 # 25 B- 23",
                "phone": "2905466 EXT 8286",
                "schedules": "Lunes a Sábados 10:00 am a 8:00 pm / Domingos y festivos 10:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Centro mayor": {
                "lat": 4.593208,
                "lng": -74.123589,
                "address": "CRA 27 NO.38A-83SUR CC CENTRO MAYOR LOCAL 2038-2039",
                "phone": "2905466 EXT 8147",
                "schedules": "Lunes a Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Imperial": {
                "lat": 4.749188,
                "lng": -74.095403,
                "address": "CLL 148 NO.104-20 CC IMPERIAL LOCAL 262",
                "phone": "2905466 EXT 8148",
                "schedules": "Lunes a Sábados 10:00 am a 8:30 pm / Domingos y festivos de 11:00 am a 8:30 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Av. Chile": {
                "lat": 4.659209,
                "lng": -74.061349,
                "address": "CLL 72 NO.14-33",
                "phone": "2905466 EXT 8162",
                "schedules": "Lunes a Viernes 9:00 am a 9:30 pm / Sábados 9:00 am a 9:00 pm / Domingos y festivos 9:00 am a 6:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Ferias": {
                "lat": 4.681978,
                "lng": -74.089595,
                "address": "CALLE 72 # 69 C 18",
                "phone": "2905466 EXT 8304",
                "schedules": "Lunes a Sábados 10:00 am a 8:00 pm / Domingos y festivos 10:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Fontibon": {
                "lat": 4.675059,
                "lng": -74.143638,
                "address": "CRRA 100 # 19-41",
                "phone": "2905466 EXT 8303",
                "schedules": "Lunes a Jueves 9:00 am a 7:30 pm / Viernes y Sábados 9:00 am a 8:00 pm / Domingos y festivos 10:00 am a 6:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Outlet Factory": {
                "lat": 4.629211,
                "lng": -74.118475,
                "address": "AV, AMERICAS # 62-84 CC OUTLET FACTORY LOCAL 134 Y 135",
                "phone": "2905466 EXT 8285",
                "schedules": "Lunes a Sábados 10:00 am a 8:00 pm / Domingos y festivos 10:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Plaza de las americas": {
                "lat": 4.61796,
                "lng": -74.137285,
                "address": "TRANS 64A NO.26-50 SUR CC PLAZA DE LAS AMERICAS LOCAL 1-027, 1-029, 1-037",
                "phone": "2905466 EXT 8181",
                "schedules": "Lunes a Sábados de 9:00 am a 9:00 pm / Domingos y festivos 11:00 a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "La 82": {
                "lat": 4.666502,
                "lng": -74.055163,
                "address": "CRA 13 NO.81-37",
                "phone": "2905466 EXT 8182",
                "schedules": "Lunes a Miercoles 10:00 am a 8:30 pm / Jueves y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Santa Barbara": {
                "lat": 4.701152,
                "lng": -74.043024,
                "address": "AV 15 # 122- 29",
                "phone": "2905466 EXT 8272",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm /Domingos y festivos 11:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Chapinero": {
                "lat": 4.650821,
                "lng": -74.063597,
                "address": "CRA 13 NO. 63A-31",
                "phone": "2905466 EXT 8189",
                "schedules": "Lunes a Sábados 9:00 am a 8:30 pm / Domingos y festivos 10:00 am a 5:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Zona Industrial": {
                "lat": 4.631343,
                "lng": -74.112862,
                "address": "CRA 60 NO.12-39",
                "phone": "2905466 EXT 8197",
                "schedules": "Lunes a Viernes 10:00 am a 7:00 pm / Sábados 9:30 am a 8:30 pm / Domingos y festivos 10:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Floresta": {
                "lat": 4.686546,
                "lng": -74.074163,
                "address": "CALLE 98A NO.68D-65",
                "phone": "2905466 EXT 8231",
                "schedules": "Lunes a Sábados 10:00 am a 8:00 pm / Domingos y festivos 11:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Restrepo": {
                "lat": 4.585465,
                "lng": -74.101945,
                "address": "CALLE 18 SUR NO.19-14",
                "phone": "2905466 EXT 8240",
                "schedules": "Lunes a Sábados 10:00 am a 7:30 pm/ / Domingos y festivos 10:00 am a 6:30 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Toberin": {
                "lat": 4.744792,
                "lng": -74.045186,
                "address": "CALLE 164 NO.21-48",
                "phone": "2905466 EXT 8246",
                "schedules": "Lunes a Viernes 10 am a 7:00 pm / Sábados 10:00 am a 8:00 pm / Domingos y festivos 11:00 am a 6:00pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Bulevar": {
                "lat": 4.71155,
                "lng": -74.071814,
                "address": "CC BULEVAR NIZA LOCAL 2-96",
                "phone": "2905466 EXT 8249",
                "schedules": "Lunes a Sábados 10:00 am a 8:00 pm / Domingos y festivos 11:00 am a 6:30 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Fontanar": {
                "lat": 4.88266,
                "lng": -74.035777,
                "address": "VIA CHIA-CAJICA COSTADO ORIENTAL C.C FONTANAR LOCAL 2-17",
                "phone": "2905466 EXT 8293",
                "schedules": "Lunes a Viernes 10:00 am a 8:00 pm / Sábados 10:00 am a 9:00 pm / Domingos y festivos 10:00 a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Santafe": {
                "lat": 4.76194,
                "lng": -74.045255,
                "address": "C.C. SANTAFE III ETAPA LOCAL 210,211,212",
                "phone": "2905466 EXT 8251",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm/ Viernes y Sábados 10:00 am a 9:30 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Bucaramanga": {
            "lat": 7.099671,
            "lng": -73.107364,
            "stores": {
              "Cacique": {
                "lat": 7.099671,
                "lng": -73.107364,
                "address": "TRANSV 93 CON TRANSV ORIENTAL BRR EL TEJAR CC CACIQUE LOCAL 111",
                "phone": "6971306 EXT 192",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 10:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Mega mall": {
                "lat": 7.130732,
                "lng": -73.112613,
                "address": "CRA 33A NO.29-15 CC MEGA MALL LOCAL 23",
                "phone": "6971306 EXT 275",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 12:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Cali": {
            "lat": 3.369387,
            "lng": -76.527406,
            "stores": {
              "Jardin plaza": {
                "lat": 3.369387,
                "lng": -76.527406,
                "address": "CRA 98 # 16-200 CC JARDIN PLAZA LOCAL 207",
                "phone": "2905466 EXT 8296",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y sábados 10:00 am a 9:00 / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Unicentro panam": {
                "lat": 3.374355,
                "lng": -76.539345,
                "address": "CRA 100 NO. 5 169 P 2 CC UNICENTRO LOCAL 628-629-630",
                "phone": "4853401 EXT 8213",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Unico": {
                "lat": 3.464888,
                "lng": -76.500914,
                "address": "CC UNICO LOCAL 36",
                "phone": "2905466 EXT 8305",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "La Estación": {
                "lat": 3.46532,
                "lng": -76.513816,
                "address": "CARRERA 1 # 36-26 CC LA ESTACION LOCAL A-220-21-22",
                "phone": "1-2905466 EXT 8321",
                "schedules": "Lunes a Jueves de 10:00 am a 8:00 pm / Viernes y Sábado de 10:00 a a 9:00 pm / Domingos y festivos de 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Chipichape": {
                "lat": 3.475984,
                "lng": -76.527838,
                "address": "CALLE 38 NORTE NO.6N-35 C.C. CHIPICHAPE LOCAL 8138, 8139",
                "phone": "4853401 EXT 8250",
                "schedules": "Lunes a viernes 10:00 am a 8:00 pm / Sábados 9:30 am a 9:30 pm / Domingos y festivos 12:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Cartagena": {
            "lat": 10.415174,
            "lng": -75.529394,
            "stores": {
              "Caribe Plaza": {
                "lat": 10.415174,
                "lng": -75.529394,
                "address": "CALLE 29 NO.22-108 CC CARIBE PLAZA LOCAL 109",
                "phone": "6930720 EXT 61",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 10:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Calle de la cruz": {
                "lat": 10.425828,
                "lng": -75.546824,
                "address": "CALLE DE LA CRUZ CRA 36 NO.9-41",
                "phone": "6930720 EXT 143",
                "schedules": "Lunes a Sábados 9:00 am a 7:00 pm / Domingos y festivos de 9:00 am a 4:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Mall plaza": {
                "lat": 10.424905,
                "lng": -75.546823,
                "address": "CASTILLO SAN FELIPE CON AVENIDA PEDRO DE HEREDIA CC MALL PLAZA LOCAL 207 AL 210",
                "phone": "6930720 EXT 186",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 10:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Cúcuta": {
            "lat": 7.888605,
            "lng": -72.496582,
            "stores": {
              "Ventura Plaza": {
                "lat": 7.888605,
                "lng": -72.496582,
                "address": "CALLE 10 NO.0E-94 C.C. VENTURA PLAZA LOCAL 248",
                "phone": "5955149 EXT 8149",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Centro": {
                "lat": -72.502784,
                "lng": 7.886925,
                "address": "AVENIDA 4 #10-28",
                "phone": "2905466 EXT 8322",
                "schedules": "Lunes a Sábado de 9:00 a 7:00 pm / Domingos y festivos de 9:00 am a 1:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "GIRARDOT": {
            "lat": -74.797185,
            "lng": 4.307787,
            "stores": {
              "SEVEN.SEVEN GIRARDOT": {
                "lat": -74.797185,
                "lng": 4.307787,
                "address": "AV KENNEDY CON CALLE 33 CC UNICENTRO LOCAL 227",
                "phone": "2905466 EXT 8320",
                "schedules": "Lunes a Jueves de 10:00 am a 8:00 pm/ Viernes y Sábados de 10:00 a 9:00 pm / Domingos y festivos de 11:00 a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Ibague": {
            "lat": 4.43648,
            "lng": null,
            "stores": {
              "Multicentro": {
                "lat": 4.43648,
                "lng": null,
                "address": "CRA 5 NO.60-123 CC MULTICENTRO LOCAL 106",
                "phone": "2905466 EXT 8151",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "La estacion": {
                "lat": 4.445627,
                "lng": -75.205055,
                "address": "CC LA ESTACION LOCAL 2-16, 2-17, 2-18",
                "phone": "2905466 EXT 8220",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Manizales": {
            "lat": 5.069319,
            "lng": -75.50962,
            "stores": {
              "Fundadores": {
                "lat": 5.069319,
                "lng": -75.50962,
                "address": "Cl 33 B No. 20 - 03 local 221. CC Fundadores Manizales",
                "phone": "2905466 EXT 8332",
                "schedules": "Lunes a Sábado 10:00 am a 9:00 pm/ Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Medellín": {
            "lat": 6.229205,
            "lng": -75.570466,
            "stores": {
              "Premiun plaza": {
                "lat": 6.229205,
                "lng": -75.570466,
                "address": "CC PREMIUN PLAZA LOCAL 1230",
                "phone": "6043528 EXT 8142",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Molinos": {
                "lat": 6.233138,
                "lng": -75.604212,
                "address": "CALLE 30A NO.82A-26 CC LOS MOLINOS LOCAL 2027",
                "phone": "6043528 EXT 8150",
                "schedules": "Lunes a Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Guayabal": {
                "lat": 6.233191,
                "lng": -75.60418,
                "address": "CALLE 29 A # 52-51 LOCAL 5SB",
                "phone": "2905466 EXT 8308",
                "schedules": "Lunes a Sábados 10:00 am a 7:00 pm / Domingos 11:00 am a 4:00 pm (festivos no abren)",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Pichincha": {
                "lat": 6.247743,
                "lng": -75.568142,
                "address": "CALLE 48 NO.49-58 PICHINCHA",
                "phone": "6043528 EXT 8169",
                "schedules": "Lunes a Jueves 9:00 am a 7:00 pm / Viernes y sábados 9:00 am a 7:30 pm / Domingos 9:00 am a 5:00 pm (festivos no abren)",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Monteria": {
            "lat": 8.778914,
            "lng": -75.861582,
            "stores": {
              "Buenavista": {
                "lat": 8.778914,
                "lng": -75.861582,
                "address": "CR 6 NO.68-72 CC BUENAVISTA LOCAL 124A",
                "phone": "2905466 EXT 8214",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Neiva": {
            "lat": 2.95,
            "lng": -75.288,
            "stores": {
              "San pedro plaza": {
                "lat": 2.95,
                "lng": -75.288,
                "address": "CR 8A ENTRE CLL 38 Y 48 CC SAN PEDRO PLAZA LOCAL 290",
                "phone": "2905466 EXT 8204",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes y sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Unico": {
                "lat": 2.962132,
                "lng": -75.292707,
                "address": "CC UNICO LOCAL 11",
                "phone": "2905466 EXT 8306",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes 10:00 am a 9:00 pm / Sábados Domingos y festivos 10:00 am a 8:30 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "NEIVA": {
            "lat": -75.248601,
            "lng": 2.933931,
            "stores": {
              "Santa Lucia": {
                "lat": -75.248601,
                "lng": 2.933931,
                "address": "C.C SANTA LUCIA CALLE 8 # 48-145 LOCAL 245",
                "phone": "1-2905466 EXT 8319",
                "schedules": "Lunes a jueves de 10:00 am a 9:00 pm / viernes a Domingo- festivos de 10:00 am a 9:30 ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Pitalito": {
            "lat": 1.85017,
            "lng": -76.064637,
            "stores": {
              "Pitalito": {
                "lat": 1.85017,
                "lng": -76.064637,
                "address": "AV CIRCUNVALAR ENTRE CLL 19 Y 19B CC SAN ANTONIOLOCAL 130 AL 135",
                "phone": "2905466 EXT 8173",
                "schedules": "Lunes a Jueves 10:00 am a 8:30 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Popayan": {
            "lat": 2.459376,
            "lng": -76.594718,
            "stores": {
              "Campanario": {
                "lat": 2.459376,
                "lng": -76.594718,
                "address": "CRA 9 NO.24A-21 CC CAMPANARIO LOCAL 45",
                "phone": "2905466 EXT 8115",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Riohacha": {
            "lat": 11.536362,
            "lng": -72.921956,
            "stores": {
              "Viva Riohacha": {
                "lat": 11.536362,
                "lng": -72.921956,
                "address": "CC VIVA RIOHACHA LOCAL 120",
                "phone": "2905466 EXT 8301",
                "schedules": "Lunes a Sábados 10:00 am a 7:00 pm / Domingos 11:00 am a 4:00 pm (festivos no abren)",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Rionegro": {
            "lat": 6.146891,
            "lng": -75.378489,
            "stores": {
              "Rionegro": {
                "lat": 6.146891,
                "lng": -75.378489,
                "address": "CALLE 43 NO.54-139 CC SAN NICOLAS ETAPA 2, LOCAL 3325-3329- 3331",
                "phone": "6043528 EXT 8167",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Sabaneta": {
            "lat": 6.161773,
            "lng": -75.378485,
            "stores": {
              "Mayorca": {
                "lat": 6.161773,
                "lng": -75.378485,
                "address": "CONJUNTO INMOBILIARIO CALLE 50 SUR CC MAYORCA LOCAL 3047A",
                "phone": "2905466 EXT8298",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Santa marta": {
            "lat": 40.432048,
            "lng": -3.670641,
            "stores": {
              "Buenavista": {
                "lat": 40.432048,
                "lng": -3.670641,
                "address": "AV LIBERTADOR PARQUE TRUPILLO ESQUINA CC BUENAVISTA LOCAL 49A 49B 49C",
                "phone": "4351742-EXT 8218",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Sincelejo": {
            "lat": 9.303229,
            "lng": -75.387948,
            "stores": {
              "Viva sincelejo": {
                "lat": 9.303229,
                "lng": -75.387948,
                "address": "CARRERA 25 NO. 23-49 CC VIVA SINCELEJO LOCAL 128B",
                "phone": "2905466 EXT 8216",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 7:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Centro": {
                "lat": 9.301024,
                "lng": -75.395081,
                "address": "CALLE 23 # 18-50 LOCAL 2",
                "phone": "2905466 EXT 8113",
                "schedules": "Lunes a Sábados 9:00 am a 7:00 pm / Domingos y festivos 9:00 am a 5:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Villavicencio": {
            "lat": 4.142014,
            "lng": -73.634407,
            "stores": {
              "Unicentro villao": {
                "lat": 4.142014,
                "lng": -73.634407,
                "address": "AV 40 NO.27-00 CC UNICENTRO LOCAL 246-247",
                "phone": "2905466 EXT 8165",
                "schedules": "Lunes a Sábados 10:00 am 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              },
              "Viva villao": {
                "lat": 4.125638,
                "lng": -73.638052,
                "address": "CALLE 7 NO.45-185 CC VIVA VILLAVICENCIO LOCAL 149",
                "phone": "2905466 EXT 8236",
                "schedules": "Lunes a Domingos 10:00 am a 9:00 pm",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          },
          "Yopal": {
            "lat": 5.347821,
            "lng": -72.39029,
            "stores": {
              "Unicentro": {
                "lat": 5.347821,
                "lng": -72.39029,
                "address": "CARRERA 29 NO.14-47 CC UNICENTRO LOCAL 256B",
                "phone": "2905466 EXT 8222",
                "schedules": "Lunes a Jueves 10:00 am a 8:00 pm / Viernes y Sábados 10:00 am a 9:00 pm / Domingos y festivos 11:00 am a 8:00 pm ",
                "parqueadero": "",
                "fax": "",
                "domicilios": "",
                "video": "",
                "images": [""]
              }
            }
          }
        }
    	}
    };
    
        return data;
  }
};
$(document).ready(function(){
mapsStores.init();
});
