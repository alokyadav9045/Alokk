import React, { useState } from 'react';
import img2 from '../assets/img2.jpg'; // currently unused, but kept for future use

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [requestedSkill, setRequestedSkill] = useState('');
  const [activeTab, setActiveTab] = useState('incoming');

  const requests = [
    { id: 1, name: 'Swap Request', skill: 'React for Singing', status: 'incoming' },
    { id: 2, name: 'Swap Request', skill: 'Photography for Cooking', status: 'ongoing' },
    { id: 3, name: 'Swap Request', skill: 'UI/UX for Yoga', status: 'accepted' },
  ];

  const filteredRequests = requests.filter(req => req.status === activeTab);

  return (
    <section className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl border border-gray-300">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Swap Request</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select your skill</option>
          <option value="React">React</option>
          <option value="Photography">Photography</option>
          <option value="Cooking">Cooking</option>
        </select>

        <select
          value={requestedSkill}
          onChange={(e) => setRequestedSkill(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select requested skill</option>
          <option value="Singing">Singing</option>
          <option value="Yoga">Yoga</option>
          <option value="Storytelling">Storytelling</option>
        </select>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300">
          Send Request
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {['incoming', 'ongoing', 'accepted'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium capitalize transition ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredRequests.map((req, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 border border-gray-300 p-4 rounded-lg">
            <div>
              <strong className="text-gray-800">{req.name}</strong>
              <p className="text-gray-600 text-sm mt-1">{req.skill}</p>
            </div>
            {activeTab === 'incoming' && (
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Accept
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
