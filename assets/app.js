//=========================

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1QI0QRvzGa1dnzubbIHBlE-Yr6QSrrbk",
    authDomain: "thisproject-1.firebaseapp.com",
    databaseURL: "https://thisproject-1.firebaseio.com",
    projectId: "thisproject-1",
    storageBucket: "thisproject-1.appspot.com",
    messagingSenderId: "280251501940"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function () {

    event.preventDefault();
    // Grab user INput
    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#date-input").val().trim();
    var rate = $("#rate-input").val().trim();
    // Create var that will be pushed in to database
    var newEmp = {
        emName: name,
        emRole: role,
        emStart: startDate,
        emRate: rate
    };
    // Push data into database
    database.ref().push(newEmp);
    //Push data into HTML
    $("#employeeList").append("<tr><td>" + name + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + rate + "</td></tr>")
    //Clear input values
    $("#name-input").val("");
    $("#role-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");
})

database.ref().on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    var nameFire = (childSnapshot.val().emName);
    var roleFire = (childSnapshot.val().emRole);
    var startFire = (childSnapshot.val().emStart);
    var rateFire = (childSnapshot.val().emRate);

    
// input Ryan's slacked code into here
// take the 2nd one
//
    $("#employeeList").append("<tr><td>" + nameFire + "</td><td>" + roleFire + "</td><td>" + startFire + "</td><td>" + rateFire + "</td></tr>")
})