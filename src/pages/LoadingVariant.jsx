const LoadingVariant = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        {/* testing */}
        <svg
          className="animate-spin h-10 w-10 text-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            strokeOpacity="0.25"
            fill="none"
          />

          <path
            d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              dur="9s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <span className="pt-2 text-orange-500 text-lg font-medium">
          Saving ....
        </span>
      </div>
    </div>
  );
};

export default LoadingVariant;
