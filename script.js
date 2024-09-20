const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add ('active');
    })
}
if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove ('active');
    })
}
// Get the modal
var modal = document.getElementById("signInModal");

// Get the button that opens the modal
var btn = document.getElementById("signInBtn"); // Create a button with this ID in your HTML

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("signInForm").onsubmit = function(e) {
    e.preventDefault();
    const email = this.elements[0].value;
    const password = this.elements[1].value;

    // Send data to backend
    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Sign-in successful!");
            modal.style.display = "none";
        } else {
            alert("Sign-in failed: " + data.message);
        }
    });
};
