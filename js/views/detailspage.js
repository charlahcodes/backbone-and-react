import React from 'react';

export default React.createClass({

  homeClickHandler() {
    this.props.onHomeClick();
  },

  addClickHandler() {
    this.props.onAddClick();
  },

  editClickHandler() {
    this.props.onEditClick();
  },

  clickHandler(event) {
    this.props.onSelect(this.props.id);
  },

  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.homeClickHandler}>Home</button>
          <button onClick={this.addClickHandler}>Add</button>
        </div>
        <div className="fullImage">
          <img src={this.props.src}/>
        </div>
        <div className="imageText">
          <ul>
            <li><b>Character</b>: {this.props.imageTitle}</li>
            <li><b>Portrayed by</b>: {this.props.imageActor}</li>
            <li><b>Description</b>: {this.props.imageDescription}</li>
          </ul>
        </div>

      </div>
    );
  }

});