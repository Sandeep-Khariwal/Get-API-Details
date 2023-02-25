import React, { useState } from 'react'
import Details from './Details'

const Item = ({info}) => {

    const [btn , setBtn] = useState(true)

  return (
    <div className='CompleteInfo' >
    <div className='item'>
      <div className='name'>
        <p>{info.name}</p>
      </div>
      <div className='contact'>
        <h3>UserName</h3>
        <p>{info.username}</p>
      </div>
      <div className='city'>
        <h3>city</h3>
        <p>{info.address.city}</p>
      </div>
      <div className='state'>
        <h3>street</h3>
        <p>{info.address.street}</p>
      </div>
      <div className='button'>
        <button onClick={()=>setBtn(!btn)} >{btn?"View Details":"Hide Details"}</button>
      </div>
    </div>
    <div className='showDetails' >
      {
        btn?" ":<Details key={info.id} info={info} />
      }
    </div>
    </div>
  )
}

export default Item
