
var open = require('open');
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var argv = require('minimist')(process.argv.slice(2));
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://openapi.etsy.com/v2/oauth/request_token',
  'https://openapi.etsy.com/v2/oauth/access_token',
  'key',
  'secret',
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
    if (argv._.indexOf('authenticate') != -1) {
        authenticate(argv);
    }

    if (argv._.indexOf('fetch') != -1) {
        fetch(argv);
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
                oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, verifier, function(nil, access_token, secret_access_token) {

                    // console.log(access_token, secret_access_token);

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

var fetch = function() {

    var tokens = JSON.parse(fs.readFileSync(getTokenPath()));
    console.log(tokens);
    oauth.get('https://openapi.etsy.com/v2/shops/weekendsandnights/receipts', tokens['access_token'], tokens['secret_access_token'], function() {
        console.log(arguments);
    });


}

runCommand(argv);
