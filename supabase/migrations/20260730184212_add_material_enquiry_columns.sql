/*
# Add material and enquiry_type columns to consultation_requests

1. Modified Tables
- `consultation_requests`
  - `material` (text, nullable) — the material category the visitor is interested in
  - `enquiry_type` (text, nullable) — whether the visitor wants to buy, sell, or both
2. Security
- No RLS policy changes. Existing anon INSERT policy already allows these new optional columns.
3. Notes
- Both new columns are nullable so existing rows and future inserts that omit them remain valid.
- No data loss — this is a purely additive change.
*/

ALTER TABLE consultation_requests
  ADD COLUMN IF NOT EXISTS material text,
  ADD COLUMN IF NOT EXISTS enquiry_type text;
