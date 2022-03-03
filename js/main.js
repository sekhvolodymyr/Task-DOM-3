let d = document.getElementById("myDiv");
document.getElementById("myBtn").addEventListener("mouseover", function() {
    d.innerHTML += `<p class="onme">Mouse on me!</p>`;  
});

document.getElementById("myBtn").addEventListener("click", function() {
  d.innerHTML += `<p class="click">I was pressed!</p>`;  
});

document.getElementById("myBtn").addEventListener("mouseout", function() {
  d.innerHTML += `<p class="click">Mouse is not on me!</p>`;  
});
