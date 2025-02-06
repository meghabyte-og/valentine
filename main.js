
function nextPage() {
    window.location.href = "yes.html"; // Change this URL as needed
}

/*function moveButton() {
    var x = Math.random() * (window.innerWidth -
        document.getElementById("no").offsetWidth);
    var y =
      Math.random() *
      (window.innerHeight -
        document.getElementById("no").offsetHeight);
    document.getElementById("no").style.left = `${x}px`;
    document.getElementById("no").style.top = `${y}px`;
  }*/

function moveButton() {
        var card = document.querySelector(".card"); 
        var button = document.getElementById("no"); 
    
        var cardRect = card.getBoundingClientRect();
        var buttonRect = button.getBoundingClientRect(); 
    
        var maxX = cardRect.width - buttonRect.width;
        var maxY = cardRect.height - buttonRect.height;
    
        var randomX = Math.random() * maxX;
        var randomY = Math.random() * maxY;
    
        button.style.position = "absolute"; 
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
    