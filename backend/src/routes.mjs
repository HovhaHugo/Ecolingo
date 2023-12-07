/**
 * @param {import("express").Application} app 
 */
export function makeRoutes(app) {
  app.get("/api/question", (req, res) => {
    res.send({
      question: "Lorem ipsum dolor sit amet",
      responses: ["A", "B", "C", "D"],
      valid: 0
    })
  })
}