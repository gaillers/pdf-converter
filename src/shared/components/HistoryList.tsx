interface HistoryItem {
    text: string;
    url: string;
}

interface HistoryListProps {
    history: HistoryItem[];
    onSelect: (url: string) => void;
}

export default function HistoryList({ history, onSelect }: HistoryListProps): JSX.Element {
    return (
        <ul className="mt-4">
            {history.map((item, index) => (
                <li
                    key={index}
                    onClick={() => onSelect(item.url)}
                    className="cursor-pointer text-blue-500 underline"
                >
                    {item.text}
                </li>
            ))}
        </ul>
    );
}
