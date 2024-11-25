import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Только для теста лоадера
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
