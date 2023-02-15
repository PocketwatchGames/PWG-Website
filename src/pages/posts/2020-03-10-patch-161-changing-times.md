---
layout: ../../layouts/BlogPost.astro
date: "2020-03-10T17:53:52+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.6.1: Changing Times"
---

# Patch 1.6.1.0: Changing Times

![Hyot!](https://i.imgur.com/uTACAdn.png)

Most of the changes in this patch are rather subtle or even behind the scenes. Especially the balance changes are mostly about timing, e.g. allowing surprisingly quick Mole attacks and making it easier to get tier 3 units on the board. It should also lower the efficiency of the popular mass Falcon + Chameleon combo in the late game.

On top of that:

- some details have been improved (or fixed) about rally commands and map generation,
- the difficulty slider now has a bigger impact on the Civilized missions in the Story Mode,
- and some new possibilities have been added for modders.

The community also keeps organizing one event after the other: on top of the new monthly tournament on custom maps, a league for new and experienced players alike is about to start on March 13!
See more details below!

![First Moles can spawn immediately](https://i.imgur.com/WvJ2WVB.gif)

### Balance:

- **Mole:** the first Mole of each warren spawns as soon as the warren is finished and the Mole is paid
- **Skunk:** gas canisters hit within 0.4s (from 0.5s), even faster if the target is nearby
- **Chameleon:** 0.5s recloak time (from 0.25s)
- **Falcon:** shoots 12 bullets over 1.2s, then reloads for 1.8s (from: 10 bullets over 1s, reload for 1s), damage per bullet is still 1, DPS reduced to 4 (from 5)
- **Boar:** 100 HP (from 110 HP)
- **Tier 3 & Artillery:** 45s build/production time (from 50s)
- **Flying over Gristmills:** air units can no longer stay on top of a Gristmill, that means they can still move over it, but no longer rest or shoot there

### Commander Inputs:

- easier targeting against ground & air units: if a ground unit and an air unit are on the same tile, you can target the air unit in the upper half of the tile, and the ground unit in the lower half
- fix a rare bug that caused some units to ignore the retreat command (hold rally without target)

![Better targeting against air+ground armies.](https://i.imgur.com/JkyzJXC.gif)

### Map Generation:

- improved fairness calculations
- inaccessible high ground cannot be as close to a player's spawn base as before

### Difficulty Slider (Story Mode):

Some players noticed that the **3rd and 4th Civilized missions** (Vacancee Downfall & Sage Marro Speaks) were not sufficiently affected by the difficulty slider - very hard for new players, same old strategy for veterans. With this patch, the difficulty setting will get a much bigger impact on these missions. That means they will be a lot easier on low difficulty, but also more challenging on higher difficulty.

### Modding Possibilities:

A few players already started working on Mods, but they want more power... and I'm experimenting with new units/balance, as well.
That's why I added support for a couple of mechanics that have not been used in the game, before:

- fixed Food Crates placed in the Editor (they disappear when collected, but do not respawn automatically)
- added action to set production progress (Type="SetProductionProgress", Value of 0 means no progress, Value of 1 means production finished; used when a new Mole warren has been built)
- structures can have the property "AirBlocking": if true, air units cannot stay on top of that structure (see the balance change "Flying over Gristmills")
- structures can have the property "BurrowTarget": if true, Commanders can burrow there like they can to Gristmills and Campfires
- added action "SpawnStructure" (used like the Owl's SpawnUnit; warning: will only happen when a structure can be spawned at that position and the owner has at least as much as the structure's cost of food in stock, even though the cost will not be automatically substracted from the food stock)

![Structures can be spawned by actions.](https://i.imgur.com/sA5CbQG.gif)

- if a structure that provides territory is destroyed, the territory bounds will be adjusted immediately (previously this only worked for Gristmills and Campfires; warning: does not (yet) work when the structure is sold!)
- heal/stim behavior can be applied to structures
- new status effect "status_blinded" reduces the vision and attack range of affected units/structures to a certain value ("MaxBlindedRange" in balance.xml)
- "OutsideTerritory" condition can be used to define the Scope of Events (= effectively the opposite of "InTerritory", but used the same way)
- improved display of negative food generation (warning: if you reach negative food stocks, you won't see a minus sign; instead, the displayed number will simply turn red)

### Community News:

![James' Royal Knights regained the upper hand.](https://i.imgur.com/7wDL9Tl.gif)

After several turns of events, the war of the **21 Generals** ended somewhat surprisingly. The faction led by (King) James, who emerged victorious from the last couple of events, initially struggled to defend their territory against the insurgents. As soon as the "Royal Knights" recollected, however, they conquered the biggest part of Vyeshal within a few weeks. The rebel armies surrendered, and battles between royalists and mercenaries ensued. One of James' followers, Haru, eventually seized the opportunity to overthrow his leader. Rumor has it that James himself provoked this act of treason by wrongfully suspecting Haru of being a spy all the time. After Haru successfully usurped the over-cautious King, he even managed to beat the mercenary champion Arilou, and thus to end the war.

In the meantime, a new monthly tournament called **"Vyeshal Kyawlnez"** has been established by JetEriksen this year: a 1v1 tournament on custom mirror maps - a good occasion to see rare, map dependent strategies, as well as some glorious cheese!

This weekend, the Tooth and Tail **Championship 2020.1** will start: a new league, with beginner, intermediate, and premier divisions, that will last for several weeks. Currently about 60 players are signed up. The first battles will be casted March 13 to March 15 - time and channel of these (and other TnT streams) will as always be detailed in [this thread. ](https://steamcommunity.com/app/286000/discussions/0/1640915206466368885/)
(Subscribe if you want to be notified!)

Have fun!

EELuminatus
