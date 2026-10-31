# CHEM SCAN MVP

This module is being developed on the `chem-scan-mvp` branch.

## First release scope
- Generate A4 answer sheets for one student or a whole class.
- Support multiple-choice, calculation, reaction-equation, and open-response tasks.
- Export print-ready PDFs through the browser print dialog.
- Accept scanned PDF uploads in a later integration step.
- Keep teacher review and correction for uncertain recognition.

## Implementation sequence
1. Answer-sheet generator.
2. PDF upload and page splitting.
3. OMR and teacher review.
4. Confirmed score sync to CHEM ANALYTICS.
5. OCR for handwritten calculations and equations after pilot validation.

## Safety and data handling
- Do not store student scans in a public bucket.
- Enforce teacher/class access with server-side authorization and database row-level security.
- Keep answer keys versioned so historical results do not change when a task is edited.
