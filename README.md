## single-form style for worktile marketplace's apps

### Usage

1. copy `docs/main.css` to assets folder
2. add link which href is `main.css` to html's head as `<link href="../dist/main.css" rel="stylesheet" />`
3. copy `<div class="single-wrap">...</div>` in `docs/index.html` to you html

### Online Demo

[Click it see live demo](https://worktile.github.io/single-form/index.html)

### Development

```
npm run build:watch  // watch src scss
npm run build        // build css to docs folder
```
