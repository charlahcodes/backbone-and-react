import React from 'react';

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

  render() {
    return (
      <div>
        Details
        <button onClick={this.homeClickHandler}>Home</button>
        <button onClick={this.detailsClickHandler}>Details</button>
        <button onClick={this.addClickHandler}>Add</button>
        <button onClick={this.editClickHandler}>Edit</button>
      </div>
    );
  }

});