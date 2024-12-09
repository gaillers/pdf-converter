import React from "react";

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextInput({ value, onChange }: TextInputProps): JSX.Element {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder="Введите текст..."
            className="w-full p-2 border border-gray-300 rounded color-black text-gray-700 min-h-40"
        />
    );
}
