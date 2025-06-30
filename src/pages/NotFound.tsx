import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-secondary dark:text-dark-secondary mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
