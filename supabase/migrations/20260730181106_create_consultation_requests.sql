/*
# Create consultation_requests table (single-tenant, no auth)

1. New Tables
- `consultation_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `organization` (text, nullable) — optional company/org name
  - `project_type` (text, nullable) — optional: build, managed service, or both
  - `message` (text, not null) — project overview and technical requirements
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `consultation_requests`.
- Allow anon + authenticated INSERT only (public visitors submit the contact form).
- No SELECT/UPDATE/DELETE for anon — submissions are private to the project owner via the dashboard.
3. Notes
- This is a no-auth public contact form. The anon-key frontend inserts rows;
  reads are intentionally blocked so submitted inquiries stay private.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  project_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests"
ON consultation_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
