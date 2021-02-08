import  axios  from 'axios';

type Props = {
  url:string
  method:'GET'|'DELETE'|'POST'|'PUT'
  data?:{}
}

export const request = ({url, method, data}:Props):Promise<any>=>axios({
    url,
    method,
    data
  })
    .then((res) => res.data)
    .catch((error) => error)
