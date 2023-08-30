import { PersonalDetailsModel } from '../models/PersonalDetailsModel';
import { personalDetailsSlice } from '../slices/personalDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';

function PersonalDetails() {
    const actions = personalDetailsSlice.actions;
    const dispatch = useDispatch();

    return (
        <div className='col container card mt-4 mb-4'>
            <h2 className='mt-2'>Personal Details</h2>
            <form>
                <div className="mt-2">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="e.g. John"
                        value={useSelector<{personalDetails: PersonalDetailsModel}>(state => state.personalDetails.firstName) as string}
                        onChange={(event) => dispatch(actions.updateFirstName(event.target.value))}
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        placeholder="e.g. Smith"
                        value={useSelector<{personalDetails: PersonalDetailsModel}>(state => state.personalDetails.lastName) as string}
                        onChange={(event) => dispatch(actions.updateLastName(event.target.value))}
                    />
                </div>
                
                <div className="mt-2">
                    <label htmlFor="houseNum" className="form-label">House Number:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="houseNum" 
                        name="houseNum"
                        placeholder="e.g. 123"
                        onChange={(e) => dispatch(actions.updateHouseNumber(e.target.value))}
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="street" className="form-label">Street:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="street" 
                        name="street"
                        placeholder="e.g. Bond Street"
                        onChange={(e) => dispatch(actions.updateStreet(e.target.value))}
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="county" className="form-label">County:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="county" 
                        name="county"
                        placeholder="e.g. London"
                        onChange={(e) => dispatch(actions.updateCounty(e.target.value))}
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="postcode" className="form-label">Postcode:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="postcode" 
                        name="postcode"
                        placeholder="e.g. LL1 3UY"
                        onChange={(e) => dispatch(actions.updatePostcode(e.target.value))}
                    />
                </div>

                <div className="mt-2 mb-3">
                    <label htmlFor="personalStatement" className="form-label">Personal Statement:</label>
                    <textarea 
                        rows={4}
                        className="form-control" 
                        id="personalStatement" 
                        name="personalStatement"
                        placeholder="e.g. A highly motivated person..."
                        value={useSelector<{personalDetails: PersonalDetailsModel}>(state => state.personalDetails.personalStatement) as string}
                        onChange={(e) => dispatch(actions.updatePersonalStatement(e.target.value))}
                    />
                </div>
            </form>
        </div>
    );
}

export default PersonalDetails;
