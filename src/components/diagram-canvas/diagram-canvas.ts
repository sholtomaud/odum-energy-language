import { BaseComponent } from '../../core/base-component';
import html from './diagram-canvas.html?raw';
import css from './diagram-canvas.css?raw';

export class DiagramCanvas extends BaseComponent {
  static readonly tagName = 'diagram-canvas';
  constructor() {
    super(html, css);
  }

  protected init(): void {
    // Component initialization logic can go here
  }
}

if (!customElements.get(DiagramCanvas.tagName)) {
  customElements.define(DiagramCanvas.tagName, DiagramCanvas);
}
