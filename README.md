OpenCart Playwright Automation Framework

Robust end-to-end test automation for an OpenCart e-commerce site using Playwright + TypeScript. The framework is structured with Page Object Model (POM), data-driven tests, reusable utilities, Allure reports, and is CI-ready (GitHub Actions). Repo includes allure-results/, allure-report/, tests/, testdata/, utils/, .github/workflows/, and setup scripts like env_setup.bat. 

Features:
========

- Playwright + TypeScript test runner and typings for reliable, fast E2E tests. (Repo language stats show TypeScript as primary.) 
- Page Object Model (POM) organization for maintainability and reuse.
- Data-driven testing via testdata/.
- Utilities in utils/ for common actions, assertions, and helpers.
- Allure reporting: allure-results/ and generated allure-report/ included for shareable insights.
- CI-ready: .github/workflows/ contains pipeline definitions for automated runs.
  
Project Structure:
================
OpenCartFramework/
├─ .github/
│  └─ workflows/           # GitHub Actions CI pipelines
├─ allure-results/         # Raw results produced after test runs
├─ allure-report/          # Generated Allure HTML reports (optional to commit)
├─ pages/                  # (If used) Page Object classes
├─ testdata/               # Test fixtures / data files
├─ tests/                  # Spec files grouped by feature/area
├─ utils/                  # Shared helpers and utilities
├─ env_setup.bat           # Optional local setup script
├─ playwright.config.ts    # Playwright runner configuration
├─ test.config.ts          # Project/test-level configuration
├─ package.json            # Scripts and dependencies
└─ package-lock.json
