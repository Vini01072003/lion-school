'use strict'


const createCardsCurso = (teste) => {

    let nome = teste.nome.split(' ')[4] + ' ' + teste.nome.split(' ')[5] + ' ' + teste.nome.split(' ')[6]

    const card = document.getElementById('boxs')
    card.id = teste.sigla

    const divCurso = document.createElement('a')
    divCurso.href = "./tela2.html"
    divCurso.classList.add('box')
    divCurso.textContent = nome

    card.append(divCurso)


    return card

}

const carregarCardsCurso = async() => {

    let url = "https://api-lionschool.onrender.com/v1/lion-school/cursos"

    let response = await fetch(url)
    let data = await response.json()
    let cursos = data.cursos

    const divButtons = document.getElementById('container-right')

    const courses = cursos.map(createCardsCurso)

    divButtons.replaceChildren(...courses)
}
carregarCardsCurso()


// const createCardsAlunos = async(alunos) => {

//     const aluno = document.createElement('div')
//     aluno.classList.add('alunos')

//     const imgAluno = document.createElement('img')
//         // imgAluno.src = `./img/${alunos.foto}`
//     imgAluno.classList.add('aluno')

//     const nomeAluno = document.createElement('p')
//     nomeAluno.classList.add('nome')
//     nomeAluno.textContent = alunos.nome

//     aluno.append(imgAluno, nomeAluno)

//     return aluno
// }

// const carregarCardsAlunos = async() => {
//     let url = `https://api-lionschool.onrender.com/v1/lion-school/alunos?curso=DS`

//     let response = await fetch(url)
//     let data = await response.json()
//     let alunos = data.alunos

//     const container = document.getElementById('container-alunos')

//     const students = alunos.map(createCardsAlunos)

//     container.replaceChildren(...students)


// }
// carregarCardsAlunos()