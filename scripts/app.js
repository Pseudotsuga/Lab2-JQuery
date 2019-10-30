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
    })
    .then(Image.loadImages);
};

Image.prototype.render = function(){
  //Create
  let imageClone = $('#photo-template').clone();
  let $imageClone = $(imageClone[0].content);
  //Give Content
  $imageClone.find('h2').text(this.title);
  $imageClone.find('img').attr('src', this.image_url);
  $imageClone.find('img').attr('alt', this.description);
  $imageClone.find('p').text(this.description);
  $imageClone.removeClass('clone');
  $imageClone.attr('class', this.keyword);
  //Render
  $imageClone.appendTo('main');
};

Image.loadImages = () => {
  Image.all.forEach( image => image.render());
};

$(() => Image.readJson());
