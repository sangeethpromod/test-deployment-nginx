const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
      <form method="POST" action="/story">
        <label for="story">Enter your story:</label><br>
        <textarea name="story" id="story" rows="10" cols="30"></textarea><br><br>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
});

// Handle the form submission
app.post('/story', (req, res) => {
  const story = req.body.story;

  res.send(`
    <html>
    <body>
      <h2>Your Story:</h2>
      <p>${story}</p>
    </body>
    </html>
  `);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
