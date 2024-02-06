import { useEffect } from "react";
import { insertDataToGraph, searchQuery } from "../algo/trie";

// Initialize variables and set up a timer
let timer;

// Define the useSuggest custom hook
// This hook is responsible for managing the search input and suggestions.
const useSuggest = (search, setSuggestions, data, entry = 10) => {
  // Commit 3: Initialize state variable

  // Use useEffect to handle side effects
  useEffect(() => {
    // Insert data to graph
    // Initialize or update data in the graph (assumption: insertDataToGraph is responsible for this)
    insertDataToGraph(data);

    // Perform search after a delay
    if (search) {
      // Clear any existing timer
      clearTimeout(timer);

      // Set a new timer to delay the search
      timer = setTimeout(() => {
        console.log("Search started for:", search);

        // Perform search query and update suggestions
        // Execute the searchQuery function and update suggestions based on the search input
        searchQuery(search, setSuggestions, entry);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    }
  }, [search]); // Only re-run the effect if the search input changes
};

export default useSuggest;
