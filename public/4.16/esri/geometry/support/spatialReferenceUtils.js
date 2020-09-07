// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/string","./WKIDUnitConversion"],function(d,b,h,k){function g(a){return c(a)&&a.wkid?l[a.wkid]:null}function f(a){return c(a)&&!0===m[a.wkid]}function c(a){return null!=a&&(null!=a.wkid&&2E3<=a.wkid||null!=a.wkt)}Object.defineProperty(b,"__esModule",{value:!0});var m={102113:!0,102100:!0,3857:!0,3785:!0},n={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0};d=[-2.0037508342788905E7,2.0037508342788905E7];var e=[-2.0037508342787E7,2.0037508342787E7],l={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',
valid:d,origin:e,dx:1E-5},102100:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',valid:d,origin:e,
dx:1E-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:d,origin:e,dx:1E-5},3857:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',
valid:d,origin:e,dx:1E-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',
valid:[-180,180],origin:[-180,180],dx:1E-5}};b.equals=function(a,b){return a&&b?a===b?!0:null!=a.wkid||null!=b.wkid?a.wkid===b.wkid||f(a)&&f(b)||null!=b.latestWkid&&a.wkid===b.latestWkid||null!=a.latestWkid&&b.wkid===a.latestWkid:a.wkt&&b.wkt?a.wkt.toUpperCase()===b.wkt.toUpperCase():!1:!1};b.getInfo=g;b.isGeographic=function(a){return c(a)?a.wkid?null==k[a.wkid]:a.wkt?!!/^\s*GEOGCS/i.test(a.wkt):!1:!1};b.isWGS84=function(a){return c(a)&&4326===a.wkid};b.isWebMercator=f;b.isWrappable=function(a){return c(a)&&
!0===n[a.wkid]};b.isValid=c;b.WGS84={wkid:4326,wkt:h.replace(g({wkid:4326}).wkTemplate,{Central_Meridian:"0.0"})};b.WebMercator={wkid:102100,latestWkid:3857}});