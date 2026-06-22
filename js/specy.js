/**
 * Specy page — code mockup animation, form handling
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // Code Mockup Cycling Animation & Interaction
  // ========================================
  const views = document.querySelectorAll('.mockup-view');
  const steps = document.querySelectorAll('.step-dot');
  let currentView = 0;
  let cycleInterval;

  const switchToView = (index) => {
    views.forEach(v => v.classList.remove('active'));
    steps.forEach(s => s.classList.remove('active'));
    
    currentView = index;
    
    views[currentView].classList.add('active');
    steps[currentView].classList.add('active');
  };

  if (views.length > 0 && steps.length > 0) {
    cycleInterval = setInterval(() => {
      switchToView((currentView + 1) % views.length);
    }, 4500);

    // Make steps clickable
    steps.forEach((step, index) => {
      step.addEventListener('click', () => {
        clearInterval(cycleInterval); // Stop auto-playing when user interacts
        switchToView(index);
      });
    });
  }

  // ========================================
  // Diagram Sub-Tabs
  // ========================================
  const diagTabs = document.querySelectorAll('.diag-tab');
  const diagViews = document.querySelectorAll('.diag-view');

  diagTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // clear active
      diagTabs.forEach(t => t.classList.remove('active'));
      diagViews.forEach(v => v.style.display = 'none');
      diagViews.forEach(v => v.classList.remove('active'));

      // set active
      tab.classList.add('active');
      const targetId = `diag-${tab.dataset.diag}`;
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.style.display = 'block';
        setTimeout(() => targetView.classList.add('active'), 10);
      }
    });
  });

  // ========================================
  // SDK Flow Sub-Tabs
  // ========================================
  const flowTabs = document.querySelectorAll('.flow-tab');
  const flowViews = document.querySelectorAll('.sdk-flow');

  flowTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // clear active
      flowTabs.forEach(t => t.classList.remove('active'));
      flowViews.forEach(v => {
        v.style.display = 'none';
        v.classList.remove('active');
        v.style.opacity = '0';
      });

      // set active
      tab.classList.add('active');
      const targetId = `flow-${tab.dataset.flow}`;
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.style.display = 'flex';
        setTimeout(() => {
          targetView.classList.add('active');
          targetView.style.opacity = '1';
        }, 10);
      }
    });
  });

  // ========================================
  // Early Access Form
  // ========================================
  const earlyForm = document.getElementById('earlyAccessForm');
  if (earlyForm) {
    earlyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = earlyForm.querySelector('input[type="email"]').value;
      const btn = earlyForm.querySelector('button');
      const originalText = btn.textContent;

      // Simulate submission
      btn.textContent = '✓ Joined!';
      btn.style.background = 'var(--sp-success)';
      btn.style.boxShadow = '0 4px 16px rgba(34, 197, 94, 0.3)';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.disabled = false;
        earlyForm.reset();
      }, 3000);
    });
  }

  // ========================================
  // Team Contact Form
  // ========================================
  const teamForm = document.getElementById('teamContactForm');
  if (teamForm) {
    teamForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = teamForm.querySelector('button');
      const originalText = btn.textContent;

      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'var(--sp-success)';
      btn.style.boxShadow = '0 4px 16px rgba(34, 197, 94, 0.3)';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.disabled = false;
        teamForm.reset();
      }, 3000);
    });
  }

  // ========================================
  // Dashboard bar animation on scroll
  // ========================================
  const dashBars = document.querySelectorAll('.dash-bar-fill');
  if (dashBars.length > 0) {
    const dashObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const targetWidth = fill.style.width;
          fill.style.width = '0%';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              fill.style.width = targetWidth;
            });
          });
          dashObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });

    dashBars.forEach(bar => dashObserver.observe(bar));
  }

});
