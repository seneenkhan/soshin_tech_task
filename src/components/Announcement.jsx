import React from 'react';
import { MdPushPin, MdMoreVert } from 'react-icons/md';

const Announcement = () => {
  return (
    <div className="absolute border border-gray-200 rounded-lg shadow-md bg-white"
         style={{ width: '640px', height: '334px', top: '532px', left: '293px', marginTop: '10px' }}>
      <div className="flex justify-between items-center border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800">Announcement</h2>
        <p className="text-gray-600 text-sm">Today, 13 Sep 2021</p>
      </div>

      <div className="space-y-4 p-4 h-[calc(334px-120px)] overflow-auto">
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 bg-gray-50">
          <div>
            <h3 className="text-gray-800">Outing schedule for every department</h3>
            <p className="text-gray-500 text-sm">5 Minutes ago</p>
          </div>
          <div className="flex space-x-2">
            <MdPushPin className="text-gray-500" />
            <MdMoreVert className="text-gray-500" />
          </div>
        </div>
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 bg-gray-50">
          <div>
            <h3 className="text-gray-800">Meeting HR Department</h3>
            <p className="text-gray-500 text-sm">Yesterday, 12:30 PM</p>
          </div>
          <div className="flex space-x-2">
            <MdPushPin className="text-gray-500" />
            <MdMoreVert className="text-gray-500" />
          </div>
        </div>
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 bg-gray-50">
          <div>
            <h3 className="text-gray-800">
              IT Department needs two more talents for UX/UI Designer position
            </h3>
            <p className="text-gray-500 text-sm">Yesterday, 09:15 AM</p>
          </div>
          <div className="flex space-x-2">
            <MdPushPin className="text-gray-500" />
            <MdMoreVert className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center p-3">
        <button className="text-red-500 text-sm font-semibold">
          See All Announcements
        </button>
      </div>
    </div>
  );
};

export default Announcement;
