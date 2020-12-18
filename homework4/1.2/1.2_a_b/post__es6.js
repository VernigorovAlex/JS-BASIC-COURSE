"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('admin', 'hello', new Date());
console.log(post1);

post1.edit('Goodbye');
console.log(post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('user', 'hockey', new Date());
console.log(attached1);

attached1.makeTextHighlighted();
attached1.edit('football');
console.log(attached1);