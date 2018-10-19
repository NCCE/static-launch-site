# ncce-static

This is a static site generator developed to build the initial homepage of the National Centre for Computing Education.

## Set up

Dependencies:

We recommend you use a node version manager like [NVM](https://github.com/creationix/nvm).

Once you have the correct node version stated in `.node-version`, you will want to install the node packages by running `npm install`.

## Development

#### Environment Variables

Open your Terminal app and navigate to the root of your project. Run the following command to copy the development environment variables to the correct place:

```
cp .env.example .env
```

Now you have node setup you can build the site using the following commands:

```
# build a static version of the site
npm run build
```

```
# build a local server that watches for changes
npm run dev
```

## Deployment

Deployment is managed by Netlify.
