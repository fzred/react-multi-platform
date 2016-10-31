import { newRequest, completeRequest } from '../../../common/actions/loading'

export default function (fd, { store }) {
  fd.interceptors.request.push((requestConfig) => {
    store.dispatch(newRequest())
    return requestConfig
  })
  fd.interceptors.response.push((res) => {
    store.dispatch(completeRequest())
    return res
  })
}
