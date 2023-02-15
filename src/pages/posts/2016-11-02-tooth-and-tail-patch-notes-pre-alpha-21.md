---
layout: ../../layouts/BlogPost.astro
date: "2016-11-02T18:52:51+00:00"
draft: false
tags: ["patch notes"]
title: "Tooth and Tail Patch Notes – Pre-Alpha 21"
---

[![Patch Notes](http://i.imgur.com/s38tpsj.png "Patch Notes")](http://i.imgur.com/s38tpsj.png)

#Pre-Alpha 21

This patch marks the reveal of a large number of quality of life changes. Many of these will require tweaking, so please provide us with any feedback you might have on them.

This latest patch is now live to all Alpha testers. If you want to participate in the Tooth and Tail Alpha, please jump into our Discord chatroom and talk directly with us [HERE](http://www.discord.gg/Pocketwatch).

##New Features

**Improved Commander Movement**

There will no longer be any input lag when moving the Commander online. This will result in more immediate Commander movement.

**Custom Keybindings**

You can now customize your own keyboard controls.

[![Keybindings Screen](http://i.imgur.com/lOgqixp.png "Keybindings Screen")](http://i.imgur.com/lOgqixp.png)

**Improved Keyboard Controls**

Moving at a diagonal angle will now cause your Commander to move diagonally in game space, rather than in 45 degree screen space. This makes it much easier to walk alongside cliffs, bridges, and cut tight corners.

[![Movement](http://i.imgur.com/8TwwKtF.png "Movement")](http://i.imgur.com/8TwwKtF.png)

**Improved Building Placement**

You will now build structures centered around the Commander rather than building from the northern most tile of the building.

[![Building](https://media.giphy.com/media/3o7TKE55KOw5yuhyWk/source.gif "Building")](https://media.giphy.com/media/3o7TKE55KOw5yuhyWk/source.gif)

Additionally, the game will now attempt to build structures in a nearby location if you attempt to build in an area that would normally fail.

[![Nudging](https://media.giphy.com/media/l0MYuaXyBwCN4ghzy/source.gif "Nudging")](https://media.giphy.com/media/l0MYuaXyBwCN4ghzy/source.gif)

**Fog of War Preview**

The last tile of your vision will now show as transparent fog of war.

[![Fog of War](http://i.imgur.com/2RHNqOj.jpg "Fog of War")](http://i.imgur.com/2RHNqOj.jpg)

**Bots**

- Bots can now be used in Online play
- Bots can now take more aggressive expansions
- Bots can now react to their own starvation strategically

**New Game Modes**

- Added 2v1 and 3v1 game modes

[![Gamemodes](http://i.imgur.com/uaMaBJW.jpg "Gamemodes")](http://i.imgur.com/uaMaBJW.jpg)

**Improved Minimap Colors**

The yellow of Archimedes was very hard to read against the terrain in the minimap. so we have brightened it to make it more visible. All other Commanders have received tweaks as well.

[![Minimap](http://i.imgur.com/0nS6rZg.png "Minimap")](http://i.imgur.com/0nS6rZg.png)

**Edge of Map**

The edge of the map will now be rendered with terrain and won't draw as pure black any longer.

[![Edge of Map](http://i.imgur.com/6JJbNaI.png "Edge of Map")](http://i.imgur.com/6JJbNaI.png)

**Improved Water Entry**

When moving with an analog stick, it is now much easier to walk alongside the edge of water. You will no longer skid inside and out of water just by walking alongside it.

[![Edge of Map](https://media.giphy.com/media/3o7TKRK3fUyb6vlOF2/source.gif "Edge of Map")](https://media.giphy.com/media/3o7TKRK3fUyb6vlOF2/source.gif)

##World Generation

- Bridges can now generate in nonlinear paths
- Random ramps that are added to world generation will no longer lead to blocked areas
- Player spawn algorithm changed. Players now have a small chance of spawning closer to each other or in the middle of the map
- Initial farm positions are now randomized
- Rocks will now spawn in corners that appear to be pathable, but aren't
- Daytime weather is now more frequent than the other weather types
- Worlds can now generate islands with windmills

[![Island](http://i.imgur.com/fCJCSB5.png "Island")](http://i.imgur.com/fCJCSB5.png)

##Gameplay

- You will now be invulnerable for the first 3 seconds after spawning from death
- Commander colision is now cylindrical. You can no longer walk within 1 pixel of cliffs and structures
- Moles and Pigs will no longer regain all their health upon finishing building
- You can now sell Moles

[![Sell Mole](https://media.giphy.com/media/3o7TKPbR5KY1zKfOgg/source.gif "Sell Mole")](https://media.giphy.com/media/3o7TKPbR5KY1zKfOgg/source.gif)

**Balance**

- Engineers for Hire no longer do 2x damage to structures
- Engineers for Hire now have 3 ATK, up from 2
- Winged Demons now have 6 ATK, up from 5
- Thermal Airsnipers now have 30 DEF, down from 40
- Uncle Butter now has 100 DEF, down from 120

**Targeting**

- Previous, Warrens had to be targeted first before any units standing on top of it. Now, players can target units before Warrens if their targeting reticle is closer to the Unit than to the center of the Warren.

**Uncle Butter**

- Uncle Butter has been completely redesigned.

> We were never happy with the poor readability of his previous AOE attack. The fire particle effect was never an accurate indication of what units were in and out of the AOE, so we have redesigned Butter.

> Butter is still a T3 AOE unit who deals great damage to large numbers of units.

Butter will now target an area up to 4 tiles in front of him, and ignite 10 tiles in that area. This attack will stream continuously.

[![Uncle Butter](https://media.giphy.com/media/3o7TKS9TCC9Gn5RdVS/source.gif "Uncle Butter")](https://media.giphy.com/media/3o7TKS9TCC9Gn5RdVS/source.gif)

Butter's fire effect occupies the same space as the Skunk gas, so both attacks will never occupy the same tile at once. If a tile is already occupied by an AOE, the flames or gas will fill the next nearest tile.

**Pigeon**

- Pigeons will now heal at melee range
- Pigeon heals can now stack

> This makes it easier to counter Pigeons with range, but harder to brute force attack through their healing output.

**Artillery**

- Artillery is now at 40 second build time to match other Tier 3

##Observer Mode

- Camera for observers will no longer slowly drift
- Camera movement has been smoothed for less jerky motion
- Damage HUD has been removed from observer when zoomed out
- Smoothed Camera zooming
- Observers can now see territory lines
- You can now zoom out while in fast forward mode

##UI

[![Main Menu](http://i.imgur.com/Kzw4VkF.jpg "Main Menu")](http://i.imgur.com/Kzw4VkF.jpg)

- Main Menu has been reorganized
- New Commander voice bubbles for build failures, farms going barren, and when you have over 500 food
- New UI added to lobby screen to to support Bots
- Players can no longer kick someone off their chosen Commander by choosing the same Commander
- New CRIT text for whenever special traits proc, like Sniper

[![Crit](https://media.giphy.com/media/3o7TKuNmCN2mujavEQ/source.gif "Crit")](https://media.giphy.com/media/3o7TKuNmCN2mujavEQ/source.gif)

##Art

- New particle effects have been added to support Uncle Butter's new attack.
- New particle effects for when you sell

##Audio

- New Archimedes music added
- Added temporary squirrel and ferret voice over
- Added sliders for music, sound effects, and voice over volume
- Fixed a bug that prevented the Windmill construction effect from playing

##Performance

- Borderless Window mode has now been added!
- Multiple performance optimizations with pathfinding
- The game will no longer stutter at the end of a match
- Decals will no longer fight over their draw position
- Fixed a bug preventing you from playing Split Screen in online matches
- For Windows Users, if your game crashes, there will be a folder called crashdata inside the main directory that you can use to help us fix the crash!

-AndyN.
