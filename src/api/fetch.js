import axios from 'axios';

async function fetch(url, params) {
  try {
    const response = await axios.get(url, {
      params: {...params}
    });
    return response
  } catch (error) {
    // return [[], error.message]
    // throw(error.message)
    return error
  }
}
export default fetch