import React from 'react'


function AddOns(props) {
  return (
    <div className='flex flex-col md:flex-row shadow-md w-full p-[0.75rem] md:p-0 md:pr-4 md:h-[7rem] gap-4 rounded-[10px] overflow-hidden items-center'>
        <div className='w-full h-[8rem] md:w-[8rem] md:h-[8rem] rounded-[10px] overflow-hidden'>
        <img className='w-full h-full  object-cover' src={props.img} alt="" />
        </div>
        <div className='md:w-full'>
            <h3 className='font-medium'>{props.title}</h3>
            <p className='text-[#696969] text-[0.8rem] md:text-[1rem] font-light'>{props.desc}</p>
        </div>
    </div>
  )
}

export default AddOns