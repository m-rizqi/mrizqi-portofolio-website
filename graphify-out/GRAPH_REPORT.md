# Graph Report - .  (2026-07-29)

## Corpus Check
- Corpus is ~23,465 words - fits in a single context window. You may not need a graph.

## Summary
- 123 nodes · 94 edges · 67 communities (5 shown, 62 thin omitted)
- Extraction: 74% EXTRACTED · 15% INFERRED · 11% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.79)
- Token cost: 0 input · 238,045 output

## Community Hubs (Navigation)
- Graphify Skill Reference Docs
- Pra-Development Planning Docs
- Development & Pasca-Development Ops Docs
- Root Instructions & Design Folders
- Mobile Architecture & AI Guardrails
- Clean Code & Self-Documentation
- Defensive Programming & Input Validation
- No Dead Code & Anti Over-Implementation
- Structured Error Handling
- Design System Compliance
- Mocking & Graceful Degradation
- Incremental Development
- Build Merge & Shrink Guard
- Graph Diff & Health Check
- DRY Principle
- General Programming Ruleset
- SOLID Principles
- Atomic Commits
- Conventional Commits
- Git Workflow Ruleset
- Secret Protection
- Environment Security
- RESTful Conventions
- Backend Standards Ruleset
- Accessibility
- Component Modularity
- Frontend Standards Ruleset
- State Management
- Local Data Security
- Mobile Performance Optimization
- Mobile Standards Ruleset
- UI Responsiveness
- Clean Test Suites
- Testing Standards Ruleset
- Test-Driven Mindset
- Error Handling Ruleset
- Structured Logging
- Ask When Ambiguous
- No Hallucinated Packages
- AI Behavior Guardrails Ruleset
- JSDoc / Docstrings
- Documentation Standards Ruleset
- Update Docs on Changes
- Watch Mode Debounce
- Confidence Rubric Spec
- Hyperedges Spec
- Node ID Format Spec
- Semantic Similarity Spec
- Cross-Repo Merge Graphs
- Monorepo Flow
- DFS Query Mode
- Explain Command
- Path Command
- Query Save-Result
- Query Vocab Expansion
- Transcribe Domain Hint
- Community Detection
- God Nodes Analysis
- Honesty Rules
- Semantic Extraction Cache
- TDD Clean Red Phase
- TDD Green Phase
- TDD Multiple-Test Anti-Pattern
- TDD Premature Implementation
- TDD Red Phase
- TDD Refactor Phase
- TDD Red-Green-Refactor Cycle

## God Nodes (most connected - your core abstractions)
1. `graphify Knowledge Graph Skill` - 15 edges
2. `System Architecture & Technical Specifications` - 14 edges
3. `Product Requirements Document (PRD)` - 11 edges
4. `UI/UX Guidelines & Design System` - 10 edges
5. `API Contract & Endpoint Specifications` - 8 edges
6. `Pra-Development Phase Folder Guide` - 8 edges
7. `Project Handover Document & Operational Guide` - 7 edges
8. `Prompt Snippets & Master Commands` - 6 edges
9. `Security Checklist & Vulnerability Audit` - 6 edges
10. `User Flow & Navigation Map` - 6 edges

## Surprising Connections (you probably didn't know these)
- `UI/UX Guidelines & Design System` --references--> `Root CLAUDE.md (Graphify Project Instructions)`  [EXTRACTED]
  docs/pra-development/8-UI-UX-GUIDELINES.md → CLAUDE.md
- `Design References & Moodboards Folder Guide` --references--> `UI/UX Guidelines & Design System`  [AMBIGUOUS]
  docs/design/references/README.md → docs/pra-development/8-UI-UX-GUIDELINES.md
- `Design Screens Folder Guide` --references--> `UI/UX Guidelines & Design System`  [AMBIGUOUS]
  docs/design/screens/README.md → docs/pra-development/8-UI-UX-GUIDELINES.md
- `Detailed Development Task Checklist` --references--> `Product Requirements Document (PRD)`  [AMBIGUOUS]
  docs/development/1-TASK-CHECKLIST.md → docs/pra-development/3-PRD.md
- `Current State & Session Memory` --semantically_similar_to--> `Project Handover Document & Operational Guide`  [INFERRED] [semantically similar]
  docs/development/2-CURRENT-STATE.md → docs/pasca-development/4-HANDOVER-DOC-TEMPLATE.md

## Hyperedges (group relationships)
- **Error Handling & Logging Principles** — _claude_rules_03_backend_standards_structured_error_handling, _claude_rules_07_error_handling_never_swallow_errors, _claude_rules_07_error_handling_graceful_degradation, _claude_rules_07_error_handling_structured_logging [INFERRED 0.85]
- **Red-Green-Refactor TDD Cycle** — _claude_tdd_guard_data_instructions_red_phase, _claude_tdd_guard_data_instructions_green_phase, _claude_tdd_guard_data_instructions_refactor_phase [EXTRACTED 1.00]
- **graphify Skill Reference Documentation Set** — _claude_skills_graphify_references_add_watch_add_command, _claude_skills_graphify_references_exports_neo4j_export, _claude_skills_graphify_references_extraction_spec_subagent_prompt, _claude_skills_graphify_references_github_and_merge_clone, _claude_skills_graphify_references_hooks_post_commit_hook, _claude_skills_graphify_references_query_bfs, _claude_skills_graphify_references_transcribe_whisper, _claude_skills_graphify_references_update_incremental_update [EXTRACTED 1.00]
- **Pra-Development 8-Document Planning Sequence** — docs_pra_development_1_bmc_optional, docs_pra_development_2_brd_optional, docs_pra_development_3_prd, docs_pra_development_4_architecture, docs_pra_development_5_erd, docs_pra_development_6_api_contract, docs_pra_development_7_user_flow, docs_pra_development_8_ui_ux_guidelines [EXTRACTED 1.00]
- **Pasca-Development Release Pipeline (Security -> Deploy -> QA -> Handover)** — docs_pasca_development_1_security_checklist, docs_pasca_development_2_deployment_guide, docs_pasca_development_3_testing_qa, docs_pasca_development_4_handover_doc_template [EXTRACTED 1.00]
- **Vibecoding Three-Phase Lifecycle (Pra-Development / Development / Pasca-Development)** — docs_pra_development_readme, docs_development_readme, docs_pasca_development_readme [INFERRED 0.85]

