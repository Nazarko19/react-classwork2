import {useEffect, useState} from "react";
import {getcommentuser} from "../../servis/users.servis";
import Comment from "../comment/Comment";

export default function Post({post}) {

    let [comments,setComment] = useState([])
    useEffect(()=>{
        getcommentuser(post.id).then(({data}) =>setComment([...data]))
    })
    return (
    <div>
        {post.id} {post.title}



        {comments.map(value => <Comment key={value.id} comment={value} />)}



    </div>
  );
}