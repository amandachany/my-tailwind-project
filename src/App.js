import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-customBlue mb-4">
          Hello, Tailwind!
        </h1>
        <p className="text-lg text-gray-700">
          This is a simple Tailwind CSS test.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
