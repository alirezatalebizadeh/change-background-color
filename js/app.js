cswitchElement = document.querySelector('.switch')


//set click event on switch elem
switchElement.addEventListener('click', function () {
  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
  console.log(document.body.className);

})

//set load event on window to get data of localStorage
window.addEventListener('load', () => {
  let dataOfLocalStorage = localStorage.getItem('theme')

  if (dataOfLocalStorage === 'dark') {
    document.body.classList.add('dark')
  }
})

