---
layout: ../../layouts/BlogPost.astro
date: "2018-01-11T20:56:47+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.1.1: GOG Crossplay"
---

![Patch 1.1.1 GOG Crossplay](https://i.imgur.com/6GiCwnH.jpg)

Patch 1.1.1 is out, and with it, crossplay between Steam and GOG players is now live. There's also a number of stability fixes for Mac players, a ton of balance changes, and a revamp in the MMR points for winning in Ranked matches. The headlining balance change is that Drumfire Cannon is now at Tier 2 price/build time!

##Features##

- GOG players and Steam players can now play together! You will notice that you need to select your region before playing online, which you can always change via the options menu.
- Global Pick and Win Rates now represent last 2 weeks of data rather than all time
- Ranked Bottom tier no longer loses points upon loss

##Balance Changes##
All the balance changes in this match were based on the Global Pick and Win Rates in the last two weeks of Ranked play. I nerfed Falcon, which had a very high pick rate, and over 50% win rate, and I buffed some Tier 3 and a bunch of defensive structures. Here are the stats:
![Imgur](https://i.imgur.com/qTM1PzQ.png)

- Toad: 6 DMG, 3 AOE; 12/6 vs structures (was 9/3, no structure crit) - This is just fixing a mistake from the last patch, the new numbers were the intended design.
- Falcon: 5 DMG 17 HP (was 6 DMG 15 HP)
- Boar: 10 tile flamethrower coverage (was 8), Death bomb does 7 DMG, 14 vs structures (was 6/12)
- Fox: 0.3 second cast time, 0.3 second movement cooldown (was 0.25+0.5 seconds) - Fox now is rooted for a total of 0.6 seconds instead of 0.75. Back when everyone thought she was overpowered, she was at 0.25. Hopefully players can still counter her.
- Owl: Mice have 10 HP (was 12)
- Wolf: 50 HP (was 60)
- Landmine: 18 DMG, 6 AOE (was 15/5); Vision increased to 4 tiles (was 1 tile), trigger time returned to 0.5 seconds (was 0.25)
- Barbed Wire: Vision increased to 4 tiles (was 1 tile)
- Artillery: Tier 2! Costs 120, build time is 20 seconds. 45 HP (was 60). 3 shots fired over 1 second, with a 2 second cooldown before next volley. Each shot does 6 DMG, 3 AOE. (Was 5 shots over 2 seconds with 3 second cooldown, each shot was, oh hell, the math was weird, I have no idea).
- Tier 3 build and production time increased to 50 seconds (was 45)
- Warren health 50 HP for all tiers (was 50/65/80)

##MMR Changes##
Points for winning vs players with the following tier differentials are now:

- 6: 80 (was 100)
- 5: 78 (was 90)
- 4: 74 (was 80)
- 3: 68 (was 60)
- 2: 60 (was 45)
- 1: 50 (was 30)
- 0: 40 (was 20)
- -1: 30 (was 10)
- -2: 16 (was 5)
- -3: 8 (was 4)
- -4: 5 (was 3)
- -5: 2 (was 2)
- -6: 1 (was 1)

##Bug fixes##

- Wolf buffed toads no longer fizzle
- Crash when using boar fixed
- Random Mac crashes fixed
- Mouse position on weird Mac resolutions now lines up to buttons correctly
- Duplicate flag design for Hopper mission 6 fixed
