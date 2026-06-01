# [Epic] Redemption Keys

## Overview
Redemption Keys facilitate exchanging codes for virtual or physical goods. Each redemption key has these properties:

- **Code**: the value shown to users that they would enter to exchange the key for something.
- **Status**: represents whether the key has been redeemed or not, to prevent using the same key multiple times.
- **Assignee**: the profile the key is assigned to. If the key is assigned to a profile, it can only be redeemed by that profile.

Producers create Redemption Keys from the Producer Site ("Redemption Keys" in the sidebar → "New Redemption Key"), supplying a key name, description, and an optional custom code. Keys can be listed (non-producer users see only keys redeemed by them, with an optional `status` filter), redeemed by code or by ID, and unassigned from the current profile. Valid status values are `active`, `inactive`, and `redeemed`.

## Capabilities (sub-issues)
- [ ] Create a Redemption Key
- [ ] List Redemption Keys
- [ ] Get a Redemption Key
- [ ] Update a Redemption Key
- [ ] Update a Redemption Key by Code
- [ ] Delete a Redemption Key

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/redemption-keys/ | Create a redemption key | — |
| GET | /api/v1/redemption-keys/ | List redemption keys | — |
| GET | /api/v1/redemption-keys/{id}/ | Get a redemption key | — |
| PATCH | /api/v1/redemption-keys/{id}/ | Update a redemption key | — |
| PATCH | /api/v1/redemption-keys-by-code/{client_id}/{code}/ | Update / redeem a key by code | — |
| DELETE | /api/v1/redemption-keys/{id}/ | Delete a redemption key | — |

