const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const uploadPath = 'uploads/';



// Функция для преобразования изображений в Base64
function getBase64Image(filePath) {
    const image = fs.readFileSync(filePath);
    return `data:image/${path.extname(filePath).slice(1)};base64,${image.toString('base64')}`;
}

// Функция для получения последних трех изображений в формате Base64
function getLastThreeImages() {
    const files = fs.readdirSync(uploadPath);
    return files
        .filter(file => /\.(jpeg|jpg|png)$/i.test(file))
        .slice(-3)
        .map(file => ({ url: getBase64Image(path.join(uploadPath, file)) }));

}

app.use(cors());  // Добавление CORS middleware

app.get('/api/images', (req, res) => {
    try {
        const images = getLastThreeImages();
        res.json(images);
    } catch (error) {
        console.error('Ошибка получения изображений:', error);
        res.status(500).json({ error: 'Ошибка получения изображений' });
    }
});

app.listen(3005, () => {
    console.log('Сервер запущен на порту 3005');
});
