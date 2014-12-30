
module.exports = (function() {

    var apiKey            = key;
    var accessToken       = tokens['access_token'];
    var secretAccessToken = tokens['secret_access_token'];

    return {

        setApiKey: function(key) {
            apiKey = key;
        },

        setOAuthTokens: function(tokens) {
            accessToken = tokens['access_token'];
            secretAccessToken = tokens['secret_access_token'];
        },

        ApiMethod: {},
        Category: {},
        Country: {},
        FeaturedTreasury: {},
        Listing: {},
        Guest: {},
        GuestCart: {},
        ImageType: {},
        FavoriteListing: {},
        ListingFile: {},
        ListingImage: {},
        ShippingInfo: {},
        ShippingUpgrade: {},
        Transaction: {},
        ListingTranslation: {},
        Variations_Property: {},
        Page: {},
        Array: {},
        PageImage: {},
        Collection: {},
        CollectionListing: {},
        array: {},
        Payment: {},
        PaymentAdjustment: {},
        PaymentAdjustmentItem: {},
        Variations_PropertySetOptionModifier: {},
        Variations_PropertySetOption: {},
        Variations_PropertySet: {},
        Receipt: {},
        Region: {},
        Segment: {},
        SegmentPoster: {},
        Int: {},
        String: {},
        ShippingTemplate: {},
        ShippingTemplateEntry: {},
        Shop: {},
        ShopAbout: {},
        Coupon: {},
        Ledger: {},
        LedgerEntry: {},
        PaymentTemplate: {},
        ReceiptReviews: {},
        ShopSection: {},
        ShopSectionTranslation: {},
        ShopTranslation: {},
        Style: {},
        Team: {},
        User: {},
        Treasury: {},
        ForumPost: {},
        TreasuryListing: {},
        DataType: {},
        UserAddress: {},
        Avatar: {},
        BillingOverview: {},
        Cart: {},
        BillCharge: {},
        Dict: {},
        FavoriteUser: {},
        Feedback: {},
        BillPayment: {},
        UserProfile: {},

            ApiMethod.getMethodTable: function(params) {
                var uri = "/";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            .getPublicBaseline: function(params) {
                var uri = "/baseline";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.getCategory: function(params) {
                var uri = "/categories/:tag";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.getSubCategory: function(params) {
                var uri = "/categories/:tag/:subtag";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.getSubSubCategory: function(params) {
                var uri = "/categories/:tag/:subtag/:subsubtag";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Country.findAllCountry: function(params) {
                var uri = "/countries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Country.getCountry: function(params) {
                var uri = "/countries/:country_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Country.findByIsoCode: function(params) {
                var uri = "/countries/iso/:iso_code";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FeaturedTreasury.findAllFeaturedTreasuries: function(params) {
                var uri = "/featured_treasuries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FeaturedTreasury.getFeaturedTreasuryById: function(params) {
                var uri = "/featured_treasuries/:featured_treasury_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllListingsForFeaturedTreasuryId: function(params) {
                var uri = "/featured_treasuries/:featured_treasury_id/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllActiveListingsForFeaturedTreasuryId: function(params) {
                var uri = "/featured_treasuries/:featured_treasury_id/listings/active";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllFeaturedListings: function(params) {
                var uri = "/featured_treasuries/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllCurrentFeaturedListings: function(params) {
                var uri = "/featured_treasuries/listings/homepage_current";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FeaturedTreasury.findAllFeaturedTreasuriesByOwner: function(params) {
                var uri = "/featured_treasuries/owner/:owner_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Guest.getGuest: function(params) {
                var uri = "/guests/:guest_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.findAllGuestCarts: function(params) {
                var uri = "/guests/:guest_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.addToGuestCart: function(params) {
                var uri = "/guests/:guest_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.updateGuestCartListingQuantity: function(params) {
                var uri = "/guests/:guest_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.removeGuestCartListing: function(params) {
                var uri = "/guests/:guest_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.findGuestCart: function(params) {
                var uri = "/guests/:guest_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.updateGuestCart: function(params) {
                var uri = "/guests/:guest_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            GuestCart.deleteGuestCart: function(params) {
                var uri = "/guests/:guest_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Guest.claimGuest: function(params) {
                var uri = "/guests/:guest_id/claim";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Guest.mergeGuest: function(params) {
                var uri = "/guests/:guest_id/merge";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Guest.generateGuest: function(params) {
                var uri = "/guests/generator";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ImageType.listImageTypes: function(params) {
                var uri = "/image_types";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.createListing: function(params) {
                var uri = "/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.getListing: function(params) {
                var uri = "/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.updateListing: function(params) {
                var uri = "/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.deleteListing: function(params) {
                var uri = "/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            FavoriteListing.findAllListingFavoredBy: function(params) {
                var uri = "/listings/:listing_id/favored-by";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ListingFile.findAllListingFiles: function(params) {
                var uri = "/listings/:listing_id/files";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingFile.uploadListingFile: function(params) {
                var uri = "/listings/:listing_id/files";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingFile.findListingFile: function(params) {
                var uri = "/listings/:listing_id/files/:listing_file_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingFile.deleteListingFile: function(params) {
                var uri = "/listings/:listing_id/files/:listing_file_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingImage.findAllListingImages: function(params) {
                var uri = "/listings/:listing_id/images";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ListingImage.uploadListingImage: function(params) {
                var uri = "/listings/:listing_id/images";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingImage.getImage_Listing: function(params) {
                var uri = "/listings/:listing_id/images/:listing_image_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ListingImage.deleteListingImage: function(params) {
                var uri = "/listings/:listing_id/images/:listing_image_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingInfo.findAllListingShippingProfileEntries: function(params) {
                var uri = "/listings/:listing_id/shipping/info";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShippingInfo.createShippingInfo: function(params) {
                var uri = "/listings/:listing_id/shipping/info";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.getListingShippingUpgrades: function(params) {
                var uri = "/listings/:listing_id/shipping/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.createListingShippingUpgrade: function(params) {
                var uri = "/listings/:listing_id/shipping/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.updateListingShippingUpgrade: function(params) {
                var uri = "/listings/:listing_id/shipping/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.deleteListingShippingUpgrade: function(params) {
                var uri = "/listings/:listing_id/shipping/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Transaction.findAllListingTransactions: function(params) {
                var uri = "/listings/:listing_id/transactions";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingTranslation.getListingTranslation: function(params) {
                var uri = "/listings/:listing_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ListingTranslation.createListingTranslation: function(params) {
                var uri = "/listings/:listing_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingTranslation.updateListingTranslation: function(params) {
                var uri = "/listings/:listing_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ListingTranslation.deleteListingTranslation: function(params) {
                var uri = "/listings/:listing_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.getListingVariations: function(params) {
                var uri = "/listings/:listing_id/variations";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.createListingVariations: function(params) {
                var uri = "/listings/:listing_id/variations";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.updateListingVariations: function(params) {
                var uri = "/listings/:listing_id/variations";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.createListingVariation: function(params) {
                var uri = "/listings/:listing_id/variations/:property_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.updateListingVariation: function(params) {
                var uri = "/listings/:listing_id/variations/:property_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Variations_Property.deleteListingVariation: function(params) {
                var uri = "/listings/:listing_id/variations/:property_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllListingActive: function(params) {
                var uri = "/listings/active";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.getInterestingListings: function(params) {
                var uri = "/listings/interesting";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.getTrendingListings: function(params) {
                var uri = "/listings/trending";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            .pagesSignup: function(params) {
                var uri = "/pages-signup";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Page.findPage: function(params) {
                var uri = "/pages/:page_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Array.updatePageData: function(params) {
                var uri = "/pages/:page_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            PageImage.uploadAvatar: function(params) {
                var uri = "/pages/:page_id/avatar";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Collection.findAllPageCollections: function(params) {
                var uri = "/pages/:page_id/collections";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Collection.createPageCollection: function(params) {
                var uri = "/pages/:page_id/collections";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Collection.getPageCollection: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Collection.updatePageCollection: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Collection.deletePageCollection: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            CollectionListing.getCollectionListings: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            CollectionListing.addListingToCollection: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            CollectionListing.removeListingFromCollection: function(params) {
                var uri = "/pages/:page_id/collections/:collection_id/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            array.findPageCollectionsForListings: function(params) {
                var uri = "/pages/:page_id/collections/listings_map";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Array.addCurator: function(params) {
                var uri = "/pages/:page_id/curators/:curator_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Array.removeCurator: function(params) {
                var uri = "/pages/:page_id/curators/:curator_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Array.curatorPeopleSearch: function(params) {
                var uri = "/pages/find-curators";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Payment.findPayment: function(params) {
                var uri = "/payments/:payment_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentAdjustment.findPaymentAdjustments: function(params) {
                var uri = "/payments/:payment_id/adjustments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentAdjustment.findPaymentAdjustment: function(params) {
                var uri = "/payments/:payment_id/adjustments/:payment_adjustment_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentAdjustmentItem.findPaymentAdjustmentItem: function(params) {
                var uri = "/payments/:payment_id/adjustments/:payment_adjustment_id/items";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentAdjustmentItem.findPaymentAdjustmentItem: function(params) {
                var uri = "/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            .getPrivateBaseline: function(params) {
                var uri = "/private-baseline";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Variations_PropertySetOptionModifier.getPropertyOptionModifier: function(params) {
                var uri = "/property_options/modifiers";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Variations_PropertySetOption.findAllSuggestedPropertyOptions: function(params) {
                var uri = "/property_options/suggested";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Variations_PropertySet.findPropertySet: function(params) {
                var uri = "/property_sets";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Receipt.getReceipt: function(params) {
                var uri = "/receipts/:receipt_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.updateReceipt: function(params) {
                var uri = "/receipts/:receipt_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllReceiptListings: function(params) {
                var uri = "/receipts/:receipt_id/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Transaction.findAllReceiptTransactions: function(params) {
                var uri = "/receipts/:receipt_id/transactions";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Region.findAllRegion: function(params) {
                var uri = "/regions";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Region.getRegion: function(params) {
                var uri = "/regions/:region_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Region.findEligibleRegions: function(params) {
                var uri = "/regions/eligible";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Segment.findBrowseSegments: function(params) {
                var uri = "/segments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findBrowseSegmentListings: function(params) {
                var uri = "/segments/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            SegmentPoster.findBrowseSegmentPosters: function(params) {
                var uri = "/segments/posters";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Int.getServerEpoch: function(params) {
                var uri = "/server/epoch";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            String.ping: function(params) {
                var uri = "/server/ping";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Array.getShippingCosts: function(params) {
                var uri = "/shipping/:shipping_provider_id/postage-costs";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingInfo.getShippingInfo: function(params) {
                var uri = "/shipping/info/:shipping_info_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingInfo.updateShippingInfo: function(params) {
                var uri = "/shipping/info/:shipping_info_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingInfo.deleteShippingInfo: function(params) {
                var uri = "/shipping/info/:shipping_info_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Array.getPostageRates: function(params) {
                var uri = "/shipping/providers/:shipping_provider_id/mail-class-rates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShippingTemplate.createShippingTemplate: function(params) {
                var uri = "/shipping/templates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplate.getShippingTemplate: function(params) {
                var uri = "/shipping/templates/:shipping_template_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplate.updateShippingTemplate: function(params) {
                var uri = "/shipping/templates/:shipping_template_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplate.deleteShippingTemplate: function(params) {
                var uri = "/shipping/templates/:shipping_template_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplate.findAllShippingTemplateEntries: function(params) {
                var uri = "/shipping/templates/:shipping_template_id/entries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.findAllShippingTemplateUpgrades: function(params) {
                var uri = "/shipping/templates/:shipping_template_id/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.createShippingTemplateUpgrade: function(params) {
                var uri = "/shipping/templates/:shipping_template_id/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.updateShippingTemplateUpgrade: function(params) {
                var uri = "/shipping/templates/:shipping_template_id/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingUpgrade.deleteShippingTemplateUpgrade: function(params) {
                var uri = "/shipping/templates/:shipping_template_id/upgrades";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplateEntry.createShippingTemplateEntry: function(params) {
                var uri = "/shipping/templates/entries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplateEntry.getShippingTemplateEntry: function(params) {
                var uri = "/shipping/templates/entries/:shipping_template_entry_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplateEntry.updateShippingTemplateEntry: function(params) {
                var uri = "/shipping/templates/entries/:shipping_template_entry_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplateEntry.deleteShippingTemplateEntry: function(params) {
                var uri = "/shipping/templates/entries/:shipping_template_entry_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Shop.findAllShops: function(params) {
                var uri = "/shops";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Shop.getShop: function(params) {
                var uri = "/shops/:shop_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Shop.updateShop: function(params) {
                var uri = "/shops/:shop_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopAbout.getShopAbout: function(params) {
                var uri = "/shops/:shop_id/about";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Shop.uploadShopBanner: function(params) {
                var uri = "/shops/:shop_id/appearance/banner";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Shop.deleteShopBanner: function(params) {
                var uri = "/shops/:shop_id/appearance/banner";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Coupon.findAllShopCoupons: function(params) {
                var uri = "/shops/:shop_id/coupons";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Coupon.createCoupon: function(params) {
                var uri = "/shops/:shop_id/coupons";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Coupon.findCoupon: function(params) {
                var uri = "/shops/:shop_id/coupons/:coupon_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Coupon.updateCoupon: function(params) {
                var uri = "/shops/:shop_id/coupons/:coupon_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Coupon.deleteCoupon: function(params) {
                var uri = "/shops/:shop_id/coupons/:coupon_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Ledger.findLedger: function(params) {
                var uri = "/shops/:shop_id/ledger/";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            LedgerEntry.findLedgerEntries: function(params) {
                var uri = "/shops/:shop_id/ledger/entries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllShopListingsActive: function(params) {
                var uri = "/shops/:shop_id/listings/active";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllShopListingsDraft: function(params) {
                var uri = "/shops/:shop_id/listings/draft";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllShopListingsExpired: function(params) {
                var uri = "/shops/:shop_id/listings/expired";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.getShopListingExpired: function(params) {
                var uri = "/shops/:shop_id/listings/expired/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllShopListingsFeatured: function(params) {
                var uri = "/shops/:shop_id/listings/featured";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllShopListingsInactive: function(params) {
                var uri = "/shops/:shop_id/listings/inactive";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.getShopListingInactive: function(params) {
                var uri = "/shops/:shop_id/listings/inactive/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentTemplate.findShopPaymentTemplates: function(params) {
                var uri = "/shops/:shop_id/payment_templates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            PaymentTemplate.createShopPaymentTemplate: function(params) {
                var uri = "/shops/:shop_id/payment_templates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentTemplate.updateShopPaymentTemplate: function(params) {
                var uri = "/shops/:shop_id/payment_templates/:payment_template_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.findAllShopReceipts: function(params) {
                var uri = "/shops/:shop_id/receipts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Payment.findShopPaymentByReceipt: function(params) {
                var uri = "/shops/:shop_id/receipts/:receipt_id/payments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.submitTracking: function(params) {
                var uri = "/shops/:shop_id/receipts/:receipt_id/tracking";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.findAllShopReceiptsByStatus: function(params) {
                var uri = "/shops/:shop_id/receipts/:status";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.searchAllShopReceipts: function(params) {
                var uri = "/shops/:shop_id/receipts/search";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ReceiptReviews.getShopReviews: function(params) {
                var uri = "/shops/:shop_id/reviews";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopSection.findAllShopSections: function(params) {
                var uri = "/shops/:shop_id/sections";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopSection.createShopSection: function(params) {
                var uri = "/shops/:shop_id/sections";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopSection.getShopSection: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopSection.updateShopSection: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopSection.deleteShopSection: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllShopSectionListings: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Listing.findAllShopSectionListingsActive: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/listings/active";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopSectionTranslation.getShopSectionTranslation: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopSectionTranslation.createShopSectionTranslation: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopSectionTranslation.updateShopSectionTranslation: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopSectionTranslation.deleteShopSectionTranslation: function(params) {
                var uri = "/shops/:shop_id/sections/:shop_section_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Transaction.findAllShopTransactions: function(params) {
                var uri = "/shops/:shop_id/transactions";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopTranslation.getShopTranslation: function(params) {
                var uri = "/shops/:shop_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ShopTranslation.createShopTranslation: function(params) {
                var uri = "/shops/:shop_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopTranslation.updateShopTranslation: function(params) {
                var uri = "/shops/:shop_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShopTranslation.deleteShopTranslation: function(params) {
                var uri = "/shops/:shop_id/translations/:language";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Shop.getListingShop: function(params) {
                var uri = "/shops/listing/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.findAllTopCategory: function(params) {
                var uri = "/taxonomy/categories";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.findAllTopCategoryChildren: function(params) {
                var uri = "/taxonomy/categories/:tag";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Category.findAllSubCategoryChildren: function(params) {
                var uri = "/taxonomy/categories/:tag/:subtag";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Style.findSuggestedStyles: function(params) {
                var uri = "/taxonomy/styles";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Team.findAllTeams: function(params) {
                var uri = "/teams";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.findAllUsersForTeam: function(params) {
                var uri = "/teams/:team_id/users/";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Team.findTeams: function(params) {
                var uri = "/teams/:team_ids/";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Transaction.getTransaction: function(params) {
                var uri = "/transactions/:transaction_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Treasury.findAllTreasuries: function(params) {
                var uri = "/treasuries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Treasury.createTreasury: function(params) {
                var uri = "/treasuries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Treasury.getTreasury: function(params) {
                var uri = "/treasuries/:treasury_key";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Treasury.deleteTreasury: function(params) {
                var uri = "/treasuries/:treasury_key";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ForumPost.findTreasuryComments: function(params) {
                var uri = "/treasuries/:treasury_key/comments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            ForumPost.postTreasuryComment: function(params) {
                var uri = "/treasuries/:treasury_key/comments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ForumPost.deleteTreasuryComment: function(params) {
                var uri = "/treasuries/:treasury_key/comments/:comment_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            TreasuryListing.addTreasuryListing: function(params) {
                var uri = "/treasuries/:treasury_key/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            TreasuryListing.removeTreasuryListing: function(params) {
                var uri = "/treasuries/:treasury_key/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            DataType.describeOccasionEnum: function(params) {
                var uri = "/types/enum/occasion";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            DataType.describeRecipientEnum: function(params) {
                var uri = "/types/enum/recipient";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            DataType.describeWhenMadeEnum: function(params) {
                var uri = "/types/enum/when_made";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            DataType.describeWhoMadeEnum: function(params) {
                var uri = "/types/enum/who_made";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.findAllUsers: function(params) {
                var uri = "/users";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.getUser: function(params) {
                var uri = "/users/:user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            UserAddress.findAllUserAddresses: function(params) {
                var uri = "/users/:user_id/addresses";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            UserAddress.createUserAddress: function(params) {
                var uri = "/users/:user_id/addresses/";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            UserAddress.getUserAddress: function(params) {
                var uri = "/users/:user_id/addresses/:user_address_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            UserAddress.deleteUserAddress: function(params) {
                var uri = "/users/:user_id/addresses/:user_address_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Avatar.uploadAvatar: function(params) {
                var uri = "/users/:user_id/avatar";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Avatar.getAvatarImgSrc: function(params) {
                var uri = "/users/:user_id/avatar/src";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            BillingOverview.getUserBillingOverview: function(params) {
                var uri = "/users/:user_id/billing/overview";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.getAllUserCarts: function(params) {
                var uri = "/users/:user_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.addToCart: function(params) {
                var uri = "/users/:user_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.updateCartListingQuantity: function(params) {
                var uri = "/users/:user_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.removeCartListing: function(params) {
                var uri = "/users/:user_id/carts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.getUserCart: function(params) {
                var uri = "/users/:user_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.updateCart: function(params) {
                var uri = "/users/:user_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.deleteCart: function(params) {
                var uri = "/users/:user_id/carts/:cart_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.addAndSelectShippingForApplePay: function(params) {
                var uri = "/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Listing.findAllCartListings: function(params) {
                var uri = "/users/:user_id/carts/:cart_id/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Cart.getUserCartForShop: function(params) {
                var uri = "/users/:user_id/carts/shop/:shop_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            BillCharge.findAllUserCharges: function(params) {
                var uri = "/users/:user_id/charges";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Dict.getUserChargesMetadata: function(params) {
                var uri = "/users/:user_id/charges/meta";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            User.getCirclesContainingUser: function(params) {
                var uri = "/users/:user_id/circles";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.getConnectedUser: function(params) {
                var uri = "/users/:user_id/circles/:to_user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.unconnectUsers: function(params) {
                var uri = "/users/:user_id/circles/:to_user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Page.listFollowingPages: function(params) {
                var uri = "/users/:user_id/connected_pages";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            .followPage: function(params) {
                var uri = "/users/:user_id/connected_pages";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            .unfollowPage: function(params) {
                var uri = "/users/:user_id/connected_pages/:page_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.getConnectedUsers: function(params) {
                var uri = "/users/:user_id/connected_users";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            User.connectUsers: function(params) {
                var uri = "/users/:user_id/connected_users";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            FavoriteUser.findAllUserFavoredBy: function(params) {
                var uri = "/users/:user_id/favored-by";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FavoriteListing.findAllUserFavoriteListings: function(params) {
                var uri = "/users/:user_id/favorites/listings";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FavoriteListing.findUserFavoriteListings: function(params) {
                var uri = "/users/:user_id/favorites/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FavoriteListing.createUserFavoriteListings: function(params) {
                var uri = "/users/:user_id/favorites/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            FavoriteListing.deleteUserFavoriteListings: function(params) {
                var uri = "/users/:user_id/favorites/listings/:listing_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            FavoriteUser.findAllUserFavoriteUsers: function(params) {
                var uri = "/users/:user_id/favorites/users";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FavoriteUser.findUserFavoriteUsers: function(params) {
                var uri = "/users/:user_id/favorites/users/:target_user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            FavoriteUser.createUserFavoriteUsers: function(params) {
                var uri = "/users/:user_id/favorites/users/:target_user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth post args
                        result = oauth.post(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            FavoriteUser.deleteUserFavoriteUsers: function(params) {
                var uri = "/users/:user_id/favorites/users/:target_user_id";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Feedback.findAllUserFeedbackAsAuthor: function(params) {
                var uri = "/users/:user_id/feedback/as-author";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Feedback.findAllUserFeedbackAsBuyer: function(params) {
                var uri = "/users/:user_id/feedback/as-buyer";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Feedback.findAllUserFeedbackAsSeller: function(params) {
                var uri = "/users/:user_id/feedback/as-seller";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Feedback.findAllUserFeedbackAsSubject: function(params) {
                var uri = "/users/:user_id/feedback/as-subject";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Feedback.findAllFeedbackFromBuyers: function(params) {
                var uri = "/users/:user_id/feedback/from-buyers";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Feedback.findAllFeedbackFromSellers: function(params) {
                var uri = "/users/:user_id/feedback/from-sellers";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            BillPayment.findAllUserPayments: function(params) {
                var uri = "/users/:user_id/payments";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            PaymentTemplate.findAllUserPaymentTemplates: function(params) {
                var uri = "/users/:user_id/payments/templates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            UserProfile.findUserProfile: function(params) {
                var uri = "/users/:user_id/profile";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            UserProfile.updateUserProfile: function(params) {
                var uri = "/users/:user_id/profile";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        // TODO make these arguments match the oauth put args
                        result = oauth.put(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Receipt.findAllUserBuyerReceipts: function(params) {
                var uri = "/users/:user_id/receipts";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            ShippingTemplate.findAllUserShippingProfiles: function(params) {
                var uri = "/users/:user_id/shipping/templates";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Shop.findAllUserShops: function(params) {
                var uri = "/users/:user_id/shops";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Team.findAllTeamsForUser: function(params) {
                var uri = "/users/:user_id/teams";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },
            Transaction.findAllUserBuyerTransactions: function(params) {
                var uri = "/users/:user_id/transactions";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                if (accessToken && secretAccessToken) {
                        result = oauth.get(uri, accessToken, secretAccessToken, callback);
                } else {
                    throw("Must set access token and secret_access_token");
                }
                return result;
            },
            Treasury.findAllUserTreasuries: function(params) {
                var uri = "/users/:user_id/treasuries";
                for (var key in params) {
                    uri = uri.replace(':' + key, params[key]);
                }
                var result;

                console.log('TODO: non oauth requests');
                return result;
            },

})()

module.exports = Etsy;

