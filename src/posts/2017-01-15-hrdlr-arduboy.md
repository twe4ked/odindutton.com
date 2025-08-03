---
title: Hrdlr Arduboy
slug: hrdlr-arduboy
---

<style>
  article.post img.banner {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
</style>

<p align="center">
  <img src="/assets/images/posts/hrdlr-arduboy/banner.png" width="512" class="banner" />
</p>

An [Arduboy] is an Arduino based 8-bit handheld console.

<img src="/assets/images/posts/hrdlr-arduboy/hero.jpg" width="620" />

I picked one up and decided to make a hurdling game (again).

## Graphics

I used [Aseprite] to draw the graphics which were saved as PNG files then converted to C header files using [mksprite].

Below is an example of the first from of the [coin][4].
The comments are added my [mksprite] to make it easy to tell what frame you're referring to and aren't required.

For example the first frame of the [coin][4] looks like:

```c
const uint8_t PROGMEM coinFrames[][4] = {
  /* Frame number 0
       ##
      #  #
      # ##
      # ##
      # ##
      # ##
       ##

  */
  {0x3e,0x41,0x7d,0x3e},
```

## Demo

<div style="text-align: center; margin-bottom: 20px;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/sFjjoIboE9E" frameborder="0" allowfullscreen></iframe>
</div>

## Code

You can find the [code on Github][hrdlr-arduboy].
Fair warning though, I don't really know C or C++.

See previous versions:

- [hrdlr]\: The original, made at a Railscamp in [2012][1].
- [hrdlr-js]\: The second incarnation, made at a Camp JS in [2013][2]. [Demo][3].

---

<p align="center" style="color: #999;">
  _hash tag gamedev_
</p>

[hrdlr-arduboy]: https://github.com/twe4ked/hrdlr-arduboy

[Arduboy]: https://www.arduboy.com/
[hrdlr]: https://github.com/twe4ked/hrdlr
[hrdlr-js]: https://github.com/twe4ked/hrdlr-js
[mksprite]: https://github.com/dgoodlad/mksprite
[Aseprite]: https://www.aseprite.org/

[1]: https://github.com/twe4ked/hrdlr/commit/78496e7f83b39c603fc2a2fa5ee94674c09d388b
[2]: https://github.com/twe4ked/hrdlr-js/commit/2e45eec3e67ee7538ab572162e350b6173f6573d
[3]: http://hrdlr.herokuapp.com/
[4]: https://github.com/twe4ked/hrdlr-arduboy/blob/c4edf89d6a032c86dc21235ca4f7927785aebb36/src/bitmaps/coin.h
