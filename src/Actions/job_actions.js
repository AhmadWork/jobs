
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import qs from 'qs';
import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './types';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDGDRUz-Wz8ZCHneIPtL-RplaFA8RIeDRE';

Geocoder.init(GOOGLE_MAPS_APIKEY);
const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '9413916596183852',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10, // The radius within which to search in miles
    q: 'JavaScript' // Hard-code the query for testing purposes
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
    return `${JOB_ROOT_URL}${query}`;
};



export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        const {latitude, longitude} =region;

        Geocoder.from(latitude, longitude)
        .then(json => {
        	var addressComponent = json.results[0].address_components[0];
            console.log(addressComponent);
        })
        .catch(error => console.warn(error));
 
      const url = buildJobsUrl(this.addressComponent);
      let { data } = await axios.get(url);
      dispatch({ type: FETCH_JOBS, payload: data });
      callback();
    } catch(e) {
      console.error(e);
    }
  };

  export const likeJob = (job) => {
return {
    payload:job,
    type:LIKE_JOB
}
  }

  export const clearLikedJobs = () => {
    return(
       { type:CLEAR_LIKED_JOBS}
    );
  }