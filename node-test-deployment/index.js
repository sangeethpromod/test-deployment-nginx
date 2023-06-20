const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: black;
            color: green;
          }
          .container {
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            background-color: green;
          }
          textarea {
            width: 100%;
            height: 150px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Enter Your Story</h1>
          <form action="/story" method="POST">
            <textarea name="story" placeholder="Enter your story here"></textarea>
            <br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post('/story', (req, res) => {
  const { story } = req.body;
  console.log('Submitted story:', story);
  // You can save the story to a database or perform any other required actions here
  res.send('Your story has been submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
