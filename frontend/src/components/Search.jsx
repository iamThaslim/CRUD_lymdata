import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchInput);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfull")
    navigate("/")
  }

  return (
    <>
    <div className='row my-3'>
        <div className='col-md-8 col-lg-8'>
            <div className='input-group mb-2'>
                <input type='text' className='form-control' value={searchInput} onChange={handleChange} placeholder='Search by name, email, phone, or country' aria-label='Search' aria-describedby='basic-addon2' />
                <button className="btn btn-sm btn-outline-secondary" onClick={handleSearch} type="button" id="basic-addon2">Search</button>
            </div>
        </div>
        <div className='col-md-4 col-lg-4 text-end '>
        <button type="button" className="btn btn-sm btn-outline-warning me-2" onClick={() => handleLogout()}>Logout</button>
          <Link to="/create">
        <button type="button" className="btn btn-sm btn-outline-secondary">+ New Employee</button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Search