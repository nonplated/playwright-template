// Remove some compatibility issue
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// Import domains, logins and passwords
const all_settings = require('./mypage.accounts');

// Import tests
const run_function = require('./mypage.def');

// Run tests for specified data of selected domain
run_function( all_settings.filter( item => item.id =='test_environment')[0] );
