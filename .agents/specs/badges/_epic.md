# [Epic] Badges

## Overview
A user profile badge is a badge that is linked to a user profile. A user profile can have multiple badges that can be earned or awarded. Once a badge is earned or awarded it stays linked to the user profile regardless of any changes done to the badge. Badges can be earned by reaching a reward item threshold or by completing Quests. They can also be directly awarded via API.

Badges can be awarded automatically to users who reach a defined Reward Item Threshold set on the badge. For example, a badge could be set up to be awarded automatically when a user reaches 1,000 points by creating a Reward Item called Points, and then setting the Reward Item Threshold on the badge to 1,000 Points. Reward item thresholds are optional and can be set when creating a new badge or modifying an existing one.

All users are eligible to earn the badge when they meet the threshold, but the badge will only be earned once per user. If a user reaches the threshold, earns the badge, and then goes below the threshold to meet it again, they will not earn the badge again.

The badges system lets integrators create application-level badges, list and inspect them, award badges to profiles and revoke earned badges, list the badges a profile has earned, track a profile's progress toward earning a badge (only badges with a reward item threshold can have progress made toward them), list the profiles who have earned a given badge, and link badges to Quests so that badges are awarded — automatically or by manual claim — upon quest completion.

## Capabilities (sub-issues)
- [ ] Create App Badge
- [ ] List App Badges
- [ ] Get an App Badge
- [ ] Award a Badge to a User
- [ ] Revoke Earned Badge
- [ ] List Earned Badges (for a profile)
- [ ] Get List of earned badges
- [ ] List Badge progress
- [ ] List Profiles who have earned a specific badge
- [ ] Add Badges to Quest
- [ ] Get Quest Badges
- [ ] Remove Badge from Quest
- [ ] Claim User Quest Badge

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/badges/ | Create a new badge inside an app that can be awarded to users later | — |
| GET | /api/v1/applications/{client_id}/badges/ | List all badges available in an application | — |
| GET | /api/v1/badges/{badge-id}/ | Get the details of a specific badge | — |
| POST | /api/v1/profiles/{profile_id}/badges/ | Award a badge to a user | — |
| DELETE | /api/v1/earned-badges/{earned-badge-id} | Revoke a user's earned badge | — |
| GET | /api/v1/profiles/{id}/badges/ | List badges earned by a user | — |
| GET | /api/v1/earned-badges/ | Get a list of badges earned by the requesting user (or all profiles for a producer) | — |
| GET | /api/v1/profiles/{profile_id}/badge-progress/ | List a profile's progress toward earning requested badges | — |
| GET | /api/v1/badge-profiles/ | List profiles who have earned a specific badge | — |
| POST | /api/v1/quests/{quest_id}/badges | Link a list of badges to a Quest | — |
| GET | /api/v1/quests/{quest_id}/badges | List all badges linked to a Quest | — |
| DELETE | /api/v1/quests/{quest_id}/badges/{badge_id} | Remove a specific badge from a Quest | — |
| PATCH | /api/v1/user-quests/{quest_id}/badges | Manually award (claim) quest badges to a user | — |

