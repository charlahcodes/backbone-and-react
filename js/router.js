import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import PhotoModel from './newphoto-model.js';
import HomeComponent from './views/home';
import DetailComponent from './views/detail';
import AddComponent from './views/add';
import EditComponent from './views/edit';



export default Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "details"  : "showDetail",
    "add"  : "showAdd",
    "edit"  : "showEdit"
  },

  initialize(appElement) {
    this.el = appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showHome() {
    this.render(
      <HomeComponent
      onHomeClick={() => this.goto('')}
      onDetailsClick={() => this.goto('details')}
      onAddClick={() => this.goto('add')}
      onEditClick={() => this.goto('edit')}
      />
    );
  },

  showDetail() {
    this.render(
      <DetailComponent
      onHomeClick={() => this.goto('')}
      onDetailsClick={() => this.goto('details')}
      onAddClick={() => this.goto('add')}
      onEditClick={() => this.goto('edit')}
      />
    );
  },

  showAdd() {
    this.render(
      <AddComponent
      onHomeClick={() => this.goto('')}
      onDetailsClick={() => this.goto('details')}
      onAddClick={() => this.goto('add')}
      onEditClick={() => this.goto('edit')}
      onSubmitClick={() => this.goto('')}
      />
    );

    $('#submit').click(function() {
      console.log("test");
      var newPhoto = new PhotoModel ({
        photographer: $('#photographer').val(),
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

});