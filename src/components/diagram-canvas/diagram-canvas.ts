import { BaseComponent } from '../../core/base-component';
import html from './diagram-canvas.html?raw';
import css from './diagram-canvas.css?raw';

export class DiagramCanvas extends BaseComponent {
  static readonly tagName = 'diagram-canvas';
  constructor() {
    super(html, css);
  }

  protected init(): void {
    this.setupDropZone();
  }

  private setupDropZone(): void {
    const canvas = this.shadowRoot?.querySelector('.canvas') as HTMLElement;
    if (!canvas) return;

    canvas.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'copy';
      }
    });

    canvas.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();
      const symbolType = event.dataTransfer?.getData('text/plain');
      if (symbolType) {
        this.addSymbolToCanvas(symbolType, event.offsetX, event.offsetY);
      }
    });
  }

  private addSymbolToCanvas(symbolType: string, x: number, y: number): void {
    const canvas = this.shadowRoot?.querySelector('.canvas');
    if (!canvas) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    const symbol = document.createElementNS(svgNS, 'svg');
    symbol.setAttribute('width', '50');
    symbol.setAttribute('height', '50');
    symbol.setAttribute('x', String(x - 25));
    symbol.setAttribute('y', String(y - 25));
    symbol.style.position = 'absolute';

    if (symbolType === 'producer') {
      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', '25');
      circle.setAttribute('cy', '25');
      circle.setAttribute('r', '22');
      circle.setAttribute('stroke', 'black');
      circle.setAttribute('stroke-width', '4');
      circle.setAttribute('fill', 'none');
      symbol.appendChild(circle);
    }
    // Add more symbol types here in the future

    canvas.appendChild(symbol);
  }
}

if (!customElements.get(DiagramCanvas.tagName)) {
  customElements.define(DiagramCanvas.tagName, DiagramCanvas);
}
