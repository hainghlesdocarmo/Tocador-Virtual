function click() {
    if (event.button==2||event.button==3) {
    oncontextmenu='return false'; alert ('Todos os direitos reservados');
    }
    }
    function keypresed() {
    alert(' Teclado Desabilitado ');
    }
    document.onkeydown=keypresed;
    document.onmousedown=click
    document.oncontextmenu = new Function("return false;")