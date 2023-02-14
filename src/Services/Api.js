import http from './http-common';

export async function GetAllPokemon()
{
   try{
    const response = await http.get('/pokemon');
    return response.data;
   }
   catch{
    return null;
   }
}

export async function GetPokemonByPage(limit, offset)
{
   try{
    const response = await http.get(`/pokemon/?limit=${limit}&offset=${offset}`);
    return response.data;
   }
   catch{
    return null;
   }
}

export async function GetPokemonByNameOrId(id)
{
   try{
    const response = await http.get(`/pokemon/${id}`);
    return response.data;
   }
   catch{
    return null;
   }
}