const http = require('http');
const url = require('url');

const options = {
	method: 'HEAD',
	host: url.parse(process.argv[2]).host,
	port: 80,
	path: url.parse(process.argv[2]).pathname
};

//console.log(JSON.stringify(url.parse(process.argv[2])));

const req = http.request(options, r => {
	if (
		(r.statusCode >= 200 && r.statusCode <= 226) ||
		(r.statusCode >= 300 && r.statusCode <= 308)
	)
		console.log(
			`${options.host} is UP: Status Code: ${r.statusCode}, Status Message: ${r.statusMessage}`
		);
	else
		console.log(
			`${options.host} is DOWN: Status Code: ${r.statusCode}, Status Message: ${r.statusMessage}`
		);
});

req.end();
