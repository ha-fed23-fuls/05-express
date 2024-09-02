import express, { Express, NextFunction, Request, Response } from 'express'
const app: Express = express()
const port = 1337

let counter = 0

// Middleware
app.use( express.json() )  // lägger saker i req.body
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


interface Country {
	name: string;
	population: number;
}
let countries: Country[] = [
	{ name: "Sweden", population: 10300000 },
	{ name: "Brazil", population: 215000000 },
	{ name: "Japan", population: 126000000 },
	{ name: "Canada", population: 38300000 },
	{ name: "Australia", population: 26000000 },
	{ name: "Nigeria", population: 223000000 },
	{ name: "Germany", population: 83500000 },
	{ name: "Mexico", population: 126000000 },
	{ name: "South Korea", population: 52000000 },
	{ name: "Kenya", population: 56000000 }
];
app.get('/country', (req: Request, res: Response) => {
	res.send(countries)
})
// Request är generisk. Kan ta emot: URL-parameter, querystring., body
app.post('/country', (req: Request<void, void, Country>, res: Response) => {
	const newCountry: Country = req.body
	// TODO: validera newCountry med Joi innan push
	// om fel, svara med statuskod 400 (BAD REQUEST)
	countries.push(newCountry)
	res.sendStatus(201)
})


app.listen(port, () => {
	console.log('Server is listening on port ' + port)
})

//  localhost://5173