import React from 'react'

function UspCard(props) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-[8rem] md:w-auto bg-white gap-3 shadow-md px-5 py-4 md:py-2 rounded-[10px]'>
        <img src={props.icon} alt="" />
        <p className='text-center'>{props.desc}</p>
    </div>
  )
}

export default UspCard