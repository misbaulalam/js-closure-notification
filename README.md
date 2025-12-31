# js-closure-notification
A small JavaScript project that demonstrates how closures can be used to build a reusable notification (toast) system.
Styled with Tailwind CSS and built without any external JavaScript libraries.

# What This Project Shows

Practical use of JavaScript closures

Clean DOM manipulation

Reusable function design

Basic UI behavior (auto-dismiss notifications)

# How It Works

A factory function creates a notification function with fixed configuration
(duration, colors).
That configuration is preserved using a closure, so every notification
shares the same settings.
