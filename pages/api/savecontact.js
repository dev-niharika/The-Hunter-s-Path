import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Ensure the contacts directory exists
            await fs.promises.mkdir("contacts", { recursive: true });

            // Read current files in the contacts directory
            let data = await fs.promises.readdir("contacts");

            // Write the incoming data to a new file
            await fs.promises.writeFile(
                `contacts/${data.length + 1}.json`,
                JSON.stringify(req.body, null, 2) // Pretty print for readability
            );

            // Respond with success and the saved data
            res.status(200).json({ message: "Data saved successfully", data: req.body });
        } catch (error) {
            // Handle any errors
            console.error(error);
            res.status(500).json({ error: "Failed to save contact" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
