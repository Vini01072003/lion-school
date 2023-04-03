'use strict'

const cards = (teste) => {

    const card = document.getElementById('boxs')

    const divCurso = document.createElement('a')
    divCurso.classList.add('box')
    divCurso.textContent = teste.nome

    card.append(divCurso)

    return card

}

const carregarCards = async() => {

    let url = "https://api-lionschool.onrender.com/v1/lion-school/cursos"

    let response = await fetch(url)
    let data = await response.json()
    let cursos = data.cursos

    const divButtons = document.getElementById('container-right')

    const courses = cursos.map(cards)



    divButtons.replaceChildren(...courses)


}


carregarCards()