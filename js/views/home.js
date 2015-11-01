import React from 'react';

import Detail from './detail';

export default React.createClass({

  homeClickHandler() {
    this.props.onHomeClick();
  },

  detailsClickHandler() {
    this.props.onDetailsClick();
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  editClickHandler() {
    this.props.onEditClick();
  },

  selectHandler(id) {
    this.props.onThumbnailSelect(id);
  },

  getThumb(image) {
    return (
        <Detail src={image.photoURL} id={image.objectId} onSelect={this.selectHandler}/>
    );
  },  

  render() {
    return (
      <div className="homeContainer">
        <button onClick={this.addClickHandler}>Add</button>
        <button onClick={this.editClickHandler}>Edit</button>
      

        <div className="thumbnail-list">
          {this.props.data.map(this.getThumb)}
        </div>
      </div>
    );
  }

});


