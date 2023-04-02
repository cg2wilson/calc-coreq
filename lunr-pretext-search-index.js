var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "a",
  "level": "1",
  "url": "a.html",
  "type": "Section",
  "number": "1",
  "title": "A. Function Notation and Evaluation",
  "body": " A. Function Notation and Evaluation   Function Notation   Supplements XYZ Sections: All    Function Notation Intro    A function is a relation that assigns exactly one output to every input. The set of inputs is the domain of the function. The set of outputs is the range of the function.  For a function :    is the function name     is the input     is the output or value for the corresponding      An important thing to notet is that does not indicate multiplication between and . Rather, represents the output or value obtained by plugging the corresponding value into the function . A function can be represented algebraically (with a formula), graphically (with a graph), numerically (with a table), or verbally (with a description.)   A diagram describing the \"function machine\"- is input into the machine called , and produced the output     Another important observation is that we can use variables other than and !  For example, let's identify the function name, input variable, and output variable in the following expressions: Let's try one more!   Some different types of functions with function notation:    Linear Function:  Is this different than ?    Quadratic Function:  Is the same as ?            "
},
{
  "id": "example-1",
  "level": "2",
  "url": "a.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  A function is a relation that assigns exactly one output to every input. The set of inputs is the domain of the function. The set of outputs is the range of the function.  For a function :    is the function name     is the input     is the output or value for the corresponding      An important thing to notet is that does not indicate multiplication between and . Rather, represents the output or value obtained by plugging the corresponding value into the function . A function can be represented algebraically (with a formula), graphically (with a graph), numerically (with a table), or verbally (with a description.)   A diagram describing the \"function machine\"- is input into the machine called , and produced the output     Another important observation is that we can use variables other than and !  For example, let's identify the function name, input variable, and output variable in the following expressions: Let's try one more!   Some different types of functions with function notation:    Linear Function:  Is this different than ?    Quadratic Function:  Is the same as ?         "
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
