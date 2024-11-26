
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/vigneswar-portfolio"
  }
],
  assets: new Map([
['index.csr.html', {size: 533, hash: '8afbf0a7e6c022e7d63d18b0b79323fcfecdfb88b0119c30ef7a92bfec271678', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1046, hash: '6c7639964b7124d4951368182d980f653b5a934830dc26e19d03092d1df7c5a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20870, hash: '6ce826076b8d885d82154eb0edf5c181d8ec3641dc96ae7983ab958209425130', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
