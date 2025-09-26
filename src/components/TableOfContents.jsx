import React from 'react';

const TableOfContents = ({ stages, onStageClick }) => {
  return (
    <nav className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Table of Contents</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Stage</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((stage, index) => {
            const [stageNum, ...descParts] = stage.stage.split(': ');
            const description = descParts.join(': ');
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onStageClick(index)}
                    className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    {stageNum}
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onStageClick(index)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {description}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </nav>
  );
};

export default TableOfContents;