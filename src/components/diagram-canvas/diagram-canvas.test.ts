import { describe, it, expect, beforeEach } from 'vitest';
import { DiagramCanvas } from './diagram-canvas';

// Register the custom element
if (!customElements.get('diagram-canvas')) {
  customElements.define('diagram-canvas', DiagramCanvas);
}

describe('DiagramCanvas', () => {
  let component: DiagramCanvas;

  beforeEach(() => {
    document.body.innerHTML = '<diagram-canvas></diagram-canvas>';
    component = document.querySelector('diagram-canvas') as DiagramCanvas;
  });

  it('should render the canvas container', () => {
    const container = component.shadowRoot?.querySelector('.canvas-container');
    expect(container).not.toBeNull();
  });

  it('should render the canvas element', () => {
    const canvas = component.shadowRoot?.querySelector('#canvas');
    expect(canvas).not.toBeNull();
  });
});
