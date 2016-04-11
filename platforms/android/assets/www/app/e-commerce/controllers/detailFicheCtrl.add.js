/* detailFicheController
Permet d'afficher les promos de manière dynamiques */

'use strict';

angular.module('app.detailFiche', ['ui.router'])

  .controller('detailFicheController', function($scope, $http){

    // On vérifie si on est dans l'accueil
    if (checkHash()) {//Fext noLayout.add.js
      //Ivar
      //Rint
      var hashFiche = document.location.hash.split("/");
      var idFiche = hashFiche[3];
    }

    //Rext
    $http.get('http://ressource.octave.biz/ac01/fiches/fiche_'+idFiche+'.json', { responseType: "json" })
      .success(function (ficheDetail) {
        //Ivar
      $scope.fiche = ficheDetail;
    });

  });