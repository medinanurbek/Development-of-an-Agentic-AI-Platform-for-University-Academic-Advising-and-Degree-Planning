# Configuration and dependencies

The browser prototype needs no environment file or backend dependencies. Root package.json/package-lock.json define Node development dependencies; install with npm ci. Tested target: Node 24, Playwright 1.62.1.

.env.example is a future-backend contract. Replace placeholders locally only when implementing the backend. Do not put model keys in client code; a configuration flag does not authorise processing real records. Backend/mobile dependency definitions will accompany their runnable implementations.
