# [Epic] Applications

## Overview
An Application is the tenant root of the Fanfinity platform. Before making any request to the Fanfinity API, an Application is required — the API documentation states that "Before making requests to the API, an Application is required." Everything else in the platform (profiles, programs, widgets, and other scoped resources) hangs off an Application.

An Application is identified by a **Client ID** and signed against with a **Client Secret**. The Client ID "is used by both the SDKs and REST APIs to point them to the appropriate application." The Client Secret "is used to sign client-generated user access tokens" and is a secret value known only to Fanfinity and your own backend system — it must never be embedded in a client application or exposed in an API.

Applications are created and managed through Fanfinity's Producer Suite, and a standard OAuth 2.0 Bearer Access Token is provisioned in the Application section of the Producer Suite for REST API access. The Access Token is supplied in the `Authorization` header (`Authorization: Bearer {access-token}`) — for example, `GET /api/v1/applications/{client-id}/`. The Application management endpoints (create, update, delete) additionally require a Personal API Token for authentication.

The Fanfinity API delivers live audience interactions such as polls, quizzes, and predictions that can be synchronized to video playback and managed on-demand through the REST API; all of these capabilities operate within the context of an Application.

## Capabilities (sub-issues)
- [ ] Create an Application
- [ ] Get an Application
- [ ] Update an Application
- [ ] Delete an Application

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/applications// | Create an Application (requires a Personal API Token) | — |
| GET | > Not documented in the source reference docs | Get an Application | — |
| PATCH | /api/v1/applications/{client_id}/ | Update an Application (requires a Personal API Token) | — |
| DELETE | /api/v1/applications/{client_id}/ | Delete an Application (requires a Personal API Token) | — |

