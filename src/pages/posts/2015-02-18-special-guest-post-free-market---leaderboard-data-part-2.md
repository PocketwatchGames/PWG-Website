---
layout: ../../layouts/BlogPost.astro
date: "2015-02-18T01:20:47+00:00"
draft: false
tags: ["Monaco"]
title: "Special Guest Post: Free Market - Leaderboard Data Part 2"
---

_This post is Part 2 of a multi-part data analysis series by Free Market._

**What does Monaco's Player Base Look Like?**

Have you ever tabbed through the Monaco leaderboards in game and wondered about all those entries beyond ranks #1 through #4?

Sure, the leaderboards are great for looking up the #1 players, or looking up how you compare to your friends, but you’re not going to get the big picture 10 entries at a time. So, how about we turn to some graphs to get a better idea?

[These](http://imgur.com/a/EE3BF) are 512 graphs representing all the data in Monaco’s all-time leaderboards. There’s a lot to take in there, so let’s break down a few interesting examples, then you’ll be equipped to dive into the rest on your own.

**How do Players Stack Up?**

So, you finished a Monaco level and got this screen:

[![Results Screen](http://i.imgur.com/ai57OyW.jpg "Results Screen")](http://i.imgur.com/ai57OyW.jpg)

You wonder how that stacks up. Obviously, you are ranked 97, but is that pretty good, or kind of middle-of-the-road? How many people have similar times? One graph that might help you is a histogram of all the other records, like this one for Pearls Before Swine Enhanced Singleplayer.

[![Pearls Before Swine Enhanced 1P](http://i.imgur.com/N3SNkwN.png "Pearls Before Swine Enhanced 1P")](http://i.imgur.com/N3SNkwN.png)

This graph groups up all the entries with the same minute value, and shows how many are in each group. So if you look up the 12-13 minute bar, you see there are about 50 people with a similar all-time to you. The graph also shows how many players cleaned out all the coins (the darker bars). It looks like most people with a similar record ‘cleaned out’ all the coins. But if you look further down the graph, the people with a final time of 20-21 minutes mostly left some loot behind (see how far the white bar extends above the darker bar?).

[![Discotheque Rouge Enhanced MP](http://i.imgur.com/9lIwPFS.png "Discotheque Rouge Enhanced MP")](http://i.imgur.com/9lIwPFS.png)

This brings up a kind of interesting phenomenon you’ll see in a number of these histogram plots for the maps. You’ll see one hump of dark bars, the people who collected all the coins, and a second ‘hump’ made up of mostly white bars (you might have to visualize it, like on that graph for Discotheque Rouge Enhanced Multiplayer, by subtracting the dark bars from the white bars). To explain this, you might imagine Monaco being made up of two types of player: one type steals everything, the other type goes for the objective and only picks up whatever coins are along the way. This results in these ‘bimodal’, or two-humped, histograms.

[![Identity Enhanced MP](http://i.imgur.com/wQXId5T.png "Identity Enhanced MP")](http://i.imgur.com/wQXId5T.png)

If you want a really cool example of this, check out one of the graphs for Identity where you get a giant spike of players who literally just took the stairs directly up to the escape van.

**Survival Mode**

[![Prologue: The Blonde Enhanced MP](http://i.imgur.com/rvUiZHz.png "Prologue: The Blonde Enhanced MP")](http://i.imgur.com/rvUiZHz.png)

Survival levels (the Prologues) are a little different: because people are competing to collect the most coins, a graph of time doesn’t make a lot of sense. Therefore, the histograms for the Prologues graph coin count instead of time, using a logarithmic scale for coins, because some players get truly obscene coin counts. However, the time played on the survival levels is actually a pretty interesting variable (note: the leaderboards in game don’t display the actual time played, but the time is saved on the leaderboard server itself). This is a scatter plot for Prologue: The Locksmith Enhanced Multiplayer:

[![Prologue: The Locksmith Enhanced MP](http://i.imgur.com/QVDuoIn.png "Prologue: The Locksmith Enhanced MP")](http://i.imgur.com/QVDuoIn.png)

The x-axis is the time played, the y-axis is the coins collected, also as a logarithmic scale. You see there’s a big smear of dots on the left side. That’s mostly the lower ranked players, collecting enough coins to score a ‘completed’ or ‘perfect’ entry. It takes about two to five minutes to do that, and the smear is mostly vertical, because they are grabbing coins that were on the map at the start.

[![Prologue: The Mole Zombie MP](http://i.imgur.com/jYnwSiA.png "Prologue: The Mole Zombie MP")](http://i.imgur.com/jYnwSiA.png)

Where things get interesting is the curved path the dots take as the coin (and time!) count rise. Check out the graph for Prologue: The Mole Zombie Multiplayer. Once you get the 100-odd coins at the start, you then have to wait for coins to spawn before you can collect them. These coins spawn at a specific rate per minute. So, we see the dots form a line corresponding to the pace that coins are spawning. Here, things pretty much become a patience game: “How long can I kill the zombies and grab the coins before I get bored and give up, or make a mistake and die?” The highest ranked players were at it for over an hour and a half!!!

[![Prologue: The Blonde Zombie MP](http://i.imgur.com/jgJ3WYM.png "Prologue: The Blonde Zombie MP")](http://i.imgur.com/jgJ3WYM.png)

One more neat thing to notice about the multiplayer graphs, like this one for Prologue: The Blonde Zombie Multiplayer, is the colour of the dots. Darker dots have more players, the lightest dots have just two players. One trend, of sorts, that I’ve noticed is that 4 player entries are pretty good about grabbing coins as fast as possible (the darker dots are further to the left in a cluster), but 2 player entries are often some of the highest of the high coin counts. One theory I have is that to survive for over an hour, you have to be very ‘on the top of your game’. It’s harder to get a group of 4 players to coordinate perfectly, and 4 players will be competing to grab coins to fill item charges. So two player teams often get the highest survival scores because they can work together more effectively (at least, according to my theory).

[![Prologue: The Mole Zombie 1P](http://i.imgur.com/CpQvMTg.png "Prologue: The Mole Zombie 1P")](http://i.imgur.com/CpQvMTg.png)

One last thing you might notice about the survival scatter plots is that some levels are ‘more survivable’ than others. Prologue: The Mole is pretty survivable, especially in Zombie Mode; once you know what you are doing, you can survive almost forever, if you are patient enough. But others, Prologue: The Lookout for example, are very difficult to survive for a long period of time:

[![Prologue: The Lookout Enhanced 1P](http://i.imgur.com/FiIoH26.png "Prologue: The Lookout Enhanced 1P")](http://i.imgur.com/FiIoH26.png)

Remember to check out the full set of graphs:

[![Full Datasets Jan. 6th](http://i.imgur.com/FuPCjqd.png "Full Datasets Jan. 6th")](http://imgur.com/a/EE3BF)

-Prepared by Free Market, a long-time Monaco fan and data-nerd. She has been collecting Monaco leaderboard data since May, 2014 and publishing content on her Imgur account. Also check out her regular leaderboard reports on Steam's Monaco forums.
