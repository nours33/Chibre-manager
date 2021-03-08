import {host} from './constants'

export const GetGame = async (id) => {
  const method = 'GET'
  const url = `${host}/api/v1/games/${id}`;
  let response = await _fetch(url, method);
  return response
};

export const updateGame = async (id, body) => {
  const method = 'PUT'
  const url = `${host}/api/v1/games/${id}`;
  let response = await _fetch(url, method, body);
  return response
}

export const CreateGame = async (body) => {
  const method = 'POST'
  const url = `${host}/api/v1/games`;
  console.log(body)
  let response = await _fetch(url, method, body);
  return response
};

export const createAnnounce = async (body) => {
  const method = 'POST'
  const url = `${host}/api/v1/player_announces`;
  let response = await _fetch(url, method, body);
  console.log(response)
  return response
};

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
