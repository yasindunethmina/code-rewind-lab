import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // alows sending form data

// html files render (can be accessed through /about.html likewise so no need to specify each)
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
