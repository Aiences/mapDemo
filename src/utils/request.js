import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

// create an axios instance
const service = axios.create({
  baseURL: 'api', // api的base_url
  timeout: 60000 // request timeout
})

export default service
