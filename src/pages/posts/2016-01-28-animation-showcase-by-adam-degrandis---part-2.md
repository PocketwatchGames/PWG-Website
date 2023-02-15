---
layout: ../../layouts/BlogPost.astro
date: "2016-01-28T20:51:30+00:00"
draft: false
tags: ["art", "adam"]
title: "Animation Showcase by Adam DeGrandis - Part 2!"
---

Hey everyone! Art director Adam “[Spices](https://twitter.com/adamdegrandis)” deGrandis with the second part of the Animation Showcase. If you didn’t read the previous installment, you should ([part 1](http://blog.pocketwatchgames.com/post/137318209381/animation-showcase-by-adam-degrandis-part-1)), but the TL;DR version is through careful planning and some trial and error, we developed a really nice pipeline for developing and animating our units, and it was time to apply all that knowledge to the structures. It had a ton of fun gifs, so you should really just check it out.

The structures followed a slightly different path to completion. For a long while, the structures existed as just static sprites in-game. We had the pipeline ready, but we didn’t really know how we wanted them to visually work in-game. Designing the choreography for the various states of the HQ helped me sort it all out.

As I mentioned before (I think), the HQ has six different construction animations that get called in order. It also has a collection of particle effects, some of which get called for specific sequences and some that play for the duration of construction. Planning this all out was one of the bigger single tasks that I did on the game. Let’s look at some of the sketches from that.

![hq1](http://i.imgur.com/yhdliwM.jpg)
![hq2](http://i.imgur.com/dc2XTZS.jpg)
![hq3](http://i.imgur.com/vIWbp3X.jpg)

Ok, so these aren’t really SKETCHES, but they are what we used to help development the idea. In fact, they’re one of the final iterations, and are kind of a “I need code support here” map for Alex Ferbrache (coder/solid dude). Those images list out all the different states, sequences, and particles that make up the HQ as it appears in game. When it came time to production, I approached the work similarly to how I did with the animals. The only difference is that instead of drawing each frame in flash, I created a rough “animatic” - an animation industry term for what amounts to an animated storyboard. Check it!

![hqBuildAnimatic](http://i.imgur.com/XgZJdLb.gif)

Once the hq was done, it was clear we could use a very similar approach for all the defensive structures in-game. Instead of having six construction sequences, we only have one and a half; a single frame of lumber and dirt that gets held until 2 seconds before completion, and the “real” animation that gets played after that. And just like the HQ, we have particle effects that get called at different times alongside effects that play for the duration.

![artillery](http://i.imgur.com/ltbkqbl.gif)

In December, me and Harrison, one of our interns at [Chickadee Games](http://www.chickadeegames.com), blitzed on the remaining units. I’d do the initial roughs and the fills, and Harrison would do the detail painting. In this fashion we pushed through the wolf, the badger, and the chameleon. Meanwhile I did the mole and the pigeon myself. Let’s take a look.

![animation1](http://i.imgur.com/jXBSiZ5.gif)
![animation2](http://i.imgur.com/jLoM8KP.gif)
![animation3](http://i.imgur.com/RaEDJWi.gif)

But wait! That’s not what the chameleon looks like anymore! The feedback on that design was that it looked too much like an ogre and didn’t have enough chameleon-ness. So we altered the character to be less of a sneaky assassin and more a wall-eyed brute. And with once I synced this up, the principle animation was complete.

![finalchameleon](http://i.imgur.com/lWz5dpi.gif)

It felt really good to upload him to the repo. Even though there’s still some minor edits to do across the roster, it felt like crossing a finish line. And game development is a collection of marathons; you usually have to run a long time before you hit a finish line. It’s good to take a moment to pat yourself on the back when you do.

I checked him in on a sunny Saturday afternoon. I was in the office by myself for the purpose of finishing him. I poured a celebration beer (we have a couple kegs in the office… awesome, I know), sat down and put my feet up, and looked out over Portland city skyline with an accomplished smile.

As always, thanks for reading!

Check out more of Adam’s touchy-feely malarky via [Twitter](https://twitter.com/adamdegrandis), [Tumblr](https://adamdegrandis.tumblr.com), and [ChickadeeGames.com](http://www.chickadeegames.com)
