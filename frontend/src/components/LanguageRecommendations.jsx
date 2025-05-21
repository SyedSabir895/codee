import React, { useState } from "react";
import PlaylistSuggestions from "./PlaylistSuggestions";
import { CheckCircle } from "lucide-react";
import Compiler from "./Compiler"; // Import Compiler component

const recommendations = {
  beginner: ["Python", "JavaScript", "HTML"],
  intermediate: ["Java", "C++", "Swift"],
  expert: ["Rust", "Go", "Kotlin"]
};

const featuresAndBenefits = {
  Python: {
    features: ["Easy to learn and read", "Versatile: web development, data science, AI", "Large supportive community"],
    benefits: ["High demand in job market", "Used by top companies like Google and Instagram", "Great for beginners and professionals"]
  },
  JavaScript: {
    features: ["Runs on all browsers", "Used for front-end and back-end development", "Supports asynchronous programming"],
    benefits: ["Key language for web development", "High-paying job opportunities", "Huge community and resources available"]
  },
  HTML: {
    features: ["Block-based coding", "Visual learning tool", "Great for younger learners"],
    benefits: ["Helps build a foundation for learning other languages", "Enhances problem-solving and logic skills", "Engages creativity"]
  },
  Java: {
    features: ["Object-oriented", "Platform-independent", "Wide range of applications from mobile to enterprise systems"],
    benefits: ["Highly sought after by large companies", "Great for backend development", "Strong community and documentation"]
  },
  Swift: {
    features: ["Fast and efficient", "Great for iOS and macOS development", "Safe and modern syntax"],
    benefits: ["Essential for iOS app development", "High-paying jobs in mobile development", "Highly praised by developers for its simplicity"]
  },
  Rust: {
    features: ["Memory safety without a garbage collector", "Concurrency support", "Strong focus on performance"],
    benefits: ["Used by big tech companies like Mozilla and Dropbox", "One of the fastest-growing languages", "High demand in systems programming"]
  },
  Go: {
    features: ["Simple and concise syntax", "Built-in support for concurrency", "Fast execution speed"],
    benefits: ["Widely used in backend systems", "Great for cloud computing and microservices", "Popular among startups and tech giants"]
  },
  Kotlin: {
    features: ["Fully interoperable with Java", "Concise and expressive syntax", "Null safety"],
    benefits: ["Main language for Android app development", "Growing demand in Android development", "Supported by Google for Android apps"]
  }
};

function LanguageRecommendations({ skillLevel }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showCompiler, setShowCompiler] = useState(false); // State to show compiler

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleStartCoding = () => {
    setShowCompiler(true); // Show compiler when clicked
  };

  const renderLanguageList = () => {
    const languages = recommendations[skillLevel] || [];
    return languages.map((lang) => (
      <li
        key={lang}
        className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg shadow-sm cursor-pointer"
        onClick={() => handleLanguageSelect(lang)}
      >
        <CheckCircle className="text-green-500" />
        <span className="font-semibold">{lang}</span>
      </li>
    ));
  };

  const renderLanguageInfo = (language) => {
    if (!language) return null;
    const { features, benefits } = featuresAndBenefits[language] || {};
    return (
      <div className="mb-8 bg-gradient-to-r from-indigo-100 to-indigo-50 p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
          Features and Benefits of Learning {language}
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-xl text-indigo-600">Features:</h4>
            <div className="pl-5 text-gray-800 space-y-2">
              {features?.map((feature, index) => (
                <p key={index} className="text-lg">{feature}</p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-xl text-indigo-600">Benefits:</h4>
            <div className="pl-5 text-gray-800 space-y-2">
              {benefits?.map((benefit, index) => (
                <p key={index} className="text-lg">{benefit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-10 overflow-auto">
      {showCompiler ? (
        <Compiler />
      ) : (
        <div className="w-full flex flex-col items-center">
          {/* Recommended Languages */}
          <div className="p-6 bg-white shadow-2xl rounded-2xl text-center w-full max-w-md transform transition duration-300 hover:scale-105 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Recommended Languages</h2>
            <ul className="text-lg text-gray-700 space-y-3">{renderLanguageList()}</ul>
          </div>

          {/* Start Coding Button Positioned Between Sections */}
          <button
            className="my-6 px-6 py-3 bg-indigo-600 text-white text-xl rounded-md hover:bg-indigo-700 transition duration-300"
            onClick={handleStartCoding}
          >
            Start Coding
          </button>

          {/* Playlist Suggestions appear above Features and Benefits */}
          {selectedLanguage && <PlaylistSuggestions language={selectedLanguage} />}

          {/* Features and Benefits at the last */}
          {selectedLanguage && renderLanguageInfo(selectedLanguage)}
        </div>
      )}
    </div>
  );
}

export default LanguageRecommendations;
