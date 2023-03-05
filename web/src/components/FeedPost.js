import Post from "./Post";
import React,{useState,useEffect} from "react";
import axios from 'axios'
import NewPost from './NewPost';
import config from '../config'
function FeedPost(){
    const [post,setPost] = useState([])

    const addNewPost = async()=>{
        const allPost = await axios.get(`${config.apiUrlPrefix}/allPost`)
        setPost(allPost.data)
    }

    useEffect(() => {
        addNewPost();
      }, []);

    return(
        <div>
            <NewPost addNewPost={addNewPost}/>
            <ul className="item-list">
            {post.map((element)=>{
                return <Post {...element} key={element._id}/>
            })}
            </ul>
        </div>
    );
}

export default FeedPost;