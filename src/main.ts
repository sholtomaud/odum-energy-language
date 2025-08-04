// Base imports
import './core/base-component';
import './styles/global.css';

// Statically import the components we need for the main view
import './components/nav-page/nav-page';
import './components/home-page/home-page';

// The app is now hardcoded to show the home page,
// removing the router for diagnostic purposes.
console.log('Application initialized for diagnostic build.');
