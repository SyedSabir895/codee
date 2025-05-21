import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = `http://localhost:5000/api/auth/${isRegister ? "register" : "login"}`;
      const { fullName, email, password } = formData;
      const payload = isRegister ? { fullName, email, password } : { email, password };

      const response = await axios.post(url, payload);

      if (response.data.user) {
        localStorage.setItem("userName", response.data.user.fullName);
        setUserName(response.data.user.fullName);
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between border-b pb-2">
            <button
              className={`text-lg font-semibold ${isRegister ? "border-b-2 border-blue-500" : "text-gray-400"}`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
            <button
              className={`text-lg font-semibold ${!isRegister ? "border-b-2 border-blue-500" : "text-gray-400"}`}
              onClick={() => setIsRegister(false)}
            >
              Log in
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isRegister && (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                autoComplete="off"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              autoComplete="off"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Processing..." : isRegister ? "Create Account" : "Log in"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-1 border-b"></div>
            <span className="px-2 text-gray-500">OR</span>
            <div className="flex-1 border-b"></div>
          </div>
          <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Continue with Google
          </button>
          <p className="text-xs text-center text-gray-500 mt-4">
            By continuing, you agree to our{" "}
            <span className="text-blue-500">Terms of Use</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock your Coding Journey</h2>
          <ul className="text-lg space-y-2">
            <li className="flex items-center">
              <span className="mr-2">💻</span> Practice-Driven
            </li>
            <li className="flex items-center">
              <span className="mr-2">♾️</span> Unlimited
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎮</span> Fun
            </li>
            <li className="flex items-center">
              <span className="mr-2">👤</span> Personalized
            </li>
            <li className="flex items-center">
              <span className="mr-2">🤖</span> AI Enhanced
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
