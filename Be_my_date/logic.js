const button = document.querySelector('.nobutton');
const container = document.querySelector(`.container`);

button.addEventListener('mouseover', () => {
  const maxX = Math.min(300, window.innerWidth - button.offsetWidth);
  const maxY = Math.min(300, window.innerHeight - button.offsetHeight);
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  button.style.transform = `translate(${x}px, ${y}px)`;

  setTimeout(() => {
    const para = document.createElement('p');
    para.textContent = 'Come on Please say yes!';
    para.classList.add('newpara');
    container.insertAdjacentElement('beforeend', para);
    button.removeEventListener('mouseover', mouseOverHandler);
  }, 10000);

  setTimeout(() => {
    para.remove();
  }, 5000);

  button.removeEventListener('mouseover', mouseOverHandler);
},2000);

button.addEventListener('mouseover', mouseOverHandler);
