import express, { Express, Request, Response } from 'express'
const app: Express = express()
const port = 1337


// Endpoints
app.get('/', (req: Request, res: Response) => {
	res.send('Hello! Glad you could join us.')
})
app.get('/today', (req: Request, res: Response) => {
	res.send('Today is a Monday.')
})


app.listen(port, () => {
	console.log('Server is listening on port ' + port)
})

//  localhost://5173