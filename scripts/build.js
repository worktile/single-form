const sass = require('node-sass');
const importer = require('node-sass-import');

sass.render(
    {
        file: './src/index.scss',
        importer: importer,
    },
    function (error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log(result);
        }
    }
);
