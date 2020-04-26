---
title: My Rust Journey So Far
layout: post
redirect_from: rust/
---

This is a summary of most of the Rust projects I've worked on in my spare time
over the last few years.

## 2020

- [gitsha](https://github.com/twe4ked/gitsha) – This was started some time in
  2019 but I finished it in 2020 (even though it's only a small project). It's a
  port of [charliesome/gitsha](https://github.com/charliesome/gitsha).
- [vgm](https://github.com/twe4ked/vgm) – A
  [VGM](https://vgmrips.net/wiki/VGM_Specification) file parser. Only supports
  parsing the headers, not actually playing music at this point.
- [hl][hl] – CLI tool to highlight patterns in text. Ported from
  [Crystal][crystal] to Rust.

## 2019

- [gol](https://github.com/twe4ked/gol) – Game of Life.
- [chip-8](https://github.com/twe4ked/chip-8) – This is an easier emulator to
  build than the LC-3 as the intructions are easier to parse.
- [prompt](https://github.com/twe4ked/prompt) – Inspired by projects such as
  [starship](TODO), this is a prompt build in Rust to be very fast and easy to
  configure.
- [mandelbrot-set](https://github.com/twe4ked/mandelbrot-set) – The mandelbrot
  set fractal.
- [phreaking](https://github.com/twe4ked/phreaking) – Generate Dual Tone Multi
  Frequency (DTMF) tones.
- [farbfeld-view](https://github.com/twe4ked/farbfeld-view) – A farbfeld viewer.
  farbfeld is a lossless image format which is easy to parse, pipe and
  compress.
- [msws](https://github.com/twe4ked/msws) – Middle Square Weyl Sequence
  pseudorandom number generator. I made this (`no_std`) to use in [oos][oos] as
  a random number generator for doing game of life.
- [oos][oos] – The beginnings of an operating system,
  following along the wonderful series [Writing an OS in Rust](https://os.phil-opp.com/)
  by Philipp Oppermann.
- [diff-color](https://github.com/twe4ked/diff-color) – Color `diff --unified`
  output.
- [hash-data][hash-data] – A library and command line tool for identifying
  hashes.
- [tin-whistle][tin-whistle] – Takes ABC notation from STDIN and prints out tin
  whistle diagrams. [Ported][tin-whistle-1] from [Crystal][crystal] to Rust.

## 2018

- [rs8080](https://github.com/twe4ked/rs8080) – The beginnings of an 8080
  emulator, I later decided this was too hard and tried (and finished) a LC-3
  emulator.
- [lc3](https://github.com/twe4ked/lc3) – An LC-3 emulator. This is a good
  starting place for playing with emulators.

[oos]: https://github.com/twe4ked/oos
[hl]: https://github.com/twe4ked/hl
[hash-data]: https://github.com/twe4ked/hash-data
[tin-whistle]: https://github.com/twe4ked/tin-whistle
[tin-whistle-1]: https://github.com/twe4ked/tin-whistle/commit/106a72462c8b4861305c08e7a7c3124bfaff4d85
[crystal]: https://crystal-lang.org/
