# PDF Converter

## Описание
Приложение позволяет пользователям конвертировать введенный текст в PDF и сохранять историю конверсий. Также реализован просмотр PDF прямо в приложении.

## Установка и запуск
1. Установите зависимости: npm install
2. Запустите приложение: npm run dev

## Структура проекта
- **`src/shared/components/`**:  
  Компоненты интерфейса:
  - `TextInput`: Поле ввода текста.
  - `ConvertButton`: Кнопка для запуска конвертации.
  - `PdfViewer`: Компонент для отображения PDF.
  - `HistoryList`: Список истории конверсий.

- **`src/core/services/`**:  
  Логика API:
  - `createPdf`: Функция для отправки текста на сервер и получения PDF.
  - `pdfLogic`: Вспомогательные функции для обработки данных PDF.

- **`src/page/`**:  
  Основные страницы:
  - `Home`: Главная страница приложения с текстовым полем, кнопкой и просмотрщиком PDF.

## Основные модули
- **`createPdf`**:  
  Отправляет запрос на сервер для конвертации текста в PDF

- **`HistoryList`**:  
  Компонент, отображающий список предыдущих конверсий, позволяет загружать сохраненные PDF.

- **`PdfViewer`**:  
  Компонент для отображения PDF-файлов.

## Используемые технологии
- React (Vite.js)
- TypeScript
- Axios
- Tailwind CSS
- Jest (для тестирования)