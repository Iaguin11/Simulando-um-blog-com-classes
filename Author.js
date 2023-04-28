
const Post = require("./Post")

class Author {
    constructor(name){
        this.author = name
        this.post = []
        
    }
    writePost(title, body){
        const post = new Post(title, body,this.author)
        this.post.push(post)
        return post
    }
}

module.exports = Author
