import React from 'react';
import './css/Approval.css'
import enthu from './Images/enthu.jpg'
function ApprovalForm() {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="formbold-event-wrapper">
          <span>WEBINARS</span>
          <h3>The design leadership conference</h3>

          <svg width="490" height="215" viewBox="0 0 490 215" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image xlinkHref={enthu} />
              </pattern>
            </defs>
            <rect width="490" height="215" rx="5" fill="url(#pattern0)" />
          </svg>

          <h4>What you’ll learn</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          <div className="formbold-event-details">
            <h5>Event Details</h5>

            <ul>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1675_1725)">
                    <path
                      d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM11.25 3.75H6.75V5.25H5.25V3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75ZM15 8.25H3V14.25H15V8.25Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_1725">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Jan 25, 2023
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1675_1735)">
                    <path
                      d="M9 16.5C4.85775 16.5 1.5 13.1422 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1422 1.5 16.5 4.85775 16.5 9C16.5 13.1422 13.1422 16.5 9 16.5ZM9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15ZM9.75 9H12.75V10.5H8.25V5.25H9.75V9Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_1735">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                10:30am - 2pm MDT
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1675_1730)">
                    <path
                      d="M9 17.7959L4.227 13.0229C3.28301 12.0789 2.64014 10.8762 2.3797 9.56683C2.11925 8.25746 2.25293 6.90026 2.76382 5.66687C3.27472 4.43347 4.13988 3.37927 5.24991 2.63757C6.35994 1.89588 7.66498 1.5 9 1.5C10.335 1.5 11.6401 1.89588 12.7501 2.63757C13.8601 3.37927 14.7253 4.43347 15.2362 5.66687C15.7471 6.90026 15.8808 8.25746 15.6203 9.56683C15.3599 10.8762 14.717 12.0789 13.773 13.0229L9 17.7959ZM12.7125 11.9624C13.4467 11.2282 13.9466 10.2927 14.1492 9.27435C14.3517 8.25596 14.2477 7.20039 13.8503 6.24111C13.4529 5.28183 12.78 4.46192 11.9167 3.88507C11.0533 3.30821 10.0383 3.00032 9 3.00032C7.96167 3.00032 6.94666 3.30821 6.08332 3.88507C5.21997 4.46192 4.54706 5.28183 4.14969 6.24111C3.75231 7.20039 3.64831 8.25596 3.85084 9.27435C4.05337 10.2927 4.55333 11.2282 5.2875 11.9624L9 15.6749L12.7125 11.9624ZM9 9.74994C8.60218 9.74994 8.22065 9.5919 7.93934 9.3106C7.65804 9.02929 7.5 8.64776 7.5 8.24994C7.5 7.85212 7.65804 7.47058 7.93934 7.18928C8.22065 6.90798 8.60218 6.74994 9 6.74994C9.39783 6.74994 9.77936 6.90798 10.0607 7.18928C10.342 7.47058 10.5 7.85212 10.5 8.24994C10.5 8.64776 10.342 9.02929 10.0607 9.3106C9.77936 9.5919 9.39783 9.74994 9 9.74994Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_1730">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                New York, USA
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1675_1740)">
                    <path
                      d="M8.17501 1.57422L15.5993 2.63547L16.6598 10.0605L9.76576 16.9545C9.62512 17.0951 9.43438 17.1741 9.23551 17.1741C9.03664 17.1741 8.84591 17.0951 8.70526 16.9545L1.28026 9.52947C1.13966 9.38882 1.06067 9.19809 1.06067 8.99922C1.06067 8.80035 1.13966 8.60962 1.28026 8.46897L8.17501 1.57422ZM8.70526 3.16572L2.87101 8.99922L9.23551 15.363L15.069 9.52947L14.274 3.96072L8.70526 3.16572ZM10.2953 7.93872C10.0139 7.65726 9.85587 7.27556 9.85594 6.87758C9.85598 6.68052 9.89482 6.4854 9.97027 6.30336C10.0457 6.12131 10.1563 5.95591 10.2956 5.81659C10.435 5.67728 10.6004 5.56678 10.7825 5.4914C10.9646 5.41602 11.1597 5.37724 11.3568 5.37728C11.7548 5.37735 12.1364 5.53551 12.4178 5.81697C12.6991 6.09843 12.8572 6.48013 12.8571 6.87811C12.857 7.27609 12.6988 7.65773 12.4174 7.93909C12.1359 8.22046 11.7542 8.37848 11.3562 8.37841C10.9583 8.37834 10.5766 8.22018 10.2953 7.93872Z"
                      fill="#536387"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_1740">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Information & tech
              </li>
            </ul>
          </div>
        </div>
      </div>

      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <h2 className="formbold-form-title">Register now</h2>

        <div className="formbold-input-flex">
          <div>
            <label htmlFor="firstname" className="formbold-form-label">
              First name*
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="formbold-form-input"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="formbold-form-label"> Last name* </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="formbold-form-input"
            />
          </div>
        </div>

        <div className="formbold-input-flex">
          <div>
            <label htmlFor="email" className="formbold-form-label"> Email* </label>
            <input
              type="email"
              name="email"
              id="email"
              className="formbold-form-input"
            />
          </div>
          <div>
            <label htmlFor="phone" className="formbold-form-label"> Phone number* </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="formbold-form-input"
            />
          </div>
        </div>

        <div className="formbold-input-flex">
          <div>
            <label htmlFor="jobtitle" className="formbold-form-label"> Job Title* </label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              className="formbold-form-input"
            />
          </div>
          <div>
            <label htmlFor="company" className="formbold-form-label"> Company* </label>
            <input
              type="text"
              name="company"
              id="company"
              className="formbold-form-input"
            />
          </div>
        </div>

        <div className="formbold-input-flex">
          <div>
            <label htmlFor="state" className="formbold-form-label"> State* </label>
            <input
              type="text"
              name="state"
              id="state"
              className="formbold-form-input"
            />
          </div>
          <div>
            <label htmlFor="country" className="formbold-form-label"> Country* </label>
            <input
              type="text"
              name="country"
              id="country"
              className="formbold-form-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="postcode" className="formbold-form-label"> Post code* </label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            className="formbold-form-input"
          />
        </div>

        <p className="formbold-policy">
          By filling out this form and clicking submit, you acknowledge our
          <a href="#">privacy policy.</a>
        </p>
        <button className="formbold-btn">Submit Event Registration</button>
      </form>
    </div>
  );
}

export default ApprovalForm;
