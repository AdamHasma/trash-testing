const btn = document.querySelector("#color");
const expand = document.querySelector(".big-image>button");
const expandTwo = document.querySelector(".small-image>button");
const gridContainer = document.querySelector(".grid-container");
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
    expand.style.color = 'black';
    expandTwo.style.color = 'black';
  } else {
    label.innerHTML = 'Color Mode: Light';
    document.body.style.backgroundColor = 'var(--bg-light)';
    document.querySelectorAll(".grid-container>div")[0].style.background = 'var(--bg-dark)';
    document.querySelectorAll(".grid-container>div")[1].style.background = 'var(--bg-dark)';
    btnContainer.style.color = 'var(--bg-dark)';
    document.querySelector('.grid-container').style.color = 'var(--bg-light)';
    expand.style.color = 'white';
    expandTwo.style.color = 'white';
  }
});

expand.addEventListener("click", () =>{
  gridContainer.classList.toggle("expand");
  if (gridContainer.classList.contains("expand")) {
    expand.innerHTML = 'shrink';
    if (gridContainer.classList.contains("expand")) {
      expandTwo.innerHTML = 'expand';
    }
    gridContainer.classList.remove("expand-2");
  } else {
    expand.innerHTML = 'expand';
    if (gridContainer.classList.contains("expand")) {
      expandTwo.innerHTML = 'shrink';
    }
    gridContainer.classList.remove("expand-2");
  }
})

expandTwo.addEventListener("click", () =>{
  gridContainer.classList.toggle("expand-2");
  if (gridContainer.classList.contains("expand-2")) {
    expandTwo.innerHTML = 'shrink';
    if (gridContainer.classList.contains("expand")) {
      expand.innerHTML = 'expand';
    }
    gridContainer.classList.remove("expand");
  } else {
    expandTwo.innerHTML = 'expand';
    if (gridContainer.classList.contains("expand")) {
      expand.innerHTML = 'shrink';
    }
    gridContainer.classList.remove("expand");
  }
})
