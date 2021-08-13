import axios from 'axios';

let url = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/'
    }
)

const getuseraxios =() =>{
    return url.get('users/')
}


let getpostofusers = (id)=> {
    return url('users/'+ id + '/posts')

}

let getcommentuser = (id)=>{
    return url('posts/' +  id + '/comments')
}




export {getuseraxios,getpostofusers,getcommentuser}


