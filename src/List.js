import React from 'react'
import { useSelector } from 'react-redux'
export default function List(){
    const store = useSelector(state => state)
    return(
        <div>
            <div>数值:{store}</div>
        </div>
    )
}