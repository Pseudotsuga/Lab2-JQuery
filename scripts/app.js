'use strict';

 function MythicalBeast (mythicalBeast){
  this.image_url = mythicalBeast.image_url;
  this.title = mythicalBeast.title;
  this.description = mythicalBeast.description;
  this.keyword = mythicalBeast.keyword;
  this.horns = mythicalBeast.horns;
}

MythicalBeast.all = [];

MythicalBeast.readJson = () => {
  $.get('../data/page-1.json')
  .then( data => {
    data.forEach( thing => {
      MythicalBeast.all.push(new MythicalBeast(thing));
    });
  })
  // .then(MythicalBeast.load)
}

MythicalBeast.prototype.render = function(){
  //Create

  //Give Content

  //Render
}
MythicalBeast.readJson();
console.log(MythicalBeast.all);