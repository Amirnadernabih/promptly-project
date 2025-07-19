export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Spinning circles loader */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin animation-delay-150"></div>
      </div>
      
      {/* Animated dots */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-75"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-150"></div>
      </div>
      
      {/* Loading text */}
      <p className="text-indigo-600 font-medium animate-pulse">
        Generating your sections...
      </p>
      
      {/* Progress bar */}
      <div className="w-48 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}