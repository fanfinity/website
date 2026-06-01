# [Epic] Rewards

## Overview
Rewards are digital goods managed by Fanfinity that users can earn, accumulate, or collect. Apps use rewards to make experiences more fun and engaging and to encourage users to feel invested in your products. When paired with the Leaderboards system, rewards can make for a more competitive and challenging experience. The Rewards system provides customization, inventory management, balance tracking, and rule-based automation so you can design the exact experience you need.

The system is made up of a few configurable components. **Items** are blueprints of a reward a user can earn; users can collect and accumulate items so they can work like score, XP, or collectibles. **Actions** are things a user can do to earn rewards — there are built-in actions like voting on polls and answering quizzes correctly, and you can also create custom actions such as "invited a friend" or "completed your profile." **Tables** are sets of actions and items that determine the rewards users earn for performing those actions; you can have many tables so multiple scenarios are supported concurrently (e.g. different sports, or regular seasons vs. playoffs).

Reward Tables make it easy to automate earning rewards and can be re-used by many programs. A table consists of a list of *entries*, and each entry has an action, a reward item, and an amount. Each time a user performs an action in a program, all reward tables linked to the program are consulted; for each entry that matches the action, the reward is earned by the user who performed the action. Reward Capping gives producers control over distribution through a Reward Limit (cap the total number of times a user can earn a reward in a defined time period) and a Rate Limit (enforce a minimum time interval between earning rewards for an action); these can be configured individually or together.

Built-in reward actions trigger the reward engine for widget interactions (replied to an Ask widget prompt `ask-replied`, made a prediction `prediction-made`, made a correct prediction `prediction-correct`, answered a quiz incorrectly `quiz-answered`, answered a quiz correctly `quiz-correct`, voted on a poll `poll-voted`). Producers/integrators can also create custom reward actions and invoke them to trigger rewards. Beyond earning, Fanfinity supports a full economy: balances can be checked, credited, debited, and transferred between users (gifting/tipping), reward transactions can be listed and filtered, and earned points can be redeemed (e.g. via Prizeout for monetization-enabled reward items, and via the Reward Store catalog).

## Capabilities (sub-issues)
- [ ] Create Reward Item
- [ ] List Reward Items
- [ ] Get Reward Item Balance
- [ ] List Reward Item Balances
- [ ] Credit Reward Item
- [ ] Debit Reward Item
- [ ] Transfer Reward Items
- [ ] List Reward Item Transfers
- [ ] List Reward Transactions
- [ ] Create Reward Table
- [ ] List Reward Tables
- [ ] Get Reward Table
- [ ] Delete Reward Table
- [ ] Create Reward Table Entry
- [ ] Get Reward Table Entry
- [ ] Delete Reward Table Entry
- [ ] Link a Reward Table with a Program
- [ ] Unlink a Reward Table with a Program
- [ ] Create Reward Action
- [ ] List Reward Actions
- [ ] Batch Invoke Reward Action
- [ ] List Invoked Reward Actions

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/reward-items/ | Create a reward item | — |
| GET | /api/v1/reward-items/ | List reward items | — |
| GET | /api/v1/profiles/{profile_id}/reward-item-balances/{reward_item_id}/ | Get reward item balance for a user | — |
| GET | /api/v1/profiles/profile_id/reward-item-balances/ | List reward item balances | — |
| POST | /api/v1/profiles/{profile_id}/reward-item-credits/ | Credit reward item points to a user | — |
| POST | /api/v1/profiles/{profile_id}/reward-item-debits/ | Debit reward item points from a user | — |
| POST | /api/v1/profiles/{profile_id}/reward-item-transfers/ | Transfer reward items between users | — |
| GET | /api/v1/profiles/{profile_id}/reward-item-transfers/ | List reward item transfers | — |
| GET | /api/v1/reward-transactions/ | List reward transactions for earned reward items | — |
| POST | /api/v1/reward-tables/ | Create a reward table | — |
| GET | /api/v1/reward-tables/ | List reward tables | — |
| GET | /api/v1/reward-tables/{id}/ | Get a reward table | — |
| DELETE | /api/v1/reward-tables/{id}/ | Delete a reward table | — |
| POST | /api/v1/reward-tables/{id}/entries/ | Create a reward table entry | — |
| GET | /api/v1/reward-tables/{id}entries/{entry_id}/ | Get a reward table entry | — |
| DELETE | /api/v1/reward-tables/{id}/entries/{entry_id}/ | Delete a reward table entry | — |
| PUT | /api/v1/programs/{program_id}/reward-tables/{reward_table_id}/ | Link a reward table with a program | — |
| DELETE | /api/v1/programs/{program_id}/reward-tables/{reward_table_id}/ | Unlink a reward table from a program | — |
| POST | /api/v1/reward-actions/ | Create a reward action | — |
| GET | /api/v1/reward-actions/ | List reward actions for an application | — |
| POST | /api/v1/batch-invoked-actions/ | Batch invoke reward actions | — |
| GET | /api/v1/invoked-actions/ | List invoked reward actions | — |

