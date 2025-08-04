import html from './nav.html?raw';
import css from './nav.css?raw';
import { BaseComponent } from '@/core/base-component';

export class NavComponent extends BaseComponent {
  static readonly tagName = 'app-nav';

  constructor() {
    super(html, css);
  }

  protected init(): void {
    // Router logic removed for diagnostic build
    console.log('Nav component initialized.');
  }
}

// Registration with correct tag name
if (!customElements.get(NavComponent.tagName)) {
  customElements.define(NavComponent.tagName, NavComponent);
}
