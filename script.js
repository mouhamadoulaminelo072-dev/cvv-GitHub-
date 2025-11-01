const nameText = "Mouhamadou Lamine Lo";
let i = 0;

function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = () => {
  typeWriter(); 
  
};