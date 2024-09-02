import express, { Express, NextFunction, Request, Response } from 'express'
const app: Express = express()
const port = 1337

let counter = 0

// Middleware
app.use('/', (req: Request, res: Response, next: NextFunction) => {
	console.log(`${req.method}  ${req.url} `, req.body)
	next()
	// Man måste antingen anropa NEXT eller RES.SEND
})


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
interface CarModel {
	model: string;
}
app.post('/cars/:model', (req: Request<CarModel>, res: Response) => {
	const newCar: string = req.params.model
	cars.push(newCar)
	res.sendStatus(200)
})


app.listen(port, () => {
	console.log('Server is listening on port ' + port)
})

//  localhost://5173