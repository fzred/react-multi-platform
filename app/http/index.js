import FetchDog from 'fetch-dog'
import interceptorsServer from './interceptor/server'
import interceptorsErrCatch from './interceptor/errCatch'

const fd = new FetchDog({ fetch, Headers })
interceptorsServer(fd)
interceptorsErrCatch(fd)

export default fd
