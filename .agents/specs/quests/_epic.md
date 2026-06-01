# [Epic] Quests

## Overview
Quests are sets of tasks that a user must complete to achieve a quest goal. Quest tasks are individual tasks or jobs a user must complete in order to make progress on the quest; tasks can be completed in any order and still count toward the quest goal. Quests let users complete multi-step challenges to earn one-time rewards, giving the end user a more gamified, goal-oriented experience. During a quest, both the user and integrators can see quest progress, so the user knows how much is left before completing the quest.

A `UserQuest` is an instance of a `Quest` attached to a specific user. Upon creating a UserQuest, `UserQuestTasks` are automatically created and used to track progress, status, and so on. Quests can have limited eligibility — for example, available only during a specific time window or restricted to certain Profile Groups — and starting a quest fails if the profile does not meet the eligibility requirements. Task progress can be incremented by the default value (or a custom increment) or set to an absolute overall value (for example, reset to zero). When all tasks in a user quest are completed, the quest itself is considered completed, and its rewards can be claimed once per user.

Quests are created and managed in the CMS (Producer Site): set the Quest name, description, quest duration, optional user groups, and at least one subtask (a subtask may link a reward action for automating quest task progress). Quests support a Save as Draft workflow — only the Quest Name is required to save a draft, drafts are not visible to end users, and a quest goes live by clicking Publish on the Rewards step. Common use cases include new-user onboarding checklists, product and feature tours, and one-time promotional campaigns.

Quests also support A/B Testing: producers can create two variants of a single quest (Variant A and Variant B) to test different task setups, reward compositions, or difficulty levels. Users are randomly and evenly assigned to a variant the first time they encounter the quest; assignment is handled server-side and remains consistent for the user, and key metrics per variant are tracked for comparison. Configuring rewards is optional, but if a reward is added it must include an assigned amount, and there is no cap on the number of reward items per variant.

## Capabilities (sub-issues)
- [ ] Create Quest
- [ ] List Quests
- [ ] Get Quest
- [ ] Delete Quest
- [ ] Create User Quest
- [ ] List User Quests
- [ ] Update User Quest
- [ ] Update User Quest Task Progress
- [ ] Delete UserQuest
- [ ] Create Quest Rewards
- [ ] Get list of quest rewards
- [ ] Remove a quest reward
- [ ] Claim user quest rewards
- [ ] Get user quest rewards
- [ ] Create AB Test Quest
- [ ] List AB Test Quests
- [ ] Get AB Test Quest
- [ ] Create AB Test Quest (duplicate reference)
- [ ] Assign Quest Variant to Profile

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/quests/ | Create a quest | — |
| GET | /api/v1/quests | List quests | — |
| GET | /api/v1/quests/{id}/ | Get a single quest | — |
| DELETE | /api/v1/quests/{id}/ | Delete a quest | — |
| POST | /api/v1/user-quests/ | Start a user quest | — |
| GET | /api/v1/user-quests/ | List user quests | — |
| PATCH | /api/v1/user-quests/{user_quest_id}/ | Update a user quest | — |
| POST | /api/v1/user-quest-task-progress/ | Update user quest task progress | — |
| DELETE | /api/v1/user-quests/{id}/ | Delete a user quest | — |
| POST | /api/v1/quest-rewards/ | Create quest rewards | — |
| GET | /api/v1/quest-rewards/ | Get list of quest rewards | — |
| DELETE | /api/v1/quest-rewards/{id} | Remove a quest reward | — |
| PATCH | /api/v1/user-quests/{user-quest-id}/ | Claim user quest rewards | — |
| GET | /api/v1/user-quest-rewards/ | Get user quest rewards | — |
| POST | /api/v1/applications/{client-id}/ab-test-quests/ | Create an A/B test quest | — |
| GET | /api/v1/applications/{client-id}/ab-test-quests/ | List A/B test quests | — |
| GET | /api/v1/applications/{client-id}/ab-test-quest/{ab-test-id} | Get an A/B test quest | — |
| POST | /api/v1/applications/{client-id}/ab-test-quests/ | Create an A/B test quest (duplicate reference) | — |
| PUT | /api/v1/applications/profiles/{profile-id}/quest-variant-assignment | Assign quest variant to profile | — |

