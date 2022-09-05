export const getUserApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response) {
    const json = await response.json();
    return json;
  }
};
