var ids = {
  facebook: {
    clientID: '615078848627362',
    clientSecret: '4a1a3f18a1f85d48e80a18a5291542ce',
    callbackURL: 'http://localhost:1337/auth/facebook/callback'
  },
  google: {
    returnURL: 'http://localhost:1337/auth/google/callback',
    realm: 'http://localhost:1337'
  }
}

module.exports = ids
