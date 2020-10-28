function show_selected() {
  var destinationselector = document.getElementById('destination');
  var destinationvalue = destinationselector[destinationselector.selectedIndex].value;


  var locationselector = document.getElementById('location');
      var locationvalue = locationselector[locationselector.selectedIndex].value;
var showlocationvalue = locationvalue;
  //document.getElementById('display').innerHTML = locationvalue;
 // console.log(locationvalue);


//  document.getElementById('display').innerHTML = locationvalue;
  console.log(destinationvalue);
  console.log(locationvalue);

  if ( destinationvalue == 'accra'  &&  locationvalue == 'accra' ) {
         document.getElementById('display').innerHTML = "destination and location is the same";
       }

       else if ( destinationvalue == 'accra' && locationvalue == 'kumasi' ) {
          document.getElementById('display').innerHTML = "GH 20";
           }

       else if (destinationvalue == 'accra' && locationvalue == 'ho') {
          document.getElementById('display').innerHTML = "GH 50";
           }
           else{
             document.getElementById('display').innerHTML = "no price has been determined yet";
           }
}


document.getElementById('btn').addEventListener('click', show_selected);

