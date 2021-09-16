import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import routes from './routes';

const app = express();
createConnection();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000...');
});
