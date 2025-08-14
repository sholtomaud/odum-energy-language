import { BaseComponent } from '../../core/base-component';
import html from './symbol-library.html?raw';
import css from './symbol-library.css?raw';

export class SymbolLibrary extends BaseComponent {
  static readonly tagName = 'symbol-library';
  constructor() {
    super(html, css);
  }

  protected init(): void {
    this.addDragAndDropListeners();
  }

  private addDragAndDropListeners(): void {
    const symbols = this.shadowRoot?.querySelectorAll('.symbol-item');
    symbols?.forEach((symbol) => {
      (symbol as HTMLElement).addEventListener(
        'dragstart',
        (event: DragEvent) => {
          const symbolType = (event.target as HTMLElement).dataset.symbolType;
          if (event.dataTransfer && symbolType) {
            event.dataTransfer.setData('text/plain', symbolType);
            event.dataTransfer.effectAllowed = 'copy';
          }
        }
      );
    });
  }
}

if (!customElements.get(SymbolLibrary.tagName)) {
  customElements.define(SymbolLibrary.tagName, SymbolLibrary);
}
