import { useDispatch, useSelector } from "react-redux"
import { WorkHistoryModel } from "../models/WorkHistoryModel"
import { workHistorySlice } from "../slices/workHistorySlice";


function WorkHistory(props :{index :number}) {

    const dispatch = useDispatch();
    const actions = workHistorySlice.actions;

    const handleTitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        dispatch(actions.updateJobTitle({index: props.index, jobTitle: newTitle}));
    }

    const handleCompanyChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newCompany = e.target.value;
        dispatch(actions.updateCompany({index: props.index, company: newCompany}));
    }

    const handleDescriptionChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescription = e.target.value;
        dispatch(actions.updateDescription({index: props.index, description: newDescription}));
    }

    const handleStartDateChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newStartDate = e.target.value;
        dispatch(actions.updateStartDate({index: props.index, startDate: newStartDate}));
    }

    const handleEndDateChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newEndDate = e.target.value;
        dispatch(actions.updateEndDate({index: props.index, endDate: newEndDate}));
    }

    const handleRemoveWorkHistory= () => {
        dispatch(actions.removeWorkHistory({index: props.index}));
    }

  return (
    <div className=''>
        <div className="row mx-2">
            <h2 className="col">{props.index + 1}</h2>
            <button className="col btn btn-danger mt-2 mb-2" onClick={handleRemoveWorkHistory}>Remove</button>
        </div>
        <form>
            <label className="form-label" htmlFor="jobTitle">Job Title: </label>
            <input
                className="form-control mb-2"
                type="text" 
                placeholder="e.g. Paper Shredder" 
                value={(useSelector<{workHistory : WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[])[props.index].jobTitle} 
                onChange={(event) => handleTitleChange(event)}
            />

            <label className="form-label" htmlFor="company">Company: </label>
            <input 
                className="form-control mb-2"
                type="text" 
                placeholder="e.g. Google" 
                value={(useSelector<{workHistory : WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[])[props.index].company} 
                onChange={(event) => handleCompanyChange(event)} 
            />

            <label className="form-label" htmlFor="startDate">Start Date: </label>
            <input
                className="form-control mb-2"
                type="date" 
                placeholder="Start Date" 
                value={(useSelector<{workHistory : WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[])[props.index].startDate} 
                onChange={(event) => handleStartDateChange(event)}
            />

            <label className="form-label" htmlFor="endDate">End Date: </label>
            <input
                className="form-control mb-2"
                type="date" 
                placeholder="End Date" 
                value={(useSelector<{workHistory : WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[])[props.index].endDate} 
                onChange={(event) => handleEndDateChange(event)}
            />

            <label className="form-label" htmlFor="description">Description: </label>
            <textarea
                rows={4}
                className="form-control mb-4"
                placeholder="e.g. During my role as a Paper Shredder, I..." 
                value={(useSelector<{workHistory : WorkHistoryModel[]}>(state => state.workHistory) as WorkHistoryModel[])[props.index].description} 
                onChange={(event) => handleDescriptionChange(event)} 
            />
        </form>
    </div>
  )
}

export default WorkHistory