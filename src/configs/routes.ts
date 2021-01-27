import { Request, Response, Application } from 'express'
import env from './env'
import salespeople from '../modules/salespeople/routes'
import fashion from '../modules/fashion/routes'

export default (app: Application) => {
	/**
	 * ROOT ROUTE
	 */
	app.get('/', (req: Request, res: Response) => {
		res.json({
			key: env('APP_KEY_PUBLIC'),
			env: env('APP_ENV')
		})
	})

	/**
	 * SALES PEOPLE
	 */
	salespeople(app, 'salespeople')

	/**
	 * FASHION
	 */
	fashion(app, 'fashion')
}
