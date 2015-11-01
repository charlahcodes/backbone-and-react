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
        <button onClick={this.homeClickHandler}>Home</button>
        <button onClick={this.addClickHandler}>Add</button>
      </div>
    );
  }

});