
function welcomeTyping() {
    var element = document.querySelector('.welcomeText');
    var text = element.innerHTML;
    element.innerHTML = '';
  
    var i = 0;
    var typingEffect = setInterval(function() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); 
  }
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollAmount = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    if (scrollAmount > 40) { 
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
    if (scrollAmount === 0 || scrollAmount + windowHeight >= documentHeight) {
      header.classList.remove('visible');
    }
});
function scrollToEnd() {
  const docHeight = document.body.scrollHeight;
  const scrollDistance = docHeight - window.innerHeight;
  window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
  });
}
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
function openPage() {
  window.location.href = "findroute.html";
}
window.addEventListener('load', function() {
  document.getElementById('loading-page').style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.loadtext3').style.display = 'block'; 
  }, 5000);
});