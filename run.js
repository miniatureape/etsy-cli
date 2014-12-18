
var fs       = require('fs');
var path     = require('path');
var readline = require('readline');

var _        = require('underscore');
var argv     = require('minimist')(process.argv.slice(2));
var open     = require('open');
var OAuth    = require('oauth');
var mustache = require('mustache');

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

    if (argv._.indexOf('generate') != -1) {
        generate(argv);
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

var generate = function() {
    var tokens = JSON.parse(fs.readFileSync(getTokenPath()));
    oauth.get('https://openapi.etsy.com/v2/', tokens['access_token'], tokens['secret_access_token'], function(nil, response) {
        var response = JSON.parse(response);
        var methods = response.results;

        var types = _.compact(_.uniq(_.map(methods, function(method) {
            if (!_.contains(['String', 'Int', null, 'array', 'Dict'], method.type)) {
                return method.type;
            }
        })));

        var template = fs.readFileSync('libtemplate.mustache');
        var out = mustache.render(template.toString(), {types: types, methods: methods});
        console.log(out);
    });
}

runCommand(argv);
