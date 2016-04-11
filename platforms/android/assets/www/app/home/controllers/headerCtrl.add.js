/* headerController
Permet d'afficher les aperçu header de manière dynamiques */

'use strict';

angular.module('app.header', ['ui.router'])

  .controller('headerController', function($scope, $http){    

    /* $scope.productPromo
    Récupère les données produit en fonction de l'id envoyé */
    $scope.productPromo = function (idProduct) {
        // Rext
        $http.get('http://ressource.octave.biz/ac01/products/product_'+idProduct+'.json', { responseType: "json" })
            .success(function (productPromo) {
            //Ivar
            $scope.product = productPromo;
        });
    }

    /*//DUR
    $scope.productPromo = function (idProduct) {
        // On récupère les données du bon produit
        switch (idProduct) {
            case 0:
                $scope.product = productPromo0;
                break;
            case 1:
                $scope.product = productPromo1;
                break;
        }
    }*/

});

/* //DUR
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
}
*/