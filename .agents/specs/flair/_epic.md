# [Epic] Flair

## Overview
Flair is a universal and reusable label system that adds identity, status, and context to users, content, and experiences across the Fanfinity platform. A flair is a small badge, tag, or visual marker that adds context and meaning — it can signal status, identity, achievement, verification, ownership, or special access. Flairs are designed to be lightweight, flexible, and reusable: one flair definition can be used in many places and rendered consistently wherever it appears.

Flair helps users and systems quickly understand who someone is, what something represents, or why it matters. It covers identity and status (VIP users, verified hosts, moderators, team members, creators), achievements and progress (milestones, streaks, quest completion, earned rewards), contextual labels (chatrooms, quests, rewards, or events — e.g. difficulty levels, official status, rarity), and personal expression (when allowed, users can select or create flairs that appear consistently across supported surfaces such as profiles or chat). Flairs are not tied to a single surface; the same system supports flairs on user profiles and avatars, chatrooms / comment boards / widgets, quests / rewards / achievements, and teams / communities / events.

Key characteristics: flair is universal (works across users, content, and system entities), portable (a single flair can be reused in multiple contexts), permission-aware (who can create, assign, or use flairs is controlled by rules), and client-rendered (flair defines meaning and rules, not UI). Flair Scopes define where a flair applies: they represent a resource kind (e.g. chatroom, comment board, widget) and optionally a specific resource instance. A global scope (`resource_uuid = null`) applies to all resources of that kind in the application; a specific scope (`resource_uuid = uuid`) applies only to the specific resource instance. Scopes are reusable and can be shared across multiple flair assignments.

Flairs are defined once and can then be assigned to supported resources based on permissions and rules. A flair assignment links a flair definition to a user and/or resource, can be manual (admin or moderator action) or automated (rules, achievements, events), does not duplicate the flair definition, tracks who assigned it (`assigned_by`), and can be activated or deactivated (soft delete). An assignment must contain `flair_id` and one of `profile_id` or `profile_custom_id`, and optionally `scope_id`; if an assignment contains `scope_id` the flair is assigned only for the defined scope. Operations are supported in both the CMS and the API.

## Capabilities (sub-issues)
- [ ] Create a Flair
- [ ] Update a Flair
- [ ] Delete a Flair
- [ ] List Flairs
- [ ] Flair Detail
- [ ] Create a Flair Assignment
- [ ] Update a Flair Assignment
- [ ] Delete a Flair Assignment
- [ ] List Flair Assignments
- [ ] Flair Assignment Detail
- [ ] Create a Flair Scope

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/flairs/ | Create a reusable flair definition | — |
| PATCH | /api/v1/flairs/{flair_id}/ | Update the metadata of an existing flair | — |
| DELETE | /api/v1/flairs/{flair_id}/ | Soft delete a flair | — |
| GET | /api/v1/flairs | List flairs per application | — |
| GET | /api/v1/flairs/{flair_id}/ | Retrieve a single flair's detail | — |
| POST | /api/v1/flair-assignments/ | Assign a flair to a profile/resource | — |
| PATCH | /api/v1/flair-assignments/{flair_assignment_id}/ | Update / replace a flair assignment | — |
| DELETE | /api/v1/flair-assignments/{flair_assignment_id}/ | Hard delete a flair assignment | — |
| GET | /api/v1/flair-assignments/ | List flair assignments | — |
| GET | /api/v1/flair-assignments/{flair_assignment_id}/ | Retrieve a single flair assignment's detail | — |
| POST | /api/v1/flair-scopes/ | Create a flair scope | — |

