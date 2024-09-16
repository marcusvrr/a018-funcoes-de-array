const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
function capsLock(elemento) {
    const propriedadeAlta = {...objeto, nome: elemento.nome.toUpperCase(), profissao: elemento.profissao.toUpperCase(), username: elemento.username.toUpperCase(), senha: elemento.senha.toUpperCase()}
    return propriedadeAlta
}

//2
function textoCorrido(elemento) {
    const propriedadeAlta = {...objeto, textoCorrido: elemento.nome + elemento.profissao + elemento.username + elemento.senha }
    return propriedadeAlta.textoCorrido
}

//3
function funcao3(elemento,callback) {
  const resultado = callback(elemento)
  console.log("função 3",resultado);
  return resultado  
}
funcao3(objeto,capsLock);
funcao3(objeto,textoCorrido);

//exercicio paula ex.exer1
const pessoa = {
    nome:"Paula",
    Profissão:"Desenvolvedora",
    username:"paulaOliveira",
    senha: "123456"
}
function recebeObj1(objeto){
    let novoObjeto={}
    for(let i in objeto){
        novoObjeto[i]=objeto[i].toUpperCase()
    }
    return novoObjeto
}
console.log(recebeObj1(pessoa));

const recebeObj2 = (objeto)=>{
    let textoNovo =[]
    for(let texto in objeto){
        textoNovo.push(objeto[texto])
    }
    return textoNovo.toString().replaceAll(",", " ")
}
console.log(recebeObj2(pessoa))
