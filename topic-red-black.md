# Red Black
![Alt text](topic-red-black-head.png?raw=True "Red Black Menu screenshot")

The other engine on which I had some success is Construct 2, even though I completely disagreed, with some
decisions as to how the engine works. But it was a big trend at the time; still is actually! The web.

I don't know how all this craze with doing everything on the web started, but I guess people realised that browsers run
everywhere, so let's just use *them* as a VM for our applications! Not an idea that I agree with. Some things should stay
native, and web-pages should be simple. Look at any modern "web-app" and convince yourself that it runs well. You can't,
unless you've never seen a well written native one. But I think no matter what, you can all agree that taking up as much space
as the window manager of the OS is unacceptable.

Anyways, let me try to stay relevant to the post, maybe I'll rant about the web at some other time.

## The Idea
You are a girl in a post-nuclear world. You have a wrench as your only means of  defense. Not even a wrench could help you overpower the monstrous creations of this apocalyptic habitat, though. You'll have to switch between sneaking, running and engaging constantly in order to survive through each level.

---
### Some Notes on Construct 2
This is the first game engine I ever used, and for the most part it was great! Easy drag and drop, probably the best scripting system I've ever seen (Event - Action style)... But it's web based *only*. Even if you export it as an executable, you have to use nwjs, which is quintessentially a stripped-down version of chrome. That means that you get to inherit all the weirdness of storing files on disk (foreshadowing).

---

The idea, isn't particuraly unique; the post-apocalyptic setting in the general sense is a very common one, and for good reason! No matter what, whether anyone believes that the utilization of nuclear energy is primarily beneficial, or that we're in over our heads meddling with the precise nature of atoms; we will all be wandering about how the world would have been, if something went _really_ wrong, until the end of us.

The process was certainly interesting. This was my first (ever!) collaborative work with my father. I was designated to the programming counterpart and he would handle textures and animation. I can tell you right now, that the animations for the girl character looked absolutely amazing! It was really energizing to see them early, instead of a collision rectangle or a last-minute painted stickman figure. It wasn't hand-painted or anything; instead it was a series of images from the internet recolored with smooth gradients, and then animated with a 2d skeleton. My father's profficiency with image manipulation had paid off very early.

![alt-text](topic-red-black-gameplay.png?raw=True "Red Black gameplay screenshot")

The basic movement controls were very easy. Couple that with the great built-in collision system and I had a platform character in no-time. Construct was really good with that; just add the platformer behavior and you're done. No manual collision detection/response (looking at you Game Maker), and it's functional at the very least.

Surprisingly, the most tedious part was saving and loading controls, and this was the part I shouldn't have focused on. It's this weird chore you have to go through, mainly because... you guessed it! Browser only.

