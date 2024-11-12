const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env' });
const app = require('./app');
app.use(bodyParser.json());
app.use(cors());

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected Successfully!'));

const port = 3000;
app.listen(port, () => {
  console.log(`App running on the port ${port}...`);
});
