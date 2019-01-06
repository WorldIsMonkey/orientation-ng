# orientation-ng
Next generation orientation engine running in browsers.

The goal of this project is to port the long-existing (a.k.a. crappy) [Flash-based orientation engine](https://github.com/WorldIsMonkey/wim-ori-con) to browsers in order to achieve maximum portability, maintainability and expandability using latest web technologies.

ETA May 2019. Needs more manpower.

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
A demo content delivery server has been set up at [149.248.60.115](http://149.248.60.115).
To retrieve the JSON output of each question type, you can `GET` the following endpoints:
```
/jsonapi/node/multiple_choice
/jsonapi/node/short_answer
/jsonapi/node/true_or_false
/jsonapi/node/mosaic
/jsonapi/node/mask
/jsonapi/node/music
```
Note that for fields with uploaded files (e.g. images, audio, video), a second API call to the URL in `links.related` is needed to get the actual URL of the file.

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
