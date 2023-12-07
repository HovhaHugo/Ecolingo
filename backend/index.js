import express from 'express'
import { makeRoutes } from './src/routes.mjs'

const app = express()
const port = 3000

app.use(express.static('public'))

// Parse JSON payloads
app.use(express.json());

// Parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

makeRoutes(app)

app.listen(port, () => {
  console.log(`Ready on port ${port}`)
})
