'use strict'

const cards = (teste) => {

    let nome = teste.nome.split(' ')[4] + ' ' + teste.nome.split(' ')[5] + ' ' + teste.nome.split(' ')[6]

    const card = document.getElementById('boxs')

    const divCurso = document.createElement('a')
    divCurso.href = "./tela2.html"
    divCurso.classList.add('box')
    divCurso.textContent = nome

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


const card2 = async() => {
    let url = "https://api-lionschool.onrender.com/v1/lion-school/alunos"

    let response = await fetch(url)

    let data = await response.json()

    let cursos = data.cursos


    const divButtons = document.getElementById('container-right')


    const courses = cursos.map(cards)


    divButtons.replaceChildren(...courses)
}
card2()

const card3 = async() => {
    const url = 'https://api-lionschool.onrender.com/v1/lion-school/alunos?status=Cursando&curso=DS'
    const response = await fetch(url)
    const cursosList = await response.json()
    return courseList
}

card3()