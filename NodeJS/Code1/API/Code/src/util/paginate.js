function paginate(data, size, page) {
    let index = page - 1;
    return data.slice(index*size, (index + 1)*size);
};

module.exports = paginate;
