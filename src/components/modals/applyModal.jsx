import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import '../../custom.css';

import { Backdrop } from './backDrop';

const applyForTheJob = async (closeModal,openModal,user, job) => {
  const token = localStorage.getItem('token');
  console.log(user.user_id);
  if (token && token !== 'undefined') {
    let config = {
      method: 'post',
      url: 'http://localhost:3000/apply',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        user_id: user.user_id,
        job_id: job.id,
      },
    };
    console.log(config);

    try {
      const applyData = await axios(config);
      console.log(applyData);
    } catch (error) {
      alert(error);
    }
  }
  closeModal()
  openModal('flashIsOpen')
};

function ApplyModal({ company_name, closeModal, user, job, openModal }) {
  return (
    <>
      <Backdrop />
      <div className={'modal'}>
        {!localStorage.getItem('token') && (
          <div className="text-red-700">Please log in first</div>
        )}
        <div className="relative">
          <p>Are you sure you want to apply for {company_name}</p>
          <div className="flex justify-end mt-8">
            <button
              onClick={() => applyForTheJob(closeModal,openModal, user, job)}
              className="bg-blue-600 w-16 px-2 rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={closeModal}
              className="bg-red-600 w-16 px-2 rounded-lg ml-2"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    job: state.jobsReducer.choosedJob,
  };
};

export default connect(mapStateToProps)(ApplyModal);
