import React from 'react'

const Scripts = () => {
  return (
    <>
    <div className='ml-4'>
      <p>Script Status:No Script Running</p>
      <p>Selected Script:None</p>
      <div className='flex mb-4'>
        <input type="checkbox" name="" id="" className='mr-1' />
        <p>Redirect Program Output</p>
      </div>
      <button className='bg-lime-500 p-1'>Select Script</button>
    </div>
    </>
  )
}

export default Scripts