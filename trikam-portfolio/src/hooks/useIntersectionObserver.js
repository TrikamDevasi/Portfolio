import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
    const scrollObserverRef = useRef(null);

    useEffect(() => {
        // =============================
        // INTERSECTION OBSERVER (reveal animations)
        // =============================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px',
        };

        scrollObserverRef.current = new IntersectionObserver((entries) => {
            requestAnimationFrame(() => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        scrollObserverRef.current?.unobserve(entry.target);
                    }
                });
            });
        }, observerOptions);

        // Observe elements efficiently
        const revealEls = document.querySelectorAll('.reveal-text, .scale-on-scroll, .zoom-wrapper');
        revealEls.forEach((el) => scrollObserverRef.current?.observe(el));

        // Skill tags with delay
        const skillCats = document.querySelectorAll('.skill-category');
        skillCats.forEach((category) => {
            const tags = category.querySelectorAll('.skill-tag');
            tags.forEach((tag) => {
                tag.classList.add('stagger-item');
                scrollObserverRef.current?.observe(tag);
            });
        });

        // Project/Cert cards with stagger
        const projectCertCards = document.querySelectorAll('.project-card, .cert-card');
        projectCertCards.forEach((card, index) => {
            card.style.setProperty('--delay', `${Math.min(index * 0.08, 0.6)}s`);
            scrollObserverRef.current?.observe(card);
        });

        // Cleanup
        return () => {
            if (scrollObserverRef.current) {
                scrollObserverRef.current.disconnect();
            }
        };
    }, []);
};
