const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const http = require("http");

Sentry.init({
  dsn: "https://649b9350a1dd449db11f0144d76b9271@o507338.ingest.sentry.io/5598295",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "transaction",
  name: "My Transaction",
});

// Note that we set the transaction as the span on the scope.
// This step makes sure that if an error happens during the lifetime of the transaction
// the transaction context will be attached to the error event
Sentry.configureScope(scope => {
  scope.setSpan(transaction);
});

let request;

try {
  // this should generate an http span
  request = http.get("http://sentry.io", res => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  });

  // this error event should have trace context
  foo();
} catch (err) {
  //send error to host
  // Sentry.captureException(err);
  Sentry.captureMessage("Có lỗi nè");
}

request.on("close", () => {
  transaction.finish();
});