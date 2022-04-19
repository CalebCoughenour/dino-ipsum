export default class DinoPara {
  static getDinos(paragraphs, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=html&paragraphs=${paragraphs}&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  } 
}