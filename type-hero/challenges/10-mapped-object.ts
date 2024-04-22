type MovieInfoByGenre<T> = {
  [K in keyof T]: {
		name: T[K] | string;
		year: number;
		director: string;
	};
};

const test_MoviesInfoByGenre: MovieInfoByGenre<MoviesByGenre> = {
  action: {
    name: 'Die Hard',
    year: 1988,
    director: 'John McTiernan',
  },
  comedy: {
    name: 'Groundhog Day',
    year: 1993,
    director: 'Harold Ramis',
  },
  sciFi: {
    name: 'Blade Runner',
    year: 1982,
    director: 'Ridley Scott',
  },
  fantasy: {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
  },
  drama: {
    name: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
  },
  horror: {
    name: 'The Shining',
    year: 1980,
    director: 'Stanley Kubrick',
  },
  romance: {
    name: 'Titanic',
    year: 1997,
    director: 'James Cameron',
  },
  animation: {
    name: 'Toy Story',
    year: 1995,
    director: 'John Lasseter',
  },
  thriller: {
    name: 'The Silence of the Lambs',
    year: 1991,
    director: 'Jonathan Demme',
  },
};
