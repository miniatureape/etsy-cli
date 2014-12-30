
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
  'fbu7k8r50janekpm74ne3ztt',
  'pwzucy7cpk',
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

    if (argv._.indexOf('test') != -1) {
        testClient(argv);
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

        methods = _.sortBy(methods, function(method) {
            return method.type;
        });

        var methods = _.map(methods, function(method) {
            var required_params = _.without(_.keys(method.params), _.keys(method.defaults));
            method._uri = method.uri;
            _.each(required_params, function(param) {
                method._uri = method._uri.replace(":" + param, '+ params.' + param + ' +');
                method.requires_oauth = method.visibility === 'private';
                method.is_get = method.http_method === 'GET';
                method.is_post = method.http_method === 'POST';
                method.is_put = method.http_method === 'PUT';
                method.is_delete = method.http_method === 'DELETE';
            });
            return method
        });

        var template = fs.readFileSync('libtemplate.mustache');
        var out = mustache.render(template.toString(), {types: types, methods: methods});

    });
}

var testClient = function() {
    var EtsyClient = require('./client');
    console.log(EtsyClient);
    var etsyClient = new EtsyClient();
    var tokens = JSON.parse(fs.readFileSync(getTokenPath()));
    etsyClient.setOAuthTokens(tokens);
    console.log(etsyClient);
    etsyClient.Listing.findAllShopListingsDraft({shop_id: 'weekendsandnights'});
}

runCommand(argv);
