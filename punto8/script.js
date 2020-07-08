function ingreso() {

    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value

    if (nombre =="") {
        alert("Falta ingresar nombre")
    } else if(apellido=="") {
        alert("Falta ingresar apellido")
    }else{

        document.write(`Hola \"${nombre} ${apellido}\"`)

    }

}