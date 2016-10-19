export default function (rend) {
  rend.interceptors.response.push(res => {
    if (res.ok) {
      return res
    }
    return {
      code: -1,
      status: res.status,
      desc: `server err【${res.status}】`,
      data: null,
    }
  })
}
