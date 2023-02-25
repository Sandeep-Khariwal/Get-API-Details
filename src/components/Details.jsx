import React from 'react'

const Details = ({info}) => {
  return (
    <div className='details'>
        <div className='description' >
         <h3>Descriptive Details of USer</h3>
        </div>
        <div className='address' >
           <div className='contact' >
             <h3>Contact Person</h3>

             <h3>Phone</h3>
             <p>{info.phone}</p>

             <h3>Website</h3>
             <p>{info.website}</p>

             <h3>Email</h3>
             <p>{info.email}</p>

             <h3>Company</h3>
             <p>{info.company.name}</p> 
           </div>
           <div className='address' >
           <h3>Address</h3>

           <h3>street</h3>
             <p>{info.address.street}</p>

             <h3>City</h3>
             <p>{info.address.city}</p>

             <h3>zipcode</h3>
             <p>{info.address.zipcode}</p>

           </div>
        </div>
      
    </div>
  )
}

export default Details
