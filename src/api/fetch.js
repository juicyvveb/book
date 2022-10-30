import axios from 'axios';

async function fetch(url, params) {
  try {
    const response = await axios.get(url, {
      params: {...params}
    });
    return response
  } catch (error) {
    throw(error)
  }
}
export default fetch