/*const container = document.querySelector('.container');
const nobutton = document.querySelector(`button`);
const containerRect = container.getBoundingClientRect();
const nobuttonRect = nobutton.getBoundingClientRect();

nobutton.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (containerRect.width - nobuttonRect.width)) + 1;
    const j = Math.floor(Math.random() * (containerRect.height - nobuttonRect.height)) + 1;
    nobutton.style.left = i + 'px';
    nobutton.style.top = j + 'px'
});*/

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
  }, 2000);

  setTimeout(() => {
    para.remove();
  }, 5000);

  button.removeEventListener('mouseover', mouseOverHandler);
},2000);

button.addEventListener('mouseover', mouseOverHandler);
