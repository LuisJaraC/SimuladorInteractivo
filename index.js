<<<<<<< HEAD

let usuario = prompt("Ingrese su nombre")

while(usuario){
    let cuotas = parseInt(prompt("Bienvenido "+usuario+", ingrese el numero de cuotas para su vehiculo"))
    let dinero = parseInt(prompt("Ingrese el monto de su vehiculo"))
    
    if(cuotas>0 && dinero>0){
        let resultado = dinero / cuotas
        alert(resultado)
    }else {
        alert("quizas te equivocaste, vuelve a intentarlo")
    }
    let confirmacion = prompt("¿Desea hacer otro calculo? s/n").toLowerCase()
    if(confirmacion="n"){
        alert("Muchas gracias, que tengas un excelente dia")
        break
    }
=======

let usuario = prompt("Ingrese su nombre")

while(usuario){
    let cuotas = parseInt(prompt("Hola "+usuario+", ingrese el numero de cuotas para su vehiculo"))
    let dinero = parseInt(prompt("Ingrese el monto de su vehiculo"))
    let division = (a,b) => a / b
    if(cuotas>0 && dinero>0){
        let cuotasVehiculo = division(dinero,cuotas)
        alert(cuotasVehiculo)
    }else {
        alert("quizas te equivocaste, vuelve a intentarlo")
    }
    let confirmacion = prompt("¿Desea hacer otro calculo? s/n").toLowerCase()
    if(confirmacion==="s"){
        
    } else {
        alert("Muchas gracias, que tengas un excelente dia")
        break
    }
>>>>>>> b66fa91 (Agregando lo solicitado)
}