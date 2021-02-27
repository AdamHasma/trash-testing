const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");

window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 7;
  const y = -(window.innerHeight / 2 - evt.pageY) / 7;
  const xS = -(window.innerWidth / 2 - evt.pageX) / 50;
  const yS = -(window.innerHeight / 2 - evt.pageY) / 50;
  const x2 = -(window.innerWidth / 2 - evt.pageX) / 11;
  const y2 = -(window.innerHeight / 2 - evt.pageY) / 11;
  const xS2 = -(window.innerWidth / 2 - evt.pageX) / 40;
  const yS2 = -(window.innerHeight / 2 - evt.pageY) / 40;
  const x3 = -(window.innerWidth / 2 - evt.pageX) / 20;
  const y3 = -(window.innerHeight / 2 - evt.pageY) / 20;
  const xS3 = -(window.innerWidth / 2 - evt.pageX) / 30;
  const yS3 = -(window.innerHeight / 2 - evt.pageY) / 30;
  d4.style.transform = `translateY(${y}px) translateX(${x}px)`;
  d4.style.boxShadow = `${xS}px ${yS}px 40px rgba(0, 0, 0, 0.4)`;
  d3.style.transform = `translateY(${y2}px) translateX(${x2}px)`;
  d3.style.boxShadow = `${xS2}px ${yS2}px 40px rgba(0, 0, 0, 0.4)`;
  d2.style.transform = `translateY(${y3}px) translateX(${x3}px)`;
  d2.style.boxShadow = `${xS3}px ${yS3}px 40px rgba(0, 0, 0, 0.4)`;
});
