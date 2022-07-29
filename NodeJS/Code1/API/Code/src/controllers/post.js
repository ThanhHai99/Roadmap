const MovieStore = require("./../moviestore");
const movieStore = new MovieStore();

let post = () => {
    if (!req.body.Title || req.body.Title.trim().length < 1) {
        res.statusCode = 400;
        return res.json({
            message: 'missing or invalid title'
        });
    };

    if (movieStore.has(req.body.Title)) {
        res.statusCode = 400;
        return res.json({
            message: 'movie already existed'
        });
    };

    movieStore.add(req.body);

    return res.json({
        message: "movie add success"
    });
};

module.exports = {
    post
};
