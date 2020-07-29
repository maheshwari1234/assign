import React,{ useEffect} from "react";
import { Image} from "react-bootstrap";
import { fetch } from '../Redux/action/IndpostAction'
import Navbar from './Navbar'
import {useSelector,useDispatch} from 'react-redux'

const IndividualPost=(props)=>{
    const posts=useSelector((state)=>state.postId.Idposts)
    const dispatch=useDispatch();

 const id = props.match.params.id
 useEffect(() => {
    dispatch(fetch(id))
  }, []);

  if(posts!=undefined){
    return (
        <React.Fragment>
            <Navbar/>
            <div className="row">
                <div className="card">
                    <div className="offset-2 col-sm-6">
                        <div className="card-title">
                            <h2>{posts.Title}</h2>

                        </div>
                        <div className="card-body">
                            <Image src={`/${posts.Image}`} alt="image not found" /><br /><br />
                            <h5 style={{ justifyContent: "center" }}>{posts.Body}</h5>
                        </div>

                    </div>

                    <div></div>
                </div>

            </div>
        </React.Fragment>
    )
  }
  else{
      return<h1>not</h1>
  }


}

export default IndividualPost
