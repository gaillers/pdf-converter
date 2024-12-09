
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface PdfViewerProps {
    file: string | null;
}

export default function PdfViewerComponent({ file }: PdfViewerProps): JSX.Element | null {
    if (!file) return null;

    return (
        <div className="mt-4 border border-gray-300 rounded max-h-[554px] min-h-[530px] overflow-hidden">
            <Worker workerUrl="/pdf.worker.min.js">
                <Viewer fileUrl={file} />
            </Worker>
        </div>
    );
}
