import React from 'react'
import './card.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
// import 'react-loading-skeleton/dist/skeleton.css'
// import { SkeletonTheme, Skeleton } from 'react-loading-skeleton'


// import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from '../CardSkeleton'
const Card = ({x})  =>{
const [isLoading, setIsLoading]= useState(true)

useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
}, [])



  return (
    <>

       {isLoading} ?
       {console.log(isLoading)}
       
        {/* <div className="card">
            <SkeletonTheme baseColor='#202020' highlightColor='#444'>
            <Skeleton height={300} duration={2}></Skeleton>

            </SkeletonTheme>
        </div> */}
        :
{/* 
        if(isLoading== true){
          <Skeleton/>
        } */}


        <Link to={`movie/${x.id}`}>
          <div className="card">
        {/* <CardSkeleton></CardSkeleton> */}
              <div className="card_img">
              <img src={`https://image.tmdb.org/t/p/original/${x && x.poster_path}`} alt="" />
              </div>

              <div className="card_overlay">
                <div className="card_title">{x ? x.original_title: ""}</div>
                <div className="card_runtime">{x ? x.release_date: ""}
                                <span className='card_rating'>
                                <br />
                                {x ? x.vote_average: ""}

                                <i className='fas fa-star' />{"  "}
                                </span>
                                </div>
              </div>


          </div>
        </Link>
        
    </>
  )
}

export default Card




///////





