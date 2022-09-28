import React from 'react'

type Props ={
name:string
placeholder:string
val:string
handleClick:(e:React.ChangeEvent<HTMLInputElement>)=>void
}


const Input = (props: Props) => {

    console.log(props.val)
  return (
    <input
    className='py-1 px-2'
    name={props.name}
    placeholder={props.placeholder}
    value={props.val}
    onChange={props.handleClick}
    />

  )
}

export default Input