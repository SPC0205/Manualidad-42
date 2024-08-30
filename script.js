const loadingBar = document.querySelector('.loading-bar');
const bar = document.querySelector('.bar');

function animateLoadingBar() {
  bar.style.width = '0%';
  setTimeout(() => {
    bar.style.width = `${loadingBar.offsetWidth}px`; 
  }, 0); // start the animation immediately
  setTimeout(() => {
    // clear the page and create a giant heart
    loadingBar.style.display = 'none';
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '&#10084;';
    document.body.appendChild(heart);

    // add the text "Te quiero mucho" above the heart
    const text = document.createElement('div');
    text.className = 'text';
    text.innerHTML = 'Te quiero mucho';
    document.body.appendChild(text);

    // add the name "NATALIA" below the heart
    const name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = 'NATALIA';
    document.body.appendChild(name);
  }, 10000); // wait for 10 seconds (same as the animation duration)
}

animateLoadingBar();