## Communities (67 total, 62 thin omitted)

### Community 0 - "Graphify Skill Reference Docs"
Cohesion: 0.12
Nodes (17): Graphify Slash Command Trigger (.claude scope), /graphify add URL Ingestion, --watch Folder Watcher, Token Reduction Benchmark, FalkorDB Export, MCP stdio Server, Neo4j Export, Extraction Subagent Prompt (+9 more)

### Community 1 - "Pra-Development Planning Docs"
Cohesion: 0.30
Nodes (14): Business Model Canvas (BMC), Business Requirements Document (BRD), Product Requirements Document (PRD), Anti-Hallucination Clarify-First Principle, System Architecture & Technical Specifications, BLoC / State Management Pattern, Clean Architecture Pattern, Feature-First Directory Structure (+6 more)

### Community 2 - "Development & Pasca-Development Ops Docs"
Cohesion: 0.42
Nodes (9): Detailed Development Task Checklist, Current State & Session Memory, Technical Debt Log, Development Phase Tracking & Memory Folder Guide, Security Checklist & Vulnerability Audit, Deployment Guide & Release Instructions, Testing, QA & UAT Scenarios, Project Handover Document & Operational Guide (+1 more)

### Community 3 - "Root Instructions & Design Folders"
Cohesion: 0.29
Nodes (8): Root CLAUDE.md (Graphify Project Instructions), Graphify Knowledge Graph Tool, Design References & Moodboards Folder Guide, Design Screens Folder Guide, Prompt Snippets & Master Commands, Ponytail Mode (Rigorous Code Auditor persona), UI/UX Guidelines & Design System, 8pt Grid Spacing System

### Community 4 - "Mobile Architecture & AI Guardrails"
Cohesion: 0.50
Nodes (4): Clean Architecture / Feature-First, Read Before Writing, Product Requirements Doc (docs/pre-development/3-PRD.md), Architecture Spec (docs/pre-development/4-ARCHITECTURE.md)

## Ambiguous Edges - Review These
- `Design References & Moodboards Folder Guide` → `UI/UX Guidelines & Design System`  [AMBIGUOUS]
  docs/design/references/README.md · relation: references
- `Design Screens Folder Guide` → `UI/UX Guidelines & Design System`  [AMBIGUOUS]
  docs/design/screens/README.md · relation: references
- `Detailed Development Task Checklist` → `Product Requirements Document (PRD)`  [AMBIGUOUS]
  docs/development/1-TASK-CHECKLIST.md · relation: references
- `Prompt Snippets & Master Commands` → `UI/UX Guidelines & Design System`  [AMBIGUOUS]
  docs/development/4-PROMPT-SNIPPETS.md · relation: references
- `Security Checklist & Vulnerability Audit` → `System Architecture & Technical Specifications`  [AMBIGUOUS]
  docs/pasca-development/1-SECURITY-CHECKLIST.md · relation: references
- `Security Checklist & Vulnerability Audit` → `API Contract & Endpoint Specifications`  [AMBIGUOUS]
  docs/pasca-development/1-SECURITY-CHECKLIST.md · relation: references
- `Deployment Guide & Release Instructions` → `System Architecture & Technical Specifications`  [AMBIGUOUS]
  docs/pasca-development/2-DEPLOYMENT-GUIDE.md · relation: references
- `Testing, QA & UAT Scenarios` → `Product Requirements Document (PRD)`  [AMBIGUOUS]
  docs/pasca-development/3-TESTING-QA.md · relation: references
- `Project Handover Document & Operational Guide` → `System Architecture & Technical Specifications`  [AMBIGUOUS]
  docs/pasca-development/4-HANDOVER-DOC-TEMPLATE.md · relation: references
- `System Architecture & Technical Specifications` → `Entity Relationship Diagram (ERD) Document`  [AMBIGUOUS]
  docs/pra-development/5-ERD.md · relation: shares_data_with

## Knowledge Gaps
- **40 isolated node(s):** `Graphify Slash Command Trigger (.claude scope)`, `General Programming Rules`, `Git Workflow & Commit Rules`, `Backend & API Development Rules`, `Frontend & UI Development Rules` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **62 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Design References & Moodboards Folder Guide` and `UI/UX Guidelines & Design System`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Design Screens Folder Guide` and `UI/UX Guidelines & Design System`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Detailed Development Task Checklist` and `Product Requirements Document (PRD)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Prompt Snippets & Master Commands` and `UI/UX Guidelines & Design System`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Security Checklist & Vulnerability Audit` and `System Architecture & Technical Specifications`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Security Checklist & Vulnerability Audit` and `API Contract & Endpoint Specifications`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Deployment Guide & Release Instructions` and `System Architecture & Technical Specifications`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._