const { conn, session, createConnection } = require('../shhconnection/myssh');

// Define a function to execute 10 shell scripts with parameters
function runShellScriptsd() {
    const scripts = [
      './my-script-1.sh arg1 arg2 arg3',
      './my-script-2.sh arg1 arg2 arg3',
      './my-script-3.sh arg1 arg2 arg3',
      './my-script-4.sh arg1 arg2 arg3',
      './my-script-5.sh arg1 arg2 arg3',
      './my-script-6.sh arg1 arg2 arg3',
      './my-script-7.sh arg1 arg2 arg3',
      './my-script-8.sh arg1 arg2 arg3',
      './my-script-9.sh arg1 arg2 arg3',
      './my-script-10.sh arg1 arg2 arg3',
    ];
  
    if (session) {
      // If a session is available, execute the 10 shell scripts using the existing connection
      console.log("dasdasda");
      scripts.forEach((script) => {
        console.log("ASDsdas"+script)
        session.conn.exec(script, (err, stream) => {
          if (err) throw err;
          stream.on('close', (code, signal) => {
            console.log(`SSH command exited with code ${code} and signal ${signal}`);
            session.conn.end();
          }).on('data', (data) => {
            console.log(`STDOUT: ${data}`);
          }).stderr.on('data', (data) => {
            console.log(`STDERR: ${data}`);
          });
        });
      });
    } else {
      console.log("dasdasda");
      // If no session is available, create a new connection and execute the 10 shell scripts
      session = { conn: conn };
      createConnection();
      conn.on('ready', () => {
        console.log('SSH connection established');
        scripts.forEach((script) => {
          session.conn.exec(script, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
              console.log(`SSH command exited with code ${code} and signal ${signal}`);
              session.conn.end();
            }).on('data', (data) => {
              console.log(`STDOUT: ${data}`);
            }).stderr.on('data', (data) => {
              console.log(`STDERR: ${data}`);
            });
          });
        });
      });
    }
  }
  


  module.exports = {

    runShellScriptsd
}