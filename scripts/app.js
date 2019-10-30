'use strict';

function Image (image){
  this.image_url = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
}

Image.all = [];

Image.readJson = () => {
  $.get('../data/page-1.json')
    .then( data => {
      data.forEach( thing => {
        Image.all.push(new Image(thing));
      });
    });
  // .then(image.load)
};

Image.prototype.render = function(){
  //Create
  let imageClone = $('#photo-template').clone();
  console.log(imageClone);
  let $imageClone = $(imageClone[0].content);
  console.log($imageClone);
  //Give Content
  $imageClone.find('h2').text(this.title);
  $imageClone.find('img').attr('src', this.image_url);
  $imageClone.find('img').attr('alt', this.description);
  $imageClone.find('p').text(this.description);
  $imageClone.attr('class', this.keyword);
  //Render
  $imageClone.prepend('main');
};


