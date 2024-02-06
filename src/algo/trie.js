//  Import data and define TrieNode class
// import data from "../data/data.json";

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Define Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  //  Implement insert method
  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  //  Implement search method
  search(word) {
    let node = this.root;
    if (word) {
      for (let char of word) {
        if (!node.children[char]) {
          break;
        }
        node = node.children[char];
      }
    }

    return node;
  }
}

//  Create a Trie instance and insert data
const trie = new Trie();

// Insert names into the trie
export const insertDataToGraph = async (data) => {
  for (let name of data) {
    trie.insert(name);
  }
};

//  Define function to traverse the trie
const traverseTheTree = (word, node, setSuggestions, entry) => {
  if (node[1].isEndOfWord) {
    setSuggestions((prev) => {
      return prev.length <= entry ? [...prev, word] : [...prev];
    });
    return;
  }

  if (node[1].children) {
    word = word + node[0];
    Object.entries(node[1].children).map((tempNode) => {
      let tempWord = word;
      traverseTheTree(tempWord, tempNode, setSuggestions, entry);
      return null;
    });
  }
};

//  Define searchQuery function
export const searchQuery = (search, setSuggestions, entry) => {
  const childrens = trie.search(search);
  setSuggestions([]);
  if (childrens.isEndOfWord) {
    setSuggestions((prev) => [...prev, search]);
  }
  Object.entries(childrens.children).map((node) => {
    traverseTheTree(search + node[0], node, setSuggestions, entry);
    return null;
  });
};

// Export the Trie class
export default Trie;
