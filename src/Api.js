const baseUrl = "https://api.spacexdata.com/v3/history";

export const fetchHistory = async (filters) => {
  let url = baseUrl;
  if (filters.start && filters.end) {
    url += `?start=${filters.start}&end=${filters.end}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
