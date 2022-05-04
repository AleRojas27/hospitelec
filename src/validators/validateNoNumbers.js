export const validateNoNumbers = (e) => {
    let tecla = (document.all) ? e.keyCode : e.which;
    // Patron de entrada, en este caso solo acepta numeros
    let patron =/[0-9]/;
    let tecla_final = String.fromCharCode(tecla);
    if( ! patron.test(tecla_final) ){
        e.preventDefault();
    } 
}