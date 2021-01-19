const bunyan = require("bunyan");

const log = bunyan.createLogger({
  name: "Test thoi ma =))"
});

log.info("1st info");
log.info("2nd info");
log.error("1st error");
log.warn("1st warn");
