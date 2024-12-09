
interface ConvertButtonProps {
    onClick: () => void;
    isLoading: boolean;
}

export default function ConvertButton({ onClick, isLoading }: ConvertButtonProps): JSX.Element {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            disabled={isLoading}
        >
            {isLoading ? "Конвертация..." : "Конвертировать в PDF"}
        </button>
    );
}
