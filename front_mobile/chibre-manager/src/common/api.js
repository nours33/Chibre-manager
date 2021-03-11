//Dépendance intérieure
import {host} from './constants'

//Fonction qui permet de retourner une partie
export const GetGame = async (id) => {
  const method = 'GET'
  const url = `${host}/api/v1/games/${id}`;
  let response = await _fetch(url, method);
  console.log(response)
  return response
};

//Fonction qui permet de retourner une liste des parties crée
export const indexGame = async  () => {
  const method = 'GET'
  const url = `${host}/api/v1/games`;
  let response = await _fetch(url, method);
  return response
}

//Fonction qui permet de supprimer une annonce
export const destroyAnnounce = async (id) => {
  const method = 'DELETE'
  const url = `${host}/api/v1/announces/${id}`;
  let response = await _fetch(url, method);
  return response
};

//Fonction qui permet de supprimer une partie
export const destroyGame = async (id) => {
  const method = 'DELETE'
  const url = `${host}/api/v1/games/${id}`;
  let response = await _fetch(url, method);
  return response
};

//Fonction qui permet de mettre a jour une partie
export const updateGame = async (id, body) => {
  const method = 'PUT'
  const url = `${host}/api/v1/games/${id}`;
  let response = await _fetch(url, method, body);
  return response
};

//Fonction qui permet de crée une partie
export const createGame = async (body) => {
  const method = 'POST'
  const url = `${host}/api/v1/games`;
  console.log(body)
  let response = await _fetch(url, method, body);
  return response
};

//Fonction qui permet de crée une annonce
export const createAnnounce = async (body) => {
  const method = 'POST'
  const url = `${host}/api/v1/player_announces`;
  let response = await _fetch(url, method, body);
  console.log(response)
  return response
};

//Fonction qui va faire les requetes API et retourner un message d'erreure
export const _fetch = async (url, method, body) => {
  const httpRequest = await fetch(url, {
    method: method,
    body: body
  }).catch((error) => {
    handleHttpError(error);
  });
  // In case of fetch timeout
  if (httpRequest !== undefined) {
    const result = await httpRequest.json();

    if (httpRequest.status === 200) {
      if (result.data) {
        return result.data;
      }
      return result;
    }
    if (httpRequest.status === 401) {
      await store.dispatch(logout());
      return null;
    }
    if (httpRequest.status === 404) {
      handleHttpError("Page introuvable. Veuillez prendre contact avec l'administrateur.");
    }
    if (httpRequest.status >= 500) {
      handleHttpError('Oops ! Une erreur est survenue, notre équipe technique a été informée!');
    }
    if (httpRequest.status >= 422) {
      handleHttpError(result.message);
    }
  }
  return null;
};

//Permet de retourner le message d'erreure
export const handleHttpError = (errors) => {
  if (errors instanceof Error) {
    console.log(errors.toString(), "red");
  } else if (Array.isArray(errors)) {
    errors.map((error) => {
      console.log(errors.toString(), "red");
    });
  } else {
    console.log(errors.toString(), "red");
  }
};
