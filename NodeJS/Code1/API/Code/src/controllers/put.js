const MovieStore = require("./../moviestore");
const movieStore = new MovieStore();

let put = () => {
    if(!movieStore.update(req.params.title, req.body)) {
        res.statusCode = 500;
        return res.json({
            message: "faile to update movie info"
        });
    };
    return res.json({
        message: 'update moviesuccessfully'
    });
};

module.exports = {
    put
};
