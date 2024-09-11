import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/slices/studentSlice";
import StudentForm from "./StudentForm";

const StudentTable = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleEdit = (student) => {
    setSelectedStudent(student); // Set the selected student for editing
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Student List</h1>

      {/* Render the Student Form for adding/editing */}
      <StudentForm
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />

      <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Age</th>
            <th className="py-3 px-6 text-left">Grade</th>
            <th className="py-3 px-6 text-left">Gender</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b hover:bg-gray-100">
              <td className="py-4 px-6">{student.name}</td>
              <td className="py-4 px-6">{student.email}</td>
              <td className="py-4 px-6">{student.age}</td>
              <td className="py-4 px-6">{student.grade}</td>
              <td className="py-4 px-6">{student.gender}</td>
              <td className="py-4 px-6 text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentTable;
