import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const primary = document.querySelector('#primary');
main.innerHTML = '';

const startSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  primary.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  startSpinner();
}

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}