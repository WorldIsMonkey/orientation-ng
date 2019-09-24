# orientation-ng
Next generation orientation engine running in browsers.

The goal of this project is to port the long-existing (a.k.a. crappy) [Flash-based orientation engine](https://github.com/WorldIsMonkey/orientation-lts) to browsers in order to achieve maximum portability, maintainability and expandability using latest web technologies.

This project has been iceboxed as nobody is working on it.

## TODO
- [ ] Structure
- [ ] Multiple choice
- [ ] True or False
- [ ] Short Answer
- [ ] Mosaic
- [ ] Mask
- [ ] Music/Video
- [ ] CSS `// I really don't want to do this and I hope someone else can take it`
- [ ] Fast responder `// need a PoC. May need a backend server and WebSocket`
- [ ] Live score board `// same as above`

## API
A content delivery API is included in the [orientation-drupal](https://github.com/WorldIsMonkey/orientation-drupal) project.

To retrieve the JSON output of each question type, you can `GET` the following endpoints:
```
/jsonapi/node/multiple_choice
/jsonapi/node/short_answer
/jsonapi/node/true_or_false
/jsonapi/node/mosaic
/jsonapi/node/mask
/jsonapi/node/music
```
Note that for fields with uploaded files (e.g. image, audio, video), a second API call to the URL in `links.related` is needed to get the actual URL of the file.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
