function validar(){
    var tudocerto = 0
   
    tudocerto = validarNome();
    tudocerto = validarSobrenome() + tudocerto
    tudocerto = validarCPF() + tudocerto
    tudocerto = verificaEmail() + tudocerto
    if(tudocerto == 0){
        alert("Cadastro Realizado!")
        location.reload()
    }

}
function verificaEmail(){
    
    var email = document.getElementById("email")

    var usuario = email.value.substring(0,email.value.indexOf("@"))
    
    var dominio = email.value.substring(email.value.indexOf("@")+1,email.value.length)
    
    if((usuario.length >=1) && 
       (dominio.length >=3) &&
       (usuario.indexOf ("@") == -1) &&
       (dominio.indexOf ("@") == -1) &&
       (usuario.indexOf (" ") == -1) &&
       (dominio.indexOf (" ") == -1) &&
       (dominio.indexOf (".") != -1) &&
       (dominio.indexOf(".")>=1 ) &&
       (dominio.lastIndexOf(".") < dominio.length-1))
       {
           valido(email)
           return 0
    }
    else{
        alert("Email invalido")
        invalido(email)
        return 1

    }
}
function validarCPF(){
    var cpf = document.getElementById("cpf")
    var limpo = cpf.value
    var numVef
    var valor = 0
    var valor2 = 0
    for(i = 0; i< 10; i++)
    {
        if(limpo.indexOf('.') == -1){
        numVef = limpo.substring(9,11)
        limpo = limpo.substring(0,9)
        for(i =0; i < 9; i++){
           valor =  (limpo.substring(i,i+1) * (i+1)) +valor
           
        }
        resto = valor%11
        if(resto == 10){
            resto = 0
        }
        parte1 = limpo + resto
        for(i = 0; i<=9;i++){
            valor2 = (parte1.substring(i,i+1) * (i)) + valor2
        }
        resto2 = valor2%11
        if(resto2 == 0){
            resto2=0
            
        }
        if(((resto.toString())+(resto2.toString())) != numVef){
            alert("CPF Invalido!")
            invalido(cpf)
            return 1
            break;
        }
        valido(cpf)
        return 0;
    }
    else{
        limpo = limpo.replace('.','')
        limpo = limpo.replace('-','')
    }
}
}
function invalido(id){
    id.value =""
    id.style.borderWidth = '1.9px'
    id.style.borderColor = '#FF0000'
}
function valido(id){
    id.style.borderWidth = '1px'
    id.style.borderColor = '#59429d'
}

function validarSobrenome(){
    var sobrenome = document.getElementById("sobrenome")
    var erroSobrenome = 0
    if(sobrenome.value == ""){
        alert("Sobrenome não informado!")
        erroSobrenome =1
    }
    else if(sobrenome.value.length <= 2){
        alert("Sobrenome muito curto e portanto invalido")
        erroSobrenome = 1
    }
    else if(sobrenome.value == Number){
        alert("Favor entrar com sobrenome valido")
        erroSobrenome=1
    }
    if(erroSobrenome == 1){
        invalido(sobrenome)
        return 1;
    }
    if(erroSobrenome == 0){
        valido(sobrenome)
        return 0;
    }
}
function validarNome(){
    var nome = document.getElementById("nome")
    var erroNome = 0
    if((nome.value == "")){
        alert("Nome não informado!")
        erroNome=1
    }
    else if((nome.value.length) <= 2){
        alert("Nome muito curto e portanto invalido")
        erroNome=1 
    }
    else if(nome.value == Number){
        alert("Favor entre com um nome valido")
        erroNome=1
    }
    if(erroNome == 1){
        invalido(nome)
        return 1;
    }
    else if(erroNome == 0){
        valido(nome)
        return 0;
    }
}