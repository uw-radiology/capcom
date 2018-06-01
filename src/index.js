import { getStudies } from './image-service.js';
import {html, render} from 'lit-html';

// A lit-html template uses the `html` template tag:
let body = () => html`
  <div>${getStudies()}</div>
`;

render(body(), document.getElementById('app'));