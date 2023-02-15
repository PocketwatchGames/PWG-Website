---
layout: ../../layouts/BlogPost.astro
date: "2015-08-19T18:33:18+00:00"
draft: false
tags: ["art", "adam"]
title: "The New Look of Tooth and Tail : The Movie : The Blog"
---

Hi everyone! I’m [Adam deGrandis](http://www.twitter.com/adamdegrandis), I’m the art director on [Tooth and Tail](http://www.toothandtailgame.com), and yes, it’s true, I had pizza for lunch.

![Alt text](http://i.imgur.com/6gzuj8l.jpg "Optional title")

I’ll be posting every few weeks with info about the visual development and production of the game, and of course, I’ll always include some real snazzy screenshots and gifs and the like with each post. For what it’s worth, besides being a game artist, I’m also an educator at Maine College of Art, so my posts will likely have a little bit of an educational vibe to them. If you’re interested in breaking into the industry or are already here but like seeing how other people do it, be sure to keep your eyes peeled for my posts. One final note: this is a pretty lengthy post as there’s a lot to say on this specific topic. My future posts won’t be so dense. Smiley emoji!

Ok, without further ado, let’s talk about the new look of Tooth and Tail.

[![Tooth and Tail](http://i.imgur.com/iubh9y4.png "Tooth and Tail")](http://i.imgur.com/TLH77iU.jpg)

I started on the project back in late February/early March. Back then, development was progressing steadily but Andy had a sense that Lead to Fire was going to need a little more art muscle to make it through production in a reasonable amount of time. Moreover, the project had no proper art director - which you can sometimes get away with on simple, smaller affairs - but the game had reached a level of complexity where that was not the case. An art director was needed, so I joined the team to do that thing.

Educational sidebar! Everyone has probably heard of the position of “art director” before, but maybe you don’t fully understand what they do. In the loosest sense, the art director is the art manager. Generally speaking, an art director will be doing things like making sure artists are working on what’s most important at the time, giving feedback about their work, managing the production schedule, and working with the other VIP’s of the project (lead designer, lead programmer, etc) to help plot the course of development. The details of the position change, though, based on the size of the studio and the kind of project. An art director at a studio like Valve or Blizzard will tend to be strictly a manager type, since they have a bunch of artists working on a single title who all need to be lead. For smaller studios like Pocketwatch Games, the art director often makes artwork in addition to the standard managerial duties.

![Alt text](http://i.imgur.com/MmkyZVW.jpg "Optional title")

The first thing I did once I was on the team was to take stock of all the art we already had. What visual problems were already solved? What problems still needed to be solved? What art already existed? How was that art being used? How was that art made? The more answers I had, the more a single, significant issue was apparent. There was no clear, actionable plan for how to get from where we were (a game with nice prototype assets) to where we wanted to be (shipping a beautiful game). This being the case, I suggested we go back to pre-production.

Second educational sidebar! Pre-production is the phase of game development when you design/plan what you’re going to make, and how you’re going to make it. Production is where you act on those plans and make the bulk of the game.

An analogy. Imagine you’re trying to hike up a giant mountain. It’s tempting to just start walking up it. After all, it’s a big mountain and no one gets closer to the top by standing around. A better first step, though, is to do a little research first and think about your approach. Open a map; maybe there are some known trails up parts of the mountain. Talk to your mountain-climbing peers; maybe one of them has climbed a similar mountain before. Maybe even you yourself have some experience in mountain climbing, so you know some good, field tested solutions to issues you’ll hit on your climb. And then when you have a rough plan, do some tests. Make sure your rope is strong and make sure your climbing boots with the little spikes actually work.

![Alt text](http://i.imgur.com/dP0z3jv.jpg "Optional title")

Planning and then testing those plans… that’s pre-production. The climb itself is production. Some people (not me) find this kind of planning boring, but doing it will drastically improve the efficiency of the climb. And not only will you hit the summit faster, you won’t be covered in thorns and half-starving when you get there. You’ll be in good shape.

So, with the decision to go back to pre-production agreed upon, I immediately set to work on a mockup; basically a fake screenshot of the game (in our case, made in Photoshop). Mockups are one of the most effective uses of time in early development. They give a tangible thing that everyone can see and talk about. Feedback can be given and changes can be made easily. After a few days, I ended up with this, and we were excited.

![Alt text](http://i.imgur.com/kF35Ih8.jpg "Optional title")

There’s a lot to talk about with this shot. First, and most obviously, you’ll notice that we were still working in the previous, painted style. The jump to pixels didn’t happen until a few weeks after this, but I’ll talk about that more in a little bit. Next, one of the big problems that I tackled with this iteration is how to create a more organic, dynamic environment. Gone were the little blocky tiles. Now we had detailed cliffs and ramps and big grass textures, painted to reduce the effect of tiling.

Less obvious than that, though, is the concept of overlays; full-screen or full-world “effects” that help make the scene look more colorful, or animated, or just “better”. The first overlay is a color shifter on the terrain, which helps the it feel more organic and less flat. Here’s a gif!

![Alt text](http://i.imgur.com/UBkNJmE.gif "Optional title")

Another couple overlays are cloud shadows/edge darken and sunbeams. These help the scene have a sense of atmosphere. Another gif, why not?

![Alt text](http://i.imgur.com/LgGF5H8.gif "Optional title")

The last overlay is a perlin noise-based color shift. This allows us to create a better sense of mood. We can change the colors of the perlin noise and get maps that feel differently. Here, I’m using really warm colors to make the scene feel a little hotter and slightly dreadful. It’s effectively a fake lighting overlay. If we use pinks and yellows, if feels like sunrise. Dark blues and purples? That’s a night scene.

![Alt text](http://i.imgur.com/uXzRH61.gif "Optional title")

The response from everyone else on the team to this work was a big ol’ enthusiastic round of high fives and thumbs up. But there was no time to rest; there was still plenty of mountain ahead of us to climb. I started to approach the problem of unit design and production. What changes did we need to make to all the unit designs so they were clearly readable when they’re moving around in a giant mob, and how were we going to animate them so looked amazing while they were doing it? While Jerome (our super-great painter), Brian (our illustrator and web developer), and I were figuring out answers and sketching, Andy S asked pivotal question. It went something like:

“This is totally from left field, but since we’re back in pre-production anyway now is the time to ask it… What if we moved to a pixel art style?”

It turns out, he ALWAYS envisioned the game as a pixel art game. Something that paid tribute to the strategy games he loved when he was younger. But he also wanted to keep the menu artwork and unit portraits as high-res painted artwork, like you’d see in Street Fighter. A nutty, arcadey mash-up love letter to the games of yesteryear. The artists who previously worked on the game just didn’t see it, though.

I did see it. I saw it in an vivid, explosive, glorious way. I lost untold quarters to the pulsing neon vacuum that was the nearest arcade, and I spent hundreds of hours mastering those same strategy games during my adolescent years. Adam fun fact: the original Command and Conquer is the game that made me want to be a game developer, and my 7th grade dream was to work at Westwood Studios. RIP.

I resisted the urge to grab my stylus and start pushing pixels right away. Again: thinking about this for even 5 minutes would reward me with much greater efficiency. I considered the following: One of the hallmarks of traditional pixel work is a limited color palette. But we had a bunch of artwork and an initial direction that was the opposite, though. Jerome uses tightly controlled color palettes in his paintings, but they’re refined and rich, full of beautiful nuance. As we moved into pixels, I wanted to keep as much of the essence of the original concept artwork as possible. I mean, come on. This is just extra nutty amazing.

![Alt text](http://i.imgur.com/xYAgi0R.jpg "Optional title")

I started thinking of the phrase “painted pixels”. Our pixel work should feel loose and energetic, not clean and ordered. Our pixels should feel like they were placed on the screen with brush strokes, and not the calm clicking of a mouse. With all of this in mind, I grabbed my stylus kept my focus small. I explored some of these ideas with one of the my grass tiles.

![Alt text](http://i.imgur.com/BkZqoC7.jpg "Optional title")

You’ll see here that I’m using a weird brush stroke overlay to modulate the values (the lights and darks) in the texture. I felt good about this approach and proceeded on to the full mockup, adding some extras to the scene for good measure.

![Alt text](http://i.imgur.com/uE6F60a.jpg "Optional title")

It felt good. Really good. We were all pretty excited, and it didn’t take long for everyone to be on board with a mid-development art style shift. There’s a lot more to talk about; the visual design of the units, all the world building and environment tech we designed, and the finer points of mashing a high res style and pixel style together, but I’ll talk about that stuff in later posts. For now, enjoy this in-game screenshot and let me know if you have questions in the comments or on the [stream (Thursdays at 2 EST/ 5 PST)](http://www.twitch.tv/Pocketwatch).

Thanks for reading, you beautiful babies.
