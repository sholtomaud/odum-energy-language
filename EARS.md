# EARS Requirements Specification

This document outlines the requirements for the Odum Energy Systems Language Diagram Tool using the Easy Approach to Requirements Syntax (EARS).

## Universal Requirements

*   **U-1:** The system shall provide a canvas for creating Odum Energy Systems diagrams.
*   **U-2:** The system shall provide a library of standard Odum Energy Systems symbols in SVG format.
*   **U-3:** The system shall require Node.js version 23 for its development and build environment.


## Event-Driven Requirements

*   **E-1:** When a user drags a symbol from the library onto the canvas, the system shall create a copy of that symbol on the canvas at the drop location.
*   **E-2:** When a user clicks and drags a symbol on the canvas, the system shall move the symbol to follow the user's cursor.
*   **E-3:** When a user selects a symbol on the canvas, the system shall display controls for manipulating the symbol (e.g., resizing, rotating).
*   **E-4:** When a user clicks a "Save" button, the system shall serialize the current diagram state and save it.
*   **E-5:** When a user selects a diagram to load, the system shall parse the diagram file and render it on the canvas.

## Optional Feature Requirements

*   **O-1:** Where the user has enabled grid-snapping, the system shall align symbols to the nearest grid line when they are moved or placed.
*   **O-2:** Where the user initiates a connection action, the system shall allow the user to draw lines between symbols.

## State-Driven Requirements

*   **S-1:** While a user is dragging a symbol, the system shall show a visual preview of the symbol's new position.
*   **S-2:** While a diagram is unsaved, the system shall display an indicator that there are unsaved changes.
