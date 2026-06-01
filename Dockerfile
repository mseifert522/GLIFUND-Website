# Static SPA built on host (pnpm exec vite build) -> served by hardened unprivileged nginx
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/public /usr/share/nginx/html
