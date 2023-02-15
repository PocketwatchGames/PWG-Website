---
layout: ../../layouts/BlogPost.astro
date: "2015-09-09T17:43:36+00:00"
draft: false
tags: ["patch notes"]
title: "September Patch Notes for Tooth and Tail"
---

[![Patch Notes](http://i.imgur.com/s38tpsj.png "Patch Notes")](http://i.imgur.com/s38tpsj.png)

#Pre-Alpha 1

Hello fellow revolutionaries! I’m Andy Nguyen, one of the gameplay designers on [Tooth and Tail](http://www.toothandtailgame.com/). Going forward we plan on doing monthly posts about the current state of gameplay and design. These posts will be half patch notes, half designer insight, and it will allow us to engage both alpha testers and those who haven’t yet had a chance to play Tooth and Tail!

##Gameplay
[![Tier 1](http://i.imgur.com/yTKK65n.png "Tier 1")](http://i.imgur.com/yTKK65n.png)

**Tier 1**

- Crows: 20 ATK / 15 DEF (+5 ATK)
- Chameleons: 15 ATK / 15 DEF (+5 ATK)
- Lizards: 20 ATK / 10 DEF (+5 ATK)
- Squirrels: 10 ATK / 10 DEF (no change)

> We have a slew of Tier 1 changes that were made as a result of seeing the same compositions of Tier 1.

**Moles**

- Moles: 10 ATK / 25 DEF (+5 DEF)

> As a result of these stronger Tier 1s, the Mole has been given 5 more HP to bring the Mole Rush back into the game.

**Honey Badgers**

- Honey Badgers: 100 ATK / 50 DEF up from 80 ATK / 40 DEF

> We want to be as careful as possible buffing the Badger because she is a versatile unit like the Squirrel, so she technically shouldn’t be as good as other specialized units. However, she is a Tier 3, and as such, she should wreck face if you see her.

[![Badgers](http://i.imgur.com/UqbmigH.gif "Badgers")](http://i.imgur.com/UqbmigH.gif)
_(Note: These units are currently not animated, and the particle effects are alpha.)_

**Chickens**

- Chickens are back! They heal at +15 and can only heal one target at a time.

> We have now introduced a system that makes it so a single target can only be healed by a single chicken at any given time. We have tripled their healing output to accommodate for the lack of stacking.

**Sniper Balloons**

- Flying and Sniper are now +4 Vision radius rather than 8 Vision radius total.

> Our goal with the Sniper Balloon is to make it a scouting tower, a structure used for utility as much as defense. Now, the Sniper Balloon has +8 vision, a total of 12 because it is both flying and a sniper.

**Other Changes**

- Supply Outpost removed, replaced with Barbed Wire
- Territory is no longer granted by non-HQ structures
- HQs now provide a territory of 12 tiles
- All Artillery is now 8 range
- Removed the basic attack from Snake
- Snake poison value increased from 15 dmg over 30 secs to 30 dmg over 30 secs
- Landmines and Barbed Wire are no longer proxy and no longer grant vision.
- Foxes have 20 DEF down from 30
- Wolves now buff Toad damage
- Structure HP now starts at 15% when you begin building, up from 1%
- Frogs now explode faster
- Raccoons removed
- Bunkers removed

##HUD

- In-game emote chat added:

> There are now 4 categories of chat:
> Out of Character, (Ally) Strategy, (Ally) Tactical, and Lore.

> Each category has 4 different things you can say, for a total of 16 chat commands. These can be accessed with ZXCV or the D-Pad.

- Order markers added to confirm Rally and Retreat commands
- Stacking status effects are now displayed via a multiplier
- New animation whenever status effects are applied
- Resolution and Full Screen options added
- Observer improvements
- Damage numbers now appear above units taking damage
- Damage numbers now increment in size as you take more damage
- New minimap background
- New map alerts

##Animation and Particles
[![Rally](http://i.imgur.com/bhp1fqP.gif "Rally")](http://i.imgur.com/bhp1fqP.gif)

- Hopper now has Run, Rally, Retreat, and Death animations
- Temporary death animations added
- Boar run animation added
- Owl animations added
- Squirrel animations added
- Active HQ animations added
- Pig animations added
- Machine Gun Turret attack animations added
- Particle effects for AOE explosions added
- Damage preview for Siege units added
- Unit spawn particles added
- Unit sold particles added
- Selling structure particles added
- Stealth entry and exit animations added for Chamleon
- Slide animations and particles for Commanders added
- Landmine pre-explosion animation added
- Implemented a system to allow for more accurate particle emissions
- Smaller Machine Gun Turret and Artillery art
- Defensive structure directional art added
- New Land mine art

##Art

> Adam DeGrandis has added a bunch of new art.

- Smaller Tier 1 Art for better readability
- Idle art implemented for all units and structures
- Moles now carry pistols in their art
- All new Commander portraits for all four Commanders
- Ram is now a Ferret
- Entities now face the units they are attacking
- Blast marks added
- Bloodstains added

##Environment
[![Water](http://i.imgur.com/cWVT2Ur.png "Water")](http://i.imgur.com/cWVT2Ur.png)

- Water now has procedurally generated surface lighting
- Wind gusts added to the world
- Water and wind have variable animation speeds
- Wind particles added
- Grass positions fixed
- Procedurally generated sun rays added
- Updated weather effects system
- Grass is removed when something is built on it
- Fixed water reflectin opacity
- Improved ramps and cliffs
- Terrain overlays added
- Wind ambience added

##Performance

- Improved optimization for graphics rendering
- Improved decal rendering
- Removed unused decor for improved performance
- Replays have improved performance
- Improved particle performance

-AndyN.
