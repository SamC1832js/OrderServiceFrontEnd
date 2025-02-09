declare global {
  interface Window {
    _env_: {
      API_URL: string;
    };
  }
}

export const environment = {
  production: true,
  apiBaseUrl: 'http://18.191.159.148:8080/api/',
};
