const today = new Date();

class Book {
   constructor(title, author, copyrightDate, isbn, numChecked, numPages, isDiscarded) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.numpages = numPages;
      this.numChecked = numChecked;
      this.copyrightDate = copyrightDate;
      this.isDiscarded = isDiscarded;

   }

   checkedOut(reads=1){// update no of times book is checked out. default val = 1
      this.numChecked += reads;
   }
}

class Manual extends Book {
   constructor(title, author, copyrightDate, isbn, numChecked, numPages, isDiscarded) {
      super(title, author, copyrightDate, isbn, numChecked, numPages, isDiscarded);
   }

   doDiscard() { //discard if copyrightDate > 5yrs
      if((today.getFullYear() - this.copyrightDate) > 5){
         this.isDiscarded = true;
      }
   }
}

class Novel extends Book {
   constructor(title, author, copyrightDate, isbn, numChecked, numPages, isDiscarded) {
      super(title, author, copyrightDate, isbn, numChecked, numPages, isDiscarded);
   }

   doDiscard() { //discard if numchecked > 100
      if (this.numChecked > 100){
        this.isDiscarded = true; 
      }
   }
}

let novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 32, 432, false);

let manual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1, 1147, false);

console.log(novel.copyrightDate);