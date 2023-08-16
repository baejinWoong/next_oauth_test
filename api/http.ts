import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // url = base url + request url
  // timeout: 1000 * 30, //30 sec
  withCredentials: true, // send cookies when cross-domain requests,
})

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('service.interceptors.response.data : ', response.data);
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    return response
  },
  (error) => {
    if (axios.isCancel(error)) return Promise.reject(error)
    const status = error.response.status
    if (status === 400) return error.response

    return Promise.reject(error)
  },
)
export default axiosInstance
