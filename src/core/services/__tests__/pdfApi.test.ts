import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createPdf } from '../pdfApi';

const mock = new MockAdapter(axios);

describe('createPdf', () => {
    afterEach(() => {
        mock.reset();
    });

    test('успешная конвертация текста в PDF', async () => {
        const mockBlob = new Blob(['PDF content'], { type: 'application/pdf' });

        mock.onPost('http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4').reply(200, mockBlob);

        const result = await createPdf('Test PDF');
        expect(result).toEqual(mockBlob);
    });

    test('ошибка при конвертации текста в PDF', async () => {
        mock.onPost('http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4').reply(500);

        await expect(createPdf('Test PDF')).rejects.toThrow('Не удалось выполнить конвертацию текста в PDF.');
    });
});
