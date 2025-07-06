# Angular 20 Test

Basic Angular 20 app to show and filter properties.

```cmd
npm install

npm start
```

## Json server or hardcoded values

It can be used with hardcoded data in the housing.ts service, or by installing the json server.

```cmd
npm install -g json-server

json-server --watch db.json
```
if the json-server doesn't serve the db.json like content at
http://localhost:3000/locations

the fallback mechanism is to use the hardcoded values and logs are sent to the console.

A very basic circuit braker is in place. If the json-server fails, we switch to hardcoded values for the following calls.
