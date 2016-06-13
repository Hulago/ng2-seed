System.config({
  map: {
    'app': 'dist/app/',
    'app/+main': 'dist/app/+main',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  },
  packages: {
    'app': { main: 'index', defaultExtension: 'js' },
    'app/+main': { main: 'index', defaultExtension: 'js' },
    'rxjs': { main: 'index.js' },
    '@angular/core': { main: 'index.js' },
    '@angular/common': { main: 'index.js' },
    '@angular/compiler': { main: 'index.js' },
    '@angular/router': { main: 'index.js' },
    '@angular/platform-browser': { main: 'index.js' },
    '@angular/platform-browser-dynamic': { main: 'index.js' },
    '@angular/http': { main: 'index.js' }
  }
});