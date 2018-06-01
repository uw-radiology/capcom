import { getImage } from './image-service.js';
import { drawGrid } from './draw-clickable-grid.js';
import {html, render} from 'lit-html/lib/lit-extended.js';

// A lit-html template uses the `html` template tag:
let body = () => html`
  <div>${getImage()}</div>
  <button on-click= ${(e) =>  drawGrid() } >test</button>

`;

render(body(), document.getElementById('app'));
