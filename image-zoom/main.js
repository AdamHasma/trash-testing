const btn = document.querySelector("#color");
const btnContainer = document.querySelector(".btn-container");
const label = document.querySelector('label[for="color"]');



btn.addEventListener("change", () =>{
  if (btn.checked) {
    label.innerHTML = 'Color Mode: Dark';
    document.body.style.backgroundColor = 'var(--bg-dark)';
    document.querySelectorAll(".grid-container>div")[0].style.background = 'var(--bg-light)';
    document.querySelectorAll(".grid-container>div")[1].style.background = 'var(--bg-light)';
    btnContainer.style.color = 'var(--bg-light)';
    document.querySelector('.grid-container').style.color = 'var(--bg-dark)';
  } else {
    label.innerHTML = 'Color Mode: Light';
    document.body.style.backgroundColor = 'var(--bg-light)';
    document.querySelectorAll(".grid-container>div")[0].style.background = 'var(--bg-dark)';
    document.querySelectorAll(".grid-container>div")[1].style.background = 'var(--bg-dark)';
    btnContainer.style.color = 'var(--bg-dark)';
    document.querySelector('.grid-container').style.color = 'var(--bg-light)';
  }
});
