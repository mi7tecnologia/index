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

  let deferredPrompt = null;

  // 👉 Abre o modal ao carregar (exibe como flex para centralizar)
  modal.style.display = 'flex';

  // 👉 Fecha o modal automaticamente após 5 segundos
  setTimeout(() => {
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  }, 5000);

  // 👉 Fechar modal clicando no X
  closeModal.onclick = () => {
    modal.style.display = 'none';
  };

  // 👉 Fechar modal clicando no botão "Ok, obrigado!"
  botaoModal.onclick = () => {
    modal.style.display = 'none';
  };

  // 👉 Evento do PWA: captura o evento antes da instalação
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Mostrar o botão de instalar dentro do modal
    installButton.style.display = 'inline-block';
  });

  // 👉 Clique no botão instalar
  installButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ Usuário aceitou instalar');
        } else {
          console.log('❌ Usuário recusou instalar');
        }
        deferredPrompt = null;

        // Esconder botão após a escolha do usuário
        installButton.style.display = 'none';

        // Opcional: fecha modal depois da instalação
        modal.style.display = 'none';
      });
    }
  });

  // 👉 Menu hambúrguer (deixe seu código como está)
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





