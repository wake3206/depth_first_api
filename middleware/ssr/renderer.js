import React from 'react'
import ReactDOMServer from 'react-dom/server'

//import AppSsr from '../client/src/index.ssr';
import AppSsr from '../client/build/server.bundle';
const path = require("path");
const fs = require("fs");
const renderer =  (req, res, next) => {
  
  const filePath = path.resolve(__dirname, '..','client', 'build', 'index.html');
  //const filePath = path.resolve(__dirname, '..','client', 'public', 'index.html');

  //console.log('renderer...filePath',filePath)
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
		if (err) {
				console.error('err', err);
				return res.status(404).end()
		}
		// render the app as a string
		const html = ReactDOMServer.renderToString(<AppSsr />);
		// inject the rendered app into our html and send it
		return res.send(
				htmlData.replace(
					'<div id="root"></div>',
					`<div id="root">${html}</div>`
				)
		);

		
  });

    
}

export default renderer