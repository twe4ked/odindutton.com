window.onscroll = function(event) {
  if (window.cover_height == undefined) { window.cover_height = document.getElementById('cover').offsetHeight }
  if (document.body.scrollTop <= window.cover_height) {
    document.body.classList.remove('hide-cover')
  } else {
    document.body.classList.add('hide-cover')
  }
}
