function Library() {
    this.shelvesList = [];

    this.addShelf = function (Shelf) {
        this.shelvesList.push(Shelf);
    }
    
    this.libInfo = function(){
        this.shelves = 0;
        this.books = [];
        for(i=0; i< this.shelvesList.length; i++){
            this.shelves += 1
            var shelf = this.shelvesList[i].books;
            for(i=0; i<shelf.length; i++){
                this.books.push(" " + shelf[i] + " ");
            }
        }
        console.log("Shelves: " + this.shelves);
        console.log("Books: " + this.books);
    }
}

function Shelf() {
    this.books = [];
}

function Book(name) {
    this.name = name;
    this.enshelf = function (Shelf) {
        Shelf.books.push(this.name);
    }
    this.unshelf = function (Shelf) {
        for (i = 0; i < Shelf.books.length; i++) {
            var found = false;
            if (this.name == Shelf.books[i]) {
                Shelf.books.splice(i, 1);
                console.log(this.name + " has been removed from the shelf.");
                found = true;
            } 
            else if (i == Shelf.books.length && found === false){
                console.log("That book is not on the shelf.");
            }
        }
    }
}

var lib = new Library();
var one = new Shelf();
var sm = new Book("Sandman");
var eof = new Book("East of Eden");
var sid = new Book("Siddhartha");

sm.enshelf(one);
eof.enshelf(one);
sid.enshelf(one);
lib.addShelf(one);

lib.libInfo();

sid.unshelf(one);
