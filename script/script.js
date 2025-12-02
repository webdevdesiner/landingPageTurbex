// Código antigo do carrossel removido - substituído por grid de produtos
// Os accordions são gerenciados pelo script no final do index.html


document.querySelectorAll('#menu-eclipse button').forEach(btn => {
    btn.addEventListener('click', function() {
      const alvo = document.querySelector(this.dataset.target);
      if (alvo) {
        alvo.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  