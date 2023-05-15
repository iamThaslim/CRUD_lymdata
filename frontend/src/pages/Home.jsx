import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className="d-flex justify-content-center align-items-center  table-responsive ms-4 me-4 ">
     <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col"  className="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>ali</td>
                    <td>alikka@fakemail.com</td>
                    <td>4512201220</td>
                    <td>India</td>
                    <td className="text-end">
                    <div className="d-flex flex-row justify-content-end gap-2">
                    <Link to="#" type="button" className="btn btn-primary btn-small">
                  <i className="bi bi-pencil"></i>
                </Link>
                <Link to="#" type="button" className="btn btn-secondary btn-small">
                <i class="bi bi-eye"></i>
                </Link>
                <button type="button" className="btn btn-danger btn-small" >
                  <i className="bi bi-trash"></i>
                </button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Home