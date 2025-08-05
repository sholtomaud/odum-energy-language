import { BaseComponent } from '../../core/base-component';
import html from './symbol-library.html?raw';
import css from './symbol-library.css?raw';

export class SymbolLibrary extends BaseComponent {
  static readonly tagName = 'symbol-library';
  constructor() {
    super(html, css);
  }

  protected init(): void {
    // Component initialization logic can go here
  }
}

if (!customElements.get(SymbolLibrary.tagName)) {
  customElements.define(SymbolLibrary.tagName, SymbolLibrary);
}
