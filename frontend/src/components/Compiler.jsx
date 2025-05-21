import React, { useState } from "react";

const Compiler = () => {
  const [language, setLanguage] = useState("python");

  const languages = [
    { name: "Python", value: "python" },
    { name: "JavaScript", value: "javascript" },
    { name: "Java", value: "java" },
    { name: "C", value: "c" },
    { name: "C++", value: "cpp" },
    { name: "Ruby", value: "ruby" },
    { name: "Go", value: "go" },
    // Add more languages as needed
  ];

  return (
    <div>
      <h2 className="text-4xl text-white px-6 py-4">Online Compiler</h2>
      <div className="px-6 py-4">
        <label htmlFor="language" className="text-white text-xl mr-4">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 rounded"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <iframe
        src={`https://onecompiler.com/embed/${language}`}
        width="1250px"
        height="600px"
        style={{ border: "none" }}
        title="OneCompiler"
      ></iframe>
    </div>
  );
};

export default Compiler;