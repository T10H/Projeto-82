VarCanvas = document.getElementById("canvas1");
ctx = VarCanvas.getContext("2d");
MouseEvent = "empty";
var CoordX, CoordY;

cor = document.getElementById("CaixaCor").value;
largura = document.getElementById("CaixaLargura").value;

VarCanvas.addEventListener("mousedown", MouseDown);

function MouseDown(e) {
    cor = document.getElementById("CaixaCor").value;
    largura = document.getElementById("CaixaLargura").value;
    raio = document.getElementById("CaixaRaio").value;
    MouseEvent = "mousedown";
}

VarCanvas.addEventListener("mouseup", MouseUp);

function MouseUp(e) {
    MouseEvent = "mouseup";
}

VarCanvas.addEventListener("mouseleave", MouseLeave);

function MouseLeave(e) {
    MouseEvent = "mouseleave";
}

VarCanvas.addEventListener("mousemove", MouseMove);

function MouseMove(e) {
    PosMouseX = e.clientX - VarCanvas.offsetLeft;
    PosMouseY = e.clientY - VarCanvas.offsetTop;

    if (MouseEvent = "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.arc(PosMouseX, PosMouseY, raio, 0, 2 * Math.PI);
        console.log("X é igual a " + PosMouseX + " e Y é igual a " + PosMouseY);
        ctx.lineTo(PosMouseX, PosMouseY);
        ctx.stroke();
        CoordX = PosMouseX;
        CoordY = PosMouseY;
    }
}

function limpar() {
    ctx.clearRect(0, 0, ctx.canvas1.width, ctx.canvas1.height);
}
