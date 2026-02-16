import { useMemo } from 'react';
import { deviceDetector } from '../../../utils/deviceDetector';
import { generateParticles } from '../utils/particles';

export const useParticles = () => {
    const particles = useMemo(() => {
        const count = deviceDetector.getRecommendedParticleCount();
        return generateParticles(count);
    }, []);

    return particles;
};
