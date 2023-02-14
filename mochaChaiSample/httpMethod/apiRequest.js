import axios from 'axios';

const apiPut = (url,body) => (
    axios ({
        method:'put',
        url,
        data:body,
    }).then(res => res).catch(err => console.log(err))
);

const apiDelete = (url) => (
    axios ({
        method:'delete',
        url,
    }).then(res => res).catch(err => console.log(err))
);

const apiGet = (url) => axios.get(url);

const apiPost = (url,body) => {
    return  axios({
        method: 'post',
        url,
        data: body,
    }).then(res => res).catch(err => err)
};
export default {apiPut,apiDelete,apiGet,apiPost}
