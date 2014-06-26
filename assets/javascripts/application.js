window.onload = function(event) {
  span = document.querySelectorAll('header h2 span')[0]

  request = new XMLHttpRequest()
  request.open('GET', 'http://human.odin.bz/location.json', true)
  request.onerror = function() {
    span.textContent = '@ Earth'
  }
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText)
      span.textContent = '@ ' + data['name']
      span.setAttribute('title', data['source_created_at'])
    } else {
      request.onerror()
    }
  }
  request.send()
}
