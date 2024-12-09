import { useState } from 'react';

import TextInput from "../shared/components/TextInput";
import ConvertButton from "../shared/components/ConvertButton";
import PdfViewerComponent from "../shared/components/PdfViewer";
import HistoryList from "../shared/components/HistoryList";

import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { convertTextToPdf } from "../core/services/pdfLogic";

interface HistoryItem {
    text: string;
    url: string;
}

const Home = () => {
    const [text, setText] = useState<string>("");
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [history, setHistory] = useLocalStorage<HistoryItem[]>("history", []);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleConvert = async (): Promise<void> => {
        setLoading(true);
        setError("");
        try {
            const url = await convertTextToPdf(text);
            setPdfUrl(url);
            setHistory((prev) => [...prev, { text, url }]);
        } catch (err) {
            setError("Ошибка конвертации текста в PDF.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <div className="max-w-5xl w-full flex flex-row bg-gray-800 rounded-lg shadow-md p-8">

                <div className="w-1/2 pr-4">
                    <h1 className="text-3xl font-bold text-center mb-6">Конвертер в PDF</h1>

                    <div className="mb-5">
                        <TextInput value={text} onChange={(e) => setText(e.target.value)} />
                        <ConvertButton onClick={handleConvert} isLoading={loading} />
                        {error && (
                            <p className="text-red-500 text-center mt-4">{error}</p>
                        )}
                    </div>

                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-center">История</h2>
                        <HistoryList history={history} onSelect={(url) => setPdfUrl(url)} />
                    </div>
                </div>

                <div className="w-1/2 pl-4">
                    {pdfUrl ? (
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg h-full max-h-[100%] flex flex-col overflow-hidden">
                            <h2 className="text-lg font-semibold mb-4 text-center">Результат:</h2>
                            <PdfViewerComponent file={pdfUrl} />
                        </div>
                    ) : (
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg h-full max-h-[100%] flex items-center justify-center">
                            <p className="text-gray-400 text-center">Результат PDF</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Home;
