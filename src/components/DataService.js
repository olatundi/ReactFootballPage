import axios from  'axios';

class DataService {

    retrieveShowAllRecords(){
        return axios.get(`https://www.scorebat.com/video-api/v1/`)
    }

}

export default new DataService()