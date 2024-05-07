window.onload = function() {
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
  