function calcula(){
    let compra = parseFloat(document.getElementById("compra").value);
    
    let frete = parseFloat(document.getElementById("frete").value);
    
    let impostos = parseFloat(document.getElementById("impostos").value);

    let outrosCustos = parseFloat(document.getElementById("outrosCustos").value);

    let comissao = parseFloat(document.getElementById("comissao").value);
    
    let margem = parseFloat(document.getElementById("margem").value);

    //RESULTADO
    let percent = (compra + frete + impostos + outrosCustos + comissao) * (margem/100);
    let resultado = compra + frete + impostos + outrosCustos + comissao + percent;
    const formatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("resultado").innerHTML = formatado;
}
