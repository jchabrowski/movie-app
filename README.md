## What is this?

It's a proof of concept app that fetches movie data from https://www.omdbapi.com/

It should be live at https://jchabrowski.github.io/movie-app/ if I'm not busy breaking it 🔨

## What it includes?

- Fetching paginated movie data
- Filtering movie data by year/type
- Caching responses client side
- OMDBApi schema validation
- Option to save movies to persisting favourites
- Basic rwd

## Additionally (cool factors)

- Lightmode/darkmode support
- Debounced title search separated from the filters
- CLI gh-pages deployments

## How to run

Visit here https://jchabrowski.github.io/movie-app/

Or clone the repository:

```
git clone https://github.com/jchabrowski/movie-app.git
```

Checkout to the cloned folder

```
cd movie-app
```

Install packages

```
npm i
```

Run it locally - will open the app on localhost:5173 by default

```
npm run dev
```

### Todo

- Basic unit tests
- Playwright axe-core integration for accessibility testing
