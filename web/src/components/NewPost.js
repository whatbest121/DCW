import {useState } from 'react'
import axios from 'axios'
import './NewPost.css'
import config from '../config'
function NewPost(props){
    const [msg,setMsg] = useState("")

    axios.interceptors.request.use(function(config){
        const token = sessionStorage.getItem('access_token')
        config.headers['Authorization'] = `Bearer ${token}`
        return config
    }, function(err){
        return Promise.reject(err)
    })

    const inputTitle = (e)=>{
        setMsg(e.target.value)
    }

    const PostNewMSG = async (e)=>{
        e.preventDefault()
        if( msg !== ""){
            await axios.post(`${config.apiUrlPrefix}/create`,{
                msg:msg
            })
            props.addNewPost()
        }
        else
            alert("Please Type Something")
        setMsg('')
    }

    return(
        <form onSubmit={PostNewMSG}>
            <div className="form-control">
                <label>Post Something</label>
                <input type="text" placeholder="Your new post" onChange={inputTitle} value={msg}/>
            </div>
            <div>
                <button type="submit" className="btn">Post</button>
            </div>
        </form>
    );
}

export default NewPost;