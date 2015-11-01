import Backbone from 'backbone';
import $ from 'jquery';
import ReactDom from 'react-dom';
import React from 'react';

import DetailsPage from './views/detailspage'
import PhotosCollection from './photos-collection.js';  
import PhotoModel from './newphoto-model.js';
import AddComponent from './views/add';
import EditComponent from './views/edit';
import ThumbnailList from './views/home';
import PreviewImage from './views/detail';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "images/:id" : "showImage",
    "add"  : "showAdd",
    "edit"  : "showEdit"
  },

  initialize: function(appElement) {
    this.el = appElement;

    this.photos = new PhotosCollection();

    let router = this;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  home() {

    
    
    this.photos.fetch().then(() => {
      this.render(
        <ThumbnailList 
          onThumbnailSelect={this.selectImage.bind(this)} 
          data={this.photos.toJSON()}
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit')}
        />
      );
    });
  },


  selectImage(id) {
    let image = this.photos.toJSON().find(item => item.objectId === id);
    this.navigate('images/' + id, {trigger: true});

    this.render(
        <DetailsPage
          onHomeClick={() => this.goto('')}
          onThumbnailSelect={this.selectImage.bind(this)} 
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit')}
          src={image.photoURL}
          imageTitle={image.title}
          imageActor={image.photographer}
          imageDescription={image.description}
        />
      )
  },

  showImage(id) {
    let image = this.photos.toJSON().find(item => item.objectId === id);

    ReactDom.render(<PreviewImage src={image.photoURL}/>, this.el);
  },

  showAdd() {
    this.render(
      <AddComponent
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('add')}
      onEditClick={() => this.goto('edit')}
      onSubmitClick={() => this.goto('')}
      />
    );

    $('#submit').click(function() {
      var newPhoto = new PhotoModel ({
        title: $('#character').val(),
        photographer: $('#portrayed').val(),
        photoURL: $('#photoURL').val(),
        description: $('#description').val(),
      });
      newPhoto.save();
    });
  },

  showEdit() {
    this.render(
      <EditComponent
      onHomeClick={() => this.goto('')}
      onDetailsClick={() => this.goto('details')}
      onAddClick={() => this.goto('add')}
      onEditClick={() => this.goto('edit')}
      />
    );
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;
