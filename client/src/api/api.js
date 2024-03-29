import axios from "axios";
// const host = "http://localhost:5000";
const host = "https://expense-tracker-jagdish0809.vercel.app/";

export const newExpense = async (data) => {
    try {
        let response = await axios.post(`${host}/api/newexpense`, data);
        return response;
    } catch (error) {
        return (error);
    }
}

export const getExpenses = async () => {
    try {
        let response = await axios.get(`${host}/api/newexpense`);
        return response;
    } catch (error) {
        return (error);
    }
}