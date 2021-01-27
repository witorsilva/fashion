import { Request, Response, Application } from 'express'

import env from '../../configs/env'

export default (app: Application, namespace: string) => {
	app.get(`/${namespace}`, (req: Request, res: Response) => {
		res.json({
			APP_KEY_PUBLIC: env('APP_KEY_PUBLIC'),
			APP_ENV: env('APP_ENV')
		})
	})
}
