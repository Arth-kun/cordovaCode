'use strict';

angular.module('app.gemStore', ['ui.router'])
  .controller('StoreController', function(){
    this.products = gems;
  })

  .controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  })

  .controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  })

  .controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

  var gems = [{
  name: 'Azurite',
  description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
  shine: 8,
  price: 15.50,
  rarity: 7,
  color: '#CCC',
  faces: 14,
  images: [{
    affiche: "styles/img/gems/gem-02.gif",
    index: 0
  }, {
    affiche: "styles/img/gems/gem-05.gif",
    index: 1
  }, {
    affiche: "styles/img/gems/gem-09.gif",
    index: 2
  }],
  reviews: [{
    stars: 5,
    body: "I love this gem!",
    author: "joe@example.org",
    createdOn: 1397490980837
  }, {
    stars: 1,
    body: "This gem sucks.",
    author: "tim@example.org",
    createdOn: 1397490980837
  }]
}];

