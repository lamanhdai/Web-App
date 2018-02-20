import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'hbs';

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

/***
*
* set up handlebarjs
*
***/
hbs.registerPartials(__dirname + '/views/partials');
server.set('view engine', 'hbs');
server.set('views', __dirname + '/views');
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

server.get(['/', '/category/:categoryId'], (req, res) => {
  serverRender(req.params.categoryId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.error(error);
      res.status(404).send('Bad Request');
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
