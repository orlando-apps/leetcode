# https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfString = False



class WordDictionary:

    def __init__(self):
        self.root = TrieNode()


    def addWord(self, word: str) -> None:
        curr = self.root
        for ch in word:
            if ch not in curr.children:
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        curr.endOfString = True
        return


    def search(self, word: str) -> bool:
        def dfs (idx, node):
            curr = node
            for i in range(idx, len(word)):
                ch = word[i]
                if ch == '.':
                    for node in curr.children.values():
                        if dfs(i + 1, node):
                            return True
                    return False
                else:
                    if ch not in curr.children:
                        return False
                    curr = curr.children[ch]
            return curr.endOfString
        return dfs(0, self.root)

# Search Time Complexity  Best Case :  O(W) (if trie not backed by a hash set , if it's backed by a set then the best case is  O(1))
# Search Time Complexity  Worst Case : O(26^W)  (if all dots)
# Space Complexity : O(N*W)