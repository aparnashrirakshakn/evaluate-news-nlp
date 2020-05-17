# Evaluate News using Natural Language Processing

This is a web tool that allows users to run Natural Language Processing on articles or blogs found on other websites using the `AYLIEN Text Analysis API`.

# Setup

1.  Sign up to create API credentials on the [AYLIEN API](https://aylien.com/text-api/)  website
2.  Create a .env file at the root level, which contains the following

```
APP_ID=<YOUR_APP_ID_HERE>
API_KEY=<YOUR_API_KEY_HERE>
```

# Run
1. `cd` into your `evaluate-news-app` directory
2. run `npm install`
3. run `npm run start` to start the Node Server locally
4. run `npm run build-dev` to start running the app locally in development mode
5. run `npm run build-prod` to build in production mode
