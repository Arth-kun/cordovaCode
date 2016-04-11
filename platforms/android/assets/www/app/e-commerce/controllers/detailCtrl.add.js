/* detailController
Permet d'afficher les fiches produits details de manière dynamiques */

'use strict';

angular.module('app.detail', ['ui.router'])

  .controller('detailController', function($scope, $http){    
    
    // On récupère le hash de la page pour avoir l'id produit
    //Ivar
    //Rint
    var hashProduct = document.location.hash.split("/");
    var idProduct = hashProduct[3];
   

    // On récupère les données du bon produit
    //Rext
    $http.get('http://ressource.octave.biz/ac01/products/product_'+idProduct+'.json', { responseType: "json" })
      .success(function (productPromo) {
        //Ivar
      $scope.product = productPromo;//obj
    }); 


    // DUR On récupère les données du bon produit
    /*switch (idProduct) {
        case '0':
            $scope.product = productPromo0;
            break;
        case '1':
            $scope.product = productPromo1;
            break;
    }*/
    


    // On initialise la note par défaut à 5
    //Ivar
  	$scope.myNote = 5;//int

    /* $scope.changeNote
    Changement de note (étoiles) */
  	$scope.changeNote = function (note, nbstar) {
  		if ($scope.myNote==note) {
  			$scope.myNote = note-1;
  		} else {
  			$scope.myNote = note;
  		}
  	}

    //Ivar
  	var canReview = true;//bool
  	$scope.review = {};//obj

    /* $scope.addReview
    Récupèration des données de l'avis et de push sur la page */
    $scope.addReview = function(product, username) {
    	if (canReview) {
	    	var d=new Date();
	    	var m=d.getMonth()+1;
	    	if (m<10) {
	    		m='0'+m;
	    	}

	    	var j=d.getDate();
	    	if (j<10) {
	    		j='0'+j;
	    	}

	    	$scope.review.date=j+'/'+m+'/'+d.getFullYear();
	    	$scope.review.note=$('.myNote').attr('ng-switch-when');
	    	$scope.review.nom=username;

        //Ddom
		    product.avis.push($scope.review);

		    $scope.review = {};

        //Ddom
		    alert('Votre avis a bien été enregistré !');
		    canReview=false;
		  }
  	}

  });
/*
 var productPromo0 = {
    id : 0,
  	nom: "Cartable",
  	noteMoy: 4,
  	nbVote: 109,
  	nbAvis: 2,
  	prix: 129.54,
    promo: true,
    promTag: "-50%",
    prixHorsProm: 160,
  	categorie: "Maroquinerie",
  	images:[
  	"styles/img/demo/e-comm/detail-1.png",
  	"styles/img/demo/e-comm/detail-2.png",
  	"styles/img/demo/e-comm/detail-3.png"
  	],
  	description:{
  		titre: "Super cartable haut de gamme",
  		corps: "Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec.",
  	},
  	caracteristiques:[{
  		titre: "Gravina",
  		corps: "Etiam porta sem malesuada magna mollis euismod."
  	},
  	{
  		titre: "Test lists",
  		corps: "A description list is perfect for defining terms."
  	},
  	{
  		titre: "Altra porta",
  		corps: "Vestibulum id ligula porta felis euismod semper"
  	}],
  	avis:[{
  		nom: "Alisha Molly",
  		corps: "Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved",
  		note: 4,
  		date: "21/11/2015"
  	},
  	{
  		nom: "Aragon Zarko",
  		corps: "Excellent product, love it!",
  		note: 5,
  		date: "10/03/2016"
  	}]
}

var productPromo1 = {
    id : 1,
    nom: "Sac à main",
    noteMoy: 3,
    nbVote: 50,
    nbAvis: 2,
    prix: 99,
    promo: true,
    promTag: "-50%",
    prixHorsProm: 198,
    categorie: "Maroquinerie",
    images:[
    "styles/img/demo/e-comm/1.png",
    "styles/img/demo/e-comm/detail-2.png",
    "styles/img/demo/e-comm/detail-3.png"
    ],
    description:{
        titre: "Super cartable haut de gamme",
        corps: "Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec."
    },
    caracteristiques:[{
        titre: "Gravina",
        corps: "Etiam porta sem malesuada magna mollis euismod."
    },
    {
        titre: "Test lists",
        corps: "A description list is perfect for defining terms."
    },
    {
        titre: "Altra porta",
        corps: "Vestibulum id ligula porta felis euismod semper"
    }],
    avis:[{
        nom: "Alisha Molly",
        corps: "Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness very image let unto fowl isn't in blessed fill life yielding above all moved",
        note: 4,
        date: "21/11/2015"
    },
    {
        nom: "Aragon Zarko",
        corps: "Excellent product, love it!",
        note: 5,
        date: "10/03/2016"
    }]
}*/