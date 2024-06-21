import { useState } from "react";
import Nav from "./Nav";
import "./Crud.css";
const Crud = () => {
  const model = {
    fullname: "",
    class: "",
    roll: "",
    subject: "",
    dob: "",
  };
  const [editIndex, setEditIndex] = useState(null);
  const [right, setRight] = useState(-450);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    model,
  });
  const handleDrawer = () => {
    setRight(0);
  };
  const handleInput = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key]: value,
    });
  };
  const createStudent = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm(model);
    setRight(-450);
  };
  const deleteStudent = (index) => {
    const backup = [...students];
    backup.splice(index, 1);
    setStudents(backup);
  };
  const editStudent = (index) => {
    setRight(0);
    setForm(students[index]);
    setEditIndex(index);
  };
  const saveStudent = (e) => {
    e.preventDefault();
    const backup = [...students];
    backup[editIndex] = form;
    setStudents(backup);
    setForm(model);
    setEditIndex(null);
    setRight(-450);
  };
  const closeDrawer = () => {
    setRight(-450);
    setForm(model);
    setEditIndex(null);
  };
  return (
    <div>
      <Nav />
      <div style={{ background: "white", minHeight: "100vh" }}>
        <div
          style={{
            width: "70%",
            background: "#ddd",
            margin: "32px auto",
            padding: 32,
          }}
        >
          <h1 style={{ padding: 0, margin: 0, textAlign: "center" }}>
            CRUD Operation
          </h1>
          <button
            onClick={handleDrawer}
            style={{
              background: "dodgerblue",
              color: "white",
              padding: "8px 24px",
              borderRadius: 4,
              border: "none",
              marginTop: 6,
              cursor: "pointer",
              margin: "24px 0",
            }}
          >
            <i className="ri-user-add-line" style={{ marginRight: 8 }}></i>New
            student
          </button>
          <table className="crud-app">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Students name</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Roll number</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.subject}</td>
                  <td>{item.class}</td>
                  <td>{item.roll}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => editStudent(index)}
                        style={{
                          border: "none",
                          width: 32,
                          height: 32,
                          background: "#07c65d",
                          color: "white",
                          borderRadius: 4,
                          marginRight: 12,
                          cursor: "pointer",
                        }}
                      >
                        <i className="ri-file-edit-line"></i>
                      </button>
                      <button
                        onClick={() => deleteStudent(index)}
                        style={{
                          border: "none",
                          width: 32,
                          height: 32,
                          background: "red",
                          color: "white",
                          borderRadius: 4,
                          cursor: "pointer",
                        }}
                      >
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <aside
            style={{
              position: "fixed",
              top: 0,
              right: right,
              width: 450,
              background: "white",
              height: "100%",
              boxShadow: "0 0 40px rgba(0,0,0,0.2)",
              padding: 32,
              boxSizing: "border-box",
              transition: "0.5s",
            }}
          >
            <button
              onClick={closeDrawer}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: 20,
                color: "dodgerblue",
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
            >
              <i className="ri-close-circle-line"></i>
            </button>
            <h1>New Student</h1>
            <form
              onSubmit={editIndex === null ? createStudent : saveStudent}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <input
                value={form.fullname}
                onChange={handleInput}
                required
                name="fullname"
                type="text"
                placeholder="Enter your full name here"
                style={{
                  border: "1px solid #ccc",
                  padding: 16,
                  borderRadius: 4,
                }}
              />
              <input
                value={form.class}
                onChange={handleInput}
                required
                name="class"
                type="text"
                placeholder="Enter your class"
                style={{
                  border: "1px solid #ccc",
                  padding: 16,
                  borderRadius: 4,
                }}
              />
              <input
                value={form.roll}
                onChange={handleInput}
                required
                name="roll"
                type="number"
                placeholder="Enter your roll number"
                style={{
                  border: "1px solid #ccc",
                  padding: 16,
                  borderRadius: 4,
                }}
              />
              <input
                value={form.subject}
                onChange={handleInput}
                required
                name="subject"
                type="text"
                placeholder="Enter your subject"
                style={{
                  border: "1px solid #ccc",
                  padding: 16,
                  borderRadius: 4,
                }}
              />
              <input
                value={form.dob}
                onChange={handleInput}
                required
                name="dob"
                type="date"
                style={{
                  border: "1px solid #ccc",
                  padding: 16,
                  borderRadius: 4,
                }}
              />
              {editIndex === null ? (
                <button
                  style={{
                    background: "dodgerblue",
                    color: "white",
                    padding: "8px 24px",
                    borderRadius: 4,
                    border: "none",
                    marginTop: 6,
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              ) : (
                <button
                  style={{
                    background: "#07c65d",
                    color: "white",
                    padding: "8px 24px",
                    borderRadius: 4,
                    border: "none",
                    marginTop: 6,
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
              )}
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Crud;
