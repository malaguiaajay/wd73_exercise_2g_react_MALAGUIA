import Navbar from './component/Navbar.jsx'
import StudentCard from './component/MainContent.jsx'


function App() {
  const students=[
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      grade: 74
    },
    {
      id: 2,
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      grade: 72
    },
    {
      id: 3,
      firstName: 'Juan',
      lastName: ' Cruz',
      grade: 99
    },
    {
      id: 4,
      firstName: 'Juan',
      lastName: 'Dela',
      grade: 98
    }
  ]

  const studentCardList= students.map(
  (student)=> <StudentCard key={student.id}firstName={student.firstName}lastName={student.lastName}grade={student.grade}/>
  );
 
  return (
    <>
    <Navbar/>

    {studentCardList}
    
    <i className="fa-solid fa-user"></i>
    <h1 className="text-danger"></h1>
   
    <p className="animate__animated animate__bounce"></p>
   
    </>
    )
}

export default App