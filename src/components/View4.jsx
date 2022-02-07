import "../css/style.css";
import Info from "../students.json";
import Data from "../departments.json";

export default function View3() {
    return <div className="view3">
       <div className="body-wrapper">
        <header>
            <section className="filter-list">
                    <a className="btn btn-expand" href="/View2">+</a>
                    <div className="department-list">
                        <div className="department">
                            <div className="dept-name active">Physics</div>
                            <div className="subjects-wrapper">
                                <div className="subject-name active">Dynamics</div>
                                <div className="subject-name">Physical quantities and units</div>
                                <div className="subject-name">Measurement techniques</div>
                                <div className="subject-name">Forces, density and pressure</div>
                                <div className="subject-name">Work, energy and power</div>
                                <div className="more-less"><a href="/View3">[collapse]</a></div>
                            </div>
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
        {/* <!--Stretch Goal # 2 Tooltip-->
        <!-- */}
        {/* <div className="department-name-tooltip">
            <span className="tooltip-content">A very very long department name</span>
        </div>
        --> */}
    </div>
  </div>;
}
