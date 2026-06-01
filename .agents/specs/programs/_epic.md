# [Epic] Programs

## Overview
Programs are how you organize and represent your content inside of Fanfinity. A program can represent a live stream, a blog post, a television episode, or any other unit of content you might have. Each interactive widget is considered part of a program — polls, quizzes, alerts, and any other widgets published to one program will not appear in another. A program is therefore the container that widgets are created within, and a widget published to one program cannot be published to another.

Programs are scoped to an application via its `client_id`, and each program has scheduling fields. **Status** can be one of `future`, `live`, or `past`. **Scheduled At** is when the program is planned to start. **Started At** is when the program was most recently started (null if it has never been started). **Stopped At** is when the program was most recently stopped (null if it has never been stopped). A program can be started and stopped multiple times. In the CMS, live programs appear in the Live Now tab, future programs in the Upcoming tab, and past programs in the History tab.

Starting a program flags it as `live`; stopping it signals that it is no longer live, returning the status to either `future` or `past` depending on when the program is scheduled for. The live status is purely for organizational purposes inside the CMS and for adding scheduling hook points to integrations — integrations can listen for the `program-status-updated` pubsub event. Live status does not affect widget publishing: widgets can always be published to programs whether or not they are live. Start and stop are controlled via the `start_program_url` and `stop_program_url` hyperlink fields on a program resource. Each program also exposes a `widgets_url` hyperlink field that returns all widgets created in that program (the program widgets resource is paginated).

Each program has a unique identifier assigned by Fanfinity, and you can additionally supply your own custom ID per program. A program's custom ID must be unique inside your application — no two programs may have the same custom ID. A program can be looked up by its custom ID using the application's `program_custom_id_url_template`. Programs can also link one or more sponsors via `sponsor_ids`. Programs can be linked with one or more leaderboards, and rewards earned in the context of a program automatically update all leaderboards linked to that program.

## Capabilities (sub-issues)
- [ ] Create a program inside an application
- [ ] List all programs for an application with filtering and ordering
- [ ] Get a single program by its unique identifier
- [ ] Get a program by its custom ID within an application
- [ ] Update an existing program

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/programs/ | Create a new program inside an app | — |
| GET | /api/v1/programs/ | List all programs for an app | — |
| GET | /api/v1/programs/{id}/ | Get a single program by its unique identifier | — |
| GET | /api/v1/program-by-custom-id/{client_id}/{custom_id} | Look up a program by its custom ID | — |
| PATCH | /api/v1/programs/{id} | Update an existing program | — |

