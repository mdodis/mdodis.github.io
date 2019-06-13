[comment]: <> (TODO: Post - Red Plat (Construct 2))

# My Personal Page
Hello! My name is Michael Dodis, and this is a short page for me to show off all my projects!
And to talk about my experience with computers.

Edit: This may serve a dual purpose as a blog. I'll be looking through some other projects (either
unfinished or abandoned and I'll post them here over time).

## Completed Projects

| Name      |   Language    |   Description |
| --------- | ------------- | ------------- |
|[CHIP8](https://github.com/mdodis/chip8)      |C++| A chip8 emulator I wrote when I had some free time during my Easter vacations|
|[Room generator](https://github.com/mdodis/Procedural)|Javascript|Simple room generator with javascript and p5js|
|[tunedotsh](https://github.com/mdodis/tunedotsh)|C++|Music player on the command-line (Windows/Linux), predecessor to beebop|

## Ongoing Projects

| Name      |   Language    |   Description |
| --------- | ------------- | ------------- |
| beebop    |C++            | A graphical music player for Windows and Linux, currently working on a custom UI with a mix of stateful and immediate mode GUI|

## Jump to specific entry
* [How I write markdown for this page](#how-i-write-markdown-for-this-site)
* [Love2d](#love)
* [Love2d woes](#love-woes)
----

## A little bit about me
I'm studying Computer Science (2 years at the time of writing) at the University of Crete, but I was enthusiastic about
computers for as long as I can remember now.

## A little bit *more* about me

### Initialization

My first attempt at something like "programming" (if you try really hard to see it that way), was doing AI scripting
on the Crysis map editor. I'd spend hours experimenting with different buildings, enemies. There was some down
time after that period, I didn't really touch the computer, for anything other than gaming and the Internet
that is.

## Deeper

I don't remember how I got into python scripting, but I'll attribute it to my father, since he was a major influence
(love you too mom, don't worry!). I went ahead and followed any tutorial on Youtube I could find about making
games with pygame. I ended up following [sentdex's pygame tutorial](https://www.youtube.com/watch?v=ujOTNg17LjI).

Once I finished the tutorial, I started changing the textures to convert a racing-like game into a shmup.
I also added some (mine)music that changes between levels (the two different backdrops basically). Unfortunately
I've since lost _all_ those files. I've since learnt my lesson, and I keep multiple back-ups of any project.

At some point I remember my father showed me Blender and my mouth fell open with what it could do!
Back in the day he did modelling with LightWave 3D in his Amiga, so I guess he had an old itch to
scratch. I hastily downloaded it to my PC and started messing around with it. Besides two or three
shortcuts, I didn't learn much though.

There was another period of nothingness, until I found out about Unity3D. Again, hastily downloaded the
engine to my computer, watched tutorials, so on. I only used C# to program on it, because (All arguments
about how C# is much better on Unity3D than anything else, but it doesn't matter now, I guess) it
was the language the tutorials used.


Unity was a staple point in my road to programming. It taught me about OOP, how engines work on a superficial
level, and many more. It wouldn't be illogical to say that, at that point, it was the most productive work
I've ever done. I also did some stuff in UE4, but I think that my Unity projects were significantly more
impressive.


But I wanted to go deeper. I know... I'm already a demon. Heaven's not my kind of place, anyway ( get the reference?)

### Deeper!

It was time. The most notorious language in the universe. The one that will break you. The one that'll be
the end of you.

It was time for C++.

I installed Visual Studio 20... eh I don't know, the slow one. They have a messed up naming convention
anyways. The debugger is the best there ever was though. I installed it, looked up an intro series for
C++, and... I couldn't get "Hello World" to compile and run. I *literally* spent my noon trying to figure
out why. You _cannot_ imagine the joy that was brought to my eyes when it finally ran.

But, what is this? I have to go through a whole series on programming command-line programs to learn C++?
Why? Oh, because it's low-level or whatever. Worst marketing strategy. Thankfully, I wasn't willing to go
through the slow, painful process of doing all this. I knew that I'd quit after a while.

And this is a great time to make a point out of this. Something my father taught me that I'll remember for
the rest of my life. It was about how to get into new things. I used to think that I first had to go through
all the basics to get a comprehensive grasp of the subject, and only then would I be able to enjoy doing
the part that I actually like. My father taught me to dive head first into it. Yes, at some times it may
feel like I'm hitting my head against a wall, but oh my god it works! I wouldn't have ever tried all the
things that now are part of my life, if not for that single piece of advice.

So I then looked up "How to make a game in C++" on google, and strangely, the first results included OpenGL.
I remember following about 5 or so programming tutorials on OpenGL, maybe I'll list them out if I ever
have the time. To remind you, I didn't understand a single thing about C++, not even the basics of C for that
matter. Add up references, classes, STL to all the cruft that comes from working with C (i.e pointers), and
it's not surprising that I was constantly frustrated when I was following the tutorials.

But I was doing what I liked, which apparently was *not* game programming, but systems and graphics. So I
persevered through all that frustration and continued hitting my head against the OpenGL and C++ wall.

I don't exactly remember when, but at some point, everything started "clicking". You know that feeling when
you realise that you can rationalize about something, like it is the only logical thing that could happen?
Well that happened. I don't know when, how or what lead me to it, but after some time, things just started
making sense. It was exhilarating. Looking back, it doesn't seem much, but at that time, it meant the *world*
to me.

Of course, this is not the whole story, I had run-ins with many different development tools; besides
Unity, there was also Construct 2. Construct 2 has a special place in my lifetime; So I'll be posting
about it from time to time.

After some time, working with C++ and OpenGL, attempting to create a "Game Engine" (if you could even say that),
I messed around with several other stuff. Not just in C++! There was also [love](#love).

Now, I'm working on several stuff, whenever I have the time, so expect more posts on... eh, I don't know, whenever I
feel like I need to say something significant. Blog entries will be more specific on topics in terms of my experiences, so
watch out for them! I mean, if you want to; I don't know why I even started writing this page. I'd delete it, but...
It took some time to write all of those words, so I guess I'll keep it.

## Blog Entries

### How I write markdown for this site

At the time of writing (06/01/19), I currently use Neovim, as my main code editor.
It has significant improvements over the original. The most important one to me was the clipboard
management. Maybe I don't see a good use case for it; but I honestly believe that separate
copy clipboards is just madness. If you use Neovim, I highly recommend the following:
```
set clipboard   +=unnamedplus
```

Moving on, the main feature I wanted in terms of Markdown support, was a light spell-checker
(thankfully ships with the package and works like a charm), but most importantly, a preview (since
I don't really know Markdown all too well).

Since I had zathura installed, an excellent PDF viewer (and other formats, but I only need it for this),
that will reload the current file, if it has changed. So, naturally I turned to Google, to look for "markdown to PDF".
Apart from pandoc, which comes with too many things that I don't require, I didn't find much. A quick search on the AUR,
yielded the [following](https://aur.archlinux.org/packages/md2pdf/). Great! A simple command-line tool that compiles
markdown to a PDF with Github's stylesheet!

The only thing to handle now, is integration with Neovim. Two auto-commands that bound "leader-M" (my *make* keybind), and
"F5" (my *run* key), and I had a very nice live preview! You can find these settings in
my [dotfiles](https://github.com/mdodis/dotfiles).

One thing that I didn't bother to do, was to have it recompile on save. But the make keybind is just fine for me.

### Love

[Love2d](https://love2d.org/) was special to me. I may have quit using it (although I do peruse the documentation
from time to time), but it'll always have a special place in my heart. Why, you ask?

Because it's simple and powerful. Lua is a great scripting language (apart from counting from 1. Why!?); It's simple
to develop on. Just grab the executable, install it, and write code in main! The language doesn't even support OOP by
default, but you can implement it yourself with meta-programming. Don't get me wrong; Game engines like Game Maker Studio 2
Construct 2, Unity's 2D support (etc.), and especially Game Maker are the norm in 2D indie games, and for good reason! They all
have a lot of material and tutorials all over the internet.

But, one major grudge that I have with those Engines, is that they *really* want to do the project management for you.
Meaning, how they'll process your art packages, and sometimes even your code structure (looking at you, Game Maker). Of the ones
that I have used, Game Maker probably does the work job. It's entitled to it though, since they need to support older versions
of the engine. But the problem is there. Your code goes all over the place with varying *types* of code: initialization code,
scene code and more.

But, this is from the perspective of someone who prefers to do those things himself. Love2d is excellent for that, just run it
and it'll basically have 3 callback functions: init, update and draw. You don't need more than that! If you're interested,
[recursor](https://www.youtube.com/watch?v=Jte9o4S6rlo) has an excellent tutorial series. Beware though, there were some changes
to how the colors work (from 0.0 to 1.0 RGBA).

### Love Woes
![Alt text](love.gif?raw=True "medactionside")

This is my first project with love2d, and most notably the only one that actually got anywhere, to be honest.

In case the GIF isn't visible (quite possible I'm afraid; I don't know how to make proper gifs), there is
a little player sprite, that collides with the box indicated by a red outline. It looks like it's pixel-perfect
because of the collision model.

I don't remember exactly when I started building this "Engine", but I do know why; My friends and I were
thinking about making a small 2D side-scroll game during some vacation. Of course, as you can tell I was
more enthusiastic about building the engine rather than the actual game, but at the very least it got me
working on something. This is going to be a code review of sorts, where I'll go over some interesting things I
discovered during this endeavor, maybe someone out there will appreciate it!

#### Overview
At that time, I was heavily utilizing OOP, to a degree that you could call: too extensive. I've since moved
away from this type of programming, since it gets me into bad habits; mainly trying to "design" rather than
do anything meaningful.

Since I wanted some king of object-orientation and Lua by default doesn't support it (absolutely solid choice of
a programming language on my part!), I started looking through tutorials. Fortunately, lua has a very powerful
meta-programming model, and various implementations of class-like structures were plenty. So I chose the
simplest one and went on creating base classes like:

```lua
local class = require("util.class")
local Vector2 = class:derive("Vector2")

function Vector2:new(x, y)
	self.x = x or 0
	self.y = y or 0
end
```

along with a Box class

```
--[[
    BoundingBox class
 ]]
-- local Tools = require("util.Tools")
local class = require("util.class")
local Box = class:derive("Box")
local Vector2 = require("maths.Vector2")

function Box:new(x, y, w, h)
    self.w = w or 8
    self.h = h or 8
    self.x = x - w/2
    self.y = y - h/2
end

function Box:Draw()
    -- love.graphics.setColor(1,0,0,1)
    love.graphics.rectangle('line', self.x, self.y, self.w, self.h)
    -- love.graphics.setColor(1, 1, 1, 1)
end
```

Of course, this is not in chronological order! I ended up adding functionality to all
those base classes, when needed.

#### Events
I was initially talking about the very basic collision handling, but I had completely
forgotten that I'd written so much code! The recursor tutorial that I referenced in the
[love2d](#love) article actually included an event system for keyboard and gamepad handling!


I won't talk much about it here though, since it's mainly code that I just followed along with.

#### Scenes
Now this is a big ol' chunk of code! Before even implementing basic movement or combat, or anything along
the lines of an _actual_ game, I was wise and went on to scene management. I now see how this could have
lead to this project being canned. Maybe I'll redo it at some point, with less useless code, hopefully.

My idea of a scene was a pair of files, one having all the data needed for the scene to be run; audio, images,
and the other one containing the *actual* code. Of course generic code like player movement would not be
included.

This was the major time-sink of the project. I tried using JSON files to specify the scene objects, spending
all my precious "get excited" time to accomplish close to nothing. I also wanted to make a level-editor. Sigh.

#### Collision

For collision, I used
[Minkowski Difference](https://en.wikipedia.org/wiki/Minkowski_addition),
to move the object *back* if it has collided. If you've used Game Maker, this
probably sounds backwards to you (I usually see people calculating the next position
and then choosing to move by smaller increments).


Here's the code that goes along with that:

```lua

function Box:MinowskiDiff(b)
    assert(b:Is(Box), "Box:MinowskiDiff - Expected Box!")
    local top_left = Vector2.Sub(self:UpLeft(), b:DownRight())
    local newSize = Vector2.Add(self:Size(), b:Size())
    local newLeft = Vector2.Add(top_left, newSize:Div(2))
    return Box.CreateCentered(newLeft.x, newLeft.y, newSize.x, newSize.y)
end

function Box:ClosestPointOnBounds(point)
    assert(point:Is(Vector2),"Box:ClosestPointOnBounds - Expected point to be a vector2!")
    local minDist = math.abs(point.x - self.x)
    local max = self:DownRight()
    local bPoint = Vector2(self.x, point.y)

    if math.abs(max.x - point.x) < minDist then
        minDist = math.abs(max.x - point.x)
        bPoint = Vector2(max.x, point.y)
    end

    --move to y axis
    if math.abs(max.y - point.y) < minDist then
        minDist = math.abs(max.y - point.y)
        bPoint = Vector2(point.x, max.y)
    end

    if math.abs(self.y - point.y) < minDist then
        minDist = math.abs(self.y - point.y)
        bPoint = Vector2(point.x, self.y)
    end
    return bPoint
end

function Box.CreateCentered(x, y, w, h)
    local b = Box(0,0,w,h)
    b:SetCenter(x,y)
    return b
end

```

Then I just do an AABB collision test, and if it hits I move the player character
back.

#### Last but not the least stupid
Of course, you can't have a game engine by an amateur (still am!) without premature optimization. So I looked up
how to use sprite batches, and included that as well. Bravo Michael.

#### Conclusion
Some wise guy said failing is another step to achieving success, I think. Probably forged that from my mind, so
don't try to read into it. I think that failing in my case had a certain requirement in order to become effective.
That was, failing to do *the important stuff*. I was desperately trying to work out Scene Management, event systems
and all this pointless stuff; again they're probably very important, but not at the initial stage of development.

Maybe it wouldn't matter if I just started writing the actual game code; but I'd have learnt a lot more about it, as
well as be more excited when I revisited it today. This was my major pattern with writing engines; I'd focus too much
on unimportant stuff, rather that writing the code that I needed at that point in time.

Failing and trying again is good, don't give up. But it's important to understand that failing at something and
doing the exact same thing again, expecting to somehow get further, is probably not a good idea. It took me a lot of time
to realise this.

Thank you for reading this reaaally long post!
