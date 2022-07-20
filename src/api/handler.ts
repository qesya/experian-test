export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY || '';

export const checkHandler = async (response: Response) => {
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const errorHandler = (e: Error) => {
  console.log(e);
  throw e.message;
};
