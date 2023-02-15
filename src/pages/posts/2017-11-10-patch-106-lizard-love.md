---
layout: ../../layouts/BlogPost.astro
date: "2017-11-10T21:20:06+00:00"
draft: false
tags: ["patch notes"]
title: "Patch 1.0.6: Lizard Love"
---

![Lizard Love](https://i.imgur.com/ZzSOJYo.jpg)
This patch is mostly bug fixes and balance changes, no major new features to announce. We're trying to fix some of the problems with the meta from the past couple of patches so we can push a patch to PS4!

##Balance##

As for balance changes, we've scaled back some of the more drastic changes from previous patches, trying to bring things closer to a balanced meta. And there's a 1 HP lizard buff that we're hoping makes all the difference in the world to high level lizard players!

- Tier 3 units now take 45 seconds to build the warren and unit production (up from 40)
- Lizard: 11 HP (was 10)
- Toad: 9 damage to single tile, 3 damage to 3x3 aoe, 9 health. Still has double damage to structures. Once initiating their 0.25 second self-destruct, the explosion is guaranteed, and will be centered on the tile where their target was standing when they initiated the self-destruct countdown. Primary damage is limited to 1 unit and 1 structure. (Toad was a flat 7 dmg in a 3x3, centered on their own tile, they had 10 health and structure crit)
- Mole: 2 dmg, 25 HP with double damage to structures. Selling has returned, but there is now a 1 second sell timer, if they take damage during that countdown it is cancelled. This brings moles back close to what they were when mole rushes were dominant, but with the nerf of the sell timer.
- Fox: 0.5 second movement freeze post shot (from 0.75). Since they still have a 0.25 second cast time, they are now rooted for a total of 0.75 seconds instead of a full second.
- Boar: Butter still has a bomb, but it's less dominant and his stats are largely returned to what they were before the bomb. He's now 100 health (from 80), with double damage to structures. He is no longer slow. His bomb now explodes in a checkerboard pattern covering his entire range. Each tile in the bomb creates a single flame, doing the same damage as his primary flamethrower, for 0.8 seconds. This does not hit air. Tile offsets are specifically: (-4, -2), (-4, 0), (-4, 2), (-3, -3), (-3, -1), (-3, 1), (-3, 3), (-2, -4), (-2, -2), (-2, 0)... etc
- Barbed Wire: Health 30 (was 25). Now takes damage for ALL damage that it deals, as opposed to just a single target at a time.

##World Gen changes##

- Several map types have fewer forests and decor, leading to fewer linear maps.
- A couple of map types that had nearly zero decor have had some added to make them slightly more dense.
- A couple of map types that had TONS of water have had their max lake and river size reduced.
- Many map types had more random ramps added across the board.

##Story Mode##

- Howling Vell stationary defenses reduced
- The War For Meat stationary defenses reduced
- Sage Marro Speaks: swapped one lizard warren for squirrels, reducing the intensity of the nightly raids

##Bug fixes##

- Platinum Achievement (actually) fixed
- Holding rally near to structures with units that can't target structures (fox, snake) will allow those units to find alternate focus fire targets, or allow them to retreat. Fox will no longer get hung up when the player is trying to retreat through warrens.
