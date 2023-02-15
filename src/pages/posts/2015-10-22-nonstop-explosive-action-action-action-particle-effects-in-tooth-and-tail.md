---
layout: ../../layouts/BlogPost.astro
date: "2015-10-22T19:21:52+00:00"
draft: false
tags: ["art", "adam"]
title: "Nonstop Explosive Action Action Action! : Particle Effects in Tooth and Tail"
---

Hello all! Welcome to yet another Tooth and Tail art blog. I’m your guy, art director [Adam deGrandis](https://twitter.com/adamdegrandis), and today we’re covering what goes into the design of our particle effects, specifically explosions. Yeah, “oh, cool”, I know.

Before we dive into the tech side of things, it’s good to break down what an explosion visually needs in order for it to read as an explosion. In its most basic form, an explosion is composed of three core visual elements.

1. **The Burst** - the flash or fireball at the beginning
2. **The Debris** - Sparks, dirt, or other matter that flies off at high speed
3. **The Fill** - Smoke or some other residual substance that immediately follows the burst

Keep in mind, this isn’t dumb video game nonsense; it’s pulled directly from real life.

[![image1](http://i.imgur.com/sxpYk40.jpg "image1")](http://i.imgur.com/sxpYk40.jpg)

If you want an effect to read as “an explosion” - if you want it to really FEEL like an explosion - you need these three basic clearly defined. With Tooth and Tail, we bring these various pieces to the screen through particles, emitters, and particle systems.

A particle is the smallest unit in our effects system. Visually, it’s a single image, such as a smoke cloud or one spark. As far as the game is concerned, though, each particle is a script file that contains all it’s various properties; What image it should use, how long the particle should live, if it should be effected by gravity, what it’s color should be, etc. Here is the particle that gets used for our muzzle flares.

[![image2](http://i.imgur.com/1EQEFCJ.jpg "image2")](http://i.imgur.com/1EQEFCJ.jpg)

An emitter is an object that creates particles. Like the particles, the each emitter has a script file that houses all it’s properties. By editing it, we can change things like how fast it should emit particles and at what angle those particles should travel once they’re emitted. By using particles and emitters, we’re able to create simple effects, like a smoke plumes, muzzle flares, or blood splatters.

For complex effects like explosions, we need to use “particle systems”. A particle system is a script file that contains multiple emitters. When we tell a particle system to spawn in the world, it simply spawns all the emitters linked to it.

If we look at the particle system for the explosion that gets used for defensive structures (MG nest, artillery cannon, etc), we see four different particle emitters. The first two create the burst, the third is the debris, and the last is the fill.

[![image3](http://i.imgur.com/PM7PzPV.jpg "image3")](http://i.imgur.com/PM7PzPV.jpg)

And here it is in action. Forgive the slightly low frame rate.

[![image4](http://i.imgur.com/UkyjAAK.gif "image4")](http://i.imgur.com/UkyjAAK.gif)

The more complex an effect is, the more emitters it has. I don’t just add emitters for the hell of it, though; extra emitters are always used to punch up a one of the core trio. So, for example, if we look at the Ferret’s artillery explosion, we see seven emitters… but they all are in service to one of the three core elements.

[![image5](http://i.imgur.com/fV5if0t.jpg "image5")](http://i.imgur.com/fV5if0t.jpg)

And in-game.

[![image6](http://i.imgur.com/07vMwl4.gif "image6")](http://i.imgur.com/07vMwl4.gif)

So there you have it! Keep in mind, this isn’t just how we do it on Tooth and Tail… this is a fairly common approach to effects design. So as you’re playing your favorite game, take time to really look at all the explosions and pops and zaps as they’re flying across the screen; they’re more complex than they look at first blush.
