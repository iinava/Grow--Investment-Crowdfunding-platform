import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/Slice/Stringslice'
export default function Redtest() {
    const dispatch = useDispatch()
  const { name } = useSelector(state => state.string)
  // const name =useSelector(state=>state.string.name)
  return (
    <div onClick={()=>{dispatch(change())}}>
    <p style={{ color: 'white' }}>{name}</p>
  </div>
  )
}
