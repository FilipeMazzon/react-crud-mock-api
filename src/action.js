import axios from 'axios';
import {url} from './config/url.json'

export const insertProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await axios.post(url, data);
            resolve()
        } catch (e) {
            reject(e);
        }
    })
};

export const updateProduct = data => {
    const newUrl = `${url}${data.id}`;
    return new Promise(async (resolve, reject) => {
        try {
            await axios.put(newUrl, data);
            resolve();
        } catch (e) {
            reject(e)
        }
    })
};


