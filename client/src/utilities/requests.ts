import axios from 'axios';
import { changeCountryName } from './utils';

const serverUrl = "https://covid-19-daily.herokuapp.com/";

export const getNewsArticles = async(query: string = "") => {
    try {
        const fetchedData = await axios.get(`${serverUrl}news`, query==="" ? {} : {
            params: {
                c: changeCountryName(query)
            }
        });
        return fetchedData.data;
    } catch(e) {
        return {
            "status": e
        }
    }
};

export const getAllData = async () => {
    try {
        const response = await axios.get(`${serverUrl}data/all`);
        return response.data;
    } catch(e) {
        return {
            "status": e
        }
    }
};

export const getWorldData = async () => {
    try {
        const fetchedData = await axios.get(`${serverUrl}data`);
        return fetchedData.data;
    } catch(e) {
        return {
            "status": e
        }
    }
};

export const getCountryData = async (country: string,  yday_status: boolean = false) => {
    try {
        const fetchedData = await axios.get(`${serverUrl}data/${country}`, {
            params: {
                yday_status: yday_status
            }
        });
        return fetchedData.data;
    } catch(e) {
        return {
            "status": e
        }
    }
};

