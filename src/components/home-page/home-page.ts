import { BaseComponent } from '../../core/base-component';
import html from './home.html?raw';
import css from './home.css?raw';

// Import the components used by this page to ensure they are bundled.
import '../diagram-canvas/diagram-canvas';
import '../symbol-library/symbol-library';

export class HomeComponent extends BaseComponent {
  static readonly tagName = 'home-page';

  constructor() {
    super(html, css);
  }

  protected init(): void {
    console.log('Home page component initialized.');
  }
}

if (!customElements.get(HomeComponent.tagName)) {
  customElements.define(HomeComponent.tagName, HomeComponent);
}
