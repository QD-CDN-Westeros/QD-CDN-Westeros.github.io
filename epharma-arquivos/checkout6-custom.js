/* Anonymouswill - 30/03/2021 16:19:22 GMT */
/*!  */
function checkoutCustomizing(){var t=localStorage.getItem("storepartner");if(null==t&&null==t&&""==t){var e=function(t){var e,o,n=window.location.search.substring(1).split("&");for(o=0;o<n.length;o++)if((e=n[o].split("="))[0]===t)return void 0===typeof e[1]||decodeURIComponent(e[1]);return!1}("storepartner");$("body").addClass(e),localStorage.setItem("storepartner",e)}else $("body").addClass(t)}$(document).ready((function(){checkoutCustomizing()}));