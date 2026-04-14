import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function EditEmployee() {
    const [emp, setEmp] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const res = await getEmployeeById(id);
        setEmp(res.data);
    };

    const handleChange = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateEmployee(id, emp);
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Edit Employee</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" value={emp.name || ""} onChange={handleChange} />
                <input name="department" value={emp.department || ""} onChange={handleChange} />
                <input name="salary" value={emp.salary || ""} onChange={handleChange} />
                <input name="age" value={emp.age || ""} onChange={handleChange} />
                <input name="city" value={emp.city || ""} onChange={handleChange} />
                <input name="joiningDate" type="date" value={emp.joiningDate || ""} onChange={handleChange} />

                <button type="submit" className="btn-edit">Update</button>
            </form>
        </div>
    );
}

export default EditEmployee;