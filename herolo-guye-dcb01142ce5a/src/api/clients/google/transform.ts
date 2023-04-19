import * as Response from 'api/clients/google/response';
import { Location } from 'models/Map';

export const placeData = ({ results }: Response.GoogleResults): Location => {
  const { lat, lng } = results[0].geometry.location;

  return { lat, lng };
};

const Transform = { placeData };
export default Transform;
