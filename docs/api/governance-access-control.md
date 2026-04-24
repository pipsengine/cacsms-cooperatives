# Governance & Access Control API Endpoints

Base path: `/api/access`

## Roles
- `GET /roles` — List all roles
- `GET /roles/:id` — Get role by ID
- `POST /roles` — Create role (requires: id, name)
- `PUT /roles/:id` — Update role
- `DELETE /roles/:id` — Delete role

## Permissions
- `GET /permissions` — List all permissions
- `POST /permissions` — Create permission (requires: id, name, module, action)

## Assignments
- `GET /assignments` — List all assignments
- `POST /assignments` — Assign role
- `PUT /assignments/:id` — Update assignment
- `PATCH /assignments/:id/revoke` — Revoke assignment

## Approval Chains
- `GET /approval-chains` — List all approval chains
- `POST /approval-chains` — Create approval chain

## Officers
- `GET /officers` — List all officers
- `POST /officers` — Create officer

## Delegations
- `GET /delegations` — List all delegations
- `POST /delegations` — Create delegation

## Audit Logs
- `GET /audit-logs` — List all audit logs
- `POST /audit-logs` — Create audit log

## Notes
- All endpoints require authentication and are subject to policy enforcement middleware.
- Validation is applied to role and permission creation endpoints.
- Audit logging is performed for key actions.
