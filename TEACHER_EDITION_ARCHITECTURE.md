# Chem AI Crush — Teacher Edition 1.0 (Pilot)
Updated: 2026-11-17

## Goal and current scope
A bilingual (Kazakh/Russian) teacher workspace linked from the existing Chem AI Crush static website, without deleting the earlier UNT/periodic-table/laboratory sections.

Entry point: `teacher.html` → `teacher.js` → Supabase Auth/Postgres.
Existing lab: `chem_ai_crush_3d_lab.html` (Three.js via pinned external CDN).

### Features implemented
- Supabase email/password registration + email confirmation and password recovery link.
- Explicit self-declaration activation of teacher workspace via `activate_teacher_workspace()`. **This does not verify employment or school affiliation.**
- Teacher's separate resource store; 7–8 grade, Kazakh/Russian sample packs (8 topics × 2 languages) with editable 5E short-term plans or worksheets.
- Material download in **Microsoft Word-compatible .doc HTML**, not native .docx; plain text/HTML/JSON import.
- Teacher classes with join codes and pending student approval.
- Publish an open-text assignment; approved classroom members can submit once; teacher grades 0–10 and adds feedback.
- Existing 3D chemistry lab linked/embedded, requires internet for Three.js dependencies.
- Bilingual interface for Teacher Edition (legacy sections of original Chem AI Crush are not completely bilingual).

### Active Supabase project
Project `skmdphfeyrqdmjlzyspe` (Chem AI crush), currently in `ap-southeast-1` (Singapore).
**Do not onboard real student identities or personal data while the data-residency and parental consent situation remains unresolved.** Use fictional pilot accounts only. Public launch is blocked by legal/privacy review and Kazakhstan-compatible data hosting.

### Existing database tables retained
`profiles`, `classes`, `class_students`, `test_attempts`, `student_question_history`, `chemistry_question_bank`.

### New database tables
- `teacher_resources`: id, teacher_id, grade (7/8), language, kind, title, topic, objectives, body, timestamps.
- `teacher_assignments`: id, teacher_id, class_id, title, instructions, due_at, status, timestamps.
- `assignment_submissions`: id, assignment_id, student_id, answer_text, score, feedback, timestamps; unique assignment/student.

Every table has RLS enabled. A teacher can edit only their own resources and assignments. Learners can read published assignments only if their class membership has `approved` status. A learner can insert only their own first submission; only the owner-teacher can update a grade. `profiles.role` is not directly writable by the client. Teacher activation checks confirmed email and no existing student class memberships server-side.

### Security actions already applied
- Removed anonymous EXECUTE on privileged classroom RPCs and trigger functions.
- Limited profile updates to `full_name` and `preferred_language`, not `role`.
- Restricted the new teacher RPC to authenticated accounts; it deliberately supports *self-declared* teacher workspaces only.
- RLS policies created on all new tables and database-side checks enforced for submissions.

### Known issues and production blockers
1. Current region is outside Kazakhstan; transfer/replace identity-storage infrastructure and complete Kazakhstan legal/privacy assessment before enrolling real users. The Kazakhstan personal-data law's Art. 12 requires territorial storage.
2. Supabase security advisor still flags five signed-in SECURITY DEFINER classroom/activation RPCs and leaked-password protection disabled. Audit each function's privileged behavior; consider private schema where appropriate. The new activation RPC may add an additional warning.
3. No production-grade teacher/employment verification or school-level administrative roles yet.
4. Registration, classroom workflows and graded submissions have static code/schema checks; real-browser end-to-end tests with test user accounts still required.
5. The repository remains a static HTML app using CDNs. For nationwide rollout: backend/API, logging, rate-limiting, backups, error reporting, monitoring, tests, accessibility and localization coverage.
6. 5E samples are illustrative; teachers must map them to the active Kazakhstan curriculum and verify official objective codes.
7. Original three.js lab uses online dependencies; offline support is not yet complete.
8. Not every KSP/task file format is supported: native DOCX/PDF import, storage uploads and rich slide editor remain future work.

### Rollout checklist
- [x] Preserve original Chem AI Crush
- [x] Add and link teacher workspace
- [x] Add bilingual sample lessons and Word-compatible export
- [x] Introduce class-based assignment/submission/grade schema
- [x] Apply RLS and restrict unauthenticated RPC access
- [ ] Real test-account E2E verification (signup, classes, approve, assignments, scoring)
- [ ] Residency/privacy review and Kazakhstan-compliant primary storage
- [ ] Harden remaining privileged RPCs and password policies
- [ ] Native DOCX exports, broad content coverage, QA of 3D labs
- [ ] School onboarding, teacher verification, stress tests, national public launch

**Release classification:** functional code and schema at *pilot* level, NOT national production release.
