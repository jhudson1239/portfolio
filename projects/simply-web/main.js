  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBGQbDWqXF88vXEG7KqKQ0nJhRYWAIk0DI",
  authDomain: "contactform-b417f.firebaseapp.com",
  databaseURL: "https://contactform-b417f.firebaseio.com",
  projectId: "contactform-b417f",
  storageBucket: "contactform-b417f.appspot.com",
  messagingSenderId: "719411153481"
};
firebase.initializeApp(config);

//Refrence messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}



// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
