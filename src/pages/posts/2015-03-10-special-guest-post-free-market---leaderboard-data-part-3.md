---
layout: ../../layouts/BlogPost.astro
date: "2015-03-10T22:52:34+00:00"
draft: false
tags: ["Monaco"]
title: "Special Guest Post: Free Market - Leaderboard Data Part 3"
---

_This post is Part 3 of a multi-part data analysis series by Free Market._

**What Makes a Fast Entry?**

Looking at the [graphs](http://imgur.com/a/EE3BF) for the times on each level we see some pretty cool things, but you might also ask, “What helps a player get a faster time?” That’s a pretty complicated question! Obviously, some players have practiced more and have more experience playing Monaco, which makes them faster. But there are also some clues based on what they are doing.

[![The Prestige Enhanced 1P Histogram](http://i.imgur.com/LBI1vQX.png "The Prestige Enhanced 1P Histogram")](http://i.imgur.com/LBI1vQX.png)

With the histogram plots, we talked a little about how ‘cleaning out’ the entire map is one decision. Hopefully you noticed how players who collect every piece of loot get better times, on average. That makes sense, because each missed coin adds 10 seconds to your final time. This is one example of something that directly affects your time, but there are a lot of things that indirectly affect your time.

**Characters Choices**

[![The Prison Break Enhanced 1P](http://i.imgur.com/SxDlRNi.png "The Prison Break Enhanced 1P")](http://i.imgur.com/SxDlRNi.png)

This graph for is kind of like a moving average. The x-axis counts the various ranks (using a logarithmic scale, so 10, 100, 1000 et cetera are the big ticks on the axis). Each rank denotes the cut-off to be included in the average. So if you go to 1000 on the axis, the lines at 1000 are the average taken over all the ranks from #1 to #1000. The coloured lines show the fraction of runs that had each character.

[![Banque Albert Enhanced 1P](http://i.imgur.com/a7xTWot.png "Banque Albert Enhanced 1P")](http://i.imgur.com/a7xTWot.png)

For example, the blue line is the Locksmith. We see that every single top-10 ranked entry on Banque Albert Enhanced Singleplayer has a locksmith. However, as the ranks increase, the fraction of entries that have a locksmith starts to fall. It seems like the slower ranked players just didn’t use Locksmith as much. Now, this is merely a correlation. It could be that slower players preferred the Cleaner and the Pickpocket because it suits their playstyle better. For example, if the Cleaner makes it easier to take things slowly because he can knock out guards.

[![Centre Hospitalier Enhanced 1P](http://i.imgur.com/m22UxC7.png "Centre Hospitalier Enhanced 1P")](http://i.imgur.com/m22UxC7.png)

But there’s also a bit of an implication here that the characters the fastest players choose are just better suited to that map specifically, and that using them can help you finish the level faster. For example, the lookout is just a clear favourite among the fastest solo players on Centre Hospitalier, and it’s probably because there are so many individual rooms that you don’t want to have to open unless you see a coin in them. The characters best suited for each level differ, so one map’s fan-favourite might be another map’s big mistake.

[![Scent of a Rival Enhanced MP](http://i.imgur.com/RRHSc4P.png "Scent of a Rival Enhanced MP")](http://i.imgur.com/RRHSc4P.png)

You can look at all these graphs and figure them out for yourself. But maybe check out Scent of a Rival Enhanced Multiplayer and see if you can explain why the fastest players chose the characters that they did, and maybe even why the slower players chose the ones they did.

**To Die, or Not to Die?**

[![Quartier Diamant Enhanced 1P](http://i.imgur.com/ZZsMj5h.png "Quartier Diamant Enhanced 1P")](http://i.imgur.com/ZZsMj5h.png)

Let’s take a look at lines on the graph for representing the life counts. Technically it’s just the number of character that appeared on their entry, but because it’s singleplayer, we know the player had to die to change characters. Quartier Diamant is interesting, because the highest ranked players actually used two lives more often than they used one life. You’d think dying would slow you down, yes? The answer is, “Not necessarily, if it’s part of the plan.” The graph suggests that dying and changing characters can actually help you finish certain levels, faster than you would if you just stuck to a single character.

[![Place du Palais Classic 1P](http://i.imgur.com/rK1paBF.png "Place du Palais Classic 1P")](http://i.imgur.com/rK1paBF.png)

Now, dying too much is obviously negative. If you look at this graph for Place du Palais Classic Singleplayer, the slowest players were the ones dying three times. Not that dying necessarily made them the slowest (correlation is not causation!), but the suggestion certainly is there.

[![Scorpion and the Frog Enhanced MP](http://i.imgur.com/xRXDq6W.png "Scorpion and the Frog Enhanced MP")](http://i.imgur.com/xRXDq6W.png)

Related to deaths is the number of players you choose in a multiplayer game. Nearly every map favours a team of four players. Having more characters, and more people collecting the loot, let’s you finish the map much faster, as the above graph for Scorpion and the Frog Enhanced Multiplayer shows.

Other than the survival maps, which are a bit more complicated and explained in a different blog post, there is one map that favours a number other than four players:

[![The Prison Break Classic MP](http://i.imgur.com/J6GpAGJ.png "The Prison Break Classic MP")](http://i.imgur.com/J6GpAGJ.png)

The highest ranked players on the Prison Break, across all multiplayer game modes, tend to play with teams of three players. Why is this map the big exception? The Prison Break is such a short map, the big thing that determines whether you get #1 or end up with #4 is how fast you can get all your teammates to each floor change. If you have one extra player (usually the cleaner), then you have one extra player who can accidentally bump into a wall, or leave the stairs a little late because of lag, or even just be a little slower hitting his or her keys and add a fraction of a second walking too far. Three happens to be the magic number because on the final floor, there are three rooms you need to get the coins out of, so everyone gets one room.

Remember to check out the full set of graphs:

[![Full Datasets Jan. 6th](http://i.imgur.com/B8VB7ZR.png "Full Datasets Jan. 6th")](http://imgur.com/a/EE3BF)

-Prepared by Free Market, a long-time Monaco fan and data-nerd. She has been collecting Monaco leaderboard data since May, 2014 and publishing content on her Imgur account. Also check out her regular leaderboard reports on Steam's Monaco forums.
