import { useState } from 'react';

export default function Section({ name, html }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 flex items-center justify-between">
        <h3 className="text-white font-semibold text-lg flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
          {name} Section
        </h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="bg-white text-indigo-600 px-3 py-1 text-sm font-medium rounded hover:bg-indigo-100 transition"
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      {/* Section Content */}
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Preview:</span> This is how the &quot;{name}&quot; section will look
          </p>
        </div>

        {/* Rendered HTML Preview */}
        <div 
          className="border-2 border-dashed border-gray-200 rounded-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Raw Code Block */}
        {showCode && (
          <div className="mt-4 bg-gray-900 text-green-200 p-4 rounded-lg overflow-auto text-sm">
            <pre className="whitespace-pre-wrap break-words">{html}</pre>
          </div>
        )}

        {/* Section Footer */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Section: {name}</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Generated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
