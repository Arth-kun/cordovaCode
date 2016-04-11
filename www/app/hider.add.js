/* hideShow_HeadFoot
Gestion du masquage du header, du footer */
function hideShow_HeadFoot(hide) {
	if (hide) {
        //Ddom
	    $('#header, .page-footer').css('display', 'none');
        $('#ribbon').addClass('noHeader-ribbon');
        $('#shopping-cart-ribbon').css('top', '10px');
        $('.fixed-ribbon #content').css('padding-top', '3px');
	} else {
        //Ddom
	    $('#header, .page-footer').css('display', 'inline');
        $('#ribbon').removeClass('noHeader-ribbon');
        $('#shopping-cart-ribbon').css('top', '59px');
        $('.fixed-ribbon #content').css('padding-top', '52px');
	}
}

