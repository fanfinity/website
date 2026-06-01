# [Epic] Status Tiers

## Overview
Status Tiers let you define reward systems where users progressively unlock the benefits associated with those tiers. As users reach more advanced tiers, their benefits accumulate. A *tier* represents a level of progress within a *tier group*.

Status Tiers are built from three core components. A **Tier Group** is a container for multiple tiers (e.g. "VIP Levels", "Membership Tiers", "Loyalty Tiers", "Event Tiers"). A **Tier** is a level within a group that contains benefits (e.g. "Gold", "Platinum"), and may carry an optional Reward Threshold: if set, users automatically qualify for the tier upon reaching the threshold (e.g. "Earn 1000 Dummy Dollars to unlock Gold Tier"). **Benefits** are the perks or rewards associated with a tier; multiple benefits can be added within a tier and a benefit can have a Reward linked, so that when a user qualifies for the tier they automatically receive the reward if the benefit is rewardable.

Tier ordering follows documented rules. Tiers with reward thresholds are auto-ordered strictly by threshold value (low to high) and their positions are locked. Tiers without thresholds are manually ordered, are added to the end of the non-reward tiers, can be freely reordered among other manual tiers, and must always remain below automatic-order tiers. Removing a tier's threshold moves it to the manual section, and updating a threshold triggers automatic reordering of all affected tiers. Benefits are assigned the next available order number when created and can be freely reordered with no positioning restrictions.

Tier Groups, Tiers, and Benefits can be archived (deactivated without permanently deleting) and later reactivated or permanently deleted. Archived items are excluded from active workflows such as tier assignment and reward logic. Assignment of a tier to a profile supports initial assignment, upgrade, downgrade, and unassignment through a single API: assigning a tier automatically grants all lower tiers, and unassigning (passing `tier_id` as `null`) revokes all tiers via a series of downgrade entries.

## Capabilities (sub-issues)
- [ ] Using Status Tiers (concept)
- [ ] Create Tier Group
- [ ] List Tier Groups
- [ ] Update Tier Group
- [ ] Delete a Tier Group
- [ ] Create Tier
- [ ] List Tiers
- [ ] Retrieve a Tier
- [ ] Update Tier
- [ ] Delete Tier
- [ ] Create Tier Benefit
- [ ] List Tier Benefits
- [ ] Retrieve Tier Benefit
- [ ] Update Tier Benefit
- [ ] Delete Tier Benefit
- [ ] Assign Tier to a Profile (Create a User Tier)
- [ ] Assigning Tier to a Profile (concept)
- [ ] List User Tiers
- [ ] List Tier Transactions

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/tier-groups/ | Create a Tier Group | — |
| GET | /api/v1/applications/{client_id}/tier-groups/ | List Tier Groups | — |
| PATCH | /api/v1/tier-groups/{tier_group_id}/ | Update a Tier Group | — |
| DELETE | /api/v1/tier-groups/{tier_group_id}/ | Delete a Tier Group | — |
| POST | /api/v1/tiers/ | Create a Tier within a Tier Group | — |
| GET | /api/v1/tier-groups/{tier_group_id}/tiers/ | List Tiers within a Tier Group | — |
| GET | /api/v1/tiers/{tier_id}/ | Retrieve a Tier | — |
| PATCH | /api/v1/tiers/{tier_id}/ | Update a Tier | — |
| DELETE | /api/v1/tiers/{tier_id}/ | Delete a Tier | — |
| POST | /api/v1/tier-benefits/ | Create a Tier Benefit | — |
| GET | /api/v1/tiers/{tier_id}/tier-benefits/ | List Tier Benefits | — |
| GET | /api/v1/tier-benefits/{tier_benefit_id}/ | Retrieve a Tier Benefit | — |
| PATCH | /api/v1/tier-benefits/{tier_benefit_id}/ | Update a Tier Benefit | — |
| DELETE | /api/v1/tier-benefits/{tier_benefit_id}/ | Delete a Tier Benefit | — |
| PUT | /api/v1/profiles/{profile-id}/tier-groups/{tier-group-id}/user-tiers/ | Assign a tier to a profile | — |
| GET | /api/v1/applications/{client_id}/user-tiers/ | List User Tiers | — |
| GET | /api/v1/tier-transactions/ | List Tier Transactions | — |

> `using-status-tiers` and `assigning-tier-to-a-profile` are conceptual reference pages with no standalone endpoint of their own; see their sub-issues.

