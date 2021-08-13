import {useEffect, useState} from "react";
import {getpostofusers} from "../../servis/users.servis";
import Post from "../post/Post";

export default function User({itemUsers}) {
  let [posts,setPost] = useState([])
  useEffect(() =>{

    getpostofusers(itemUsers.id).then(({data})=>setPost([...data]))

  })
  return (
    <div>

      <h4>{itemUsers.id} {itemUsers.name}</h4>
      {posts.map(value => <Post key={value.id} post={value}/>)}
  <hr/>
    </div>
  );
}
