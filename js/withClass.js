


class changeColor {
    constructor(titleValue, authorValue, yearValue) {
        this.switchElement = document.querySelector('.switch')

        this.render()
    }

    render() {
        //set click event on switch elem
        this.switchElement.addEventListener('click', () => {
            this.changeBackGround()
        })

        //set load event on window to get data of localStorage
        window.addEventListener('load', () => {
            this.checkLocalStorage()
        })
    }

    //change backGround Color
    changeBackGround() {
        document.body.classList.toggle('dark')

        if (document.body.className.includes('dark')) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
        console.log(document.body.className);
    }
    //check localstorage data base
    checkLocalStorage() {
        let dataOfLocalStorage = localStorage.getItem('theme')

        if (dataOfLocalStorage === 'dark') {
            document.body.classList.add('dark')
        }
    }
}


new changeColor()

