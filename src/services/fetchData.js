const API_BASE_URL = 'https://www.reddit.com/r';

const fetchData = async url => {
  try {
    const request = await fetch(API_BASE_URL + url);
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchData;
