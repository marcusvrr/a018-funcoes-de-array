const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
function capsLock(elemento) {
    const propriedadeAlta = {...objeto, nome: objeto.nome.toUpperCase(), profissao: objeto.profissao.toUpperCase(), username: objeto.username.toUpperCase(), senha: objeto.senha.toUpperCase()}
    return propriedadeAlta
}

//2
function textoCorrido(elemento) {
    const propriedadeAlta = {...objeto, textoCorrido: objeto.nome+ objeto.profissao+ objeto.username + objeto.senha }
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