import $ from 'jquery';

const APP_ID = 'DpBAvUgYWDQ1aCme804Ee3lQJIFaJVYYMaB3bX4I';
const API_KEY = '0zNMLSXvmFsDtYg9cxRFrJgcAbEx3h2dnlpI8ppW';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});


