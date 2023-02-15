---
layout: ../../layouts/BlogPost.astro
date: "2018-01-09T19:11:58+00:00"
draft: false
tags: []
title: "Status of PS4"
---

Hey folks, a quick update since I haven't been super transparent about what I'm working on for the past few weeks:

Starting a little while after launch, I started getting reports of the PS4 version of Tooth and Tail being unstable and suffering from desyncs. At first it was just reports from a single user, but it eventually became clear that the problem was quite severe, specifically in lobbies with large numbers of players (4 player FFA, sometimes with spectators).

With the Butterbomb patch, I fixed some of the crashes that were happening, but unfortunately I may have introduced a new bug, specifically with the boar. Boar-related crashes appear to account for about half of the reported crashes on PS4. This bug is fixed in my local build and will be included in the next PS4 patch. Until the next patch, if you tend to experience a lot of crashes, it may be best to avoid playing boar.

As for the desyncs, I'm not sure what's happening. They don't seem to reproduce on my test hardware, but I'm working on the problem now.

The PC build has gotten ahead, feature-wise, from the PS4 build. Specifically, we added some player stats tracking win and pick rates. Moving those features over to the PS4 is a little challenging, given that there's some red tape in changing things related to user profiles, PSN features, etc. I should be able to wrap up the PS4 implementation of that feature in the next day or two.

I'm hoping to get a PS4 patch out this week, although it's possible it will go till early next week if I really can't figure out the desync problem.

As for why it's taken this long to fix the issues that user have reported to me... aside from trying to juggle multiple platforms, multiple player communities, and get year end busywork done, I don't have a good excuse. You guys have been very clear (and helpful) and I needed to be more responsive, more quickly. Hopefully I can fix that this week!

-Andy
