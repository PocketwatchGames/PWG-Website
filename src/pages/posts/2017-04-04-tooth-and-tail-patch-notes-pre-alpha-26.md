---
layout: ../../layouts/BlogPost.astro
date: "2017-04-04T00:32:54+00:00"
draft: false
tags: ["patch notes"]
title: "Tooth and Tail Patch Notes – Pre-Alpha 26"
---

[![Patch Notes](http://i.imgur.com/V5PoFsV.png "Patch Notes")](http://i.imgur.com/s38tpsj.png)

#Pre-Alpha 26

Patch 26 features a newly revamped control scheme which will forever change how you play Tooth and Tail! This new addition will change how pro players differentiate their skills from each other by adding more choices at the high level, as well as making the game more intuitive for new players. It's a win for everyone! In other news, April will host the biggest Tooth and Tail tournament to date. You can read the official tournament info from Clash of Comrades [HERE](https://goo.gl/5SFrlD).

This latest patch is now live to all Alpha testers. If you want to participate in the Tooth and Tail Alpha, please jump into our Discord chatroom and talk directly with us [HERE](http://www.discord.gg/Pocketwatch).

---

##New and Improved

**1. Focus Fire Targeting**

The biggest change this patch was brought upon a change we implemented for PAX East. We never anticipated the high level play for Tooth and Tail to be achieved this quickly, but it is clear that as the competition heats up with more and more tournaments, players wanted more decisions to allow them to dictate the outcome of the battlefield. For the first time, Tooth and Tail will now feature true Focus Fire.

Focus Fire is the ability to tell all your units, regardless of where they are, to attack a single target. This ability has many implications. You can now snipe high value targets or burst down key structures while ignoring the enemy army. This obviously implies massive balance changes.

I don't expect the game to be well balanced right after this change, but please continue to participate in #balancing in our Discord channel to let us know how to make it better.

[![Focus Fire](https://media.giphy.com/media/xUPGcDElSJRiYvDbDG/giphy.gif "Focus Fire")](https://media.giphy.com/media/xUPGcDElSJRiYvDbDG/giphy.gif)

**2. Starvation Rules**

We revisited the rules of starvation to help resolve an exploit that could prolong the game indefinitely. The new system works as follows:

Starvation and its corresponding timer will only be removed upon completion of building a farm. This means that the act of staving off starvation will require a bit more planning. To reflect this, initiating the build farm action while starving will add 30 seconds to your starvation timer.

[![Starvation](https://preview.ibb.co/fBYhJv/starving.png "Starvation")](https://preview.ibb.co/fBYhJv/starving.png)

---

##Gameplay

**Balance**

Balance changes this patch will be light, but it is for good reason. We have no idea how Focus Fire will affect the current balance. We can attempt to guess and throw some changes in this patch, but what is most important is to try to extract data from this implementation. When the patch goes live, we will get concrete evidence on how Focus Fire affects the game and that will give us a more informed opinion on how to balance going forward.

Some small adjustments are being made in response to the previous patch however.

- Falcons are now 16 DEF, down from 18
- Skunk gas is now a 15 second duration, up from 10 seconds
- Skunks now fire once per 2 seconds, down from once per 1 second

---

##Sound

- A sound will now play if unit production is blocked
- A sound will now play if a unit completes production
- Many of the musical pieces have been revised with live performances

---

##UI

- Holding Y on the Controller will no longer hotkey a unit by default. This is to prevent new users from accidentally hotkeying. You can re-enable this feature in keybindings.

---

##Modding

The following variables have been extracted out to XML data files which you can now modify.

- Starting Food
- Poison Status Effect Damage per Second
- Heal Status Effect Health per Second
- Wolf Buff Multiplier
- Default Unit Move Speed
- Structure Health, Build Cost, Build Time, Production Cost, and Production Time.
- Many More!

---

##Performance

- An incredible amount of optimizations have been implemented in rendering, pathfinding, AI, and more
- Many bugs pertaining to the online lobby have been fixed

-AndyN.
