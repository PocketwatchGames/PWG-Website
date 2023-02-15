---
layout: ../../layouts/BlogPost.astro
date: "2018-07-26T00:25:30+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.3.0: Story Mode Standard Seeds & Leaderboards"
---

![Patch 1.3.0](https://i.imgur.com/2oeL6CW.jpg)

HUGE Story Mode patch -- we've now got a Standard, non-random campaign and leaderboards! Players can choose to play Standard, Random, or with a Custom Seed.

When playing Standard, you can compete on leaderboards for time and score! Rank on the leaderboard is determined by your time in hundredths of seconds, plus the total food value lost over the course of the mission, minus your net worth at the end of the mission. Scores where your final net worth exceeds the total food value lost are displayed with a "+" before them. Leaderboards didn't make it to the PS4 build this patch, sorry!

![Leaderboards](https://i.imgur.com/xbp7x13.png)

If Story Mode isn't what floats your boat, there's also some balance changes and a major revision to map generation. Have fun!

##Balance Changes##

- Squirrel - 0.25 second movement freeze after shooting (was 0.4)
- Toad - 7 HP (was 8). Primary and AOE damage is now centered on closest tile when targeting 2x2 structures
- Chameleon - 40 HP (was 38)
- Snake 28 HP (was 30)
- Falcon - 1.2 seconds of firing, 0.8 second cooldown (was 1.5 seconds and 0.5 seconds)
- Owl - 40 HP (was 50), no longer stop moving over enemies
- Barbed Wire can now hit stealthed Chameleons
- Landmines can now hit stealthed Chameleons
- Structures no longer heal if they are not in your territory
- Territory now symmetrical on all sides of mills and fires, resulting in larger territory

##New Features##

- Story Mode Standard and Random Seeds.
- Standard Story Leaderboards
- Map generation now adds ramps around spawn to prevent high ground within 3 tiles of spawn farms
- Map generation now takes water into account when assessing fairness
- Map generation now compares natural expansion distances when assessing fairness
- Map generation changed to create more organic shapes around bases instead of fortress-like topography
- Map fairness variables added to map generation xmls
- Single Player Balance updated to current multiplayer stats

##Bug Fixes##

- Story Mode - Meat will no longer spawn inside rocks
- Repeating sound bug fixed
