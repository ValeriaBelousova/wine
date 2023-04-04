(this["webpackJsonpreact-mapbox-gl"]=this["webpackJsonpreact-mapbox-gl"]||[]).push([[0],{17:function(e,t,o){},7:function(e,t,o){e.exports=o(8)},8:function(e,t,o){"use strict";o.r(t);var i=o(6),s=o(1),a=o.n(s),n=o(2),r=o.n(n),l=o(3),c=o(4),d=(o(17),["children"]),u=function(e){var t=e.children,o=Object(i.a)(e,d);return a.a.createElement(c.a,Object.assign({mapStyle:"mapbox://styles/valeriabelousova/clfkslwn8001g01pp9irv5yta",accessToken:"pk.eyJ1IjoidmFsZXJpYWJlbG91c292YSIsImEiOiJjazVkcm51YzMwZGZjM2xvM2xnZmltOHd5In0.1xUC4Qs0uGpmWUQElmlDGA",center:[37.6156,55.7522],zoom:3},o),t)},p=c.a.component((function(e){var t=e.map,o=new r.a.NavigationControl({showCompass:!1,showZoom:!0});return t.addControl(o,"top-left"),t.on("load",(function(){var e=null;t.addSource("dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1"}),t.addLayer({id:"hillshading",source:"dem",type:"hillshade"},"land-structure-polygon"),t.addSource("wines",{type:"geojson",data:"https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/wine_poi_id_itog_photos.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:38}),t.addSource("msk_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u041c\u043e\u0441\u043a\u0432\u0430"},geometry:{type:"Point",coordinates:[37.6156,55.7522]}}]}}),t.addSource("spb_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},geometry:{type:"Point",coordinates:[30.315877,59.939099]}}]}}),t.addSource("krs_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a"},geometry:{type:"Point",coordinates:[92.8672,56.0184]}}]}}),t.addSource("nino_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"},geometry:{type:"Point",coordinates:[44.002,56.3287]}}]}}),t.addSource("ekb_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433"},geometry:{type:"Point",coordinates:[60.6122,56.8519]}}]}}),t.addSource("nsb_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"},geometry:{type:"Point",coordinates:[82.9346,55.0415]}}]}}),t.addSource("brn_poi",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"\u0411\u0430\u0440\u043d\u0430\u0443\u043b"},geometry:{type:"Point",coordinates:[83.7636,53.3606]}}]}}),t.addLayer({id:"clusters",type:"circle",source:"wines",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#000000",100,"#000000",750,"#000000"],"circle-radius":["step",["get","point_count"],22,10,30,25,40]}}),t.addLayer({id:"cluster-count",type:"symbol",source:"wines",filter:["has","point_count"],layout:{"text-field":["get","point_count_abbreviated"],"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":16},paint:{"text-color":"#ffffff"}}),t.addLayer({id:"unclustered-point",type:"circle",source:"wines",filter:["!",["has","point_count"]],paint:{"circle-color":["case",["==",["feature-state","selected"],!0],"#ffffff","#000000"],"circle-radius":["case",["==",["feature-state","selected"],!0],5,7],"circle-stroke-width":["case",["==",["feature-state","selected"],!0],2,0],"circle-stroke-color":["case",["==",["feature-state","selected"],!0],"#000000","#000000"]}});t.addLayer({id:"wine_names",type:"symbol",source:"wines",visibility:"none",layout:{"text-field":"{\u041d\u0430\u0437\u0432\u0430}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[.54,.23]},paint:{"text-color":"#000000"}}),t.addLayer({id:"label_layer",type:"symbol",source:"wines",layout:{"text-field":"{\u0413\u043e\u0440\u043e\u0434}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[.64,.23]},paint:{"text-color":"#000000"}}),t.addLayer({id:"msk_names",type:"symbol",source:"msk_poi",visibility:"none",layout:{"text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[.74,-2.33]},paint:{"text-color":"#000000"}}),t.addLayer({id:"spb_names",type:"symbol",source:"spb_poi",visibility:"none",layout:{"text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.54,-1.3]},paint:{"text-color":"#000000"}}),t.addLayer({id:"krs_names",type:"symbol",source:"krs_poi",visibility:"none",layout:{"text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.34,-.8]},paint:{"text-color":"#000000"}}),t.addLayer({id:"ekb_names",type:"symbol",source:"ekb_poi",visibility:"none",layout:{visibility:"none","text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.34,-.8]},paint:{"text-color":"#000000"}}),t.addLayer({id:"nsb_names",type:"symbol",source:"nsb_poi",visibility:"none",layout:{visibility:"none","text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.34,-.8]},paint:{"text-color":"#000000"}}),t.addLayer({id:"brn_names",type:"symbol",source:"brn_poi",layout:{visibility:"none","text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.34,-.8]},paint:{"text-color":"#000000"}}),t.addLayer({id:"nino_names",type:"symbol",source:"nino_poi",visibility:"none",layout:{visibility:"none","text-field":"{name}","text-size":15,"text-anchor":"bottom-left","text-font":["Roboto Light","Arial Unicode MS Bold"],"symbol-avoid-edges":!0,"text-offset":[1.34,-.8]},paint:{"text-color":"#000000"}}),t.on("click","clusters",(function(e){var o=t.queryRenderedFeatures(e.point,{layers:["clusters"]}),i=o[0].properties.cluster_id;t.getSource("wines").getClusterExpansionZoom(i,(function(e,i){e||t.easeTo({center:o[0].geometry.coordinates,duration:3e3,essential:!0,zoom:i+3})}))})),t.on("click",(function(o){var i=t.queryRenderedFeatures(o.point,{layers:["unclustered-point"]});if(i.length){t.setFeatureState({source:"wines",id:e},{selected:!1});var s=i[0];if(s){var a=s.id;t.setFeatureState({source:"wines",id:e},{selected:!1}),t.setFeatureState({source:"wines",id:a},{selected:!0}),e=a}}else t.setFeatureState({source:"wines",id:e},{selected:!1})})),t.on("click","unclustered-point",(function(e){var o=e.features[0].geometry.coordinates.slice(),i=e.features[0].properties["\u041d\u0430\u0437\u0432\u0430"],s=e.features[0].properties["\u0421\u0430\u0439\u0442"],a=(s.replace("https://","").replace("http://","").replace("instagram.com/","").split("/")[0].split("?")[0],e.features[0].properties["\u0422\u0438\u043f_\u0437"].replace(";",",")),n=e.features[0].properties["\u0413\u043e\u0440\u043e\u0434"],l=e.features[0].properties["\u0410\u0434\u0440\u0435\u0441"],c=e.features[0].properties["\u0418\u043c\u044f_\u0441"],d=e.features[0].properties.photos.split(","),u=d.length>0&&""!=d[0],p=1==d.length&&""!=d[0],y="";for(d.forEach((function(e,t){var o=e;y+=0==t?'<div class="carousel-item active">\n                                          <img class="d-block w-100"\n                                           src="https://storage.yandexcloud.net/wine/'.concat(o.replace("'","").replace("'","").replace(" ",""),'" \n                                           alt="First slide">\n                                      </div>'):'<div class="carousel-item">\n                                          <img class="d-block w-100"\n                                           src="https://storage.yandexcloud.net/wine/'.concat(o.replace("'","").replace("'","").replace(" ",""),'" \n                                           alt="First slide">\n                                      </div>')}));Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;(new r.a.Popup).setLngLat(o).setHTML("<div class='content'>\n                  ".concat(u?'\n                      <div class=\'carousel\'>\n                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\n                          <div class="carousel-inner">\n                              '.concat(y,"\n                          </div>\n                          ").concat(p?"":'\n                              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\n                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n                              <span class="sr-only">Previous</span>\n                          </a>\n                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\n                              <span class="carousel-control-next-icon" aria-hidden="true"></span>\n                              <span class="sr-only">Next</span>\n                          </a>',"\n                          </div>\n                  </div>"):"","\n                  \n                  <div class='description'>\n                      <div class='name'>").concat(i,"</div>\n                      <div class='type'>").concat(a,"</div>\n                      <br>\n                      <div class='address'>").concat(n,", ").concat(l,"</div>\n                      <div class='url'><a href=").concat(s,' style="color: black">\u0421\u0430\u0439\u0442</a></div>\n                      <br>\n                      ').concat(c?"<div class='type'>\u0410\u0432\u0442\u043e\u0440 \u0432\u0438\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438 \u2013</div>\n                                  <div class='author'>".concat(c,"</div>"):"","\n                  </div>\n              </div>")).addTo(t)})),t.on("mouseenter","clusters",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","clusters",(function(){t.getCanvas().style.cursor=""})),t.on("click","unclustered-point",(function(e){console.log(e.features[0].geometry.coordinates);var o=e.features[0].geometry.coordinates[0],i=e.features[0].geometry.coordinates[1];73==e.features[0].id&&(console.log(e.features[0].id),t.flyTo({center:[o,i+.85],zoom:5,duration:6e3,essential:!0})),67==e.features[0].id?(console.log(e.features[0].id),t.flyTo({center:[o,i+.02],zoom:12,duration:6e3,essential:!0})):t.flyTo({center:[o,i+.006],zoom:14,duration:4e3,essential:!0})})),t.on("mouseenter","unclustered-point",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","unclustered-point",(function(){t.getCanvas().style.cursor=""})),t.on("zoom",(function(e){var o=t.getZoom();o>11&&t.setLayoutProperty("wine_names","visibility","visible"),o<=11&&t.setLayoutProperty("wine_names","visibility","none"),t.getZoom()>7?(t.setLayoutProperty("label_layer","visibility","none"),t.setLayoutProperty("msk_names","visibility","none"),t.setLayoutProperty("spb_names","visibility","none"),t.setLayoutProperty("krs_names","visibility","none")):(t.setLayoutProperty("label_layer","visibility","visible"),t.setLayoutProperty("msk_names","visibility","visible"),t.setLayoutProperty("spb_names","visibility","visible"),t.setLayoutProperty("krs_names","visibility","visible"))})),t.on("zoom",(function(e){var o=t.getZoom();(o<3.2||o>7)&&(t.setLayoutProperty("ekb_names","visibility","none"),t.setLayoutProperty("nsb_names","visibility","none"),t.setLayoutProperty("brn_names","visibility","none")),o<5||o>7?t.setLayoutProperty("nino_names","visibility","none"):(t.setLayoutProperty("ekb_names","visibility","visible"),t.setLayoutProperty("nsb_names","visibility","visible"),t.setLayoutProperty("brn_names","visibility","visible"),t.setLayoutProperty("nino_names","visibility","visible"))}))})),null}));var y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null,a.a.createElement(p,null)))};Object(l.render)(a.a.createElement(y,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.5700e840.chunk.js.map