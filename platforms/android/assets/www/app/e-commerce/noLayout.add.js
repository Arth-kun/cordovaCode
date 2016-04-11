/* window.onhashchange
Permet de cacher header, footer et menu lorsque l'on est sur une page autre que l'accueil */
window.onhashchange = function (){

	//Ddom
	window.scrollTo(0,0);

	//alert(document.location.hash);//LOG

	if (checkHash()) {//Fint
		if (store) {
	    	hideShow_HeadFoot(true);//Fext hider.add.js
		}
		//Ddom
		$('body').addClass('no-menu');
	    $('#backHome').css('display', 'inline');
	    $('#ribbon').css('height', '49px')
	    .css('border-bottom', '1px solid #E6E6E6')
	    .css('background','url(styles/img/mybg.png)');
	    $('#main').css('padding-bottom', '0px');
	} else {
		if (store) {
	    	hideShow_HeadFoot(false);//Fext hider.add.js
	    }
	    //Ddom
		$('body').removeClass('no-menu');
	    $('#backHome').css('display', 'none');
	    $('#main').css('padding-bottom', '52px');
	    $('#ribbon').css('height', '39px')
	    .css('border-bottom', 'none')
	    .css('background-color','rgba(0, 0, 0, 0)');
	}
}

/* checkHash
Vérifie que l'on est pas sur la page "home" */
function checkHash() {
	//Ivar
	var actualHash = document.location.hash;
	var homeHash = '#/home';

	if (actualHash===homeHash) {
		return false;		
	} 
	else {
		return true;
	}
}