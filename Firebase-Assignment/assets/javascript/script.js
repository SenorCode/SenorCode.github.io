$(document).ready(function() {
var config = {
  apiKey: "AIzaSyAx1xKqg-KSrPA8kr-v5AJznXDD46UzYuo",
  authDomain: "fir-hw-b293c.firebaseapp.com",
  databaseURL: "https://fir-hw-b293c.firebaseio.com",
  projectId: "fir-hw-b293c",
  storageBucket: "",
  messagingSenderId: "873513592060"
};
firebase.initializeApp(config);


var database = firebase.database();

  // Submit our new employee info
  $('#submit-form').on('click', function(event) {
    event.preventDefault();

    // Grab values from form
    var train = $('#train-input')
      .val()
      .trim();
    var destination = $('#destination-input')
      .val()
      .trim();
    var firstTrain = $('#firstTrain-input')
      .val()
      .trim();
    var frequency = $('#frequency-input')
      .val()
      .trim();
    
  

    // PUSH a new entry into our database, not overwrite (SET)
    database.ref().push({
      name: train,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      
    });
    alert("Train successfully added");

    // Clear out our form fields
    $('#train-input').val('');
    $('#destination-input').val('');
    $('#firstTrain-input').val('');
    $('#frequency-input').val('');
  });
  // End submit form event

  // Begin our child_added listener
  database.ref().on('child_added', function(childSnapshot) {
    console.log(childSnapshot.val());

    // Get data out of our child snapshot
    var train_name = childSnapshot.val().name;
    var train_destination = childSnapshot.val().destination;
    var train_first = childSnapshot.val().firstTrain;
    var train_frequency = childSnapshot.val().frequency;
    
    var timeArr = train_first.split(":");
    var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
    var maxMoment = moment.max(moment(), trainTime);
    var train_minutes;
    var train_arrival;

    if (maxMoment === trainTime) {
      train_arrival = trainTime.format("hh:mm A");
      train_minutes = trainTime.diff(moment(), "minutes");
    } else {

    var differenceTimes = moment().diff(trainTime, "minutes");
    var tRemainder = differenceTimes % train_frequency;
    train_minutes = train_frequency - tRemainder;
    // To calculate the arrival time, add the train_minutes to the current time
    train_arrival = moment().add(train_minutes, "m").format("hh:mm A");
    }
    // Create a row to hold information
    var tr = $('<tr>');

    // Create 6 table cells to go into our row
    var tdName = $('<td>').text(train_name);
    var tdestination = $('<td>').text(train_destination);
    var tdfrequency = $('<td>').text(train_frequency);
    var tdarrival = $('<td>').text(train_arrival);
    var tdminutes = $('<td>').text(train_minutes);
    
    console.log(tr);

    // Add our table cells to row
    tr.append(tdName, tdestination, tdfrequency, tdarrival, tdminutes);

    // Add row to our table
    $('#train-data').append(tr);
  });
});