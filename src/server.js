import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const PORT = 8000;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'portfolio';

const app = express();
app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    const db = client.db(dbName);

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Erorr connecting to db', error });
  }
}

app.get('/health', (_req, res) => res.status(200).send('I\'m Alive!'));

app.get('/api/articles/:name', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res)
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    await db.collection('articles').updateOne({ name: articleName }, {
      '$set': {
        upvotes: articleInfo.upvotes + 1
      }
    });
    const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })
    res.status(200).json(updatedArticleInfo);  
  }, res)
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
  const { username, text } = req.body;
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    console.log('articleInfo: ', username);
    await db.collection('articles').updateOne({ name: articleName }, {
      '$set': {
        comments: articleInfo.comments.concat({ username, text})
      }
    });
    const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })
    res.status(200).json(updatedArticleInfo);  
  }, res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// app.get('/hello', (_req, res) => res.send('Hello!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello, ${req.params.name}!`));
// app.post('/hello', (req, res) => res.send(`Hello, ${req.body.name}!`));