module.exports = (request, response) => {
  response.status(200);

  response.json( {
	text: 'Hello World'
  } );
}
