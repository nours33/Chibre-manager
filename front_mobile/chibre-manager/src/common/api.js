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




export const CreateGameAndTeam = async () => {
  const url = `${host}/api/v1/auth/sign_out`;
  const header = await _setHeaders('DELETE', {});
  return fetch(url, header);
};
