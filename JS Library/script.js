class media {

  constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

      get title() {
        return this._title;
      }

      get isCheckedOut() {
          return this._isCheckedOut;
      }

      get ratings () {
          return this._ratings;
      }

      set isCheckedOut(value) {
        this._isCheckedOut = value;
      }

      getAverageRating() {
        let ratingsum = this.ratings.reduce((accumulator, rating) => accumulator  + rating);
        return ratingsum / this.ratings.length;
      }
  
      toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
      }
  
      addRating(value) {
        return this.ratings.push(value);
      }
}

class book extends media {
  // properties
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
    // getters
    
    get author() {
      return this._author;
    }
    
    get pages() {
      return this._pages
    }
}

class movie extends media {
  // properties
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  // getters

  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
}

class CD extends media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    songs = [];
  }

  // getters

  get artist() {
    return this._artist;
  }
}

const historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus();
console.log(`Checked out ? ${historyOfEverything.isCheckedOut}`);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(`Average rating for "History of Everything" is: ${historyOfEverything.getAverageRating()}`);

const speed = new movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(`Checked out ? ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(`Average rating for "speed" is: ${speed.getAverageRating()}`);