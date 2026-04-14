import React, { useState } from "react";
import { addEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddEmployee() {
    const [emp, setEmp] = useState({
        name: "",
        department: "",
        salary: "",
        age: "",
        city: "",
        joiningDate: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!emp.name || !emp.department || !emp.salary || !emp.age || !emp.city || !emp.joiningDate) {
            alert("All fields are required!");
            return false;
        }
        if (emp.salary <= 0) {
            alert("Salary must be positive");
            return false;
        }
        if (emp.age <= 0) {
            alert("Age must be valid");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        await addEmployee(emp);
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="department" placeholder="Department" onChange={handleChange} />
                <input name="salary" type="number" placeholder="Salary" onChange={handleChange} />
                <input name="age" type="number" placeholder="Age" onChange={handleChange} />
                <input name="city" placeholder="City" onChange={handleChange} />
                <input name="joiningDate" type="date" onChange={handleChange} />

                <button type="submit" className="btn-add">Save</button>
            </form>
        </div>
    );
}

export default AddEmployee;