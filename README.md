## What is this?

It's a proof of concept app that fetches movie data from <a href="https://www.omdbapi.com/">OMDBApi</a>

It should be live at <a href="https://jchabrowski.github.io/movie-app/" target="_blank">https://jchabrowski.github.io/movie-app/</a> if I'm not busy breaking it 🔨

## What's inside?

- Fetches paginated movie data
- Supports filtering by year and type
- Client-side response caching
- Validates OMDB API responses
- Allows saving favorite movies with persistence
- Keyboard navigation support
- Basic responsive design

## Additionally

- Light and dark mode support
- Debounced title search independent from other filters
- CLI-based deployments to GitHub Pages

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
