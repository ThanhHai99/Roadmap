const MovieStore = require("./../moviestore");
const movieStore = new MovieStore();

let remove = () => {
    if(!movieStore.remove(req.params.title)) {
        res.statusCode = 404;
        return res.json({
            message: "movie not found"
        });
    };
    return res.json({
        message: 'remove movie successfully'
    });
};

module.exports = {
    remove
};
