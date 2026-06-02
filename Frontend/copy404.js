import { copyFileSync } from 'fs';
copyFileSync('dist/index.html', 'dist/404.html');
copyFileSync('../CNAME', 'dist/CNAME'); 