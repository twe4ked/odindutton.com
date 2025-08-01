---
title: AnyBar Internet Status
slug: anybar-internet-status
layout: ../../layouts/Post.astro
---

<style>
  article.post img { margin-left: 25px; }
</style>

> AnyBar is a small indicator for your menubar that does one simple thing: it displays color dot. What color means is up to you. When to change color is also up to you.

Knowing when your internet drops out before you open your browser and work it out for yourself can be very handy.

<img src="/assets/images/posts/anybar-internet-status/menubar.png" width="569" />

When I first heard about [AnyBar] that was the first use case I thought of.<br/>
I wrote a simple [script] using `host` to check if my computer can access Google to keep an eye on my connection status.

<aside>
  <p>
    If you're using [fresh] I suggest installing it using fresh.
  </p>
</aside>

Put the following [script] somewhere on your machine an `chmod +x` it.

<p class="filename">
  ~/bin/anybar-internet
</p>

```sh
quit() {
  echo -n question | $ANYBAR
  exit
}

trap quit EXIT

ANYBAR="nc -4u -w0 localhost 1738"

while true; do
  if ping -c 5 -t 5 -o 8.8.8.8 &> /dev/null; then
    echo -n black | $ANYBAR
    sleep 5
  else
    echo -n red | $ANYBAR
  fi
done
```

I decided to keep it running in the background using launchd ([tutorial](http://launchd.info)).

Replace `$USER` with your username and put it in `~/Library/LaunchAgents/`:

<p class="filename">
  ~/Library/LaunchAgents/com.twe4ked.anybar-internet.plist
</p>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.twe4ked.anybar-internet</string>
	<key>Program</key>
	<string>/Users/$USER/bin/anybar-internet</string>
	<key>KeepAlive</key>
	<true/>
</dict>
</plist>
```

Launch `anybar-internet`:

```
launchctl load ~/Library/LaunchAgents/com.twe4ked.anybar-internet.plist
```

---

_Stuck? Try me on Twitter: [@twe4ked]._

[AnyBar]: https://github.com/tonsky/AnyBar
[@twe4ked]: https://twitter.com/twe4ked
[script]: https://github.com/twe4ked/dotfiles/blob/5b3830f0a4fd9f3da8ecd22fe1b0f88360dc5c5e/bin/anybar-internet
[fresh]: http://github.com/freshshell/fresh
