let plan = prompt ("Binvenido a Lujan Salud, Ingrese su numero de plan:");
if ((plan == "A-306") || (plan == "a-306")){
    console.log("Por favor, dirijase a la caja 1");
} else if((plan == "A-406") || (plan == "a-406")){
    console.log("Por favor dirijase a la caja 2");
}else{
    console.log(" Aqui No cobramos el plan ingresado. Por favor dirijase a la sucursal correspondiente");
}