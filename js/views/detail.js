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
        <div className="thumbnail" onClick={this.clickHandler}>
          <img src={this.props.src}/>
        </div>
      </div>
    );
  }

});