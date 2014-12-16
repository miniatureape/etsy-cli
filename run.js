
var open = require('open');
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var argv = require('minimist')(process.argv.slice(2));
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://openapi.etsy.com/v2/oauth/request_token',
  'https://openapi.etsy.com/v2/oauth/access_token',
  '<consumer_key>',
  '<consumer_secret>',
  '1.0A',
  null,
  'HMAC-SHA1'
);

var getPath = function() {
    return path.join(process.env['HOME'], '.etsy-cli');
}

var getTokenPath = function() {
    return path.join(getPath(), 'token');
}

var ensureDirectory = function() {
    try {
        fs.mkdirSync(getPath());
    } catch(e) { 
        /* pass */ 
    }
};

var runCommand = function(argv) {
    console.log(argv);
    if (argv._.indexOf('authenticate') != -1) {
        authenticate(argv);
    }
};

var authenticate = function() {
    oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){

        if (error) {
            console.log(error);
        } else {

            // Kick open a browser to accept and get verifier
            open(results.login_url);

            var rl = readline.createInterface({
                  input: process.stdin,
                  output: process.stdout
            });

            rl.question("Enter verifier key: ", function(verifier) {
                var verifier = verifier;
                oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, verifier, function(access_token, secret_access_token) {

                    var fd = fs.openSync(getTokenPath(), 'w');
                    fs.writeSync(fd, JSON.stringify({
                        access_token: access_token,
                        secret_access_token: secret_access_token
                    }));

                });
                rl.close();
            });

        }
    });

};

runCommand(argv);
