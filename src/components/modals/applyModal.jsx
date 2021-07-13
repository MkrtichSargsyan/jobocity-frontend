import React from 'react';
import '../../custom.css';

import { Backdrop } from './backDrop';

function ApplyModal({ company_name, closeModal, applyForTheJob }) {
  return (
    <>
      <Backdrop />
      <div className={'modal'}>
        <div className="relative">
          <p>Are you sure you want to apply for {company_name}</p>
          <div className="flex justify-end mt-8">
            <button
              onClick={applyForTheJob}
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

export default ApplyModal;
