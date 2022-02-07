import "../css/style.css";
import Info from "../students.json";
import Data from "../departments.json";



export default function View2() {
  
    return <div className="view1">
       <div className="body-wrapper">
        <header>
            <section className="filter-list">
                    <a className="btn btn-expand" href="/">-</a>
                    <div className="department-list">
                       <div className="department">
                            {Data.map((department) => (
                                <div className="dept-card" key={department.name}>
                                    <a className="dept-name" href="/View3">{department.name}</a>
                                        <div className="subjects-wrapper">
                                            {department.subjects.map((subject) => <div id="subject-name" className="subject-name">{subject}</div>)}
                                        </div>
                                    </div>
                            ))}
                        </div>
                        <a className="dept-name active" >All Departments</a>
                        <div className="subjects-wrapper">
                            <div className="subject-name active">All Subjects</div>
                        </div>
                    </div>
            </section>
        </header>
        <section>
            <div className="data-wrapper">
                <ul className="filtered-student">
                        {Info.map(function(student, index){
                        return (
                            <li key={student.id}>
                            <span className="name">{[`${student.familyName}, ${student.givenName}`]}</span>
                            <span className="dob">DOB: <span className="value">{student.dob}</span></span>
                                <span className="admit-date">Admitted: <span className="value">{student.admitDate}</span></span>
                                <span className="grad-date">Anticipated Graduation: <span className="value">{student.anticipatedGraduationDate}</span></span>
                                <span className="mentor">Mentor: <span className="value">{[`${student.mentor.familyName}, ${student.mentor.givenName}`]}</span></span>
                        </li>    
                        )
                    })}
                </ul>
            </div>
        </section>
    </div>
  </div>
}

