# [Epic] Sponsorship

## Overview
Programs, quests, and other resources inside Fanfinity can have sponsor information attached to them. A **Sponsor** is an object with a unique identifier that stays the same everywhere the sponsor is used. Each sponsor has a **Name** (for labeling and organization), an **Image** (a creative asset such as a logo or banner), and a **Brand color** (used to theme features using the sponsor's brand color).

Sponsors are **created and managed in the Producer Suite UI**, not via a documented REST endpoint. Per `—`, creating a sponsor is a manual flow on the Producer Site: open the Application, select "Sponsors" in the sidebar, click "New Sponsor", enter a name, upload a logo image, pick the brand color, and select "Create". Likewise, linking a sponsor to a program is done by editing the program in the Producer Site and selecting sponsors under "Linked Sponsors".

Once linked, sponsor details are surfaced to clients via the SDK and API responses. The docs describe SDK methods to list all sponsors for an application and get sponsors for a program. Sponsor details — name, image URL, and brand color — are included in API responses and SDK objects, and the integration customizes the UI to display the sponsor as needed.

Sponsors are associated with other resources through a `sponsor_ids` parameter. Per the documented behavior, `sponsor_ids` appears as a parameter on program create to link sponsors to programs (cross-reference only — the program create payload is not part of this feature's sources and is not reproduced here).

> Sponsor create / update / delete: Not documented in the source reference docs (managed in the Producer Suite UI; only the list endpoint is documented).

## Capabilities (sub-issues)
- [ ] List all sponsors created in a given application

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| GET | /api/v1/sponsors/ | List application sponsors | — |

