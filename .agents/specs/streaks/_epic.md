# [Epic] Streaks

## Overview
Streaks reward users for performing an action consistently over time or across repeated opportunities. A streak tracks a user's progress as they repeat a defined behavior, such as watching content, making predictions, checking in, or completing challenges, and then rewards them for maintaining that consistency. A streak starts when a user performs an action associated with the streak and continues as long as the user meets the streak rules. If the rules are broken, the streak resets.

Streaks are classified into **Periodic Streaks** and **Consecutive Action Streaks**, and milestones within streaks act as reward checkpoints. A periodic streak is extended by performing an action within a recurring time window such as daily, weekly, or monthly (periodic streaks are timezone-aware, and missing a period breaks the streak). A consecutive action streak is extended by performing an action in a defined order; progress depends on uninterrupted success, so a failure resets the streak but time gaps do not matter.

Streak Milestones are reward checkpoints within a streak. Instead of rewarding only at the end, milestones allow rewards at incremental progress points (streak lengths). They can be **Recurring** (a periodic length interval for users to get rewards) or **Custom** (a custom streak length to be rewardable). Rewards for reaching milestones can be configured to trigger only once or every time the milestone is reached. Streaks can be frozen (user-level or global), targeted to specific User Groups, and are timezone-aware, with all activity logged for analytics and reporting.

Streaks are created and managed via the CMS → Streaks section. Configuration includes selecting the streak type (Periodic / Consecutive Action), defining the triggering user action, setting time windows or action thresholds (for Periodic) or targets (for Consecutive Action), assigning rewards for streak milestones, and publishing the streak to targeted user groups. Once published, streak progress and rewards are automatically tracked based on user activity.

## Capabilities (sub-issues)
- [ ] Create a Periodic Streak
- [ ] List Periodic Streaks
- [ ] Get periodic streak detail
- [ ] Update a periodic streak
- [ ] Delete Periodic Streak
- [ ] Publish Periodic Streak
- [ ] Archive a periodic streak
- [ ] Unarchive a periodic streak
- [ ] Archive a consecutive action streak
- [ ] Unarchive a consecutive action streak
- [ ] Delete a consecutive action streak
- [ ] Create Streak Targets
- [ ] Create Streak Target with CSV
- [ ] List Streak Targets
- [ ] Update Streak Target
- [ ] Delete streak target
- [ ] Create Streak Milestone
- [ ] List Streak Milestones
- [ ] Update Streak Milestone
- [ ] Delete streak milestone
- [ ] Create user streak
- [ ] List User Streaks
- [ ] List User Streak Milestones
- [ ] Reset User Streak

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/applications/{client-id}/periodic-streaks/ | Create a periodic streak | — |
| GET | /api/v1/applications/{client-id}/periodic-streaks/ | List periodic streaks | — |
| GET | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/ | Get periodic streak detail | — |
| PATCH | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/ | Update a periodic streak (draft only) | — |
| DELETE | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/ | Delete a periodic streak | — |
| POST | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/publish/ | Publish a periodic streak | — |
| POST | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/archive/ | Archive a periodic streak | — |
| POST | /api/v1/applications/{client-id}/periodic-streaks/{periodic-streak-id}/unarchive/ | Unarchive a periodic streak | — |
| POST | /api/v1/applications/{client-id}/consecutive-actions/{consecutive-action-id}/archive/ | Archive a consecutive action streak | — |
| POST | /api/v1/applications/{client-id}/consecutive-action-streaks/{consecutive-action-id}/unarchive/ | Unarchive a consecutive action streak | — |
| DELETE | /api/v1/applications/{client-id}/consecutive-action-streaks/{consecutive-streak-id}/ | Delete a consecutive action streak | — |
| POST | /api/v1/applications/{client-id}/streak-targets/ | Create streak targets | — |
| POST | /api/v1/applications/new-endpoint-2 | Create streak target with CSV | — |
| GET | /api/v1/applications/{client-id}/streak-targets/ | List streak targets | — |
| PATCH | /api/v1/applications/{client-id}/streak-targets/{streak-target-id}/ | Update a streak target | — |
| DELETE | /api/v1/applications/{client-id}/streak-targets/{streak-target-id}/ | Delete a streak target | — |
| POST | /api/v1/applications/{client-id}/streak-milestones/ | Create a streak milestone | — |
| GET | /api/v1/applications/{client-id}/streak-milestones/ | List streak milestones | — |
| PATCH | /api/v1/applications/{client-id}/streak-milestones/{milestone-id}/ | Update a streak milestone | — |
| DELETE | /api/v1/applications/{client-id}/streak-milestones/{milestone-id}/ | Delete a streak milestone | — |
| POST | /api/v1/user-streaks/ | Create a user streak manually | — |
| GET | /api/v1/profiles/{profile-id}/user-streaks/ | List a profile's user streaks | — |
| GET | /api/v1/profiles/{profile-id}/user-streak-milestones/ | List a profile's user streak milestones | — |
| POST | /api/v1/user-streak/{user-streak-id}/reset/ | Reset an active user streak | — |

