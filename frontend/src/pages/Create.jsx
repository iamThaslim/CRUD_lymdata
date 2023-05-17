import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { base_url } from "../utils/base_url";

function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${base_url}employee`, formData);
            alert("Employee data added");
            navigate("/home")
        } catch(err) {
            console.error(err)
        }
    }

  return (
  <div className="container-fluid">
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container mt-4">
            <h2>Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" value={formData.name} onChange={handleChange} placeholder="Enter a name" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" value={formData.email} onChange={handleChange} placeholder="eg: example@gmail.com" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input type="number" value={formData.phone} onChange={handleChange} placeholder="eg: 1234567890" className="form-control" id="phone" name="phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Name
                    </label>
                    <input type="text" value={formData.country} onChange={handleChange} placeholder="Enter Country" className="form-control" id="country" name="country" required />
                </div>
                <div className="d-flex">
                <button type="submit" className="btn btn-primary">
                    Add
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
  )
}

export default Create