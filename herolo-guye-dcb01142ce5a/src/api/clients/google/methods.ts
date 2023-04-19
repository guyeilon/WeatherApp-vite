import googleClient from 'api/clients/google/client';
import * as Response from 'api/clients/google/response';
import * as Transform from 'api/clients/google/transform';
import * as Params from 'api/clients/google/params';

const GoogleAPI = {
  getLatLng: (cityData: Params.CityData) =>
    googleClient<Response.GoogleResults>({
      url: '/maps/api/geocode/json',
      params: {
        address: `${cityData.cityName} ${cityData.countryName}`,
      },
    }).then(Transform.placeData),
};

export default GoogleAPI;
