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
  

}
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(fader => appearOnScroll.observe(fader));
