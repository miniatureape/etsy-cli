var Oauth    = require('oauth').OAuth;
var argv     = require('minimist')(process.argv.slice(2));

var oauth = new OAuth(
  'https://openapi.etsy.com/v2/oauth/request_token',
  'https://openapi.etsy.com/v2/oauth/access_token',
  'key',
  'secret',
  '1.0A',
  null,
  'HMAC-SHA1'
)

var EtsyClient = function(opts) {
    this.oauth = null;
    this.authorized = false;
    oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
};

EtsyClient.prjtotype.authenticate = function(key, secret, callback, errCallback) {

    this.oauth = new OAuth(
        'https://openapi.etsy.com/v2/oauth/request_token',
        'https://openapi.etsy.com/v2/oauth/access_token',
        key,
        secret,
        '1.0A',
        null,
        'HMAC-SHA1'
    );

    oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results, cachePath) {

        if (error) {

            if (errCallback) {
                errCallback(error);
            } else {
                console.log(error);j:w
            }

        } else (
            if (callback) {
                callback.apply(callback, arguments);
            } else {

                open(results.login_url);

                var rl = readline.createInterface({
                      input: process.stdin,
                      output: process.stdout
                });

                rl.question("Enter verifier key: ", function(verifier) {

                    var verifier = verifier;

                    oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, verifier, function(nil, access_token, secret_access_token) {

                        this.tokens = {
                            access_token: access_token,
                            secret_access_token: secret_access_token
                        };

                        if (cachePath) {
                            var fd = fs.openSync(getTokenPath(), 'w');
                            fs.writeSync(fd, JSON.stringify(this.tokens));
                        }

                        this.authenticated = true;

                    });
                    rl.close();
                }
        }
    })
}

EtsyClient.prototype.getAccessToken = function(oauth_token, oauth_token_secret, verifier, callback) {
    callback = callback || this.storeToken;
    oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, verifier, callback);
}


EtsyClient.prototype.storeToken = function(nil, access_token, secret_access_token) {
    callback = callback || this.storeToken;
    oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, verifier, callback);
}


exports.EtsyClient = EtsyClient;
