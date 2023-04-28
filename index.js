const Author = require("./Author");


const john = new Author("John Doe")
const post = john.writePost("Título do post", "Olá mundo")

post.addComment("Isasc", "Muito bom")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)