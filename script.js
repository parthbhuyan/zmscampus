/**
 * ZMS Campus — Zion Mission School, Amba
 * Responsive Glassmorphism Landing Page Script
 * Developer: Partha Bhuyan (https://parthbhuyan.github.io/)
 */

(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', function () {

        /* -----------------------------------------------------------
           0. Preloader — fades out once the page (incl. images) is
              ready, with a small minimum display time so it never
              just flashes, and a hard fallback so a slow asset can
              never trap the visitor behind the overlay.
        ----------------------------------------------------------- */
        var preloader = document.getElementById('preloader');
        if (preloader) {
            var minDisplay = reduceMotion ? 0 : 500;
            var start = Date.now();
            var hidden = false;

            function hidePreloader() {
                if (hidden) return;
                hidden = true;
                var elapsed = Date.now() - start;
                var wait = Math.max(0, minDisplay - elapsed);
                setTimeout(function () {
                    preloader.classList.add('preloader-hide');
                    setTimeout(function () {
                        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
                    }, 550);
                }, wait);
            }

            if (document.readyState === 'complete') {
                hidePreloader();
            } else {
                window.addEventListener('load', hidePreloader);
            }
            // Safety net: never let the preloader outstay ~4s.
            setTimeout(hidePreloader, 4000);
        }

        /* -----------------------------------------------------------
           1. Mobile Menu Drawer Toggle
        ----------------------------------------------------------- */
        var mobileMenuBtn = document.getElementById('mobileMenuBtn');
        var mobileNavDrawer = document.getElementById('mobileNavDrawer');

        function closeDrawer() {
            if (!mobileNavDrawer) return;
            mobileNavDrawer.classList.remove('open');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                var icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        }

        if (mobileMenuBtn && mobileNavDrawer) {
            mobileMenuBtn.addEventListener('click', function () {
                var isOpen = mobileNavDrawer.classList.toggle('open');
                mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
                var icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            });
        }

        /* -----------------------------------------------------------
           2. Accessible Tabs (click + arrow-key navigation)
        ----------------------------------------------------------- */
        var tabButtons = Array.prototype.slice.call(document.querySelectorAll('.tab-btn'));
        var tabPanels = Array.prototype.slice.call(document.querySelectorAll('.tab-pane'));

        function activateTab(btn) {
            var targetId = btn.getAttribute('data-tab');

            tabButtons.forEach(function (b) {
                var isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-selected', String(isActive));
                b.setAttribute('tabindex', isActive ? '0' : '-1');
            });

            tabPanels.forEach(function (p) {
                var show = p.id === targetId;
                p.classList.toggle('active', show);
                if (show) { p.removeAttribute('hidden'); } else { p.setAttribute('hidden', ''); }
            });

            // Animate the progress bars / ring the first time their tab opens.
            animateFills(document.getElementById(targetId));
        }

        tabButtons.forEach(function (btn, idx) {
            btn.addEventListener('click', function () { activateTab(btn); });
            btn.addEventListener('keydown', function (e) {
                var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
                if (!dir) return;
                e.preventDefault();
                var next = tabButtons[(idx + dir + tabButtons.length) % tabButtons.length];
                next.focus();
                activateTab(next);
            });
        });

        /* -----------------------------------------------------------
           3. Smooth Scroll + Close Drawer + Scroll-Spy
        ----------------------------------------------------------- */
        var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link-item'));

        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    var navH = document.getElementById('siteNavbar').offsetHeight;
                    var top = targetElement.getBoundingClientRect().top + window.pageYOffset - navH - 12;
                    window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
                    closeDrawer();
                }
            });
        });

        var sections = navLinks
            .map(function (l) { return document.querySelector(l.getAttribute('href')); })
            .filter(Boolean);

        function updateActiveNav() {
            var navH = document.getElementById('siteNavbar').offsetHeight + 30;
            var current = sections[0];
            sections.forEach(function (sec) {
                if (sec.getBoundingClientRect().top - navH <= 0) current = sec;
            });
            navLinks.forEach(function (l) {
                l.classList.toggle('active-link', current && l.getAttribute('href') === '#' + current.id);
            });
        }

        /* -----------------------------------------------------------
           4. Navbar shadow/shrink on scroll + back-to-top button
        ----------------------------------------------------------- */
        var navbar = document.getElementById('siteNavbar');
        var backToTop = document.getElementById('backToTop');

        function onScroll() {
            var y = window.scrollY || window.pageYOffset;
            if (navbar) navbar.classList.toggle('is-scrolled', y > 12);
            if (backToTop) backToTop.classList.toggle('show', y > 480);
            updateActiveNav();
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        if (backToTop) {
            backToTop.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            });
        }

        /* -----------------------------------------------------------
           5. Scroll-reveal via IntersectionObserver
        ----------------------------------------------------------- */
        var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
        if (reduceMotion || !('IntersectionObserver' in window)) {
            revealEls.forEach(function (el) { el.classList.add('in-view'); });
        } else {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
            revealEls.forEach(function (el) { io.observe(el); });
        }

        /* -----------------------------------------------------------
           6. Count-up numbers (hero stats + live ring)
        ----------------------------------------------------------- */
        function countUp(el) {
            var target = parseFloat(el.getAttribute('data-count'));
            var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            var suffix = el.getAttribute('data-suffix') || '';
            if (reduceMotion || isNaN(target)) {
                el.textContent = target.toFixed(decimals) + suffix;
                return;
            }
            var duration = 1200;
            var startTime = null;
            function tick(ts) {
                if (!startTime) startTime = ts;
                var progress = Math.min((ts - startTime) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = (target * eased).toFixed(decimals) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }

        function animateRing(svgCircle) {
            var percent = parseFloat(svgCircle.getAttribute('data-ring'));
            if (isNaN(percent)) return;
            var r = 52;
            var circumference = 2 * Math.PI * r;
            var offset = circumference - (percent / 100) * circumference;
            requestAnimationFrame(function () {
                svgCircle.style.strokeDasharray = circumference.toFixed(1);
                svgCircle.style.strokeDashoffset = reduceMotion ? offset.toFixed(1) : circumference.toFixed(1);
                if (!reduceMotion) {
                    requestAnimationFrame(function () {
                        svgCircle.style.strokeDashoffset = offset.toFixed(1);
                    });
                }
            });
        }

        var statNumbers = Array.prototype.slice.call(document.querySelectorAll('.stat-number, .ring-number'));
        var ringCircle = document.querySelector('.ring-value');
        var statsAnimated = false;

        function animateStatsOnce() {
            if (statsAnimated) return;
            statsAnimated = true;
            statNumbers.forEach(countUp);
            if (ringCircle) animateRing(ringCircle);
        }

        // Live ERP Sync for Today's Attendance Rate
        try {
            fetch('/api/public-stats')
                .then(function (res) { return res.json(); })
                .then(function (data) {
                    if (data && data.today_attendance !== undefined) {
                        var rate = parseFloat(data.today_attendance).toFixed(1);
                        var numEl = document.getElementById('heroAttendanceVal');
                        var circleEl = document.getElementById('heroAttendanceRing');
                        if (numEl) numEl.setAttribute('data-count', rate);
                        if (circleEl) circleEl.setAttribute('data-ring', rate);
                        if (statsAnimated) {
                            if (numEl) countUp(numEl);
                            if (circleEl) animateRing(circleEl);
                        }
                    }
                })
                .catch(function () { });
        } catch (e) { }

        var heroStats = document.querySelector('.hero-stats');
        if (heroStats && 'IntersectionObserver' in window && !reduceMotion) {
            var statsIo = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateStatsOnce();
                        statsIo.disconnect();
                    }
                });
            }, { threshold: 0.4 });
            statsIo.observe(heroStats);
        } else {
            animateStatsOnce();
        }

        /* -----------------------------------------------------------
           7. Syllabus progress bars — animate width when their tab opens
        ----------------------------------------------------------- */
        function animateFills(scope) {
            if (!scope) return;
            var fills = scope.querySelectorAll('.progress-fill[style]');
            fills.forEach(function (fill) {
                if (fill.dataset.animated) return;
                var w = fill.style.width;
                fill.dataset.animated = 'true';
                if (reduceMotion) return;
                fill.style.width = '0%';
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () { fill.style.width = w; });
                });
            });
        }
        // Attendance tab is open by default on load.
        animateFills(document.getElementById('module-attendance'));

        /* -----------------------------------------------------------
           8. Office-hours status (evaluated in India Standard Time,
              since the school itself is what keeps these hours —
              not the visitor's local clock).
        ----------------------------------------------------------- */
        var openStatusText = document.getElementById('openStatusText');
        if (openStatusText) {
            var nowUtc = new Date();
            var istMs = nowUtc.getTime() + (nowUtc.getTimezoneOffset() * 60000) + (5.5 * 3600000);
            var ist = new Date(istMs);
            var day = ist.getDay(); // 0 = Sun
            var hour = ist.getHours() + ist.getMinutes() / 60;
            var isOpen = false;
            if (day >= 1 && day <= 5) isOpen = hour >= 7 && hour < 17;
            else if (day === 6) isOpen = hour >= 7 && hour < 12;
            openStatusText.textContent = isOpen ? 'Open now · closes ' + (day === 6 ? '12:00 PM' : '5:00 PM') : 'Closed now';
            openStatusText.parentElement.style.color = isOpen ? '' : '';
        }

        /* -----------------------------------------------------------
           9. Footer year
        ----------------------------------------------------------- */
        var footerYear = document.getElementById('footerYear');
        if (footerYear) footerYear.textContent = String(new Date().getFullYear());
    });
})();
