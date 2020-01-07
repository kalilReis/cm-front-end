import axios from "axios"

const URL = process.env.REACT_APP_API_URL || "http://localhost:8080"

const api = axios.create({
  baseURL: URL
})

export default api
