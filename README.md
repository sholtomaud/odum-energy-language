# Odum Energy Systems Language Diagram Tool

This project is a web-based application designed to provide a platform for creating diagrams using the Howard Thomas Odum's Energy Systems Language. It provides a drag-and-drop interface for adding and manipulating standard Odum symbols on a canvas, similar to applications like Miro.

## Features

*   **Drag-and-Drop Interface:** Easily drag symbols from a library onto the canvas.
*   **SVG Symbols:** A library of standard H.T. Odum Energy Systems Language symbols in SVG format.
*   **Diagram Canvas:** A dedicated area to build and organize your energy systems diagrams.
*   **Save/Load:** (Future Feature) Ability to save and load your diagrams.
*   **Export:** (Future Feature) Ability to export diagrams to various formats (e.g., SVG, PNG, PDF).

## Getting Started

This project is built with TypeScript and Vite. To get started with development, follow these steps:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (or a compatible package manager like pnpm or yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sholtomaud/boba.git
    cd boba
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev
```

This will start a Vite development server, and you can view the application by navigating to `http://localhost:5173` (or the port specified in the console output). The server supports Hot Module Replacement (HMR) for a fast development experience.

To expose the server to your local network, use:

```bash
npm run dev:host
```

## Running Tests

This project uses Vitest for unit testing. To run the test suite, use the following command:

```bash
npm test
```

This will execute all test files (`.test.ts`) in the `src/` and `test/` directories.
