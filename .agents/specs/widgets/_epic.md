# [Epic] Widgets

## Overview
Widgets are the interactive elements delivered to audiences to engage with. The library is always expanding and features things like polls, quizzes, and predictions. Widgets can be created and published manually by producers using the Producer Suite, and can also be automated through the REST API.

Every widget is created as part of a Program. A program associates a sequence of widgets with some content. Every program has a Program ID that uniquely identifies the program within an application. Programs are also how content is managed inside the Producer Suite and include metadata like scheduling information that helps producers keep their dashboards organized.

Developers have fine control over the lifecycle of a widget. Widgets are sent to audiences in two steps: first they are created (then considered *pending*), and then they are published. This two-step flow allows complex workflows — widgets can be created, edited, and scheduled ahead of time before publishing. When a widget is published, its payload is delivered over PubNub so subscribed clients can show it live without polling the program timeline API. A widget's expiry UTC time can be set, after which it will no longer be interactive.

Widgets are presented in different modes — Popup (shown one at a time with limited interaction time), Timeline (shown all at once, browsable), and Embedded (individual widgets embedded on web pages). The widget library includes Polls, Image Slider, Trivia/Quiz, Predictions, Number Prediction, Cheer Meter, Alerts, Ask, and Social Embeds. Widget UI can use Fanfinity's bundled Stock UI, Themed Stock UI, or fully Custom UI.

## Capabilities (sub-issues)
- [ ] Widget lifecycle (create, update, schedule, unschedule)
- [ ] Create a Text Ask widget
- [ ] Get a Text Ask widget
- [ ] Publish (schedule) a widget
- [ ] Delete a widget
- [ ] List widgets for a program
- [ ] List an application's widgets
- [ ] Get widget interactions for a profile
- [ ] Get unclaimed widget interactions for a profile
- [ ] Report a widget
- [ ] List widget reports
- [ ] Moderate a widget report

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| POST | /api/v1/text-asks/ | Create a Text Ask widget | — |
| GET | /api/v1/text-asks/{id}/ | Get a Text Ask widget | — |
| PUT | /api/v1/{widget-collection-kind}/{widget-id}/schedule/ | Publish/schedule a widget | — |
| DELETE | /api/v1/{widget-kind}/{widget-id}/ | Delete a widget | — |
| GET | (program `widgets_url`) | List widgets for a program | — |
| GET | /api/v1/applications/{client_id}/widgets/ | List an application's widgets | — |
| GET | /api/v1/profiles/{profile_id}/widget-interactions/ | Get a profile's widget interactions | — |
| GET | /api/v1/profiles/{profile_id}/unclaimed-widget-interactions/ | Get a profile's unclaimed widget interactions | — |
| POST | /api/v1/widget-reports/ | Report a widget | — |
| GET | /api/v1/widget-reports/ | List widget reports | — |
| PATCH | /api/v1/widget-reports/{id}/ | Moderate a widget report | — |

