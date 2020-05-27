$("#mkdocs-search-query").keypress(function(e) {
  if(e.which == 13) {
      e.preventDefault()
      return false
  }
});