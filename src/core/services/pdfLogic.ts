import { createPdf } from "./pdfApi";

export const convertTextToPdf = async (text: string): Promise<string> => {
    try {
        const pdfBlob = await createPdf(text);
        const pdfUrl = URL.createObjectURL(new Blob([pdfBlob], { type: "application/pdf" }));
        return pdfUrl;
    } catch (error) {
        console.error("Ошибка при конвертации:", error);
        throw error;
    }
};
