function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list')

    for ( let i = 0, l = ranks.length; i < l; i++ ) {
      ranks[i].innerHTML  = ( i + n).toString()
    }
}

function deepestChild() {
  var divs = document.querySelector('#grand-node').querySelectorAll('div')
  
  for (let i = 0, l = divs.length; i < l; i++) {
    if (divs[i].querySelector('div') === 'div') {
      continue;
    } else {
      return (divs[i])
    }
  }
}