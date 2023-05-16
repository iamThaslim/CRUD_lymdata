import React from 'react'

function Search() {
  return (
    <>
    <div className='row my-3'>
        <div className='col-md-8 col-lg-8'>
            <div className='input-group mb-2'>
                <input type='text' className='form-control' placeholder='Search by name, email, phone, or country' aria-label='Search' aria-describedby='basic-addon2' />
                <button className="btn btn-sm btn-outline-secondary" type="button" id="basic-addon2">Search</button>
            </div>
        </div>
        <div className='col-md-4 col-lg-4 text-end '>
        <button type="button" className="btn btn-sm btn-outline-secondary">+ New Employee</button>
        </div>
    </div>
    </>
  )
}

export default Search