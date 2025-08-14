# Gemini Agent Workflow for New Features

Welcome, Gemini Agent! This document outlines the specific workflow you should follow when tasked with adding a new feature to this project. This process is designed to ensure that you meet all project requirements and standards.

## The Feature Development Workflow

Follow these steps sequentially to ensure a successful contribution.

### Step 1: Understand the Feature Request

*   **Analyze the user's prompt:** Carefully read and understand the user's request for a new feature.
*   **Ask for clarification if needed:** If the request is ambiguous, use the `request_user_input` tool to ask clarifying questions before proceeding.

### Step 2: Consult `EARS.md` for Requirements

*   **Read `EARS.md`:** Open and read the `EARS.md` file.
*   **Match request to requirements:** Determine if the requested feature corresponds to a requirement listed in `EARS.md`.
    *   If it matches a requirement (e.g., `E-1`, `O-2`), your implementation must satisfy that requirement.
    *   If the feature is not listed, you may need to propose a new requirement. For now, proceed by creating a plan based on the user's request.

### Step 3: Review `AGENTS.md` for Project-Wide Rules

*   **Read `AGENTS.md`:** Before writing any code, re-read `AGENTS.md` to refresh your understanding of the project's non-negotiable rules.
*   **Pay close attention to:**
    *   **Technology Constraints (Section 2.1):** No third-party UI frameworks or libraries.
    *   **Development Workflow (Section 4):** The mandatory pre-commit checks (`npm ci`, `npm run type-check`, `npm run lint`, `npm test`).
    *   **Git Workflow (Section 4):** Branch naming conventions and the PR process.

### Step 4: Create a Detailed Plan

*   **Use `set_plan`:** Formulate a step-by-step plan for implementing the feature.
*   **Your plan must include steps for:**
    1.  Creating or modifying the necessary component files (`.ts`, `.html`, `.css`).
    2.  Writing or updating unit tests (`.test.ts`).
    3.  Running the mandatory pre-commit checks to verify your work.
    4.  Submitting your work via a pull request.

### Step 5: Implement the Feature

*   **Follow your plan:** Execute the steps you've outlined.
*   **Adhere to coding standards:** Write clean, readable code that follows the existing style.
*   **Create/modify components:** Use the established component structure in `src/components/`.
*   **Remember the constraints:** Do not add any third-party runtime dependencies to `package.json`.

### Step 6: Test Your Implementation

*   **Write unit tests:** Create new tests in the relevant `.test.ts` file to cover the new feature.
*   **Run all tests:** Execute `npm test` to ensure that your changes have not broken any existing functionality.

### Step 7: Final Verification

*   **Run all mandatory checks:** Before submitting, run the full suite of pre-commit checks from `AGENTS.md`:
    1.  `npm ci`
    2.  `npm run type-check`
    3.  `npm run lint`
    4.  `npm test`
*   **Ensure all checks pass.** Do not proceed if any of these fail.

### Step 8: Submit Your Work

*   **Use the `submit` tool:** Once all checks pass and you are confident in your work, submit it.
*   **Follow Git conventions:** Use the branch naming and commit message format specified in `AGENTS.md`.

By following this workflow, you will ensure that your contributions are consistent, high-quality, and aligned with the project's goals.
