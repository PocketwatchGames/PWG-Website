---
layout: ../../layouts/BlogPost.astro
date: "2019-09-06T17:44:16+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.5.1: Hard Times for the Little Guys"
---

![Patch 1.5.1](https://i.imgur.com/uRWFhP4.png)
The Distillery Brothers aka "Squirrels" have probably been the most reliable unit type in Multiplayer for a long time. Especially when defending on top of their own warrens, Squirrels often defeated even superior armies. Their safety is now going to be compromised by reducing the tankiness of cheap warrens and generally making mid-game units (tier 2) more of a threat to the small ones.

![squirrels](https://i.imgur.com/Qs80spD.gif)

Also in this patch:

- Fine-tuning of random map generation,
- Changes to the ranked point system,
- And a couple of smaller convenience fixes/impovements (mostly in the UI and menues).

##Ranked##

Unlike the the Squirrels, new players on Ranked should have an easier time in the future:

Previously, players on the top of the ladder risked to lose a lot of points against low level players. This was meant as a benefit to new players, but also made players at higher ranks play somewhat merciless if they wanted to protect their points. From now on, point gains/losses will be rather low for matches with big rank differences, so the higher-ups can relax and take a more playful approach (e.g. using crazy/random decks), thus letting newer players have more fun, and learn to take their chances.

**New ladder score system:**

Rank/Points

- +6/9 (from 80)
- +5/12 (from 78)
- +4/17 (from 74)
- +3/24 (from 68)
- +2/30 (from 60)
- +1/24 (from 50)
- +0/20 (from 40)
- -1/18 (from 30)
- -2/15 (from 16)
- -3/8 (unchanged)
- -4/4 (from 5)
- -5/2 (unchanged)
- -6/1 (unchanged)

We intend to regularly reset the ladder in the future (at least on PC), letting players race to the top again and again.

Going back to this patch after a new season started will no longer reset ranked points.

For Windows users: If you tab out of the game while queueing on ranked, the minimized game's icon will now start flashing as soon as you find a match. (Not yet possible on Linux & Mac, sorry!)

##Discord & Linux/Mac##

Discord Matchboard entries now also get reported from Linux & Mac.

Discord rich presence is now working on Linux (is already working on Mac and Windows PCs).

##Menus##

- "Random" map type option is back in unranked/offline lobbies.
- Replays of games played on new Editor maps are working now (Workshop maps have already been working).
- In order to make existing Editor maps compatible with the replay function, just load and save it, again, or open the map's XML file and change the source tag from Random to Editor. The second trick also works on existing replays.
- Steam users can now be subscribed to an unlimited amount of Workshop maps. (Old limit: 50.)
- Fixed english ingame description (lore) for Drill Sergeant Volkov and some trait info.
- Small convenience improvements and fixes in menus.

##Map Generation##

- Bases generally offer more warren spaces, especially on maps with a lot of water. They can also have more organic-looking surroundings, from now on.
  ![new terrain](https://i.imgur.com/nbYGwzw.gif)
- Improved map fairness calculation: Distances between spawn bases and expansions should be more equal. Especially pocket expansions count as a massive advantage in fairness calculation, now.
- Slighty increased minimum distance of cabins from spawn Gristmills.

##Multiplayer Balance Changes##

**Squirrel** - needs to stand still for a total of 0.25s in order to shoot, so poking and retreating becomes more viable against Squirrels, and they become slightly less efficient in large numbers. To be precise: 0.1s cast time (from 0s), 0.9s cooldown (from 1s), 0.15s movement cooldown (from 0s).

**Toad** - small buffs to make them more useful, again, especially when microed deep into the enemy army: 9 HP (from 7 HP), 4x structure crit (from 6x) in whole aoe (has been from center tile only), 0.1s fuse time (from 0.25s), +3 damage on their actual target (from 0).

**Pigeon** - range 3 (from 4), duration 1s (from 2s), cooldown 1s (from 2s), will only stack 3 heals per tier (additional heals will increase only duration; pigs count as t2, mice as t1). Prevents some rare/weird behavior, e.g. 15 HP/s on a single Squirrel, while the Badger slowly dies.
![pigeon](https://i.imgur.com/ule7Ade.gif)

**All t2 units** (Ferret, Falcon, Skunk, Chameleon, Snake) - will push away units of lower tiers when rallied on top of them. This makes micro management of t2 much more reliable.
![t2](https://i.imgur.com/QdomVQc.gif)

**Skunk** - 30 HP (from 28 HP), gas duration 6s (from 5s).

**Boar** - 4x Crit against structures (from 6x Crit).

**Fox** - 22 damage per shot (from 20 damage), 0.4s cast time (from 0.2s), 0.2s root time (from 0.4s), makes better control possible.

**Barbed Wire** - 4 DPS (from 2 DPS, both to enemies and to itself), especially makes melee units less efficient against wire.

**Bullet Hive** - 24 HP (from 28 HP), 6 DPS (from 5 DPS).

**Balloon** - 6 aggro range (from 8 aggro range), reverting a change from last patch that sometimes resulted in strange behavior (not shooting at enemies when it could). Will shoot Commanders normally, again.

**Tier 1 Warren** - 36 HP (from 50 HP).

**Tier 3 Warren** - 64 HP (from 50 HP).

##Community News##

Many thanks to the whole community for the preparation of this patch, providing data, testing features and balance changes etc.

Thank you also for continuously organizing events, participating in them and/or streaming the game!

We've recently had an amazing series of battles, called the "12 Duels Challenge", with more than 30 participants, streamed in 16 Episodes.

Our weekly Pocketbot Cups are now taking place three times each Monday, and we're about to see a small 2v2 tournament becoming yet another frequent event each Tuesday.

On 15th September we'll see the next big event: A "New VS Old" Tournament, which will show us who are the best players of all times. Streamed on: https://www.twitch.tv/wittypun7
![old vs new](https://i.imgur.com/t2Lsxhe.png)

##Steam only:##

At least two big mods are in the making, also introducing new units and structures - and we intend to add Workshop support for customizations like that in future patches.
