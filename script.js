function handleHamburger(){
  var hamburger = document.getElementById("hamburger")
  var lang = document.getElementById("lang")
  var dropdown = document.querySelector(".dropdown-lang")

  hamburger.addEventListener("click", (e) => {
    var hamburgerIcon = document.getElementById("hamburgerIcon")
    var link = document.querySelector(".navLinkRes")

    hamburgerIcon.classList.toggle("fa-bars")
    hamburgerIcon.classList.toggle("fa-x")

    link.classList.toggle("active")
  })

  lang.addEventListener("click", e => {
    var caretIcon = document.querySelector(".arrow")

    dropdown.classList.toggle("active")
    caretIcon.classList.toggle("fa-caret-down")
    caretIcon.classList.toggle("fa-caret-up")
  })
}

// document.addEventListener("click", e => {
//   if(!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)){
//     dropdown.classList.remove('active');
//   }
// })

function typeAnimation(){
  const text = document.querySelector(".fancy")
  const strText = text.textContent
  const splitText = strText.split("")

  text.textContent = ""

  for( i = 0; i < splitText.length; i++){
    text.innerHTML += splitText[i]
  }

  let char = 0
  let timer = setInterval(() => {
    const span = text.querySelector(".fancy")[char]
    char++
    if(char == splitText.length){
      endInterval()
      return
    }
  }, 50)

  function endInterval(){
    clearInterval(timer)
    timer = null
  }
}