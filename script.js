/**
 * Zion Mission School, Amba — Responsive Glassmorphism Landing Page & Portal Script
 * Developer: Partha Bhuyan (https://parthbhuyan.github.io/)
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Menu Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');

    if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileNavDrawer.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileNavDrawer.classList.contains('open')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });
    }

    // 2. Interactive Glass Tabs Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 3. Smooth Scroll & Close Mobile Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
                    mobileNavDrawer.classList.remove('open');
                    if (mobileMenuBtn) {
                        const icon = mobileMenuBtn.querySelector('i');
                        if (icon) icon.className = 'fa-solid fa-bars';
                    }
                }
            }
        });
    });
});
