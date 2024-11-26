import { Demo } from '../types/demo';

export const FeatureService = {
    getFeatures() {
        return fetch('/data/features.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                return res.json();
            })
            .then((d) => {
                return d.data as Demo.Feature[];
            });
    }
};
