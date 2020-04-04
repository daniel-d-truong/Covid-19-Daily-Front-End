import axios from 'axios';

const serverUrl = "http://127.0.0.1:5000/";

export const getNewsArticles = async(query: string = "") => {
    try {
        const fetchedData = await axios.get(`${serverUrl}news`, query==="" ? {} : {
            params: {
                q: query
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

export enum CountryData {
    TOTAL_CASES = "total_cases",
    NEW_CASES = "new_cases",
    TOTAL_DEATHS = "total_deaths", 
    NEW_DEATHS = "new_deaths",
    TOTAL_RECOVERED = "total_recovered",
    ACTIVE_CASES = "active_cases",
    SERIOUS_CRITICAL = "serious_critical", 
    TOTAL_PER_MIL = "total_per_million",
    DEATHS_PER_MIL = "deaths_per_million"
};