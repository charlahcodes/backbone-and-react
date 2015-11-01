import React from 'react';

import Detail from './detail';

export default React.createClass({

  addClickHandler() {
    this.props.onAddClick();
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

        <div className="thumbnail-list">
          {this.props.data.map(this.getThumb)}
        </div>
      </div>
    );
  }

});


