---
layout: ../../layouts/BlogPost.astro
date: "2015-01-27T21:11:00+00:00"
draft: false
tags: ["patch notes", "community", "spotlight"]
title: "Bi-weekly Recap #2: Daily Dev Streams are a Hit and First Animations!"
---

## Relax and enjoy the show!

<figure data-orig-height="371" data-orig-width="250" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\221886ced8d5a7d585cf1eb5b6afdd31554e1e845f373991041b509e38227c9c.jpg"><img alt="image" src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\da98976ab9a4bbbfca57db6a47878fb2585f6ffc3f8694f236ef41b131955599.jpg" data-orig-height="371" data-orig-width="250" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\221886ced8d5a7d585cf1eb5b6afdd31554e1e845f373991041b509e38227c9c.jpg"></figure>

## Want to see what it's like to make video games?

These last two weeks we tried something crazy in the office. We've always thought streaming programming in Visual Studio wouldn't be very entertaining, but it turns out it's a great way for us to interact with our fans while we work.

We don't have a regular schedule for when we go live, but you can definitely look forward to more inside looks into our development process. The best way to stay tuned is to follow our Twitch channel, which will notify you when we go live at www.twitch.tv/Pocketwatch

## LEADtoFIRE Gameplay Updates

**It's Alive! (Animation System)**

We implemented the first pass of the animation system. We will be using a skeletal animation system that allows for tweened and meshed animations using a software called Spine. We just implemented the technology into the code, so here's a peek.

<figure data-orig-height="133" data-orig-width="125" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\295e1b64bda36202f937ebfc2b02280e11db4d06a3f2490b27c8dfeb385f3f9b.gif"><img alt="image" src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\2217fba4293c21e045f2a8e15e8da01e8f81b66abd1498a51449176d58df7d04.gif" data-orig-height="133" data-orig-width="125" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\295e1b64bda36202f937ebfc2b02280e11db4d06a3f2490b27c8dfeb385f3f9b.gif"></figure>

There's still a lot of refinement to be done, but this preview is the very first animation technical test. Run Bellafide Run!

**Balancing Commander Health**

The Commander in LEADtoFIRE is required for all sorts of important actions like army control, economy management, and scouting. At the same time, we also want to make sure that the <span>Commander</span> is an important part of the game world itself, and not just a means for player interaction.

When you're tasked with important tasks like scouting and being at the center of every battle, collateral damage is unavoidable. New players often found themselves dying inexplicably, and so to temporarily fix the problem, we gave the Commander an abundant amount of health. Unfortunately, several problems arose from this change.

With too much health, the Commander could freely explore with zero consequence, allowing players to have almost near perfect information whenever he scouted the enemy.

<figure class="tmblr-full" data-orig-height="358" data-orig-width="500" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\1d9fbfc715764b6105fdd2a0e4e6bac8b6dc1bd216df2cf77197b53ac205accf.png"><img alt="image" src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\9c66c12d79162d4e1950acd3e3ad5a5ce97205c7c1d6964f693c16b8d2779d59.png" data-orig-height="358" data-orig-width="500" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\1d9fbfc715764b6105fdd2a0e4e6bac8b6dc1bd216df2cf77197b53ac205accf.png"></figure>

In the picture above, the Blue Commander is trying to set up fortifications to keep the enemy out. This provides a great number of strategic advantages, one of which is being able to hide your army from the enemy, thus increasing hidden information. With more hidden information, you can pull of sneakier attacks or surprise the enemy with a unit they weren't expecting.

Strategy begins to thrive when the game is no longer about reacting to what you see, but rather, anticipating your opponent's best laid plans.

Unfortunately, because we gave the players too much health, they could simply ignore this particular barricade and scout the enemy indefinitely. On the other hand, if we gave the player too little health, even the smallest skirmish could instantly kill the player. Dying in LEADtoFIRE doesn't end the game, but it can be frustrating to lose control of your character unexpectedly because a large volley of bullets took you out by surprise.

**New Player Damaged HUD**

It turns out, the problem wasn't the player HP, but how the HP was presented. So we've made some improvements.

<figure class="tmblr-full" data-orig-height="280" data-orig-width="500" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\25d7050407d8f8d0895ae567984e8aa1362740f389c9dd6d225b08a124915980.png"><img alt="image" src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\b5a8017e4bd1e9f4058badf37ec34dd7b0b8262349471a0163deb1de0596d36c.png" data-orig-height="280" data-orig-width="500" data-orig-src="/assets/blog/img/2015-01-27-bi-weekly-recap-2-daily-dev-streams-are-a-hit-and-first-animations\25d7050407d8f8d0895ae567984e8aa1362740f389c9dd6d225b08a124915980.png"></figure>

Whenever you take damage, the screen will slowly start to turn red based upon how much damage you've taken. The redness will start low and become more intense as you near death.

The Commander will still regenerate health out of combat as it always has, so that the player never gets into a position where they are on the brink of death and cannot do anything else. If you are getting low, retreat momentarily, and return to fight another day!

##Twitch Highlight of the Week

We did another tournament this week, this time featuring 2v2 Team matches. Here's the Grand Finals between Team Buttermilk and Team Mastamere.

<div class="vid-box">
<iframe frameborder="0" height="315" src="//www.youtube.com/embed/qoI1jZ-dMFQ" width="560"></iframe>
</div>

I did not expect to see such unique strategies in this series, it totally caught me off guard! Congrats to the winners, who also got Steam cash for their effort!

Check out the rest of the tournament on our Twitch channel: <a href="http://www.twitch.tv/pocketwatch/">http://www.twitch.tv/pocketwatch/</a>

##Community Spotlight - Dharoum

In this new section, we want to celebrate how our wonderful our community has been. This week we are featuring Dharoum, our <a href="https://www.youtube.com/watch?v=P-CtF4uvMAk" target="_blank">first official tournament champion</a>. For weeks he was untouchable, defining the meta, and establishing the competitive culture of LEADtoFIRE. As the first king, he will always be respected and we are glad to have him in our family of alpha testers.

Here's what he has to say:

"LtF allowed me to unleash the competitive animal inside of me, without having to go through hundreds of hours of tedious practice. Instead of learning dozens of controls and sharpening my reflexes, I could focus on what was really important! In order to win I had to make the right strategic and tactical choices in every situation. Once I learned to make the right choices and saw that these choices resulted in victory everytime I did, I really got hooked on LtF and made it my mission to become the number one player." -Dharoum
