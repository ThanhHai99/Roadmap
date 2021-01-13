const { exec } = require("./controllers/index");
const { program } = require("commander");

program.version("0.0.1");

// Command
program
.command("exec <name>")
.description("Say somthing")
.option("-m, --exec_mode [mode]")
.alias("s")
.action( (name, options) => {
  const mode = options.exec_mode || "normal";
  // console.log(name + " ==> " + mode);
  console.log(exec.index());
})

// Option
program
.option("-d, --do [task]", "Do something")
.action( () => {
  console.log(program.do);
})

program.parse(process.argv);

// node server.js --help
// node server.js say kimngan
// node server.js exec kkk -m kn
