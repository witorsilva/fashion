import * as dotenv from 'dotenv'

export default (env: String) => {
	return dotenv.config().parsed[String(env)]
}
