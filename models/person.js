const axios = require('axios');
const BASEPATH = '../people';

exports.find = async () => {
    const path = `${BASEPATH}`;

    const { data } = await axios(path);
    return data;
};

exports.findById = async id => {
    const path = `${BASEPATH}/${id}`;

    const { data: [data] } = await axios.get(path);
    return data;
};