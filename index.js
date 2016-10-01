
require('dotenv').config();

const vorpal = require('vorpal')();
const importer = require('./src/modules/importer');

vorpal
    .command('import', 'Launch the import script')
    .action(function(args, next) {
        importer.run(
            process.env.WP_JSON_ENDPOINT,
            process.env.WP_USER,
            process.env.WP_PASSWORD
        );
        next();
    });

vorpal
    .delimiter('WPimport')
    .show();
