'use strict';

let keywordArray = [];

function Image (image){
  this.image_url = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
}

Image.all = [];

Image.readJson = () => {
  let data = null;
  window.location.pathname === '/index.html' ? data = $.get('../data/page-1.json')
  : data = $.get('../data/page-2.json');
  data.then( item => {
    item.forEach( thing => {
      Image.all.push(new Image(thing));
    });
  })
    .then(Image.loadImages);
};

Image.prototype.render = function(){
  let source = $('#photo-template').html();
  let template = Handlebars.compile(source);
  return template(this);
};

Image.prototype.renderOptions = function(){
  //Create
  let optionClone = $('option').clone();
  let $optionClone = $(optionClone[0]);
  //Evaluate
  if (!keywordArray.includes(this.keyword)){
  //Give Content
    $optionClone.text(this.keyword);
    $optionClone.attr('value', this.keyword);
    keywordArray.push(this.keyword);
    //Render
    $optionClone.appendTo('select');
  }
};

Image.loadImages = () => {
  Image.all.sort(( a, b) => a.horns - b.horns);
  Image.all.forEach( image => {
    $('main').append(image.render());
    image.renderOptions();
  });
  $('select').on('change', selectEvent);
};

const selectEvent = event => {
  let eventTarget = event.target.value;
  $(`.${eventTarget}`).show();
  $('section').not(`.${eventTarget}`).hide();
};

$(() => Image.readJson());
