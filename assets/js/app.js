/*var MenuItens = document.getElementById("MenuItens");
MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}*/

document.addEventListener('DOMContentLoaded', function() {
  // Modal
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const botaoModal = document.getElementById('botaoModal');
  const installButton = document.getElementById('installButton');
  const botaoFlutuante = document.getElementById('botaoFlutuante'); // ⬅️ Botão flutuante

  let deferredPrompt = null;

  // 👉 Função para abrir o modal
  function abrirModal() {
    modal.style.display = 'flex';
    setTimeout(() => {
      if (modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    }, 5000);
  }

  // 👉 Checar se já mostrou nos últimos 3 dias
  const ultimoModal = localStorage.getItem('ultimoModal');
  const agora = new Date().getTime();
  const tresDias = 3 * 24 * 60 * 60 * 1000;

  if (!ultimoModal || agora - ultimoModal > tresDias) {
    abrirModal();
    localStorage.setItem('ultimoModal', agora);
  }

  // 👉 Fechar manual (X ou botão)
  closeModal.onclick = () => {
    modal.style.display = 'none';
  };

  botaoModal.onclick = () => {
    modal.style.display = 'none';
  };

  // 👉 Evento do PWA
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    installButton.style.display = 'inline-block'; // Botão dentro do modal
    botaoFlutuante.style.display = 'block';       // Botão flutuante
  });

  // 👉 Clique no botão de instalar (modal ou flutuante)
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
        modal.style.display = 'none';
      });
    }
  }

  installButton.addEventListener('click', instalarApp);
  botaoFlutuante.addEventListener('click', instalarApp);

  // 👉 Menu hambúrguer (mantido igual)
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo');
  });

  window.addEventListener('scroll', () => {
    menu.classList.remove('menu-ativo');
  });
});

// 👉 Botão flutuante
const botaoFlutuante = document.getElementById('botaoFlutuante');

botaoFlutuante.addEventListener('click', () => {
  // 🔥 Abre o modal novamente
  modal.style.display = 'flex';

  // Fecha sozinho após 5 segundos
  setTimeout(() => {
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  }, 5000);
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





