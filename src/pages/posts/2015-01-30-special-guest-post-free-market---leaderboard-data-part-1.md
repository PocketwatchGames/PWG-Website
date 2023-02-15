---
layout: ../../layouts/BlogPost.astro
date: "2015-01-30T22:25:00+00:00"
draft: false
tags: ["Monaco"]
title: "Special Guest Post: Free Market - Leaderboard Data Part 1"
---

_This post is Part 1 of a multi-part data analysis series by Free Market._

**Monaco's Leaderboards at a Glance**

Have you ever wondered how the individual Monaco levels stack up against one another?

How popular every map is?

How fast can you complete each map, compared to every other?

You could look up the numbers in the leaderboard, but are you really going to tab through several thousand entries to see how quickly the slowest player finished the map?

Let's take a look!

**Player Counts**

[![Enhanced MP Entry Counts](http://i.imgur.com/c1HgGP8.png "Enhanced MP Entry Counts")](http://i.imgur.com/c1HgGP8.png)

Here’s a chart of the total entries for each Enhanced Multiplayer map. The graph uses a logarithmic scale, so The Prison Break actually has 10 times as many entries at Hotel de Monaco, for example. What this graph illustrates is that players gradually give up as the campaigns go on. So, everyone gives The Prison Break a try, but less than 1% of players make it far enough to finish Paris, Forever.

[![Classic 1P Entry Counts](http://i.imgur.com/1biMNsL.png "Classic 1P Entry Counts")](http://i.imgur.com/1biMNsL.png)

If you take a look at this graph for Classic Singleplayer, you can a small spike in players at the start of Pickpocket campaign, probably because you can start the campaign without finishing the Locksmith’s campaign entirely.

[![Zombie 1P Entry Counts](http://i.imgur.com/Nd4kOJG.png "Zombie 1P Entry Counts")](http://i.imgur.com/Nd4kOJG.png)

The darker bars on this graph for Zombie Singleplayer just count the players that ‘Cleaned Out’, or collected all the coins, on the level. Something I find interesting is comparing the darker bar to the lighter bar; if the white bar is about the size of the space between two of the solid horizontal lines, it means 90% of player didn’t clean out the level. Maybe the levels that players don’t Clean Out as often, like Au Revoir and Identity, are harder, so they leave coins behind in a struggle to finish?

**Completion Times**

How about we compare the time to finish every map? Take a look at this graph for Classic Multiplayer:

[![Classic MP Time Ranges](http://i.imgur.com/UlusSvN.png "Classic MP Time Ranges")](http://i.imgur.com/UlusSvN.png)

The y-axis is the adjusted completion time for each level, or the time as it is recorded as a score in the leaderboards. First, focus on the dots. These are the median time for each level. The median is useful as representation of ‘the average person’. This is not the average time, which can be skewed by really slow players, but the ‘average’ player who attempts the map will end up with something like the median time. Each dot has a vertical bar sticking out of it. The lower end is the time of the fastest player on the level, or the #1 ranked player. The upper end is the 95th percentile time. Percentiles are a little more than I want to explain here, but pretend it’s the slowest time on the map (excluding a few players who just went AFK for a few hours).

[![Enhanced 1P Time Ranges](http://i.imgur.com/1I6jmGa.png "Enhanced 1P Time Ranges")](http://i.imgur.com/1I6jmGa.png)

So, this graph for Enhanced Singleplayer shows you the fastest player, the average player, and the slowest player, for every level. This graph is really useful for seeing how each level gets longer, and more difficult, as the campaign gets longer. For example, you can use the minimum times to see how, over the course of a campaign, the missions get longer. You can use the length of the entire bar to approximate how difficult the mission was: the harder missions will punish the slowest players most, making their times significantly longer than the fastest player.

[![Zombie MP Time Ranges](http://i.imgur.com/lIT08Nw.png "Zombie MP Time Ranges")](http://i.imgur.com/lIT08Nw.png)

The median is useful as a comparison for how ‘obvious’ the map is. If the median is close to the fastest time, the map is rather straightforward. But if the median is really far away from the fastest time, the average player is probably a little unclear on what the fastest route to finish the map is. So, on this graph for Zombie Multiplayer, Turf War and Contraband both take similar amounts of time on the minimum and maximum side. But the median player on Contraband does better, comparatively, than the median player on Turf War.

Remember to check out the full set of graphs:

[![Monaco Level Breakdowns](http://i.imgur.com/NT3li1U.png "Monaco Level Breakdowns")](http://imgur.com/a/5M3c3)

-Prepared by Free Market, a long-time Monaco fan and data-nerd. She has been collecting Monaco leaderboard data since May, 2014 and publishing content on her Imgur account. Also check out her regular leaderboard reports on Steam's Monaco forums.
