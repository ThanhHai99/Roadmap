const MovieStore = require("./../moviestore");
const movieStore = new MovieStore();
const paginate = require("../util/index");

let getAll = () => {
    let movies = movieStore.search(req.query.title);
    let page = parseInt(req.query.page) || 1;
    let size = parseInt(req.query.size) || 2;
    let results = paginate(movies, size, page);
    return res.json({
        title: req.query.title,
        totalPage: movies.length,
        page: page,
        size: size,
        payload: results
    });
};

let getByTitle = () => {
    let foundMovies = movieStore.find(req.params.title);
    if (foundMovies.length < 1) {
        res.statusCode = 404;
        return res.json({
            message: 'movie not found'
        });
    };
    return res.json({
        message: 'movie found',
        payload: foundMovies.pop()
    });
};

module.exports = {
    getAll,getByTitle
};
