---
layout: ../../layouts/BlogPost.astro
date: "2016-01-15T01:54:28+00:00"
draft: false
tags: ["art", "adam"]
title: "Animation Showcase by Adam DeGrandis - Part 1!"
---

Art director [Adam DeGrandis](https://twitter.com/adamdegrandis) here, with another fun art blog. As seen on tv.

On December 19th, we passed an important milestone; all the principle animation has been completed for all units and structures. What that means is that all our little soldiers have an idle animation, a movement animation, an attack animation, and a combat idle - the animation that gets played while a unit is waiting between attacks. Meanwhile, our structures all have a construction animation and four attack animations, one for each cardinal direction. There are some fixes that need to be made and a few sequences that need some code support, but the broad strokes are all there and accounted for. Pretty exciting stuff. Yay for finishing.

So with that in mind, I wanted to walk through the development of our animations, show you some stuff that got cut, and show you some of the cool stuff of where we ended up.

Originally, before we ever moved to our pixel aesthetic, units were going to be angled with the grid. We’d have four sets of movement and attack animations for each unit, one for every cardinal direction, instead of having them more-or-less in profile like we do now. So, the first rough animations I did reflect that. Let’s take a look.

![Frog Sketch](http://i.imgur.com/ml0udtS.gif)
![Mole Sketch](http://i.imgur.com/Mdd6Ean.gif)
![Badger Sketch](http://i.imgur.com/40H3ehv.gif)
![Wolf Sketch](http://i.imgur.com/4FLn8oF.gif)

Kinda neato, right? If you’ve been following with development or played the alpha, you’ll recognize all these folks. There’s a few little differences - the mole is carrying pistols, for example - but the cast here is looking pretty much how they look now. I’ve got a few points of interest here. One, these were done before we totally knew what our animation pipeline was going to be. Andy had looked into having an animation studio hand draw all these frames, but that’d be super expensive. We had also looked into using a Spine - a skeletal animation system for 2d games - Spine is mostly used for platformers and not games with an iso perspective, and I expressed doubts we’d be able to get solid results with the system. I myself was suggesting we go the Bastion route, and model our characters in 3d. In the end, going the pixel route made it very cost effective to simply paint all our frames by hand.

But the long-winded point is that these animations were sort of done blindly. I didn’t know how we were going to get them into the game, and so I knew I was running the risk that this work would all be wasted. I still wanted to dive into the task, though, and start getting a feel for how these little guys should move. Another minor point is that all of these cycles are six frames. Since I couldn’t test them in game, I actually didn’t know how many frames I’d need to make a character move naturally in the world. I picked six because it’s a good speed for an up-tempo run. In the end, we used six for the tier 1 units, but all T2’s and T3’s have more frames; six looks blazingly fast for those guys.

These were done in April, though, and the roster was different then. Case in point, I animated roughs for animals that didn’t end up making the cut, or that stuck around but changed to different animals. Presenting the turtle (got cut), the raccoon (got cut), and the donkey (changed to ferret).

![Turtle Sketch](http://i.imgur.com/UCGYjNf.gif)
![Racoon Sketch](http://i.imgur.com/BSbj5O3.gif)
![Donkey Sketch](http://i.imgur.com/hYAPR1J.gif)

Around the same time these were being done, we started playing with our pixel art direction. Once we made that decision, I started a small number of units from different tiers. A big part of being an art director and designing a good art pipeline is risk mitigation. You have to spend a good deal of time thinking about the best way to produce a chunk of artwork, but then it always makes sense to test those assumptions and produce some of that art with the pipeline you’ve designed. You’ll have hard data at that point, and can use it to modify your pipeline before diving into full production. So, after we had made our decision to move to pixels and I had a basic idea of a pipeline in mind - roughs in flash, test in-game, block out colors in photoshop, test in-game, final detail painting in photoshop, upload - it was time to test it all out. Here are some from that first batch.

![Frog](http://i.imgur.com/YRe4RkQ.gif)
![Chicken](http://i.imgur.com/o3QZf1X.gif)
![Lizard](http://i.imgur.com/9YV6qOG.gif)
![Skunk](http://i.imgur.com/5nad8Hy.gif)
![Falcon](http://i.imgur.com/1NMo6wX.gif)
![Boar](http://i.imgur.com/SGi7UKT.gif)
![Owl](http://i.imgur.com/iYrOCNa.gif)

The test was very successful. I learned that I needed more frames for the sequences of the bigger units. I learned how best to move the artwork down the pipeline, and how to setup my files to allow for easy editing. It’s worth noting that even at this point, we have units that don’t appear as they do now. The chameleon is now a T2 with a much different personality, and the chicken morphed into the pigeon. The biggest change from then to now, though, is actually not terribly noticeable in this context.

After we had about half the units animated and in-game, we arrived at the conclusion that in order to make the game more readable, we needed to have a greater difference in scale between the tiers. The T1’s had to be much smaller, and the T2’s had to be slightly smaller as well. This was an annoying decision to make, as it was hard enough to get good acting out of the T1’s at their original size. When you’re painting something at such small resolutions, every pixel counts. But as a game artist, my goal isn’t to make beautiful artwork in a void, it’s to make beautiful artwork that serves a design. And the design would be more clear with smaller T1’s and T2’s, so I went through the process of shrinking down the frog, squirrel, skunk, falcon, and chameleon, and chicken.

Believe it or not, takes just about as much time to shrink a unit down than it does to start from scratch, and it’s about 100% more frustrating. I was happy when it was over, unlike this blog post. I’m sad that this is over, and I’m sure you are too. But guess what? I’ll be back next week with the second part, where I talk about how I applied all these lessons to the structures in the game and then did the final push on all the unit art!

Thanks for reading and stay tuned!

_You can check out more of Adam’s nonsense at via [Twitter](https://twitter.com/adamdegrandis), [Tumblr](http://adamdegrandis.tumblr.com/), or at [ChickadeeGames.com](http://http://www.chickadeegames.com/)_
