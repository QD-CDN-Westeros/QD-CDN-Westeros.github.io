/* DESKTOP-US8NRQT - 15/09/2020 10:46:31 GMT */
function fixInput(){$(window).load(function(){$("#ship-receiverName").on("keydown",function(e){if(e.keyCode==8&&$(this).val().length==1){$(this).val("")}})})}fixInput();