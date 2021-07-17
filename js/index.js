const form = document.getElementById('form-1');

form.addEventListener("click", function(event){
    event.preventDefault();
    // vanilla prevents violation.
  });
  //JQ
  
  $(() => {

    $('#subBut').click(() => {
      let fname = $('#fName').val();
    console.log(fname);
    
    });

  });