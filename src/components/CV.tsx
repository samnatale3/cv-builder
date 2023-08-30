import { useSelector } from "react-redux";
import { PersonalDetailsModel } from "../models/PersonalDetailsModel";
import { EducationModel } from "../models/EducationModel";
import { WorkHistoryModel } from "../models/WorkHistoryModel";

export default function CV() {
  const personalDetails = useSelector<{ personalDetails: PersonalDetailsModel }>(
    (state) => state.personalDetails
  ) as PersonalDetailsModel;
  const education: EducationModel[] = useSelector<{ education: EducationModel[] }>(
    (state) => state.education
  ) as EducationModel[];
  const workHistory: WorkHistoryModel[] = useSelector<{ workHistory: WorkHistoryModel[] }>(
    (state) => state.workHistory
  ) as WorkHistoryModel[];

  const capitalizeFirstLetter = (str : string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
    const year = date.getFullYear();
    return `${month} ${year}`;
  };
  //{//}

  return (
    <div className="container col card mt-4">
      {/* Personal Details */}
      {(personalDetails.firstName !== "" && personalDetails.lastName !== "") && (
        <h3 className="mt-3 text-center">
          {capitalizeFirstLetter(personalDetails.firstName)} {capitalizeFirstLetter(personalDetails.lastName)}
        </h3>
      )}

      {/* Address */}
      {(
        personalDetails.houseNumber !== "" &&
        personalDetails.street !== "" &&
        personalDetails.county !== "" &&
        personalDetails.postcode !== ""
      ) && (
        <p className="text-center">
          {personalDetails.houseNumber} {capitalizeFirstLetter(personalDetails.street)},{" "}
          {capitalizeFirstLetter(personalDetails.county)}, {personalDetails.postcode.toUpperCase()}
        </p>
      )}

      {/* Personal Statement */}
      {personalDetails.personalStatement !== "" && (
        <div>
          <h4>Personal Statement</h4>
          <p>{capitalizeFirstLetter(personalDetails.personalStatement)}</p>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h4>Education</h4>
          {education.map((item, index) => (
            <div key={index}>
              {item.titleOfStudy !== "" && item.institution !== "" && (
                <h6>{item.institution} - {item.titleOfStudy}</h6>
              )}
              {item.startDate !== "" && item.endDate !== "" && (
                <p><em>{formatDate(item.startDate)} to {formatDate(item.endDate)}</em></p>
              )}
              {item.description !== "" && <p>{capitalizeFirstLetter(item.description)}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Work History */}
      {workHistory.length > 0 && (
        <div>
          <h4>Work History</h4>
          {workHistory.map((item, index) => (
            <div key={index}>
              {item.jobTitle !== "" && item.company !== "" && (
                <h6>{item.jobTitle} - {item.company}</h6>
              )}
              {item.startDate !== "" && item.endDate !== "" && (
                <p><em>{formatDate(item.startDate)} to {formatDate(item.endDate)}</em></p>
              )}
              {item.description !== "" && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
