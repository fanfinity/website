# [Epic] IDs & Attributes

## Overview
Fanfinity provides a few ways to integrate your own data to make lookups and filtering easier, resulting in fewer API calls and less application-level logic. These data-integration patterns are cross-cutting concepts applied across Fanfinity features rather than standalone resources. There are three documented mechanisms: Custom IDs (a one-to-one mapping between entities in your system and Fanfinity), Attributes (a one-to-many mapping from your system to Fanfinity), and Custom Data (supplementary data from your system memoized on Fanfinity records).

**Custom IDs** are best used when there is a one-to-one mapping between entities in your system and Fanfinity, such as users to profiles, or content to programs. Custom IDs are unique within a resource and application, so no two resources of the same type in the same app can have the same custom ID. Common use cases include setting profile custom IDs to your user IDs, and setting program custom IDs to your content IDs from your CMS, EPG, DAM, stats provider, etc. For profiles, a Profile has two IDs: a **Profile ID** (the unique identifier assigned by Fanfinity when the profile is created — it can't be modified) and a **Custom ID** (optional and empty by default, changeable, but unique within the application). Custom IDs let integrations maintain a two-way mapping between their users and Fanfinity profiles without maintaining their own mapping of user IDs to profile IDs. For programs, Custom IDs can be set when creating or editing events inside the CMS, and no two programs may have the same custom ID.

**Attributes** are arbitrary key-value pairs that you can populate on profiles, programs, widgets, and other objects inside of Fanfinity. Your integration specifies both the keys and their values. Attributes are most useful for one-to-many mappings between entities in your system and Fanfinity. Attributes are indexed on Fanfinity's side and can be queried via API, so you can return results matching the presence of a given attribute, or matching specific values. Documented use cases include finding all badges with a specific rarity, listing all programs belonging to a certain competition, and querying for quests that are part of a given campaign. Attribute keys and values are limited to 200 characters each.

**Custom Data** is helpful for memoizing data from your system on relevant Fanfinity records, which can reduce API call volume and limit the amount of joining or aggregation needed in your application logic. Custom data is used for things like storing user preferences in a profile's custom data, or showing extra context in chat messages such as user roles or flair. Custom data **cannot be queried** — prefer custom IDs or attributes if you want to query objects matching a given search. Custom data remains available for backward compatibility reasons, but generally you'll want to use custom IDs or attributes instead.

### When to use each (per the docs)
- **Custom IDs** — for a one-to-one mapping between your entities and Fanfinity resources (e.g. user → profile, content → program); unique within a resource and application; queryable/look-up by custom ID.
- **Attributes** — for a one-to-many mapping; indexed and queryable/filterable by presence or value; keys and values limited to 200 characters each.
- **Custom Data** — for free-form supplementary data memoized on a record; **not queryable**; retained mainly for backward compatibility.

## Capabilities (sub-issues)
> No sub-issues — applied as parameters across other features.

## API surface (index)
> No dedicated REST endpoints documented in the source reference docs; custom_id, attributes, and custom_data are parameters on Profile, Program, and other resources — see those features' specs.

### Documented look-up patterns (referenced from other resources)
- **Get Profile by Custom ID** and **Create Profile by Custom ID** are referenced by the Custom Profile IDs guide as the endpoints for looking up and creating profiles by custom ID; creating a profile by custom ID fails with a `409` status code (`{"detail": "profile with custom_id 'example' already exists."}`) when the custom ID is already in use. Endpoint payloads are not documented in the files cited here.
- **Program look-up by Custom ID** uses the `program_custom_id_url_template` value on your application resource (e.g. `https://{your-app-host}/api/v1/program-by-custom-id/{client_id}/{custom_id}/`).
- Client-generated access tokens implicitly create profiles the first time a custom ID is used; a `custom_profile_id` claim must be included in the JWT and is used to set the custom ID on the new profile.

> The endpoint method/path/body-param contracts for the above belong to the Profiles and Programs feature specs, not this cross-cutting concept. Not documented in the source reference docs within the files cited for this epic.

