import {host} from './constants'


const useFetch = async (url, token) => {
  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer' + token
      // Authorization: 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGliZXJldGFmb3JjZS5jaCIsImlhdCI6MTYxMjM2NDU0OSwibmJmIjoxNjEyMzY0NTQ5LCJleHAiOjE2MTI5NjkzNDksImRhdGEiOnsidXNlciI6eyJpZCI6IjgifX19.U76d9UNN5qTHKd6phJpi4rbSvmpTAmEcjuogejAsaMw'
    }
  });
  if (!response.ok) {
    return;
  }
  const json = await response.json()
  return json
}




export const CreateGame = async () => {
  const method = 'POST'
  const url = `${host}/api/v1/games`;
  return _fetch(url, method);
};

export const CreateTeam = async () => {
  const method = 'POST'
  const url = `${host}/api/v1/teams`;
  return _fetch(url, method, body);
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
