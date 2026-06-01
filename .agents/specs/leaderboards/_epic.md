# [Epic] Leaderboards

## Overview
Leaderboards allow users to compete and see how they stack up against each other. Once a leaderboard has been associated with a Program, users who earn rewards in that program will have them counted toward their score on that leaderboard.

A program can have many leaderboards associated, and a leaderboard can be linked with many programs. This allows you to better capture your own experience's structure, such as allowing all-time, seasonal, or single-event leaderboards. You can even mix and match multiple leaderboards with the same program.

Each leaderboard has these properties: an **ID** containing the unique identifier of the leaderboard (this can't be changed); a human-readable **Name**; a **Tracked Reward Item** (when fans earn these rewards in linked programs their scores in the leaderboard automatically update); a set of **Linked Programs** that determine which programs are eligible to automatically update the leaderboard; and an ordered list of **Entries**, one for each profile ranked on the leaderboard. Each entry contains the profile, their rank on the leaderboard, and their score.

Each leaderboard maintains a list of entries ordered by rank for each profile ranked on the leaderboard. Entries are ranked high to low by score, where the profile with the highest score has rank 1. Score increases each time a profile gains the same kind of reward that the leaderboard is tracking, and only while the program the profile earned the rewards in is linked to the leaderboard. When using automatically-updating leaderboards that track rewards, score only accumulates; it does not go down when the profile spends, transfers, or otherwise depletes their reward balances. Rewards earned in a program will only increase score when the program is linked to the leaderboard, and when the rewards earned are the same kind being tracked by the leaderboard.

## Capabilities (sub-issues)
- [ ] Create Leaderboard
- [ ] List Leaderboards
- [ ] Get Leaderboard Details
- [ ] Get Leaderboard Details by Custom Id
- [ ] Update a Leaderboard
- [ ] Link a Leaderboard with a Program
- [ ] Unlink a Leaderboard from a Program
- [ ] Create a Leaderboard View
- [ ] List Views for a Leaderboard
- [ ] List all Leaderboard Views in a Leaderboard
- [ ] Delete a Leaderboard View
- [ ] Add Profiles to a Leaderboard View
- [ ] List Profiles for a Leaderboard View
- [ ] Delete a Profile from a Leaderboard View
- [ ] Get Profile Rank in a Leaderboard View
- [ ] List Leaderboard Entries
- [ ] Get Leaderboard Entry Detail

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/leaderboards/ | Create a leaderboard | — |
| GET | /api/v1/leaderboards/ | List leaderboards | — |
| GET | /api/v1/leaderboards/{id}/ | Get leaderboard details | — |
| GET | /api/v1/leaderboard-by-custom-id/{client-id}/{custom-id}/ | Get leaderboard details by custom id | — |
| PATCH | /api/v1/leaderboards/{id}/ | Update a leaderboard | — |
| PUT | /api/v1/programs/{program_id}/leaderboards/{leaderboard_id}/ | Link a leaderboard with a program | — |
| DELETE | /api/v1/programs/{program_id}/leaderboards/{leaderboard_id}/ | Unlink a leaderboard from a program | — |
| POST | /api/v1/leaderboard-views/ | Create a leaderboard view | — |
| GET | /api/v1/leaderboard-views/ | List views for a leaderboard | — |
| GET | /api/v1/leaderboards/{leaderboard_id}/leaderboard-views/ | List all leaderboard views in a leaderboard | — |
| DELETE | /api/v1/leaderboard-views/{id}/ | Delete a leaderboard view | — |
| PATCH | /api/v1/leaderboard-views/{id}/ | Add profiles to a leaderboard view | — |
| GET | /api/v1/leaderboard-views/{id}/profiles/ | List profiles for a leaderboard view | — |
| DELETE | /api/v1/leaderboard-views/{id}/profiles/{profile_id}/ | Delete a profile from a leaderboard view | — |
| GET | /api/v1/leaderboard-views/{leaderboard-view-id}/profiles/{profile-id}/ | Get profile rank in a leaderboard view | — |
| GET | /api/v1/leaderboards/{id}/entries/ | List leaderboard entries | — |
| GET | /api/v1/leaderboards/{id}/entries/{profile_id}/ | Get leaderboard entry detail | — |

