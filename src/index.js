import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoPara from './js/dino-api';


$('#dino-form').submit(function(e) {
  e.preventDefault();
  let paragraphs = $('#paragraphs').val();
  let words = $('#words').val();
  
  let promise = DinoPara.getDinos(paragraphs, words);
  promise.then(function(response) {
      const body = JSON.parse(response); 
      console.log(body);
      let container = "<p>";
      let bodyLength = body.length;
      for (let i = 0; i < bodyLength; i++) {
        body[i] = body[i].join(", ");
        container += body[i] + "</p>";
      } 
      $('.dino-card').show();
      $('#dino-paragraph').html(container);
    }, function(error) {
      $('#show-errors').text(`There was an error processing your ;request: ${error}`);
    }
  );
});