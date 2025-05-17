const StudentList = ({ students, onDelete }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-2">Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table className="min-w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border px-6 py-2 text-left">Name</th>
              <th className="border px-6 py-2 text-left">Email</th>
              <th className="border px-6 py-2 text-left">Course</th>
              <th className="border px-6 py-2 text-left">Enrollment No</th>
              <th className="border px-10 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td className="border px-20 py-2 text-center">{student.name}</td>
                <td className="border px-20 py-2 text-center">{student.email}</td>
                <td className="border px-20 py-2 text-center">{student.course}</td>
                <td className="border px-20 py-2 text-center">{student.enrollmentNo}</td>
                <td className="border px-20 py-2">
                  <button onClick={() => onDelete(student._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentList

