/* ==========================================================================
   ByteForge Digital — main.js
   Índice:
   1. Menú responsive (navbar móvil)
   2. Efecto de navbar al hacer scroll
   3. Animación de "escritura" en la consola del hero
   4. Acordeón de preguntas frecuentes (FAQ)
   5. Validación y envío del formulario de contacto
   6. Animación de aparición al hacer scroll (reveal on scroll)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScrollEffect();
  initHeroTypingEffect();
  initFaqAccordion();
  initContactForm();
  initScrollReveal();
});

/* ------------------------ 1. MENÚ RESPONSIVE ----------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cierra el menú al hacer clic en cualquier enlace (útil en móvil)
  navMenu.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ------------------- 2. EFECTO DE NAVBAR AL HACER SCROLL ------------------ */
function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 12) {
      navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ------------------- 3. ANIMACIÓN DE ESCRITURA EN EL HERO ------------------ */
function initHeroTypingEffect() {
  const target = document.getElementById('typedCode');
  if (!target) return;

  const lines = [
    '$ npm run build',
    '✓ compilando módulos...',
    '✓ optimizando assets',
    '✓ pruebas superadas (128/128)',
    '',
    '$ git push origin main',
    '✓ despliegue completado',
    '→ byteforgedigital.com'
  ];

  const fullText = lines.join('\n');
  let index = 0;

  // Respeta la preferencia de "reducir movimiento" del usuario
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    target.textContent = fullText;
    return;
  }

  function typeNextChar() {
    if (index <= fullText.length) {
      target.textContent = fullText.slice(0, index);
      index++;
      setTimeout(typeNextChar, 28);
    } else {
      // Al terminar, reinicia el ciclo después de una pausa
      setTimeout(() => {
        index = 0;
        typeNextChar();
      }, 3200);
    }
  }

  typeNextChar();
}

/* --------------------- 4. ACORDEÓN DE PREGUNTAS FRECUENTES ---------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-item__question');

    questionBtn.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Cierra las demás preguntas abiertas (comportamiento tipo acordeón)
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('is-open');
        otherItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      // Abre la pregunta seleccionada si estaba cerrada
      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* -------------------- 5. VALIDACIÓN Y ENVÍO DEL FORMULARIO ---------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMessage = document.getElementById('formSuccess');

  const fields = {
    nombre: {
      input: document.getElementById('nombre'),
      errorEl: document.getElementById('error-nombre'),
      validate: (value) => value.trim().length >= 3,
      message: 'Escribe tu nombre completo (mínimo 3 caracteres).'
    },
    email: {
      input: document.getElementById('email'),
      errorEl: document.getElementById('error-email'),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Ingresa un correo electrónico válido.'
    },
    servicio: {
      input: document.getElementById('servicio'),
      errorEl: document.getElementById('error-servicio'),
      validate: (value) => value.trim() !== '',
      message: 'Selecciona el servicio que te interesa.'
    },
    mensaje: {
      input: document.getElementById('mensaje'),
      errorEl: document.getElementById('error-mensaje'),
      validate: (value) => value.trim().length >= 10,
      message: 'Cuéntanos un poco más (mínimo 10 caracteres).'
    }
  };

  // Valida un campo individual y actualiza su mensaje de error
  function validateField(field) {
    const value = field.input.value;
    const isValid = field.validate(value);
    const formGroup = field.input.closest('.form-group');

    if (isValid) {
      formGroup.classList.remove('has-error');
      field.errorEl.textContent = '';
    } else {
      formGroup.classList.add('has-error');
      field.errorEl.textContent = field.message;
    }

    return isValid;
  }

  // Validación en tiempo real al salir de cada campo
  Object.values(fields).forEach((field) => {
    field.input.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formIsValid = true;
    Object.values(fields).forEach((field) => {
      const fieldIsValid = validateField(field);
      if (!fieldIsValid) formIsValid = false;
    });

    if (!formIsValid) {
      successMessage.style.color = '#E4573D';
      successMessage.textContent = 'Revisa los campos marcados antes de continuar.';
      return;
    }

    // Simulación de envío (no se conecta a un servidor real)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      successMessage.style.color = '#1B9C6A';
      successMessage.textContent = '¡Solicitud recibida! Te contactaremos muy pronto.';
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();

      // Limpia el mensaje de éxito después de unos segundos
      setTimeout(() => {
        successMessage.textContent = '';
      }, 6000);
    }, 900);
  });
}

/* ------------------- 6. ANIMACIÓN AL DESPLAZARSE (SCROLL) ----------------- */
function initScrollReveal() {
  // Marca como "reveal" los elementos que queremos animar al entrar en pantalla
  const selectors = [
    '.mv-card',
    '.service-card',
    '.tech-chip',
    '.why-card',
    '.process-step',
    '.testimonial-card',
    '.faq-item',
    '.contact-form',
    '.contact-info'
  ];

  const elements = document.querySelectorAll(selectors.join(','));
  if (!elements.length) return;

  elements.forEach((el) => el.classList.add('reveal'));

  // Si el navegador no soporta IntersectionObserver, muestra todo directamente
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}
