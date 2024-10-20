export default function Pesquisa() {
    return (
      <div className="my-6 mx-auto max-w-lg">
        <form className="relative">
          <input
            type="search"
            placeholder="Search for fruit salad combos"
            className="w-full p-4 pl-12 text-sm rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-4 h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4 4m0-4l4 4M12 10v4m4-4v4"
            />
          </svg>
        </form>
      </div>
    );
  }
  