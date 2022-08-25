---
pagination_next: null
pagination_prev: null
---

# Schedule a monitoring task

A schedule is the combination of a [frequency](configurationfile.md#schedule), a (number of) time series or other inputs, and a model.

A schedule will be issued through the [AIR application](https://air.cogniteapp.com).

In AIR, the schedule is represented as a _Monitoring task_. There can be several monitoring tasks for the same schedule. For example, different teams want to monitor the same equipment with the same model but in different areas of the AIR front end. Instead of creating multiple schedules, different monitoring tasks should point to the same schedule.
