// Importing React's useEffect and useState hooks
import { useEffect, useState } from "react";

// Custom hook: takes a ref to a DOM element and an optional threshold (default is 0.0)
const useInView = (ref, threshold = 0.0) => {
  // State to track if the element is visible in the viewport
  const [isVisible, setIsVisible] = useState(false);

  // Runs when the component mounts or when 'ref' or 'threshold' changes
  useEffect(() => {
    // Creating a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (i.e. in the viewport as per threshold)
        if (entry.isIntersecting) {
          // Set the state to true, marking element as visible
          setIsVisible(true);
          // Unobserve the element to prevent future triggers (only trigger once)
          observer.unobserve(entry.target);
        }
      },
      { threshold } // Passing the threshold config
    );

    // If the ref has been attached to a DOM element
    if (ref.current) {
      // Start observing the element
      observer.observe(ref.current);
    }

    // Cleanup function: runs when component unmounts or dependency changes
    return () => {
      // If the ref is still pointing to a DOM element
      if (ref.current) {
        // Stop observing the element
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]); // Dependencies: re-run effect if these change

  // Return the visibility state to the component using this hook
  return isVisible;
};

// Export the custom hook for use in other files
export default useInView;
