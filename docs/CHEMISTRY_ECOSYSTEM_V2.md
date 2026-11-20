# Chemistry Ecosystem V2 — implementation plan

This branch preserves the current public website and prepares a modular chemistry-only learning ecosystem.

## Existing foundation (verified)
- Static `index.html` front end, hosted on GitHub Pages.
- Supabase: profiles, classes, class_students, test_attempts, chemistry_question_bank, teacher_resources, teacher_assignments, assignment_submissions.
- Existing grade 7–8 teacher resource restriction needs expansion before grades 9–11 can use the editor.

## Phase 1 — integrated learning paths
- Five worlds: atomic, reaction, life, logic, discovery.
- A lesson connects concepts, visual explanation, practice, safe simulation and formative assessment.
- Use Supabase `chemistry_learning_paths` for published curriculum and `chemistry_learning_progress` for per-student progress.
- Student progress is protected by ownership-based RLS.
- No fabricated learning statistics or simulated results presented as real.

## Phase 2 — teacher studio
- Reuse existing classes, assignments and resource tables.
- Add curriculum objectives, lesson composition, worksheet and quiz modules.
- Verify teacher ownership and class membership in every authorization path.
- Support Kazakh and Russian; expand grades 7–11.

## Phase 3 — scientific engine
- Verified reaction datasets, accurate stoichiometry and constrained simulations.
- Three linked representations: macroscopic, particulate, symbolic.
- Accessibility, mobile responsiveness and offline-ready learning assets.

## Security and release requirements
- Audit existing SECURITY DEFINER RPC functions and authorization.
- Enable leaked-password protection in Supabase Auth.
- Never expose secret/service-role keys in browser code.
- Test sign-in, class ownership, assignments and RLS before production release.
- Keep `main` and production content unchanged until verified.

## Migration
Supabase production project received additive migration `chemistry_ecosystem_learning_paths_v2`, creating the two new RLS-enabled tables. Existing records were not deleted or modified.
