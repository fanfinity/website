# [Epic] Spoiler Prevention

## Overview
Sports fans don't like spoilers. Given the nature of streaming video today, live viewers never have their videos entirely synchronized. This is especially exaggerated when using streaming protocols like HLS with large chunk sizes. In such scenarios, user-to-user or producer-to-user communication may result in spoilers that can affect the enjoyment of watching a live game. The Fanfinity SDK provides tools to prevent spoilers, so even though not everyone will be watching the same action at the same moment in time, the people watching can be sure they won't be spoiled by someone who is ahead of them in the stream.

Spoiler prevention covers two scenarios. For chat, when users send chat messages to each other, those messages are embedded with a timestamp obtained from the video player, and a user will only see a received message once they are at the appropriate timestamp in the video. For widgets, when a producer sends widgets to users, those widgets are embedded with a timestamp obtained from the video currently playing in the Producer Suite, and end-users will only see a received widget once they are at the appropriate timestamp in the video.

Spoiler prevention is implemented on the client. All content like chat messages and widgets are delivered live over the network, and spoiler prevention is handled on the client-side so that it can be driven by the user's own local video playback progress. Content that is marked as a spoiler is queued on the device until video playback reaches a point where it is safe to show. To enable this, you must provide a video stream that has timecode metadata embedded within it, use a video player in your experience that can read the timecode metadata from the stream, and pass the timecode metadata from the player to the Fanfinity SDK. The SDK comes with built-in support for common video players and stream formats; if support for your player or stream format isn't bundled, you can provide your own support by authoring a plugin.

For chat synchronization, the SDKs have built-in plugins for HLS streams with Program Date Time directives supplying timing information. When integrating with HLS-based video playback, the SDKs use Program Date Time (PDT) manifest directives to determine time codes for synchronizing chat messages to video playback. The stream must contain `EXT-X-PROGRAM-DATE-TIME` directives at the start of the playlist and after every discontinuity, and playback must be allowed on the device. If you use a different stream format, or provide timing information in another way (such as ID3 tags), then you can provide a custom plugin.

## Capabilities (sub-issues)
> No REST endpoints documented in the source reference docs; provided via SDK spoiler-free sync. No sub-issues are generated for this feature.

The documented client-side capabilities are:
- Preventing chat spoilers — chat messages are embedded with a video-player timestamp; a user only sees a received message once they reach the appropriate timestamp in the video.
- Preventing widget spoilers — producer-sent widgets are embedded with a timestamp from the video playing in the Producer Suite; end-users only see a received widget once they reach the appropriate timestamp in the video.

## API surface (index)
> No REST endpoints documented in the source reference docs; provided via SDK spoiler-free sync.

## Requirements (documented)
- A video stream with timecode metadata embedded within it.
- A video player in the experience that can read the timecode metadata from the stream, with the ability to pass that timecode metadata from the player to the Fanfinity SDK.
- A video player that exposes timing data is required for chat spoiler prevention. The timing data should come from a common time source between all users, such as a timestamp embedded in the video stream; times derived from users' device clocks are not suitable.
- For widget spoiler prevention, the program that widgets are published to inside the Producer Suite must be configured with a video stream that matches the Producer-User Stream Requirements for Spoiler Prevention, and users must be watching on a video player that exposes timing data.
- HLS chat synchronization requires `EXT-X-PROGRAM-DATE-TIME` directives at the start of the playlist and after every discontinuity, and playback must be allowed on the device. Only HLS support (HLS streams with Program Date Time directives) is built-in; other formats or timing sources (such as ID3 tags) require a custom plugin.

## Testing (documented)
A test HLS stream with program-date-time metadata and a burned-in timestamp can be used to validate spoiler prevention. To test chat spoiler prevention, integrate spoiler prevention with the video player, then with two users A and B:

1. Users A and B load the test stream in the integrating app.
2. User A pauses playback for a little while so that B can get ahead of them in the stream.
3. User B sends a chat message and records the timestamp from the video.
4. User A resumes playback and waits until they reach the timestamp recorded by B.
5. User A confirms they received the message from B upon reaching the timestamp from earlier, and not before.

