// Wiki - Cara Core Informática
// JavaScript para interatividade e navegação

document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação ativa no menu
    function setActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuLinks = document.querySelectorAll('.wiki-menu a');
        
        menuLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll para links internos
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Animação de fade-in para cards
    function initCardAnimations() {
        const cards = document.querySelectorAll('.project-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.5s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => observer.observe(card));
    }
    
    // Collapse/Expand para seções móveis
    function initMobileMenu() {
        const sidebar = document.querySelector('.wiki-sidebar');
        const toggleBtn = document.getElementById('sidebar-toggle');
        
        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('show');
            });
        }
    }
    
    // Tooltip para badges de tecnologia
    function initTechBadges() {
        const badges = document.querySelectorAll('.tech-badge');
        badges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.2s ease';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Breadcrumb dinâmico
    function initBreadcrumb() {
        const breadcrumb = document.querySelector('.wiki-breadcrumb nav');
        if (breadcrumb) {
            const currentPage = document.title;
            const pathParts = window.location.pathname.split('/').filter(part => part !== '');
            
            let breadcrumbHTML = '<a href="index.html">Wiki Home</a>';
            
            if (pathParts.length > 2) {
                const currentFile = pathParts[pathParts.length - 1];
                if (currentFile !== 'index.html') {
                    breadcrumbHTML += ` > <span>${currentPage}</span>`;
                }
            }
            
            breadcrumb.innerHTML = breadcrumbHTML;
        }
    }
    
    // Tema claro/escuro:
    // Padronizado via assets/js/theme-toggle.js (usa atributo data-theme no <html>).
    // Não duplicar aqui para evitar conflitos.
    
    // Copiar código para clipboard
    function initCodeCopy() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.innerHTML = '<i class="bi bi-clipboard"></i>';
            button.title = 'Copiar código';
            
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(button);
            
            button.addEventListener('click', function() {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    button.innerHTML = '<i class="bi bi-check"></i>';
                    setTimeout(() => {
                        button.innerHTML = '<i class="bi bi-clipboard"></i>';
                    }, 2000);
                });
            });
        });
    }
    
    // Print friendly
    function initPrintSupport() {
        const printBtn = document.getElementById('print-page');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
    }
    
    // Lazy loading para imagens
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Inicializar todas as funcionalidades
    setActiveMenuItem();
    initSmoothScroll();
    initCardAnimations();
    initMobileMenu();
    initTechBadges();
    initBreadcrumb();
    initCodeCopy();
    initPrintSupport();
    initLazyLoading();
    
    // Atualizar menu ativo quando a URL muda
    window.addEventListener('popstate', setActiveMenuItem);
    
    // Performance: remover animações em dispositivos com baixa performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }
});

// Utilitários globais
window.WikiUtils = {
    // Formatar data para português brasileiro
    formatDate: function(date) {
        return new Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    // Gerar ID único para elementos
    generateId: function(prefix = 'wiki') {
        return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    },
    
    // Debounce para otimizar performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};