exports.success = (data, message) => {
    return {
        message,
        data
    }
}

exports.error = (data) => {
    return {
        message: 'Le Pokemon n\'est pas enregistré',
        data: data
    }
}

exports.getUniqueId = () => {
    // set random id
    let id = Math.floor(Math.random() * 1000000);
    return id;
}