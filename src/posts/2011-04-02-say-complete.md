---
title: Command Line Tasks that Announce when they're Complete
slug: say-complete
---

Just a quick post to start things off; I've recently stumbled across a great command line tip, simply append `&& say command complete` to the of your commands to have OS X tell you when it's complete.

For example use `bundle && say bundle complete` to let you know when a _bundle_ is finished or use `git push heroku && say deployed on heroku` to know when your website is deployed.

## Aliases

I packaged a few commands up into aliases:

``` sh
alias b='bundle && say bundle complete'
alias gph='git push heroku && say deployed on heroku'
```

### Taking it further

Lucas Willet ([@ltw_](http://twitter.com/ltw_)) took this idea [a step further](http://til.developingego.com/post/5326426892/a-function-to-automate-say) and created a [bash function](https://github.com/ltw/oh-my-zsh/commit/5ae46606d964619b987b4a51b68cc82ee7a9db1d) that you can prepend to the start of any command to have it automatically prepend say the command.

___

_Looking for more? Aliases like these and much more can be found in my [dotfiles](https://github.com/twe4ked/dotfiles) on [my github](https://github.com/twe4ked)._
