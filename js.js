function pegarValores(id1, id2) {
    const v1 = parseFloat(document.getElementById(id1).value);
    const v2 = parseFloat(document.getElementById(id2).value);
    return { v1, v2 };
  }
 
  function mostrarResultado(idResultado, texto, erro = false) {
    const el = document.getElementById(idResultado);
    el.innerHTML = texto;
    el.classList.toggle('erro', erro);
  }
 
  function valoresValidos(v1, v2, idResultado) {
    if (isNaN(v1) || isNaN(v2)) {
      mostrarResultado(idResultado, 'Preencha os dois campos com números válidos.', true);
      return false;
    }
    return true;
  }

  function multiplicar() {
    const { v1, v2 } = pegarValores('mult1', 'mult2');
    if (!valoresValidos(v1, v2, 'resultadoMult')) return;
    mostrarResultado('resultadoMult', `Resultado: <span>${v1 * v2}</span>`);

  }
   function potencia() {
    const { v1, v2 } = pegarValores('pot1', 'pot2');
    if (!valoresValidos(v1, v2, 'resultadoPot')) return;
    mostrarResultado('resultadoPot', `Resultado: <span>${Math.pow(v1, v2)}</span>`);

   }

    function somar() {
    const { v1, v2 } = pegarValores('soma1', 'soma2');
    if (!valoresValidos(v1, v2, 'resultadoSoma')) return;
    mostrarResultado('resultadoSoma', `Resultado: <span>${v1 + v2}</span>`);
  }
   function dividir() {
    const { v1, v2 } = pegarValores('div1', 'div2');
    if (!valoresValidos(v1, v2, 'resultadoDiv')) return;
    if (v2 === 0) {
      mostrarResultado('resultadoDiv', 'Não é possível dividir por zero.', true);
      return;
    }
    mostrarResultado('resultadoDiv', `Resultado: <span>${(v1 / v2).toFixed(4)}</span>`);
  }

    function subtrair() {
    const { v1, v2 } = pegarValores('sub1', 'sub2');
    if (!valoresValidos(v1, v2, 'resultadoSub')) return;
    mostrarResultado('resultadoSub', `Resultado: <span>${v1 - v2}</span>`);
  }

