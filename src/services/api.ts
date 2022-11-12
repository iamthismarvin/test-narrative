import axios from 'axios'

// NOTE: The API_BASE_URL along with an API_KEY would usually be in an ENV file,
// but for example purposes I've left it static.
const API_BASE_URL = 'https://636accb3c07d8f936da7b0ac.mockapi.io/'

export default axios.create({ baseURL: API_BASE_URL })
