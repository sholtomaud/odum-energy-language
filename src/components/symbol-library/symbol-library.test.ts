import { describe, it, expect, beforeEach } from 'vitest';
import { SymbolLibrary } from './symbol-library';

// Register the custom element
if (!customElements.get('symbol-library')) {
  customElements.define('symbol-library', SymbolLibrary);
}

describe('SymbolLibrary', () => {
  let component: SymbolLibrary;

  beforeEach(() => {
    document.body.innerHTML = '<symbol-library></symbol-library>';
    component = document.querySelector('symbol-library') as SymbolLibrary;
  });

  it('should render the library container', () => {
    const container = component.shadowRoot?.querySelector('.library-container');
    expect(container).not.toBeNull();
  });

  it('should render at least one symbol item', () => {
    const symbolItem = component.shadowRoot?.querySelector('.symbol-item');
    expect(symbolItem).not.toBeNull();
    expect(symbolItem?.getAttribute('draggable')).toBe('true');
  });
});
