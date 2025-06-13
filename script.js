const documentos = [
  { titulo: "Visão do Projeto", path: "documentos/extensão unifil_ visão.pdf" },
  { titulo: "DER, implantação e workflow", path: "documentos/DER, diagrama de implantação e workflow.pdf" },
  { titulo: "MVP e Diagrama de Caso de Uso", path: "documentos/extensão unifil- mvp e diagrama caso de uso.pdf" },
];

let indiceAtual = 0;

function dispositivoEhMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.atualizarVisualizacao = function () {
  const doc = documentos[indiceAtual];
  document.getElementById("documentoAtual").textContent = doc.titulo;
  const altura = dispositivoEhMobile() ? "400px" : "600px";
  document.getElementById("conteudoDocumento").innerHTML = `
    <iframe 
      src="${doc.path}#toolbar=0&navpanes=0&scrollbar=0" 
      width="100%" 
      height="${altura}" 
      style="border: none;">
    </iframe>
  `;
};

window.anterior = function () {
  indiceAtual = (indiceAtual - 1 + documentos.length) % documentos.length;
  atualizarVisualizacao();
};

window.proximo = function () {
  indiceAtual = (indiceAtual + 1) % documentos.length;
  atualizarVisualizacao();
};

window.onload = atualizarVisualizacao;
