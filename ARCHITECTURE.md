# Architecture & Folder Structure

This project has been tailored for the **Next.js App Router** full-stack runtime, consolidating what might typically be a monorepo (`apps/web`, `apps/api`, `worker`, `packages/*`) into a cohesive, highly performant single codebase.

## Directory Mapping

Here is how the project translates into our Next.js environment:

### `app/` (The Routing Layer)
Handles all Pages, Layouts, and API Endpoints.
- **`app/(public)/`**: Public-facing website (Landing, About, Pricing, Demo).
- **`app/(auth)/`**: Authentication flows (Login, Forgot Password, OTP).
- **`app/(dashboard)/`**: Protected application shell (Members, Savings, Loans, Treasury, Accounting).
- **`app/api/`**: Backend endpoints (Webhooks, internal server-to-server endpoints).

### `components/` (The Presentation Layer)
Reusable React components, decoupled from business logic.
- **`components/ui/`**: Core Design system components.
- **`components/features/`**: Domain-specific UI (e.g., `members/`, `payments/`, `accounting/`).

### `features/` (The Application Layer)
Domain-driven features that stitch together UI, state, and server actions.
- Modules: `auth/`, `tenant/`, `member-management/`, `finance/`, etc.

### `server/` (The Backend Logic)
Replaces the `apps/api` and `apps/worker` workspaces.
- **`server/actions/`**: Next.js Server Actions for UI data mutations.
- **`server/queries/`**: Data fetching logic.
- **`server/jobs/`**: Background tasks and event processors.
- **`server/repositories/`**: Database interactions.

### `lib/` (The Shared Utilities)
Replaces the `packages/utils`, `packages/validations`, and `packages/security` workspaces.
- Includes `auth/`, `api/`, `formatters/`, `validations/`, and `security/`.

### `types/`
Replaces `packages/types`. Shared TypeScript definitions.

### Supporting Folders
- **`database/`**: Prisma/Drizzle schemas, migrations, and seeds.
- **`docs/`**: Architecture, UI-UX, and deployment guides.
- **`tests/`**: Unit, integration, and E2E tests.
