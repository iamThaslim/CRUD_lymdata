import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import axios from 'axios'
import { base_url } from '../utils/base_url'
import { config } from '../utils/axios_config'

function Home() {
  const [employees, setEmployees] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');


  const fetchEmployees = (page) => {
    const searchParams = { page, search: searchQuery };

    axios.get(`${base_url}employee/getAllEmployees`, { ...config, params: searchParams })
      .then(response => {
        setEmployees(response.data.employees.rows);
        setTotalPages(Math.ceil(response.data.employees.count / 10));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchInput) => {
    setSearchQuery(searchInput);
    setCurrentPage(1); 
  };

  useEffect(() => {
    fetchEmployees(currentPage);
  }, [currentPage, searchQuery ]);

  const deleteEmployee = async (id) => {
    try{
      await axios.delete(`${base_url}employee/deleteEmployee/${id}`)
      alert("Employee deleted successfully")
      setEmployees(employees.filter(employee => employee.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
            <Search onSearch={handleSearch} />
        </div>
        </div>
        <div className='row mt-2'>
     <div className="col-md-12 d-flex justify-content-center align-items-center table-responsive">
     <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope='col'>Sl.</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col"  className="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{index +1}</td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.country}</td>
                    <td className="text-end">
                    <div className="d-flex flex-row justify-content-end gap-2">
                      <Link to={`/edit/${employee.id}`} type="button" className="btn btn-primary btn-small">
                        <i className="bi bi-pencil"></i>
                      </Link>
                      <button type="button" className="btn btn-danger btn-small" onClick={() => deleteEmployee(employee.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>

    </div>
    <div className='col-md-12 d-flex justify-content-center align-items-center'>
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                  <li
                    key={page}
                    className={`page-item ${page === currentPage ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
          </div>
    </div>
    </div>
    </>
  )
}

export default Home