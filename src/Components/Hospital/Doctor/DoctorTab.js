import React from "react";
import AddUser from "./AddUser";
import DoctorList from "./DoctorList";
import HomeDoctorsList from "./HomeDoctorsList";
import QuarantinedDoctorsList from "./QuarantinedDoctorsList";
import HospitalDoctorsList from "./HospitalDoctorsList";

export default function DoctorTab() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav>
            <div className="nav nav-tabs navTabsContainer justify-content-evenly" id="nav-tab" role="tablist">
              <a
                className="nav-link active navpatientTabsLink flex-fill"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-doctor-tab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                ADD Doctor
              </a>
              <a
                className="nav-link navpatientTabsLink flex-fill"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-doctor-list"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                ALL Doctors List
              </a>
              <a
                className="nav-link navpatientTabsLink flex-fill"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-in-hospital-doctor-list"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                In Hospital 
              </a>
              <a
                className="nav-link navpatientTabsLink flex-fill"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-work-home-doctor-list"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
               Work from Home  
              </a>
              <a
                className="nav-link navpatientTabsLink flex-fill"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-quarantined-doctor-list"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
               Quarantined Doctors 
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-doctor-tab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h3 className="text-center">ADD Doctor</h3>
              <AddUser />
            </div>
            <div
              className="tab-pane fade"
              id="nav-doctor-list"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center">Doctor list...</h3>
              <DoctorList />
            </div>
            <div
              className="tab-pane fade"
              id="nav-in-hospital-doctor-list"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center">In hospital Doctor list...</h3>
              <HospitalDoctorsList />
            </div>
            <div
              className="tab-pane fade"
              id="nav-work-home-doctor-list"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center">home Doctor list...</h3>
              <HomeDoctorsList />
            </div>
             <div
              className="tab-pane fade"
              id="nav-quarantined-doctor-list"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h3 className="text-center">Quarantined Doctor list...</h3>
              <QuarantinedDoctorsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
