const  URL_API='https://api-groseries-json-production.up.railway.app/'
export const getProducts=async()=>{
    const data=await fetch(URL_API);
    return await data.json();
}