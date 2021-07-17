const form = document.getElementById('form-1');
const subBut = document.getElementsByTagName(button);

form.addEventListener("click", function(event){
    event.preventDefault();
    
    console.log('on');
  });