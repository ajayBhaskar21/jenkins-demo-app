import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Jenkins Basics", completed: true },
    { id: 2, title: "Set up CI/CD Pipeline", completed: false }
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = { id: Date.now(), title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Export app for testing, conditionally listen
if (process.env.NODE_ENV !== 'test') {
    app.listen(5000, () => console.log('Backend running on port 5000'));
}

export default app;