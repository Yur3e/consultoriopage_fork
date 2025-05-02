function toggleSugestoes() {
    const lista = document.getElementById('sugestoesLista');
    lista.style.display = lista.style.display === 'block' ? 'none' : 'block';
  }

  function selecionarSugestao(texto, destino) {
    document.getElementById('textoSelecionado').innerText = texto;
    document.getElementById('sugestoesLista').style.display = 'none';
    document.querySelector(destino).scrollIntoView({ behavior: 'smooth' });
  }

  window.addEventListener('click', function(e) {
    const buscador = document.querySelector('.buscador-falso');
    if (!buscador.contains(e.target)) {
      document.getElementById('sugestoesLista').style.display = 'none';
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos que você quer animar
    const elementos = document.querySelectorAll('.animar'); // Adicione a classe .animar aos elementos

    // Função de callback para o Intersection Observer
    const callback = (entradas, observer) => {
        entradas.forEach(entrada => {
            // Verifica se o elemento está visível na tela
            if (entrada.isIntersecting) {
                entrada.target.classList.add('entrar'); // Adiciona a classe de animação
                observer.unobserve(entrada.target); // Para de observar o elemento
            }
        });
    };

    // Configura o Intersection Observer
    const observer = new IntersectionObserver(callback, {
        root: null, // Visor da janela
        rootMargin: '0px',
        threshold: 0.5 // 50% do elemento precisa estar visível
    });

    // Adiciona o observer para cada elemento
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});
