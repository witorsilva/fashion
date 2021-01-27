import { Request, Response, NextFunction } from 'express'

const requestConsole = (req: Request, res: Response, next: NextFunction) => {
	console.info(`${req.method} ${req.originalUrl}`)

	res.on('finish', () => {
		console.info(
			`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') ||
				0}b sent`
		)
	})

	next()
}

export default requestConsole
