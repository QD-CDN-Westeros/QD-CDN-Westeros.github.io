/* Lugia - 11/08/2020 16:28:56 GMT */
$(function(){noShowPriceCategories=[123,177,195,196,197,235,253,254,255,258,259,260,263,264,265,268,269,270,273,274,275,278,279,280,283,284,285,288,289,290,293,294,295,298,299,300,303,304,305,308,309,310],showPriceFromCategories=[38,43,44,152,236];try{var date=new Date;date.setMonth(date.getMonth()+1);for(var c=$("div#caracteristicas:last td.Saiba-Mais").text(),a={},b=0;b<window.dataLayer.length;b++)if("string"==typeof window.dataLayer[b].pageCategory){a=window.dataLayer[b];break}var e={"@context":"http://schema.org","@type":"Product",name:a.productName,description:c,image:($("#image-main:first").attr("src")||"").replace(/(ids\/[0-9]+)\-[0-9]+\-[0-9]+/i,"$1-1000-1000"),brand:a.productBrandName,category:a.productDepartmentName==a.productCategoryName?a.productCategoryName:a.productDepartmentName+" / "+a.productCategoryName,url:a.pageUrl,productID:a.productId,itemCondition:"http://schema.org/NewCondition",sku:(a.pageUrl.match(/idsku=(\d+)/)||["",""])[1]};if(c=0,!noShowPriceCategories.includes(a.productCategoryId)){if(skuJson.available)for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].available&&(0==c||skuJson.skus[b].bestPrice<c)&&(c=skuJson.skus[b].bestPrice)&&(e.sku=skuJson.skus[b].sku);if(0!=c&&(e.offers={"@type":"Offer",availability:"http://schema.org/InStock",price:0>a.productCategoryName.indexOf("Controlado")?c/100:"",priceCurrency:"BRL",url:a.pageUrl,priceValidUntil:date.toISOString(),itemCondition:"http://schema.org/NewCondition"}),window.TVrating){for(var worst=0,t=1;5>=t;t++)if(window.TVrating.rate.histogram[t]){worst=t;break}e.aggregateRating={"@type":"AggregateRating",ratingValue:window.TVrating.rate.average,bestRating:window.TVrating.rate.best,worstRating:worst,ratingCount:window.TVrating.rate.count,itemReviewed:{"@type":"Product",name:a.productName}}}}var d=document.createElement("script");d.type="application/ld+json",d.innerHTML=JSON.stringify(e);var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(d,f)}catch(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error("Problemas com os Microdados:( . Detalhes: ",e)}});