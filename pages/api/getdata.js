import * as fs from 'fs';

export default function handler(req, res) {
    const filePath = `BlogData/${req.query.slug}.json`;

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(req.query.slug)
            console.error(`Error reading file: ${filePath}`, err);
            return res.status(404).json({ error: 'Blog not found' });
            console.log(req.query.slug)
        }

        try {
            const parsedData = JSON.parse(data);
            res.status(200).json(parsedData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ error: 'Invalid JSON format in blog file' });
        }
    });
}
