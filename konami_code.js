const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0; 

function init(e) {
  let body = document.body;
  body.addEventListener('keydown', konami(e)) {
 
 let key = parseInt(e.which || e.detail);
  if (key===code[index]) {index++;
  
  if (index === code.length) {alert("Congrats!");
  
  index = 0;}
  
  } else {
    index = 0;
  }

}}