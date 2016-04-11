/* fichesController
Permet d'afficher les listes conseils de manière dynamiques */

'use strict';

angular.module('app.fiches', ['ui.router'])

.controller('fichesController', function($scope) {

    //Rint
    //Ivar
    $scope.fiches = ficheList;

    /* $scope.redimApercu
    Reduit l'aperçu pour qu'il ne dépasse pas 115 carac */
    $scope.redimApercu = function (fiche) {
      fiche.apercu=fiche.corps.slice(0,115);
    }

    /* $scope.goToDetail
    Redirige vers la page détail de l'article cliqué grâve à son id */
    $scope.goToDetail = function (idFiche) {
      //Rint
      document.location.hash='#/e-commerce/fiches-detail/'+idFiche;
    }
});

// Liste des fiches en dur à supprimer si base de données
var ficheList = [{
  titre: "Titre Conseil 1",
  image: "styles/img/versions/angularversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 0
}, {
  titre: "Titre Conseil 2",
  image: "styles/img/versions/ajaxversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 1
}, {
  titre: "Titre Conseil 3",
  image: "styles/img/versions/dotnetversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 2
}, {
  titre: "Titre Conseil 4",
  image: "styles/img/versions/htmlversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 3
}, {
  titre: "Titre Conseil 5",
  image: "styles/img/versions/phpversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 4
}, {
  titre: "Titre Conseil 6",
  image: "styles/img/versions/reactversion.png",
  corps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  idFiche: 5
}];

