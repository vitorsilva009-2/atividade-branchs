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

    function somar() {
    const { v1, v2 } = pegarValores('soma1', 'soma2');
    if (!valoresValidos(v1, v2, 'resultadoSoma')) return;
    mostrarResultado('resultadoSoma', `Resultado: <span>${v1 + v2}</span>`);
  }