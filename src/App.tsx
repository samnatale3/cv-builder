import { useDispatch, useSelector } from "react-redux"
import PersonalDetails from "./components/PersonalDetails"
import { EducationModel } from "./models/EducationModel";
import Education from "./components/Education";
import { educationSlice } from "./slices/educationSlice";
import { WorkHistoryModel } from "./models/WorkHistoryModel";
import WorkHistory from "./components/WorkHistory";
import { workHistorySlice } from "./slices/workHistorySlice";
import CV from "./components/CV";

function App() {
  const education : EducationModel[] = useSelector<{education: EducationModel[]}>(state => state.education) as EducationModel[];
  const workHistory : WorkHistoryModel[] = useSelector<{workHistory: WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[];
  
  const educationActions = educationSlice.actions;
  const workHistoryActions = workHistorySlice.actions;
  const dispatch = useDispatch();

  const addEducation = () => {
    dispatch(educationActions.addNewEducation());
  }

  const addWorkHistory = () => {
    dispatch(workHistoryActions.addNewWorkHistory());
  }

  return (
    <>
      <div className="row m-2">
        <div className="col-md-5">
          <PersonalDetails />
          <div className="col container card mt-4 mb-4">
            <h2 className="mt-2">Education</h2>
            {education.map((_item, index) => 
              <Education key={index} index={index} />
            )}
            <div className="col mb-3">
              <button className="container btn btn-outline-primary" type="button" onClick={addEducation}>Add Education</button>
            </div>
          </div>
          
          <div className="col container card mt-4 mb-4">
            <h2 className="mt-2">Work History</h2>
            {workHistory.map((_item, index) => 
              <WorkHistory key={index} index={index} />
            )}
            <div className="col mb-3">
              <button className="container btn btn-outline-primary" type="button" onClick={addWorkHistory}>Add Work History</button>
            </div>
          </div>
        </div>
        <div className='col-md-7'>
          <CV></CV>
        </div>
        
      </div>
      
    
    </>
  )
}

export default App
