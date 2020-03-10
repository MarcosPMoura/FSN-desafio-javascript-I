// Base a ser utilizada
const alunosDaEscola=[
    {   nome:"Henrique",
        notas:[],
        cursos:[10,2],
        faltas:5
    },{ nome:"Edson",
        notas:[7],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:2
    },{ nome:"Bruno",
        notas:[10,9.8,9.7],
        cursos:[],
        faltas:0
    },  {nome:"Guilherme",
        notas:[10,9.8,9.5],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:3
    },{ nome:"Carlos",
        notas:[10,11,105,2],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:0
    },{ nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:4
}];


// implementação

function estaMatriculado(aluno) {
    if (aluno.cursos.length > 0) return true;
    return false;
}
function calcularMedia(aluno) {
    let notaTotal = 0;
    for (let i=0; i<aluno.notas.length;i++){
        notaTotal = notaTotal + aluno.notas[i];
    }
    let media = notaTotal/aluno.notas.length;
    return media;
}

function adicionarAluno(nome){
    let novoAluno = {
        nome: nome,
        notas: [],
        curso: [],
        faltas: 0
    }
    alunosDaEscola.push(novoAluno);
    if (alunosDaEscola[alunosDaEscola.length - 1].nome == nome){
        console.log("Aluno adicionado com sucesso.");
    }
}

function listarAlunos(){
    alunosDaEscola.forEach(aluno => {
        console.log("---------------------------------------------------------------------------------------");
        console.log(`\nNome: ${aluno.nome}
                    \nNotas: ${aluno.notas}
                    \nCursos: ${JSON.stringify(aluno.cursos)}
                    \nFaltas: ${aluno.faltas}\n`)
    })
  }
function buscarAluno(nome){
    for (let i=0; i<alunosDaEscola.length;i++){
        if (nome == alunosDaEscola[i].nome) {
            console.log("O alunos foi encontrado.");
            return alunosDaEscola[i];
        }
    }
    console.log("O aluno não foi encontrado.");
}
function matricularAluno(aluno, curso){
    let novo ={
        nomeDoCurso: curso,
        dataMatricula: new Date()
    }
    aluno.cursos.push(novo);
    let cursos = aluno.cursos
    let ultimo = cursos[cursos.length-1].nomeDoCurso;
    if (ultimo == curso) {
        console.log("Curso adicionado com sucesso.");
    }
    else {
        console.log("Curso não foi adicionado.");
    }
}
function aplicarFalta(aluno){
    if (estaMatriculado(aluno)) {
        aluno.faltas = aluno.faltas + 1;
        console.log("Falta adicionada.");
    }
    else {
        console.log("O aluno não está matriculado em um curso.");
    }
}

function aplicarNota(aluno, nota){
    if (estaMatriculado(aluno)) {
        aluno.notas.push(nota);
        console.log("Nota adicionada com sucesso.");
    }
    else {
        console.log("O aluno não está matriculado em um curso.");
    }
}

function aprovarAluno(aluno){
    if (estaMatriculado(aluno)){
        if (calcularMedia(aluno)>=7.0 && aluno.faltas<4){
            console.log("Aluno aprovado.");
        }
        else {
            console.log("Aluno reprovado.");
        }
    }
    else{
        console.log("O aluno não está matriculado em um curso.");
    }
}
