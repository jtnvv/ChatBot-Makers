import axios from 'axios'
axios.defaults.withCredentials = true

const url = "http://127.0.0.1:5000/chat"

export async function question(req) {
    try {
        const response = await axios.post(url, req, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
    catch (error) {
        console.error("Error POST request axios", error);
        throw error;
    }
}