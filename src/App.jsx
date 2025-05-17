import { useState, useEffect } from "react"
import StudentList from "./components/StudentList"
import AddStudent from "./components/AddStudent"

function App() {
  const [students, setStudents] = useState([])

  const addStudent = (student) => {
    setStudents([...students, student])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student._id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow mb-6">
       <h1 className="text-4xl font-bold text-center">🎓 Student Management System</h1>
      <p className="text-center mt-2 text-sm text-blue-100">Manage student records effortlessly</p>
</header>

      <AddStudent onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  )
}

export default App

