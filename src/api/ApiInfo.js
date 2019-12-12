// Base URL
export const BASE_URL = 'https://daac.in/applicationreact/';

// Methods
export const makeRequest = async (url, params = null) => {
  try {
    // request info
    let info = {};

    if (params) {
      // request method type
      info.method = 'POST';

      // Preparing multipart/form-data
      const formData = new FormData();
      for (const key in params) {
        formData.append(key, params[key]);
      }

      // request body
      info.body = formData;
    } else {
      // headers to prevent cache in GET request
      info.headers = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0,
      };
    }

    console.log(info);

    const response = await fetch(url, info);
    // console.log(response)

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
