"use client" 

// Import React hooks
import { useState, useEffect, useLayoutEffect } from "react";

// Import the icon component
import { ArrowUpIcon } from "@heroicons/react/24/outline"; 

// Create a custom component for the scroll up button
function ScrollUpButton(){
  // Define a state variable to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Define a handler function to update the scroll position
  const handleScroll = () => {
    // Get the current scroll position from the window object
    const position = window.pageYOffset;
    // Set the state variable with the new position
    setScrollPosition(position);
  };

  // Define a handler function to scroll to the top of the page
  const scrollToTop = () => {
    // Use the window object to scroll to the top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      //behavior: "smooth",
    });
  }, [])
  // Use the useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    // Add the handleScroll function as a listener to the scroll event
    window.addEventListener("scroll", handleScroll);
    // Return a cleanup function to remove the listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return the JSX code for rendering the scroll up button
  return (
    // Use a conditional rendering to show the button only when the scroll position is greater than zero
    scrollPosition > 0 && (
      // Use a button element with Tailwind CSS classes for styling and positioning
      <button
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        // Add an onClick handler to call the scrollToTop function
        onClick={scrollToTop}
      >
        {/* Use the ArrowUpIcon component with Tailwind CSS classes for sizing and coloring */}
        <ArrowUpIcon className="h-6 w-6 text-gray-600" />
      </button>
    ) 
  );
};

// Export the component as default
export default ScrollUpButton;