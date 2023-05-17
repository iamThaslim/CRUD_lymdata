import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { base_url } from "../utils/base_url";
import { config } from "../utils/axios_config";

function Edit() {
    const [employees, setEmployees] = useState({})
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${base_url}employee/getEmployee/${params.id}`, config)
                const { data } = response;
                setEmployees(data.employee)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser();
    }, [params.id])

    const handleUpdate = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`${base_url}employee/updateEmployee/${params.id}`, employees, config)
            alert('Employee update Successfull')
            navigate('/home')
        } catch(err) {
            console.error(err)
        }
    }
  return (
  <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="container mt-4">
                    <h2>Update Employee</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" value={employees.name} name="name" placeholder="Enter a Employee Name" className="form-control" id="name" onChange={(event) => setEmployees({ ...employees, name: event.target.value })} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email" value={employees.email} placeholder="eg: example@gmail.com" className="form-control" id="email" name="email" onChange={(event) => setEmployees({ ...employees, email: event.target.value })} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input type="number" value={employees.phone} placeholder="eg: 1234567890" className="form-control" id="phone" name="phone" onChange={(event) => setEmployees({ ...employees, phone: event.target.value })} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">
                                Country
                            </label>
                            <input type="text" placeholder="country" value={employees.country} className="form-control" id="country" name="country" onChange={(event) => setEmployees({ ...employees, country: event.target.value })} required />
                        </div>
                        <div className="d-flex">
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                        <Link to="/home">
                        <button type="button" className="btn btn-outline-danger ms-4">
                            Cancel
                        </button>
                    </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 </>
        )
                }

export default Edit