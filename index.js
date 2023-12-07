
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
}