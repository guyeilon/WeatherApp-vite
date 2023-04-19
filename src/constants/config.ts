const authBaseURL = import.meta.env.VITE_AUTH_URL as string;
const forecastURL = import.meta.env.VITE_FORECAST_URL as string;
const accuWeatherAPIKEY = import.meta.env.VITE_ACCUWEATHER_API_KEY as string;
const googleAPI = import.meta.env.VITE_GOOGLE_API_URL as string;
const googleMAPKEY = import.meta.env.VITE_GOOGLE_MAP_KEY as string;
const googleAuthClientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID as string;
const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID as string;

const config = Object.freeze({
  authBaseURL,
  forecastURL,
  accuWeatherAPIKEY,
  googleAPI,
  googleMAPKEY,
  googleAuthClientId,
  facebookAppId,
});
export default config;
