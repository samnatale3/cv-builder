import { useDispatch, useSelector } from "react-redux"
import { EducationModel } from "../models/EducationModel"
import { educationSlice } from "../slices/educationSlice";

function Education(props :{index :number}){

    const dispatch = useDispatch();
    const actions = educationSlice.actions;

    const handleTitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        dispatch(actions.updateTitleOfStudy({index: props.index, titleOfStudy: newTitle}));
    }

    const handleInstituteChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newInstitute = e.target.value;
        dispatch(actions.updateInstitution({index: props.index, institution: newInstitute}));
    };

    const handleStartDateChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newStartDate = e.target.value;
        dispatch(actions.updateStartDate({index: props.index, startDate: newStartDate}));
    };

    const handleEndDateChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newEndDate = e.target.value;
        dispatch(actions.updateEndDate({index: props.index, endDate: newEndDate}));
    };

    const handleDescriptionChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescription = e.target.value;
        dispatch(actions.updateDescription({index: props.index, description: newDescription}));
    };

    const handleRemoveEducation = () => {
        dispatch(actions.removeEducation({index: props.index}));
    }

    return (
        <div>
            <div className="row mx-1">
                <h2 className="col">{props.index + 1}</h2>
                <button className="col btn btn-danger mt-2 mb-2" onClick={handleRemoveEducation}>Remove</button>
            </div>
            <form>
                <div className='mb-2'>
                    <label className='form-label' htmlFor="titleOfStudy">Title Of Study: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="e.g. Bachelors of Science in Computer Science" 
                        value={(useSelector<{education : EducationModel[]}>(state => state.education) as EducationModel[])[props.index].titleOfStudy} 
                        onChange={(event) => handleTitleChange(event)}
                    />
                </div>

                <div className='mb-2'>
                    <label className='form-label' htmlFor="institution">Institution: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="e.g. London University" 
                        value={(useSelector<{education : EducationModel[]}>(state => state.education) as EducationModel[])[props.index].institution} 
                        onChange={(event) => handleInstituteChange(event)} />
                </div>

                <div className='mb-2'>
                    <label className='form-label' htmlFor="startDate">Start Date: </label>
                    <input 
                        type="date" 
                        className="form-control"
                        placeholder="Start Date" 
                        value={(useSelector<{education : EducationModel[]}>(state => state.education) as EducationModel[])[props.index].startDate} 
                        onChange={(event) => handleStartDateChange(event)} />
                </div>
                <div className="mb-2">
                    <label className='form-label' htmlFor="endDate">End Date: </label>
                    <input 
                        type="date"
                        className="form-control"
                        placeholder="End Date" 
                        value={(useSelector<{education : EducationModel[]}>(state => state.education) as EducationModel[])[props.index].endDate} 
                        onChange={(event) => handleEndDateChange(event)} />
                </div>
                
                <div className="mb-4">
                    <label className='form-label' htmlFor="description">Description: </label>
                    <textarea
                        rows={4}
                        className="form-control"
                        placeholder="e.g. During my time at University, I..." 
                        value={(useSelector<{education : EducationModel[]}>(state => state.education) as EducationModel[])[props.index].description} 
                        onChange={(event) => handleDescriptionChange(event)} />
                </div>

            </form>
        </div>
    )
}

export default Education