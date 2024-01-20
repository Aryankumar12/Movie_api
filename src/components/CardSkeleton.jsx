import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CardSkeleton() {
  return (
    <div className="card_skeleton">
        <Skeleton height={300} ></Skeleton>
    </div>
  )
}

export default CardSkeleton