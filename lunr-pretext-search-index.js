var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "a",
  "level": "1",
  "url": "a.html",
  "type": "Section",
  "number": "1",
  "title": "A. Function Notation and Evaluation",
  "body": " A. Function Notation and Evaluation   Function Notation  test   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
