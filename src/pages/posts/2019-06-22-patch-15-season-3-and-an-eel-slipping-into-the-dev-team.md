---
layout: ../../layouts/BlogPost.astro
date: "2019-06-22T18:32:16+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.5: Season 3 (and an Eel slipping into the dev team)"
---

![Patch 1.5.0.0 Season 3](https://i.imgur.com/RpwHESD.png)

While Andy has shifted his daily focus to streaming development of Pocketwatch's next game (Monday-Friday on the [Pocketwatch twitch channel](twitch.tv/pocketwatch)), Tooth and Tail shall live on! EELuminatus (you might have seen him playing with Lizards or advertising his mods) will be working on Tooth and Tail patches from now on. A new season has begun…

##Ladder Reset##

Some players started to feel lonely on the top of the ranked ladder, some wanted to experience the thrill of fighting their way up, again - so we put everyone back to the bottom. Happy climbing!

![Season 3](https://i.imgur.com/IZMa0Co.gif)

If the ladder reset hits you just before you managed to complete the ranked achievements: No worries! We just happened to add alternative ways to get them…

##Alternative Ways to Obtain Multiplayer Achievements##

Some achievements required players to win (lots of) ranked games, which could make them very hard to get. Now there are alternative ways to unlock these achievements, all possible in unranked and offline matches against 1-2 CPU opponents.

- Agitator: Win a 1v1 against a medium CPU.
- Rabble Rouser: Win a 1v1 against a medium CPU.
- Militant: Win a 1v1 against a hard CPU.
- Firebrand: Win a 2v1 against two medium CPUs.
- Hero of the Hungry: Win a 2v1 against two hard CPUs.
- The Great Provider: Win a 2v1 against two brutal CPUs.
- Fury of the Feast: Win a 2v1 against two ruthless CPUs.
- Deadbones: Win a 1v1 against a ruthless CPU in less than 5 minutes.

(You can only get these achievements on generated maps, not on editor/workshop maps!)

##Multiplayer Balance Changes##

![Snek](https://i.imgur.com/p5T0evx.gif)

As a result of mods made and tested by the community, a couple of multiplayer balance changes is coming with this patch. Probably the most important changes in a nutshell are: Toads, Moles and Landmines get nerfed; Chameleons, Boar and Drumfire Cannon get buffed; Snake poison wears off outside territory, but slows down enemies while it lasts.

Now, here are all the juicy details:

- **Daze** - Only slows down movement (slowed down the whole simulation, including attack speed, before). This change makes mines less crippling in fights.
- **Focus Fire** - Can be used for a structure (group), e.g. for letting only your Balloons focus the incoming Badger (not the pigeons) or making your Drumfire Cannon shoot directly at the opponents’ Mill (not the Pigs).

![Focus Fire](https://i.imgur.com/FBjgA1r.gif)

- **Mole** - 2 DPS, 3x crit (from 3 DPS, 2x crit), same power against structures, less against units.
- **Toad** - 7 HP, 3 damage, 6x crit (from 8 HP, 4 damage, 4x crit); structure crit only affects one tile, in the center of the explosion (applied crit to all structures in the aoe, before); aggro 3 tiles from own position (has been 2 tiles from rally point). They lose some of their power, but now they go after Lizards even if they are unattended.
- **Chameleon** - 36 HP (from 30 HP); 0.25s stealth entry time (from 0.5s)
- **Skunk** - 28 HP (from 32 HP); cannot target Commander (could target Commander, before)
- **Snake** - poison is cured 5s after last attack regardless of territory (used to be cured only inside own territory and lasted forever outside territory); poison slows down movement (Daze)
- **Boar** - 6x damage against structures (from 2x damage against structures)
- **Badger** - 60 HP (from 65 HP)
- **Fox** - 24 HP (from 25 HP)
- **Barbed Wire** - slows down movement speed by 80% (from 75%)
- **Landmine** - 4 HP (from 8 HP); 3s Daze duration (from 2s Daze duration), but only slows down movement, not attack speed
- **Balloon** - does not target Commander if enemy units are nearby (within a radius of 8 tiles)
- **Artillery** - 28 DPS (from 20 DPS)
