import { Demo } from '../types/demo';

export const ProductService = {
    getProducts() {
        return fetch('/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                return res.json();
            })
            .then((d) => {
                return d.data as Demo.Product[];
            });
    }
};
