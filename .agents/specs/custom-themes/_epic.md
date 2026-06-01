# [Epic] Custom Themes

## Overview
The Theme system allows you to customize the look of the Engagement SDK's Widgets and Chat UI. This includes common UI properties such as background colors and border colors, corner radii, and text size and fonts. Those customizations are saved in a standard format and can be reused across platforms. Some common use cases for the theme system include:

- Quickly matching your application's style with minimal development effort
- Uniquely theming Widgets for a sponsorship opportunity
- Improving the accessibility of your application or supporting alternate styles

**Minimum Supported SDK Version** — iOS: 2.5, Android: 2.1, Web: 1.26.3.

### Theme System
Each widget is broken down into *components* that can be themed. Each component has a list of *component properties* that change its visual appearance. There are two types of components:

- **Container components** — have properties: Background (Fill or Gradient), Border Color, Border Width, Corner Radii. They contain other container components and text components.
- **Text components** — have properties: Color, Size, Font Family, Font Weight.

Component trees are documented per widget type (Alert widgets; Poll, Quiz, and Prediction widgets). Note from the docs: images in poll/quiz/prediction options aren't themed and always appear on the right; Cheer Meters and Rich Text can be customized with custom code but the common theme format does not support them yet.

### Applying Theme JSON
1. Locate and load the Theme JSON in your project.
2. Use the provided SDK API to generate the objectified Theme object from the Theme JSON.
3. Apply the Theme object to the SDK UIs.

## API Contract
> No REST endpoints documented in the source reference docs; configured via SDK/JSON theme config.

## Capabilities (sub-issues)
> No REST endpoints documented in the source reference docs; this feature is delivered through SDK theme configuration (Theme JSON applied via platform SDK APIs). No endpoint-level sub-issues can be specified from the available documentation. Platform-specific theming guidance lives in the SDK customization guides (iOS/Android).

