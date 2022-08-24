import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrese, increse } from '..'


function SignUp() {

    let x = useSelector((state)=> state)
    let dispatch = useDispatch()
    return (
        <div className=' bg-black text-white p-5 text-center'>
            <h1 >Count : {x}</h1>
            <button onClick={()=> {dispatch(increse())}}>increse</button>
            <button onClick={()=> {dispatch(decrese())}}>decrese</button>
        </div>
    )
}

export default SignUp

