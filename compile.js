// Path module will make sure that we always generate a valid path for other Unix based systems.
const path = require('path');
const fs = require('fs');

// Solidity compiler
const solc = require('solc');

// Generating a path that points directly to the inbox
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Reading contents of file
const source = fs.readFileSync(inboxPath, 'utf8');

// Compile will pass in our source code and then we have to specify the number of different contracts that we're attempting to compile
// Exporting that big giant object that has the contracts property and then a list of contracts that were compiled
module.exports = solc.compile(source, 1).contracts[':Inbox'];
