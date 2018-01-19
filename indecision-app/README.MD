* Start live server
live-server public

* Compile *
babel src/app.js --out-file=public/scripts/app.js --presets=env,react

* Auto compile
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

