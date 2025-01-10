import http from 'http';
import fs from 'fs/promises';
import { indexHtml } from './views/home/index.html.js';
import { addCat } from './views/addCat.html.js';
import { addBreed } from './views/addBreed.html.js';
import { siteCss } from './content/styles/site.css.js'

let cats = []

initCats()



const server = http.createServer((req, res) => {

if (req.url === '/styles/site.css') {
    
    res.writeHead(200, {
        'content-type' : 'text/css',
    }),

    res.write(siteCss());
    
    return res.end();
}

res.writeHead(200, {
    'content-type' : 'text/html'
});

switch (req.url) {
    case '/':
        res.write(indexHtml(cats))
        break;
    case '/cats/add-cat':
        res.write(addCat())
        break;
    case '/cats/add-breed':
        res.write(addBreed())
        break;
    default:
        res.write('Page not found')
        break;
}

res.end()

})

async function initCats() {
    let catsJSON = await fs.readFile('./cats.json', { encoding: 'utf-8' });
    cats = JSON.parse(catsJSON)
}


server.listen(5000)
console.log('server listens on port: 5000');
