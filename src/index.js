import { getImage } from './image-service.js';
import { drawGrid } from './draw-clickable-grid.js';
import {html, render} from 'lit-html/lib/lit-extended.js';

// A lit-html template uses the `html` template tag:
let body = () => html`
  <h1 style="text-align:center"><i>That Radiology Application You Use A Lot</i></h1>
  <div>
  <div style="border-style:solid;width:50%;margin:2px;padding:2px;float:left">
  <form id="form" >
  	Username:<br>
  	<input type='text' name='username'><br>
  	Password:<br>
  	<input type='password' name='password'><br>
  </form>
  <button on-click= ${(e) =>  drawGrid() } >Login</button>
  </div>
  <div style="overflow:hidden;text-align:center" id="output">
  <br>
  </div>
  </div>

`;

render(body(), document.getElementById('app'));
