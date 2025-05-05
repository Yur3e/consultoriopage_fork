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


  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-img");
  const indicadores = document.getElementById("indicadores");

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === n) slide.classList.add("active");
    });

    const dots = indicadores.querySelectorAll("span");
    dots.forEach(dot => dot.classList.remove("ativo"));
    if (dots[n]) dots[n].classList.add("ativo");
  }

  function mudarSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    mostrarSlide(slideIndex);
  }

  function criarIndicadores() {
    slides.forEach((_, i) => {
      const span = document.createElement("span");
      span.addEventListener("click", () => {
        slideIndex = i;
        mostrarSlide(i);
      });
      indicadores.appendChild(span);
    });
  }

  criarIndicadores();
  mostrarSlide(slideIndex);

  setInterval(() => {
    mudarSlide(1);
  }, 5000); // Muda a cada 5 segundos
