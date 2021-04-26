class MovieStore {
    constructor() {
        this.movieData = require("./datastore.json");
    };

    all() {
        return this.movieData;
    };

    find(title) {
        return this.movieData.filter(m => m.Title === title);
    };

    add(movie) {
        this.movieData.push(movie);
    };

    has(title) {
        let movies = this.find(title);
        return movies.length > 0;
    };

    update(title, info) {
        // Kiem tra movie co ton tai khong
        let movies = this.find(title);
        if (movies.length < 1) return false; // khong ton tai
        let newMovie = Object.assign(oldMovie, info);
        let oldMovieList = this.movieData.filter(m => m.Title !== title);
        this.movieData = [...oldMovieList, newMovie];
        return true;
    };

    remove(title) {
        if (!this.has(title)) return false;
        this.movieData = this.movieData.filter(m => m.Title !== title);
    };

    search(title) {
        return this.movieData.filter(m => m.Title.includes(title));
    };
};

module.exports = MovieStore;
