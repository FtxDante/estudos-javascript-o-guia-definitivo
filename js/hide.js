 /*O Capítulo 16, Scripts de CSS, mostra como você pode usar JavaScript com os estilos CSS que definem a apresentação desse conteúdo. Normalmente isso é feito com o atributo style ou class dos elementos HTML:*/
 
 function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
    if (reflow) {                           // Se o 2º argumento é verdadeiro
    e.target.style.display = "none"            //  oculta o elemento e utiliza seu espaço 
    }else {                                  // Caso contrário
    e.target.style.visibility = "hidden";      //  torna e invisível, mas deixa seu espaço 
    }
}
