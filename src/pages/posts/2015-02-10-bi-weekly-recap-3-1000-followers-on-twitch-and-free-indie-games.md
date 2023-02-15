---
layout: ../../layouts/BlogPost.astro
date: "2015-02-10T18:24:23+00:00"
draft: false
tags: ["patch notes", "community", "spotlight"]
title: "Bi-weekly Recap #3: 1000 Followers on Twitch and free Indie Games!"
---

## Now with more giveaways!

<img alt="image" src="http://i.imgur.com/hum4Ka1.png">

## 1000 followers on Twitch!

Our audience is growing! These last few weeks we did back to back giveaways with the hottest new indie games. We gave away keys for Darkest Dungeon, Armello, and Gravity Ghost. There are definitely more to come, and you always have a chance to win just by watching.

As a result, we reached 1000 followers on Twitch! Huzzah!

Go to www.twitch.tv/Pocketwatch for a chance to win free game keys.

## LEADtoFIRE Gameplay Updates

**The Escher Problem (Elevation Improvements)**

Analyzing your current surroundings and optimizing your terrain is a core strategy in LEADtoFIRE. We experimented with various elevations in the game and they have really led to some interesting maps, almost Escher-like.

<img alt="image" src="http://i.imgur.com/kZlHFpg.png">

Look at all those ridges! This neat terrain came at a price though. Unfortunately, while the environment was visually interesting, it wasn't very fun to play in. So to improve player navigation, we cleaned up the terrain to be more clear.

<img alt="image" src="http://i.imgur.com/0NuxHaB.png">

There are now only two elevations: High Ground and Low Ground.

1.  High Ground is the best territory because it provides vision onto Low Ground.

2.  Low Ground is riskier because it can't see on to High Ground, making you vulnerable to ranged units.

Yay! We can still accomplish terrain based strategic gameplay while having it be easy to navigate.

**I can see clearly now, the fog is gone!**

The initial implementation of fog of war was based on Monaco's first tile-based line of sight visibility. We want fog of war to be a part of the game because it enhances the strategy when you have to predict your enemy's movements. However, having tile-based visibility on the Commander presented some visualization problems.

<img alt="image" src="http://i.imgur.com/cfYassW.png">

The game got really noisy, especially when you were moving during high action sequences. So how do we maintain the intensity of hidden information while cleaning up the visual noise of line of sight?

It was right under our noses!

Unique to LEADtoFIRE from other real time strategy games is the idea that a camera is locked to your main character. Because you can only see what your character sees, fog of war is essentially emulated by the very fact that your vision is already limited by the screen. This means we can remove the tile based fog of war to clean up the screen a little.

But what about high ground and tall grass?

<img alt="image" src="http://i.imgur.com/biqD8TP.png">

High ground and tall grass avoid the visual noise problem because they are digital mechanics. These mechanics are clearly seen or hidden, based on your position in the world. Rather than having to focus on line of sight as it updates every frame, you just need to look at whether or not you are on the high or low ground, or inside or outside tall grass.

The visual difference is very clear.

##Twitch Highlight of the Week

We've been focusing so much on giveaways this week, here's a highlight of one of LEADtoFIRE's biggest fans winning a copy of Darkest Dungeon.

<div class="vid-box">
<iframe width="560" height="315" src="https://www.youtube.com/embed/x0nFVLZHaus" frameborder="0" allowfullscreen></iframe>
</div>

Thanks to <a href="https://twitter.com/lachhh">@Lachhh</a> for making the tool, which you can find <a href="http://lachhhandfriends.tumblr.com/post/105030469580/download-the-giveaway-tool">here</a>.

Everyone has a chance to win free Steam Keys on our Twitch channel: <a href="http://www.twitch.tv/pocketwatch/">http://www.twitch.tv/pocketwatch/</a>

##Community Spotlight - YouthfulIdealism

This week, I want to talk about YouthfulIdealism, who to me, represents all that is positive about our community. YouthfulIdealism came into the alpha eager to learn and willing to play. Through persistence and willpower, YI grew to become one of the strongest LTF players in our community, and now he shares his knowledge with all newcomers so that they may travel along his journey.

Here's what he has to say:

> Several weeks ago, I was _nearly_ chosen for the community spotlight. Instead, Skrymir was selected--truly lucky for the devs, because my snazzy quote would have been "LOVE THIS GAME OR I WILL POUR FIRE ANTS ON ALL YOUR CHILDREN!"

> Now that I've been given a little time to think, I've decided that it would be uncharitable to pour fire ants on anyone without providing some form of explanation. LtF is a perfect example of what RTS games should be. It perfectly blends simplicity with depth, deftly removing many of the tired issues that plague the genre: Spamming one type of unit is never, ever a solution; micromanagement is mildly helpful at best; terrain really, really matters; the game actually requires thought... I could go on and on. And so, through bugs and pre-alpha graphics, LTF has won my coffee-fueled, manic playtesting.

> -YouthfulIdealism
