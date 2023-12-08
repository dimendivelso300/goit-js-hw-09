function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const start = document.querySelector('[data-start]');
    const stop = document.querySelector('[data-stop]');
    let colorChangeInterval;
  
    start.addEventListener('click', function () {
      start.disabled = true; // Desactiva el botón "Start"
  
      colorChangeInterval = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    });
  
    stop.addEventListener('click', function () {
      start.disabled = false; // Habilita el botón "Start"
      clearInterval(colorChangeInterval);
    });
  });