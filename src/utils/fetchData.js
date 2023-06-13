export const exerciseOptions = {
   
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '3e43775166msh54cc2f043707f31p18f140jsn06e1de92745a'
  
    }

};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}