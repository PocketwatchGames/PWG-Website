---
layout: ../../layouts/BlogPost.astro
date: "2014-07-09T20:18:56+00:00"
draft: false
tags: ["[ARMADA]", "controls"]
title: "Controller conundrums, the many evolutions of [ARMADA]'s controls"
---

<p>A love of the Real Time Strategy genre but a hatred of sitting at a desk is [ARMADA]'s raison d'&ecirc;tre. &nbsp;We wanted to build an intense RTS that felt native to the couch, and ideal on a controller.</p>
<p>Finding the ideal gamepad-RTS control scheme is like wandering in the desert. &nbsp;A control scheme that seems to work perfectly on paper is most likely nothing more than a mirage. &nbsp;Some little piece of that 'perfect' control scheme just doesn't work, or feels inferior to mouse-keyboard, and you can't know these things until the control scheme is fully implemented.</p>
<p>Here's a quick overview with what we have explored, and where we are now (Hint: we've finally found the oasis!)</p>
<p><strong>Version 1 - Follow the Leader</strong></p>
<p>Controllers lend themselves to directional movement, rather than absolute positional information. &nbsp;That's why most console games feature a single player character, and generally try to avoid menu movement.</p>
<p>[ARMADA] accommodates for this by featuring a player character and a bunch of minions who follow him around. &nbsp;The player executes his strategy at a strategic level through player movement, but at a tactical level, your minions are AI-controlled.</p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\eb61b57a59f28f023e0cb6c3764c1dc4f6a742b7ca996d9d36cf617ed78aea30.png" /></p>
<p></p>
<p>So... in the first version of the game, minions would simply follow the player around. &nbsp;Unfortunately, this meant that the player couldn't leave his army to defend his base while he went off to scout the enemy.</p>
<p><strong>Version 2 - Rally Flag</strong></p>
<p>So... what if the player could toggle between having his army follow him and telling them to guard a location? &nbsp;For this experiment, we tried making it while holding Right Trigger, the army would follow you, and then when you released it, you would plant a flag in that location and your army would rally to the flag.</p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\43932b7ad5750c077fd7eb99878a9363c2e491ed1f9ca1516f9f79becf4b4f6c.png" /></p>
<p><em>Go here my minions!</em></p>
<p><span>Ahhh... the satisfaction of a one button design.</span></p>
<p>There was one wrinkle with this control scheme: What do minions do while they are travelling to the flag? &nbsp;Sometimes the player wants to control the tactical behavior of their units in movement. &nbsp;In Starcraft, the possible behaviors are:</p>
<ul>
<li><span>MOVE: Move to a location, ignoring all enemies along the way</span></li>
<li><span>ATTACK: Move to a specific enemy, and attack them, ignoring all other units along the way</span></li>
<li><span>ATTACK MOVE: Move to a location, but stop and attack if you encounter an enemy along the way.</span></li>
</ul>
<p><span>[ARMADA] is very much a game of managing imperfect information. You will rarely enter a conflict knowing the exact outcome of that battle, so if a fight turns for the worst, it is best to flee and fight another day. &nbsp;This was only possible with command that tells units to MOVE and not attack under any circumstances.</span></p>
<p><strong>Version 2.5 - Move and Attack Move</strong></p>
<p>So we implemented these behaviors.</p>
<p>We had two triggers, LT for MOVE to this location and RT for ATTACK MOVE to this location.</p>
<p>[ARMADA] now allowed you to either attack or flee.</p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\64e95db3970beaef8c3f781768ed593a4c889c6e92b303a76e2f29caa0a11c8b.png" /></p>
<p><em>RUN AWAYYY!!!!</em></p>
<p>This even enabled skilled players to kite melee units with ranged units.</p>
<p>Though satisfied with the general movement, we found ourselves wanting to explore more specific types of movement. &nbsp;We wanted to issue attack orders at a distance. But we couldn't do it, so what do we do?</p>
<p><strong>Version 3 - Positional Unit Movement</strong></p>
<p>Well we had&nbsp;a controller feature left unused, the Right Analog Stick. &nbsp;So could we use it for something, perhaps for targeting? Why not!</p>
<p>Imagine that you could use the Right Stick to offset your Rally Flag some set distance away from your character. &nbsp;Then you use RT to place the flag. &nbsp;We had a dual stick shooter-like control scheme. &nbsp;It was fast, easy, responsive, our favorite iteration yet! &nbsp;This even allowed us to implement focus fire for taking down high-value targets!</p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\716baf6d287248ea7102bed81ed0bd7b09efbb2d028fc139f1dd021533ed29fe.png" /></p>
<p><em>Move here my friends!</em></p>
<p><span>We were totally satisfied with this control scheme, and it seemed to be the one we were going to settle on, until...</span></p>
<p><strong>That Damn Mouse</strong></p>
<p>Redesigning a mouse-keyboard-centric genre for the controller was hard enough. &nbsp;Now that we had a control-scheme that we were satisfied with, we realized that we were going to have to work backwards and design a mouse-keyboard control scheme that emulated our controller implementation! &nbsp;After all, we expect the PC to be&nbsp;[ARMADA]'s launch platform.</p>
<p>So now we had to design a game made for the controller based on a genre defined by keyboard/mouse back into a game that could use the keyboard/mouse&nbsp;even though the game is designed without the&nbsp;keyboard/mouse controls it was based on. &nbsp;Ya, it's nonsense.</p>
<p><span>So, then we had an idea, based on Monaco actually.</span></p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\498fe29e270b53ce7384704f22f367eaaa5ea383e30916bfa09a7d21367fed90.jpg" /></p>
<p><em>He never saw it coming...</em></p>
<p><strong>Version 4 - Vector Unit Movement</strong></p>
<p>So keyboard/mouse messed up everything, sorta, I mean we had a great positional targeting system. &nbsp;So let's think about it, a mouse moves a cursor in positional space on your screen, so a mouse&nbsp;SHOULD work, right?&nbsp; So what happened?</p>
<p>We didn't want one control scheme to have an advantage over the other, so to keep the things fair, we had to LIMIT the functionality of the mouse. &nbsp;This means the mouse would have to be restricted by a circular boundary in the game, ultimately making the mouse feel like a gimp, crappier version of what it's supposed to be.</p>
<p>But in Monaco, we had a vector targeting system, and here's how it worked.</p>
<p><span>You point, you shoot, and it hits something. &nbsp;Perhaps [ARMADA] could be the same way. &nbsp;You point a vector and you deploy your units in a direction.</span></p>
<p><span>So vector unit movement was the name of the game, but many questions arose. &nbsp;Where do the units go? Do they travel from the reference point of the player character? &nbsp;What if the player character moves, or they move the Right Analog stick? &nbsp;Do units travel in a line until they hit a wall? &nbsp;What if you want to move past a wall, or up a hill? What about fog of war? What if units weren't near you?</span></p>
<p>There were just too many problems, so we reverted back to a tried and true method, because for now, simpler is just better.</p>
<p><strong>Current Version - Soooo Not Final</strong></p>
<p>We rolled back to a one button movement system, but this time include both MOVE and ATTACK MOVE onto a single trigger. &nbsp;RT to MOVE to me. &nbsp;Release RT and ATTACK MOVE to this position.</p>
<p><img alt="image" src="/img/2014-07-09-controller-conundrums-the-many-evolutions-of-armadas-controls\89cad81b9f149900b660ee1ae89396c273c6545aca7d63c216b5dce5b71d8f4f.png" /></p>
<p><em>Move with me!</em></p>
<p><img alt="image" src="https://31.media.tumblr.com/cb1cace111340abe1d96bbd34a4234d1/tumblr_inline_n8gdra2kbQ1sqmptm.bmp" /></p>
<p><em>Attack here!</em></p>
<p>It's easy to pick up and play, even for people who haven't played an RTS before.</p>
<p>So that's it, that's where we stand. &nbsp;The game feels native to the controller, and rather than feeling inferior to the mouse-keyboard, it simply feels like a unique, comfortable, fun-to-interact-with plaything.</p>
<p>There are a number of other questions we have yet to answer: Can we find a way to focus fire on high-value targets? Can we control sub-groups so that we can perform flanking maneuvers or targeted strikes with stealth/flying units? &nbsp;As always, more exploration lies ahead...</p>
