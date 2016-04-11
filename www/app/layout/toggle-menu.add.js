/* noName
Fonction permettant de cacher le bouton de toggle-menu */
$(document).ready(function() {
	$('body').on('click', function() {
		//Ddom
		if ($(this).hasClass('hidden-menu')) {
			$('#ribbon #hide-menu').css('display', 'none');
		} else {
			$('#ribbon #hide-menu').css('display', 'inline');
		}
	});
});