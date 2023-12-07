/**
 * @param {import("express").Application} app 
 */
export function makeRoutes(app) {
  app.get("/api/question", (req, res) => {
    res.send("Hello World !")
  })
}