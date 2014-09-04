/**
* Library Constructor
*/

function Library() {
    this.shelvesList = [];

/**
* Add Shelf to Library
* @param {Shelf}
*/
    this.addShelf = function (Shelf) {
        var found = false;
        for(i=0; i<this.shelvesList.length; i++){
            if(this.shelvesList[i] == Shelf){
                found = true;
            }
        }
        if(found === false){
            this.shelvesList.push(Shelf);
        }
        else{
            console.log("That shelf is already in the library.");
        }
    }
    
    /** 
    * Remove shelf from Library
    * @param {Shelf}
    */  

    this.burnShelf = function(Shelf){
        var found = false;
        for(i=0; i<this.shelvesList.length; i++){
            if(this.shelvesList[i] == Shelf){
                this.shelvesList.splice(i, 1);
                found = true;
            }
        }
        if(found === false){
            console.log("This shelf is not in the Library")
        }
    }

    /** 
    * Print Library Details
    */

    this.libInfo = function(){
        this.shelves = 0;
        this.books = [];
        for(i=0; i< this.shelvesList.length; i++){
            this.shelves += 1
            var shelf = this.shelvesList[i].books;
            for(n=0; n<shelf.length; n++){
                this.books.push(" " + shelf[n] + " ");
            }
        }
        console.log("Shelves: " + this.shelves);
        console.log("Books: " + this.books.length + "\n" +this.books);
    }
}

/** 
* Shelf Constructor
*/

function Shelf() {
    this.books = [];

    /**
    * Print Shelf Contents
    */

    this.listBooks = function(){
        console.log(this.books);
    }
}

/**
* Book Constructor
* @param {string} name
*/

function Book(name) {
    this.name = name;

    /**
    * Adds book to Shelf
    * @param {Shelf}
    */ 

    this.enshelf = function (Shelf) {
        var found = false;
        
        // Ask function creates a prompt in case book is already on shelf
        
        var ask = function(){
            if(found === true){
                var answer = prompt("This book is already on the shelf.  Do you want to add another copy?");
                if(answer.toLowerCase() == "yes" || answer.toLowerCase() == "y"){
                    Shelf.books.push(this.name);
                }
                else if(answer.toLowerCase() == "no" || answer.toLowerCase() == "n"){
                    null;
                }
                else{
                    console.log("That is not a valid answer");
                    ask();
                }
            }
        }
        
        for(i=0; i<Shelf.books.length; i++){
            if(Shelf.books[i] == this.name){
                found = true;
                ask();
            }
        }

        if(found === false){
            Shelf.books.push(this.name);
        }
    }

    /**
    * Removes book from shelf
    * @param {Shelf}
    */

    this.unshelf = function (Shelf) {
        for (i = 0; i < Shelf.books.length; i++) {
            var found = false;
            if (this.name == Shelf.books[i]) {
                Shelf.books.splice(i, 1);
                console.log(this.name + " has been removed from the shelf.");
                found = true;
            } 
        }
        if(found === false){
            console.log("That book is not on the shelf.");
        }
    }
}

// Testing methods

function space(){
    console.log("");
}


// library
var lib = new Library();

// shelves
var one = new Shelf();
var two = new Shelf();

// books
var sm = new Book("Sandman");
var eof = new Book("East of Eden");
var sid = new Book("Siddhartha");
var ham = new Book("Ham on Rye");

// putting books on shelf
sm.enshelf(one);
eof.enshelf(one);
sid.enshelf(one);
ham.enshelf(one);

// adding shelf to library
lib.addShelf(one);

// printing details 
lib.libInfo();

space();

// unshelving siddhartha
sid.unshelf(one);

// printing details
lib.libInfo();
space();

// unshelving a book that isnt on the shelf
sid.unshelf(one);
space();

// adding a book that is already on the shelf (uncomment)
// ham.enshelf(one);

// adding a second shelf to the library
sid.enshelf(two);
lib.addShelf(two);

// printing details
lib.libInfo();
