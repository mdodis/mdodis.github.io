# Open Solomon's Key

So, this summer I had plenty of time to mess around with stuff (eventually not accomplishing much). I really like the idea of making games, but I'm not the best with coming up for ideas, so I decided it would be best if I ported or cloned an existing game.

Now the simplest answer would be to make a clone of say breakout, or snake or any of those games, but I couldn't bring myself to write _another_ clone of those games. Consulting my father proved to be a wise choice. He'd (relatively) recently made a faithful port of Solomon's Key (1986, tecmo) in Game Maker Studio 2.

This is a hybrid article / sub-blog, because the project is still under heavy development (mainly because it's a side-project, or just because I'm an amateur).

## The Game
Obviously, I wasn't around when it was released, but thanks to his port (which you can find here: https://immortalx74.itch.io/solomonskeyremake), I had a chance to *play* the game.

Maybe the fact that it's another arcade game might elude to you thinking that it's another "sidescroller" where the character is a stereotypical army man shooting bad guys with big guns (don't get me wrong; I like those types of games too, but there are *way* too many of those games). That kind of assumption is criminally wrong. The game has a lot of depth and complexity when one takes into account the hardware limitations at the time compared to nowadays.

<!-- Picture here -->

I was enthralled by it. So I set out to make a port (or clone, whatever terminology suits best), but in order to differentiate my version, from the already existing one, I thought it would be a cool idea, if the game was available on linux along with Windows, using a small platform layer, as well as featuring a level format.

## Foundation
As you can probably guess I had to make some decisions about the platform layer, and the helper libraries that would be used to bootstrap the project. I settled on very few (glm and stb_image), and decided it would make for an interesting grind; to finally have to deal with two distinct layers, namely X11 and Win32.

Thankfully, I was very fortunate to have seen some of Casey Muratori's videos on platform layers, especially when it came to the Win32 platform code. But at the time, my (Windows) desktop wasn't available to me, and my laptop had Linux installed. Guess we'll start with Xlib!

### Linux Platform
I've made it my objective to refrain from posting too much code, especially code that you can find easily online, so I won't be posting the Xlib example window code. Let's get on with it then!

A quick search yielded plenty results for creating an immediate-mode OpenGL compatible window on Xlib (although considerably less than Win32).
The code was pretty straight forward, and I had a window up and running in no time. I'd decided before-hand that I'd use immediate-mode OpenGL, until I was unable to, so I was quite happy to have some boilerplate stuff up and running.

Since the game is based on tilemaps, the engine would be tilemap oriented (even text is supported only through tilemaps); so all I needed to do was:

1. Figure out how to do tilemaps in OpenGL
2. Prosper

Unfortunately, things don't always work out this way (hint hint)...

The main culprit was filtering. Textures would have seams between them when the viewport's width and height components weren't powers of 2. I *could* have just ignored that, and in retrospect, I should have, but I've proven to be a stickler (unfortunately) for these kinds of things.

Another problem was the aspect ratio. I *really* wanted to support windows of any sizes, but at the same time I wanted the aspect ratio to never change. I'll talk about the latter of these two problems, since it was an easier fix.