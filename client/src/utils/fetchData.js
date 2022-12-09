
export  const  exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6e65134140msh597cf6b6ebeca3fp14e814jsn507535c8e8b0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '97d5014db3msh71d14248fec791ep15e99ejsn0c59aa114b32',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}