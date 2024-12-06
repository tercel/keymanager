const { exec } = require('child_process');

const args = process.argv.slice(2);
// Replace 'ItemName' with the name of your keychain item
// Replace 'AccountName' with the account associated with your keychain item
const command = `security find-generic-password -w -a ${args[0]} -s ${args[1]}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log({
      message: error,
      code: 1
    });
    return;
  }
  if(stderr){
    console.log({
      message: stderr,
      code: 1
    });
    return;
  }
  // stdout
  console.log({
    message: stdout.trim(),
    code: 0
  });
});

