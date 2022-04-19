import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const clearForm = () => {
  $('#paragraphs').text("");
  $('$words').text("");
};

$('#dino-form').submit(function(e) {
  e.preventDefault();
  let paragraphs = $('#paragraphs').val();
  let words = $('#wods').val();
  clearForm();
  
});