import { useState } from 'react';
import Section from '../components/Section';
import Loader from '../components/Loader';

// Real API call function
const generateSections = async (idea) => {
  try {
    const response = await fetch('http://localhost:5000/api/sections/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to generate sections');
    }

    return data.sections;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default function Home() {
  const [idea, setIdea] = useState('');
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!idea.trim()) {
    setError('Please enter a website idea');
    return;
  }

  setLoading(true);
  setError('');
  setSections([]);

  try {
    const [generatedSections] = await Promise.all([
      generateSections(idea),
      new Promise((resolve) => setTimeout(resolve, 2000)), // 2s delay
    ]);

    setSections(generatedSections);
    setIdea('');
  } catch (err) {
    setError(err.message || 'Failed to generate sections. Please try again.');
    console.error('Error generating sections:', err);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Stunning Project
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your website ideas into beautiful sections instantly. 
            Just describe your vision and watch it come to life.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Connected to backend</span>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="idea" 
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                What kind of website do you want to create?
              </label>
              <input
                id="idea"
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., Landing page for bakery, gym, restaurant..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                disabled={loading}
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 text-lg font-medium"
            >
              {loading ? 'Generating from Database...' : 'Generate Website Sections'}
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-12">
            <Loader />
            <p className="text-gray-600 mt-4">Fetching sections from database...</p>
          </div>
        )}

        {/* Sections Preview */}
        {sections.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Preview of Your Website Sections
            </h2>
            <div className="mb-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Loaded from MongoDB
              </span>
            </div>
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Section
                  key={index}
                  name={section.name}
                  html={section.html}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && sections.length === 0 && !error && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Enter your website idea above to generate beautiful sections from our database
            </p>
          </div>
        )}
      </div>
    </div>
  );
}