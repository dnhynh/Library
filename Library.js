function Library(){
   this.shelves = 0;
   this.books = [];

   // print library info
   this.libInfo = function(){
        console.log("Number of Shelves: " + this.shelves);
        console.log(this.books);
   }
}

function Shelf(){
    this.books = [];
    this.addToLibrary = function(Library){
        Library.shelves += 1;
        for(i=0; i<this.books.length; i++){
            Library.books.push(this.books[i]);
        }
    }
}

function Book(name){
    this.name = name;
    this.enshelf = function(Shelf){
        Shelf.books.push(this.name);
    }
    this.unshelf = function(Shelf){
    	var found = false;
    	for(i=0; i<Shelf.books.length; i++){
    		if(Shelf.books[i] == this.books[i]){
    			Shelf.books.splice(i, 1);
    			found = true;
    		}
    		else if(i == Shelf.books.length && found = false){
    			console.log("That book isn't on the shelf.")
    		}
    	}
    }
}

var lib = new Library();
var one = new Shelf();
var sandman = new Book("The Sandman");
var sid = new Book("Siddhartha");
var eof = new Book ("East of Eden");

sandman.enshelf(one);
sid.enshelf(two);
eof.enshelf(one);
one.addToLibrary(lib);
lib.libInfo();