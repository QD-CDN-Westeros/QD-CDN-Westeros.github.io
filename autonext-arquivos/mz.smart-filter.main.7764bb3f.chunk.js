(this["webpackJsonpmz-smart-select"]=this["webpackJsonpmz-smart-select"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"pathTree":"/api/catalog_system/pub/facets/search/todos-os-produtos?map=c","pathFacets":"/api/catalog_system/pub/facets/search","firstSpecName":"Compatibilidade Montadora","secondSpecName":"Ve\xedculo","secondSpecification":"specificationFilter_36","thirdSpecName":"Ano","thirdSpecification":"specificationFilter_50"}')},2:function(e){e.exports=JSON.parse('{"name":"Autoglass","url":"https://autonext.myvtex.com"}')},20:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(12),r=a.n(c),i=a(13),s=a(14),l=a(15),u=a(18),h=a(19),d=a(2),p=a(16),m=a(17),S=a.n(m),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={searchUrl:"",categoryFilter:[],firstSelect:[],secondSelect:[],thirdSelect:[],firstOptionsState:"",secondOptionsState:"",thirdOptionsState:""},e}return Object(l.a)(a,[{key:"getCategoryTree",value:function(){var e=this;S.a.get("".concat(d.url).concat(p.pathTree)).then((function(t){e.setState({categoryFilter:t.data.SpecificationFilters.Montadora},(function(){e.getFilters()}))})).catch((function(e){throw e}))}},{key:"getFilters",value:function(){var e,t=this.state,a=t.categoryFilter,n=t.firstSelect;a.forEach((function(e){var t=e.Name.split("|")[0];n.includes(t)||n.push(t)})),n.sort(),e=n.map((function(e,t){return o.a.createElement("option",{value:e,key:t},e)})),this.setState({firstSelect:e})}},{key:"mountOptionsSelect",value:function(e,t,a){var n,c,r=this.state,s=r.categoryFilter,l=r.firstOptionsState;"secondSelect"===e&&this.setState({firstOptionsState:a.target.value,secondOptionsState:"",thirdOptionsState:""}),"thirdSelect"===e&&this.setState({secondOptionsState:a.target.value,searchUrl:"".concat(l,"|").concat(a.target.value)}),c=[],s.forEach((function(e){var n=e.Name.split("|");c.includes(n[t])||n[t-1]!==a.target.value||c.push(n[t])})),c.sort(),n=c.map((function(e,t){return o.a.createElement("option",{value:e,key:t},e)})),this.setState(Object(i.a)({},e,n))}},{key:"setUrl",value:function(e){var t=this,a=this.state,n=a.categoryFilter,o=a.searchUrl,c="".concat(o,"|").concat(e.target.value);n.forEach((function(a){a.Name===c&&(t.setState({thirdOptionsState:e.target.value}),window.open(d.url+a.LinkEncoded))}))}},{key:"componentDidMount",value:function(){this.getCategoryTree()}},{key:"render",value:function(){var e=this.state,t=e.firstSelect,a=e.secondSelect,n=e.thirdSelect,c=e.firstOptionsState,r=e.secondOptionsState,i=e.thirdOptionsState;return o.a.createElement("div",{className:"mz-smart-select"},o.a.createElement("label",{htmlFor:"firstSelect"},"Selecione a montadora do seu ve\xedculo",o.a.createElement("select",{name:"firstSelect",id:"firstSelect",value:c,onChange:this.mountOptionsSelect.bind(this,"secondSelect",1)},o.a.createElement("option",{value:"",disabled:!0},"Montadora"),t)),o.a.createElement("label",{htmlFor:"secondSelect"},"Selecione o modelo do seu ve\xedculo",o.a.createElement("select",{name:"secondSelect",id:"secondSelect",value:r,onChange:this.mountOptionsSelect.bind(this,"thirdSelect",2)},o.a.createElement("option",{value:"",disabled:!0},"Modelo"),a)),o.a.createElement("label",{htmlFor:"fourthSelect"},"Selecione o ano do seu ve\xedculo",o.a.createElement("select",{name:"fourthSelect",id:"fourthSelect",value:i,onChange:this.setUrl.bind(this)},o.a.createElement("option",{value:""},"Ano"),n)))}}]),a}(n.Component);var v=function(){return o.a.createElement("div",{className:"mz-smartSelect"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("searchoptionswrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);