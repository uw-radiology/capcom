import { getImage } from './image-service.js';
import {html, render} from 'lit-html';

// A lit-html template uses the `html` template tag:
let body = () => html`
  <div><img src=${getImage()}></div>
`;

render(body(), document.getElementById('app'));