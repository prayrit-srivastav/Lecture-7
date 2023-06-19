//Constructor Function
function Movie(title, year) {
  this.title = title;
  this.year = year;

  this.getDetails = function () {
    console.log(`
                    Title: ${this.title}
                    Year: ${this.year}
                    `);
  };
}

const movie1 = new Movie('The Avengers', 2012);
movie1.getDetails();

// Classes in JS
class MovieCl {
  //properties
  rating = 'good';
  title;
  year;
  status = 'released';
  //constructor
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
  //methods
  getDetails() {
    console.log(`
                Title: ${this.title}
                Year: ${this.year}
                Rating: ${this.rating}
                `);
  }
}

const mov1 = new MovieCl('Avatar', 2013);
// console.log(mov1);
// mov1.getDetails();

mov1.status = 'not released';

//console.log(mov1.#rating);

const mov2 = new MovieCl('someMovie', 2022);
