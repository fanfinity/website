# [Epic] Analytics

## Overview
The Fanfinity Producer Site includes a built-in analytics section accessible from the left navigation. As soon as the integration with Fanfinity is launched, data collection begins so customers can track success. This data helps customers understand their programs' engagement performance and the usage behaviors of their audience, resulting in increased participation, engagement, and retention.

There are three ways to access and work with engagement data: **Standard Analytics** (pre-built reports in the Producer Site, available to all), **Visual Analytics** (interactive Metabase-powered dashboards, an add-on), and the **Analytics API** (programmatic access to Visual Analytics data via an API key). By default the Producer Site opens the Standard Analytics dashboard; accounts with Visual Analytics enabled see the Visual Analytics dashboard in its place.

Standard Analytics covers application-level, program-level, widget-level, quest, and quest-task metrics. At the widget level, Fanfinity provides high-level analytics for each widget (impression counts, unique impressions/reach, and engagement counts) and supports tracking widget impressions. Impressions are tracked automatically when using a Fanfinity SDK integration, but must be tracked manually when using a REST API integration via each widget's `impression_url` field. The Analytics Event Glossary defines the client-side SDK events behind these metrics: `widget_displayed` maps to the Impressions metric, and `widget_interacted` maps to the Interactions metric and drives Engagement Percent.

This epic captures the two documented widget-analytics REST capabilities: retrieving high-level widget analytics fields and registering widget impressions.

## Capabilities (sub-issues)
- [ ] Widget Analytics
- [ ] Widget Impressions

## API surface (index)
| Method | Endpoint | Purpose | Reference |
| --- | --- | --- | --- |
| GET | > Not documented in the source reference docs | Retrieve high-level analytics fields (impression_count, unique_impression_count, engagement_count) for a widget | — |
| POST | `impression_url` (per-widget field; full path not documented in the source reference docs) | Register a widget impression with an empty body and the user's Profile Access Token | — |

