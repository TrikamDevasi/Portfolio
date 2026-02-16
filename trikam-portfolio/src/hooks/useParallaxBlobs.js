import { useEffect } from 'react';
import { rafThrottle } from '../utils/performance';
import { useReducedMotion } from './useReducedMotion';

export const useParallaxBlobs = () => {
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        // =============================
        // PARALLAX BLOBS (Desktop only, reduced motion aware)
        // =============================
        let blobsArray = [];

        const handleMouseMoveBlobs = rafThrottle((e) => {
            if (prefersReducedMotion || window.innerWidth < 768) return;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (e.clientX - centerX) * 0.008;
            const moveY = (e.clientY - centerY) * 0.008;

            blobsArray.forEach((blob, index) => {
                const speed = (index + 1) * 0.3;
                const x = moveX * speed;
                const y = moveY * speed;
                blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
        });

        // Cache blob elements
        if (!prefersReducedMotion && window.innerWidth >= 768) {
            blobsArray = Array.from(document.querySelectorAll('.morphing-blob'));
            if (blobsArray.length > 0) {
                window.addEventListener('mousemove', handleMouseMoveBlobs, { passive: true });
            }
        }

        // Cleanup
        return () => {
            handleMouseMoveBlobs.cancel?.();
            window.removeEventListener('mousemove', handleMouseMoveBlobs);
        };
    }, [prefersReducedMotion]);
};
