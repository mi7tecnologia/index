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



// Registro do Service Worker
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', () => {
            installButton.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuário aceitou instalar');
                } else {
                    console.log('Usuário recusou instalar');
                }
                deferredPrompt = null;
            });
        });
    }
});



/**************************************************************************************** */










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



/*********************************************************************************** */

let deferredPrompt;
const installModal = document.getElementById('installModal');
const installButton = document.getElementById('installButton');
const closeButton = document.querySelector('.close-button');

// Escuta o evento de instalação possível
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Mostra o modal
  installModal.style.display = 'block';

  // Se não clicar em nada, fecha depois de 10 segundos
  setTimeout(() => {
    installModal.style.display = 'none';
  }, 10000);
});

// Botão "Instalar"
installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('Usuário aceitou instalar');
    } else {
      console.log('Usuário recusou instalar');
    }
    deferredPrompt = null;
    installModal.style.display = 'none';
  }
});

// Botão "Fechar" (X)
closeButton.addEventListener('click', () => {
  installModal.style.display = 'none';
});
