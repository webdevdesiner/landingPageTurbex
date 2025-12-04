// Código antigo do carrossel removido - substituído por grid de produtos
// Os accordions são gerenciados pelo script no final do index.html

// Navegação dos carrosséis de produtos
document.addEventListener('DOMContentLoaded', function() {
    const botoesNav = document.querySelectorAll('.btn-nav');
    
    botoesNav.forEach(botao => {
        botao.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const produtosRow = document.querySelector(`.produtos-row[data-categoria="${target}"]`);
            
            if (!produtosRow) return;
            
            const cardWidth = produtosRow.querySelector('.produto-card').offsetWidth;
            const gap = 20;
            const scrollAmount = cardWidth + gap;
            
            if (this.classList.contains('btn-nav-prev')) {
                produtosRow.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else if (this.classList.contains('btn-nav-next')) {
                produtosRow.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mostrar/ocultar botões baseado na posição do scroll
    const produtosRows = document.querySelectorAll('.produtos-row');
    
    produtosRows.forEach(row => {
        const updateButtons = () => {
            const wrapper = row.closest('.produtos-row-wrapper');
            if (!wrapper) return;
            
            const prevBtn = wrapper.querySelector('.btn-nav-prev');
            const nextBtn = wrapper.querySelector('.btn-nav-next');
            
            if (!prevBtn || !nextBtn) return;
            
            // Mostrar botão anterior se não estiver no início
            if (row.scrollLeft > 0) {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'all';
            } else {
                prevBtn.style.opacity = '0';
                prevBtn.style.pointerEvents = 'none';
            }
            
            // Mostrar botão próximo se não estiver no final
            const maxScroll = row.scrollWidth - row.clientWidth;
            if (row.scrollLeft < maxScroll - 10) {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'all';
            } else {
                nextBtn.style.opacity = '0';
                nextBtn.style.pointerEvents = 'none';
            }
        };
        
        row.addEventListener('scroll', updateButtons);
        updateButtons(); // Verificar estado inicial
    });
});


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

// Controle de pause do slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    
    slideshowContainers.forEach(container => {
        const produtoCard = container.closest('.produto-card');
        
        // Toggle pause ao clicar na imagem
        container.addEventListener('click', function(e) {
            e.stopPropagation();
            // Toggle pause
            this.classList.toggle('paused');
            // Ativa o slideshow se não estiver ativo (para mobile)
            if (!this.classList.contains('active')) {
                this.classList.add('active');
            }
        });
        
        // Reset ao sair do hover do card (remove pause e active)
        if (produtoCard) {
            produtoCard.addEventListener('mouseleave', function() {
                const slideshow = this.querySelector('.slideshow-container');
                if (slideshow) {
                    slideshow.classList.remove('paused');
                    slideshow.classList.remove('active');
                }
            });
        }
    });
});
  