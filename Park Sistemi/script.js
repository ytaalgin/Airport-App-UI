var button = $('.btn');
button.text('Müsait');

button.click(function(){
  var specificSpot = this.id;
  toggleSpot(specificSpot);
})

function toggleSpot(num){
  // Get name
  var name = $('#input').val()
  // Get spot
  var idNumber = "#" + num;
  var spot = $(idNumber);
  
  // Display Avail or not
  if(spot.text() == 'Müsait'){
    if (name == '') {
      spot.text('Adınız')
    } else {
      spot.text('Ona ait ' + name)
    }
  } else if(spot.text() != 'Müsait') {
    spot.text('Müsait')
  }
  spot.toggleClass('btn-primary btn-danger');
}