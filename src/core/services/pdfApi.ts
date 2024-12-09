import axios from "axios";

const BASE_URL = 'http://95.217.134.12:4010';
const API_KEY = '78684310-850d-427a-8432-4a6487f6dbc4'

export const createPdf = async (text: string): Promise<Blob> => {
    try {
        const response = await axios.post(
            `${BASE_URL}/create-pdf?apiKey=${API_KEY}`,
            { text },
            { responseType: "blob" }
        );
        return response.data;
    } catch (error) {
        console.error("Ошибка при запросе API:", error);
        throw new Error("Не удалось выполнить конвертацию текста в PDF.");
    }
};