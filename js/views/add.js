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

  submitClickHandler() {
    this.props.onSubmitClick();
  },

  render() {
    return (
      <div>
        <button onClick={this.homeClickHandler}>Home</button>
        <button onClick={this.editClickHandler}>Edit</button>

        <div className="formContainer">
          <form>
            <ul>
              <li><input type="text" placeholder="photographer" id="photographer"/></li>
              <li><input type="text" placeholder="photo url" id="photoURL"/></li>
              <li><textarea placeholder="description" id="description"/></li>
            </ul>
            <button onClick={this.submitClickHandler} type="submit" id="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

});