import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const res = await getEmployees();
        setEmployees(res.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this employee?")) {
            await deleteEmployee(id);
            loadEmployees();
        }
    };

    return (
        <div className="container">
            <h2>Employee List</h2>

            <button onClick={() => navigate("/add")} className="btn-add">
                Add Employee
            </button>

            <table>
                <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Dept</th>
                    <th>Salary</th><th>Age</th><th>City</th><th>Date</th><th>Action</th>
                </tr>
                </thead>

                <tbody>
                {employees.map((emp) => (
                    <tr key={emp.empId}>
                        <td>{emp.empId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.age}</td>
                        <td>{emp.city}</td>
                        <td>{emp.joiningDate}</td>
                        <td>
                            <button onClick={() => navigate(`/edit/${emp.empId}`)} className="btn-edit">Edit</button>
                            <button onClick={() => handleDelete(emp.empId)} className="btn-delete">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;