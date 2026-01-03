document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.logos_track');
    if (track) {
        // only duplicate once (HTML may already contain duplicates)
        if (!track.dataset.duplicated) {
            track.innerHTML += track.innerHTML;
            track.dataset.duplicated = 'true';
        }
        // start scrolling animation on the track
        track.classList.add('scrolling');
    }

    // FAQ Accordion: closed by default, only one open at a time, smooth transitions and keyboard support
    const faqCards = document.querySelectorAll('.faq_card');
    faqCards.forEach(card => {
        const questionCont = card.querySelector('.question_cont');
        const answer = card.querySelector('.answer');

        // Ensure closed by default (handles cases where HTML had classes pre-applied)
        if (questionCont) questionCont.classList.remove('question_open');
        if (answer) answer.setAttribute('aria-hidden', 'true');

        // Make card focusable for keyboard interaction
        card.setAttribute('tabindex', '0');

        const toggleCard = () => {
            // close other cards
            faqCards.forEach(item => {
                if (item !== card) {
                    item.classList.remove('active');
                    const q = item.querySelector('.question_cont');
                    const a = item.querySelector('.answer');
                    if (q) q.classList.remove('question_open');
                    if (a) a.setAttribute('aria-hidden', 'true');
                }
            });

            // toggle this card
            const isActive = card.classList.toggle('active');
            if (questionCont) questionCont.classList.toggle('question_open', isActive);
            if (answer) answer.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        };

        card.addEventListener('click', toggleCard);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard();
            }
        });
    });

    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.close_menu');
    const mobileNav = document.querySelector('.mobile_nav_links_wrapper');

    if (menu && closeMenu && mobileNav) {
        // toggle open/close
        menu.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });

        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });

        // close when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.classList.contains('open')) return;
            if (!mobileNav.contains(e.target) && !menu.contains(e.target)) {
                mobileNav.classList.remove('open');
            }
        });

        // close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') mobileNav.classList.remove('open');
        });
    }
});