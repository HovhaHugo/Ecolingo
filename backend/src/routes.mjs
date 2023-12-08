import * as fs from 'node:fs/promises';

const data = JSON.parse(await fs.readFile("questions.json", "utf8")).data;

/**
 * @param {import("express").Application} app 
 */
export function makeRoutes(app) {
  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.get("/api/question", async (req, res) => {
    res.send(data[Math.floor(Math.random() * data.length)])
  })
}