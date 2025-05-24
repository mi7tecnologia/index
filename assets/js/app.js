/*var MenuItens = document.getElementById("MenuItens");
MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}*/
/* EFEIRO MENU AMBURGUINHO */
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu a');

  // Abre ou fecha no botão
  toggle.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo');
  });

  // Fecha se rolar a página
  window.addEventListener('scroll', () => {
    menu.classList.remove('menu-ativo');
  });

  // ✅ ATENÇÃO: Clicar nos links NÃO fecha automaticamente, 
  // deixa o navegador fazer a navegação normal
















  


  
/*****PWA* */
document.addEventListener('DOMContentLoaded', function() {
  const installButton = document.getElementById('installButton');
  const botaoFlutuante = document.getElementById('botaoFlutuante');

  let deferredPrompt = null;

  // 👉 Evento do PWA: quando é possível instalar
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    installButton.style.display = 'inline-block'; // Botão normal aparece
    botaoFlutuante.style.display = 'block';       // Botão flutuante aparece
  });

  // 👉 Função para instalar o app
  function instalarApp() {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ Usuário aceitou instalar');
        } else {
          console.log('❌ Usuário recusou instalar');
        }

        deferredPrompt = null;

        installButton.style.display = 'none';
        botaoFlutuante.style.display = 'none';
      });
    }
  }

  // 👉 Clique nos botões de instalar
  installButton.addEventListener('click', instalarApp);
  botaoFlutuante.addEventListener('click', instalarApp);

  // 👉 Menu hambúrguer (mantido normal)
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo');
  });

  window.addEventListener('scroll', () => {
    menu.classList.remove('menu-ativo');
  });
});




// Abrir o modal automaticamente ao carregar (se desejar)
// Descomente se quiser o modal na abertura também, além do evento de instalação
// window.addEventListener('load', () => {
//     abrirModal();
// });














// Banner 2 - Slider
const cards = document.querySelectorAll('.card');
const positions = [0, 1, 2, 3, 4, 5, 6]; // Posições fixas para o layout so acresentar mais se necesario

function updatePositions() {
  cards.forEach((card, i) => {
    card.dataset.position = positions[i];
  });
}

document.getElementById('next').addEventListener('click', () => {
  positions.push(positions.shift()); // Move o primeiro para o fim
  updatePositions();
});

document.getElementById('prev').addEventListener('click', () => {
  positions.unshift(positions.pop()); // Move o último para o início
  updatePositions();
});

updatePositions();

 /* GODIGO PARA SLIDER AUTOMATICO */
 
// 🔥 Autoplay — roda automaticamente a cada 3 segundos
let autoPlay = setInterval(() => {
  positions.push(positions.shift());
  updatePositions();
}, 2000);

// 🔥 Pausa quando passa o mouse sobre o carrossel
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

carousel.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    positions.push(positions.shift());
    updatePositions();
  }, 2000);
});




