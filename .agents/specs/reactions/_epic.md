# [Epic] Reactions

## Overview
Reactions as a service allows users to add reactions to any content. Use the Reactions service to add user reactions to your content. Anything that can be referenced by a unique identifier is eligible for reactions, so everything ranging from built-in Fanfinity components to your own custom content can support user reactions.

The reactions service consists of a few components. A **Reaction Pack** defines a set of reaction types. Each pack can have many reaction types inside of it, and each type has an ID, name, and image asset. Once a pack is created it can be associated with spaces in order to make its reaction types available inside those spaces. A **Reaction Space** acts as namespace and mapping for content. Targets within each space represent individual units inside the space that can be reacted to. Packs can be linked with spaces to control which reactions are available to use inside those spaces. Reaction spaces are usually mapped one-to-one with content like chat rooms, comment boards, blog posts, videos, and so on. A **User Reaction** is an instance of a user adding their reaction to some target within the space.

A typical reaction workflow involves setting up reaction packs, mapping those packs to your content through reaction spaces, and then creating user reactions inside the reaction spaces. Each user reaction requires the space ID, the reaction type ID, and the target ID of the thing being reacted to. The target ID is not necessarily the same as the target group ID. For example, in a chat use case, the chat room ID would be the target group ID, and individual message IDs would be target IDs.

Exclusive reaction packs are managed at the profile level. Only profiles that have been granted access will see and use them inside chat or comments. Access can be granted, revoked, or automated through purchases, rewards, or membership tiers, so fans only see the packs they own. Reactions can also be integrated with the Social Graph: the `relationship_type` and `relationship_from_profile_id` parameters on the list and count endpoints let you filter and count user reactions by authors matching a given relationship (for example, reactions from users that a profile follows).

## Capabilities (sub-issues)
- [ ] Create a Reaction Pack
- [ ] List Reaction Packs
- [ ] Delete a Reaction Pack
- [ ] Assign Exclusive Reaction Pack to Profile
- [ ] List Profile Exclusive Reaction Packs
- [ ] Revoke Profile Reaction Pack
- [ ] Add a Reaction Emoji to a Pack
- [ ] Update a Reaction Emoji
- [ ] Delete a Reaction Emoji
- [ ] Create Reaction Space
- [ ] Get a Reaction Space
- [ ] List Reaction Spaces
- [ ] Update a Reaction Space
- [ ] Delete a Reaction Space
- [ ] Create User Reaction
- [ ] List User Reactions
- [ ] Delete a User Reaction
- [ ] Count User Reactions per Target
- [ ] Count User Reactions per Space

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/reaction-packs/ | Create a reaction pack | — |
| GET | /api/v1/reaction-packs/ | List reaction packs | — |
| DELETE | /api/v1/reaction-packs/{id}/ | Delete a reaction pack | — |
| POST | /api/v1/profiles/{profileID}/reaction-packs/ | Assign exclusive reaction pack to a profile | — |
| GET | /api/v1/profiles/{profileID}/reaction-packs/ | List profile exclusive reaction packs | — |
| DELETE | /api/v1/profiles/{profileID}/reaction-packs/{ReactionPackID}/ | Revoke a profile reaction pack | — |
| POST | /api/v1/reaction-emojis/ | Add a reaction emoji to a pack | — |
| PATCH | /api/v1/reaction-emojis/{id}/ | Update a reaction emoji | — |
| DELETE | /api/v1/reaction-emojis/{id}/ | Delete a reaction emoji | — |
| POST | /api/v1/reaction-spaces/ | Create a reaction space | — |
| GET | /api/v1/reaction-spaces/{id} | Get a reaction space | — |
| GET | /api/v1/reaction-spaces/ | List reaction spaces | — |
| PATCH | /api/v1/reaction-spaces/{id} | Update a reaction space | — |
| DELETE | /api/v1/reaction-spaces/{id}/ | Delete a reaction space | — |
| POST | /api/v1/user-reactions/ | Create a user reaction | — |
| GET | /api/v1/user-reactions/ | List user reactions | — |
| DELETE | /api/v1/user-reactions/{id} | Delete a user reaction | — |
| GET | /api/v1/user-reactions-count/ | Count user reactions per target | — |
| GET | /api/v1/applications/{client-id}/reaction-space-counts/ | Count user reactions per space | — |

