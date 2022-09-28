// Floating Menu
let buttonMenu = document.getElementById("buttonMenu");
let floatingMenu = document.getElementById("floatingMenu");
let closeMenu = document.getElementById("closeMenu");
let boxTitle = document.querySelectorAll(".box-title");

buttonMenu.addEventListener('click', () => {
    floatingMenu.classList.add("open");
});

closeMenu.addEventListener('click', () => {
    floatingMenu.classList.remove("open");
});

const divs = document.querySelectorAll('.box-title')

divs.forEach((div) => {
  div.addEventListener('click', (e) => {
    const currentDiv = e.currentTarget
    if (currentDiv.classList.contains('open')) {
      changeState({ element: currentDiv, open: false })
      return
    }

    const divOpened = document.querySelector('.box-title.open')
    if (divOpened) {
      changeState({ element: divOpened, open: false })
    }

    changeState({ element: e.currentTarget, open: true })
  })
})

function changeState({ element, open }) {
  const method = open ? 'add' : 'remove'
  element.classList[method]('open')
  changeIcon({ element, open })
}

function changeIcon({ element, open }) {
  const icon = element.querySelector('.fa-solid')
  const toRemove = open ? 'fa-plus' : 'fa-minus'
  const toAdd = open ? 'fa-minus' : 'fa-plus'
  icon.classList.remove(toRemove)
  icon.classList.add(toAdd)
}