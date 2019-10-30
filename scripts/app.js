'use strict';

const MythicalBeast = function (image_url, title, description, keyword, horns){
  image_url = this.image_url;
  title = this.title;
  description = this.description;
  keyword = this.keyword;
  horns = this.horns;
}

MythicalBeast.all = [];

MythicalBeast.readJson = () => {
  $.get('../data/page-1.json')
  .then( data => {
    data.forEach( thing => {
      MythicalBeast.all.push(new MythicalBeast(thing));
      console.log(thing);
    });
  })
  // .then(MythicalBeast.load)
}

MythicalBeast.readJson();