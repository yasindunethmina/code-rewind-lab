import express from 'express';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import posts from './routes/posts.js';

const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // alows sending form data

// logger middleware
app.use(logger);

// html files render (can be accessed through /about.html likewise so no need to specify each)
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts);

// global error handling for any unknown route
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
