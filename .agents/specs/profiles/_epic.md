# [Epic] Profiles & Identity

## Overview
Profiles are the identity layer of Fanfinity. A profile collects all of a single user's widget interactions, chat memberships, and fan activity inside one identity, and every interaction, reward, and score is tied to a profile. Integrations should associate each of their users with a Fanfinity profile. A profile has a unique identifier (`id`), a non-unique display `nickname`, an API credential called an `access_token`, and optional `custom_data` and `attributes`. When acting as a specific profile, the access token must be included in the request.

Profiles are designed to enhance existing user records rather than replace them. When a profile is created, its ID and access token should be stored with your existing user data so progress carries over between sessions, installs, devices, and platforms. Profiles also support anonymous usage: a profile can be created before a login exists and kept in session/local storage, then linked to a user account on signup or login by passing along its access token. Persistent profiles (associated with your own user accounts) are recommended; local/anonymous profiles work when there is no user concept. Integrations should ensure each user maps to a single profile (avoid creating duplicate profiles per user).

Each profile carries two identifiers: the Fanfinity-assigned **Profile ID** (unique, immutable) and an optional **Custom ID** (empty by default, changeable, unique within the application). Custom IDs let integrations maintain a two-way mapping to their own user IDs without keeping a separate mapping table — supply your own IDs as custom IDs and look profiles up directly. Profiles can be created with a custom ID either via the Create Profile by Custom ID endpoint (returns `409` when the custom ID is already in use) or implicitly via client-generated JWT access tokens carrying a `custom_profile_id` claim.

Authentication uses OAuth 2 Bearer tokens via the `Authorization` header. **Profile Access Tokens** are scoped to a single profile and represent end users (interacting with widgets and chat). **Admin Access Tokens** (also called API/Producer Access Tokens) are scoped to an application with broader permissions for server-to-server automations. **Personal API Tokens** (`Authorization: Token ...`) perform site-wide and organization-wide administrative tasks. Beyond CRUD and custom-ID lookup, profiles support blocking (mutual, system-enforced restrictions between two profiles across comments, chat, chatroom, and social graph), and relationships (a directed social graph, e.g. `follow`, between two profiles).

## Capabilities (sub-issues)

Core profile CRUD
- [ ] Create a user profile under an application
- [ ] Get a user profile by ID
- [ ] Update a user profile (nickname, custom data, attributes)
- [ ] Delete a user profile

Custom-ID lookup
- [ ] Create a profile by custom ID
- [ ] Get a profile by custom ID

Permissions
- [ ] Check a profile's permissions in given scopes or resources

Blocking
- [ ] Block a profile
- [ ] Get blocked profiles
- [ ] Get blocked profile IDs
- [ ] Unblock a profile by Block Object ID
- [ ] Unblock a profile by Profile Custom ID
- [ ] Bulk sync a profile block list

Relationships
- [ ] Create a profile relationship
- [ ] List profile relationships
- [ ] Delete a profile relationship

> Note: `profile-permissions-check` overlaps RBAC already implemented in this app; this spec documents the Fanfinity API surface, not a re-implementation.

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/applications/{client_id}/profile/ | Create a user profile under an application | — |
| GET | /api/v1/profiles/{id}/ | Get a user profile by ID | — |
| PATCH | /api/v1/profiles/{profile_id}/ | Update a user profile | — |
| DELETE | /api/v1/profiles/{id}/ | Delete a user profile | — |
| POST | /api/v1/profile-by-custom-id/{client_id}/{custom_id}/ | Create a profile by custom ID | — |
| GET | /api/v1/profile-by-custom-id/{client_id}/{custom_id}/ | Get a profile by custom ID | — |
| GET | /api/v1/profiles/{ProfileID}/permissions-check/ | Check a profile's permissions in given scopes or resources | — |
| POST | /api/v1/profile-blocks/ | Block a profile | — |
| GET | /api/v1/profile-blocks/ | Get blocked profiles | — |
| GET | /api/v1/blocked-profile-ids/ | Get blocked profile IDs (not paginated) | — |
| DELETE | /api/v1/profile-blocks/{BlockID} | Unblock a profile by Block Object ID | — |
| DELETE | /api/v1/unblock-by-profile-custom-id/{client_id}/{blocked_profile_custom_id}/ | Unblock a profile by Profile Custom ID | — |
| POST | /api/v1/applications/{client_id}/profile-blocks-bulk-sync/ | Bulk sync a profile block list | — |
| POST | /api/v1/profile-relationships/ | Create a profile relationship | — |
| GET | /api/v1/profile-relationships/ | List profile relationships | — |
| DELETE | /api/v1/profiles/profile-relationships/{profile_relationship_id}/ | Delete a profile relationship | — |

