# Custom hook for the elastic Search With tire data structure

## Overview

This npm package provides a custom React hook for implementing Elasticsearch-like search features using the Trie data structure. It is designed to efficiently retrieve data on a large dataset.

## Installation

To use this package in your React project, you can install it using npm:

```bash
npm install elastic_search
```

#Usage

Import the useTrieSearch hook in your React component and use it as follows:

```javascript
import React, { useState } from "react";
import useTrieSearch from "trie-search-react-hook";

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Define a callback function to update state with search results
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  // Use the useTrieSearch hook
  const { search } = useTrieSearch();

  // Trigger search on input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Specify the number of entries (default is 10 if not passed)
    const numberOfEntries = 10;

    // Perform the search
    search(query, handleSearchResults, numberOfEntries);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
```

# API

useElasticSearch()
A custom React hook that provides Trie-based search functionality.

Parameters
searchKeyword (string): The searching keyword.
updateStateCallback (function): A callback function that updates the state with the search results.
numberOfEntries (optional, number): The number of entries to retrieve (default is 10 if not passed).

# Example

```javascript
import React, { useState } from "react";
import useTrieSearch from "trie-search-react-hook";

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const { search } = useTrieSearch();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const numberOfEntries = 10;
    search(query, handleSearchResults, numberOfEntries);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
```

For more refences you can visit the github link
[Github Link](https://github.com/robin00007/elastic_serach_npm)

# Contributions

Always welcomed . create a pull request with proper desciption . Connect with developers for more understanding of the project
[Profile](https://github.com/robin00007/)
