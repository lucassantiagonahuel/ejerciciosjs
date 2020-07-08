
function calcularEdad() {
    let fechaNacimiento=document.getElementById("fechaNacimiento").value
    let añoNacimiento=fechaNacimiento.substring(0,4)
    let mesNacimiento =fechaNacimiento.substring(5,7)
    let diaNacimiento =fechaNacimiento.substring(8,10)
    
    let fechaActual=new Date()
    let diaActual=fechaActual.getDate()
    let mesActual=fechaActual.getMonth()+1
    let añoActual=fechaActual.getFullYear()

    if (mesNacimiento>=mesActual){
        let calculoAño=calcularAño(añoNacimiento,añoActual)
        let calculoMes=calcularMesMayor(mesNacimiento,mesActual)
        document.write(`Usted tiene ${calculoAño-1} años, ${calculoMes} meses y ${diaActual} dias`)
    } else{
        let calculoAño=calcularAño(añoNacimiento,añoActual)
        let calculoMes=calcularMes(mesNacimiento,mesActual)
        document.write(`Usted tiene ${calculoAño} años, ${calculoMes} meses y ${diaActual} dias`)
    }
}

function calcularAño(añoNaci,añoActu) {
    let resultado= añoActu-añoNaci
    return resultado
}

function calcularMes(mesNaci,mesActu) {
    let resultado=mesActu-mesNaci
    return resultado
}

function calcularMesMayor(mesNaci,mesActu) {
    let meses=12
    let resultado=(meses - mesNaci)+mesActu
    return resultado
}

