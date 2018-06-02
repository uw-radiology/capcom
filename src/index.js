import { getImage } from './image-service.js';
import { drawGrid } from './draw-clickable-grid.js';
import {html, render} from 'lit-html/lib/lit-extended.js';

// A lit-html template uses the `html` template tag:
let body = () => html`
  <form id="form">
  	Username:<br>
  	<input type='text' name='username'><br>
  	Password:<br>
  	<input type='password' name='password'><br>
  </form>
  <button on-click= ${(e) =>  drawGrid() } >Login</button>

`;

render(body(), document.getElementById('app'));
