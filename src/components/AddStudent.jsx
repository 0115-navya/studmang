import { useState } from "react"

const AddStudent = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    enrollmentNo: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ ...formData, _id: Date.now().toString() })
    setFormData({ name: "", email: "", course: "" , enrollmentNo: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" required />
        <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course" className="border p-2 rounded" required />
        <input type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} placeholder="Enrollment No" className="border p-2 rounded" required />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Student</button>
    </form>
  )
}

export default AddStudent
