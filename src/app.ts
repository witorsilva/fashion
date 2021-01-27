import * as express from 'express'
import * as bodyParser from 'body-parser'
import env from './configs/env'

import RequestConsole from './middlewares/loggers/request-console'

import routes from './configs/routes'

class App {
	public app: express.Application

	private middlewares = [
		RequestConsole,
		bodyParser.urlencoded({ extended: true })
	]

	constructor() {
		this.app = express()
		this.app.use(express.json())

		this.enableMiddlewares()
		routes(this.app)
	}

	private enableMiddlewares() {
		this.middlewares.forEach(middleWare => {
			this.app.use(middleWare)
		})
	}

	public listen() {
		this.app.listen(Number(env('APP_PORT')), String(env('APP_HOST')), () => {
			console.log(`Server Running in ${env('APP_HOST')}:${env('APP_PORT')}`)
		})
	}
}

export default App
