/* productsController
Permet d'afficher les meilleures ventes de manière dynamiques */

'use strict';

angular.module('app.products', ['ui.router'])

.controller('productsController', function($scope) {
    // On récupère tous les objets dans products
    //Rint
    $scope.products = productList;

    /* $scope.classDispenser
    attribut automatiquement les bonnes classes aux bonnes div */
    $scope.classDispenser = function (id) {
      // La fonction s'execute une fois que le contenu du scope angular est chargé
      window.setTimeout(function() {
        if (id==1) {
          //Ddom
          $('#product'+id).addClass('align-right')
          .addClass('firstof2col');
        }
        else if (id%2!=0) {
          //Ddom
          $('#product'+id).addClass('align-right');
        }
      }, 1);
      
    }

    $scope.goToDetail = function (idProduct) {
      //Rint
      document.location.hash='#/e-commerce/products-detail/'+idProduct;
    }
});

// Liste des articles en dur à supprimer si base de données
var productList = [{
  nom: "Sac à main",
  image: "styles/img/demo/e-comm/1.png",
  promo: true,
  promTag: "-50%",
  categorie: "Maroquinerie",
  prix: 99,
  note: 3,
  numeroRepeat: 0,
  idProduit: 1
}, {
  nom: "Rouge à lèvres",
  image: "styles/img/demo/e-comm/2.png",
  promo: true,
  promTag: "Sale",
  categorie: "Cosmétiques",
  prix: 109,
  note: 4,
  numeroRepeat: 1,
  idProduit: 2
}, {
  nom: "Lunettes de soleil",
  image: "styles/img/demo/e-comm/3.png",
  promo: false,
  promTag: "",
  categorie: "Accesoires",
  prix: 399,
  note: 5,
  numeroRepeat: 2,
  idProduit: 3
}, {
  nom: "Pack poudrier",
  image: "styles/img/demo/e-comm/4.png",
  promo: false,
  promTag: "",
  categorie: "Cosmétiques",
  prix: 19,
  note: 2,
  numeroRepeat: 3,
  idProduit: 4
}, {
  nom: "Chaussure mode",
  image: "styles/img/demo/e-comm/5.png",
  promo: false,
  promTag: "",
  categorie: "Chaussures",
  prix: 195,
  note: 4,
  numeroRepeat: 4,
  idProduit: 5
}, {
  nom: "Soin pour la peau",
  image: "styles/img/demo/e-comm/7.png",
  promo: true,
  promTag: "-20%",
  categorie: "Cosmétiques",
  prix: 99,
  note: 4,
  numeroRepeat: 5,
  idProduit: 6
}, {
  nom: "Sèche-cheveux",
  image: "styles/img/demo/e-comm/8.png",
  promo: false,
  promTag: "",
  categorie: "Accesoires",
  prix: 109,
  note: 4,
  numeroRepeat: 6,
  idProduit: 7
}, {
  nom: "Huile relaxante",
  image: "styles/img/demo/e-comm/9.png",
  promo: false,
  promTag: "",
  categorie: "Cosmétiques",
  prix: 399,
  note: 5,
  numeroRepeat: 7,
  idProduit: 8
}];

