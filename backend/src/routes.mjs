/**
 * @param {import("express").Application} app 
 */
export function makeRoutes(app) {
    app.get("/api/question", (req, res) => {
      const fs = require("fs");

      fs.readFile("./questions.json", "utf8", (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        let result = JSON.parse(data)
        res.send(result.data[Math.floor(Math.random()*result.data.length)])
      });
    })
}