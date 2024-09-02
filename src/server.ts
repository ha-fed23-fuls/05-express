import express, { Express, Request, Response } from 'express'
const app: Express = express()
const port = 1337

let counter = 0

// Endpoints
app.get('/', (req: Request, res: Response) => {
	res.send('Hello! Glad you could join us.')
})
app.get('/today', (req: Request, res: Response) => {
	res.send('Today is a Monday.')
})
app.get('/counter', (req: Request, res: Response) => {
	counter++
	res.send( String(counter) )
})

let cars: string[] = []
app.get('/cars', (req: Request, res: Response) => {
	res.send(cars)
})
app.post('/cars', (req: Request, res: Response) => {
	cars.push('volvo')
	res.sendStatus(200)
})


app.listen(port, () => {
	console.log('Server is listening on port ' + port)
})

//  localhost://5173