import Backbone from 'backbone';
import PhotoModel from './newphoto-model';

let PhotosCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/photos',

  model: PhotoModel,

  parse: function(data) {
    return data.results;
  }

});

export default PhotosCollection;