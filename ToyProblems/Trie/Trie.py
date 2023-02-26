class TrieNode:
  def __init__(self):
    self.children = {}
    self.endOfString = False

class Trie:
  def __init__(self):
    self.root = TrieNode()

  # insert
  # time O(m) - length of the word
  # space O(m) - worst case b/c if none of the characters are in the Trie
  def insertString(self, word):
    current = self.root
    for i in word:
      ch = i
      node = current.children.get(ch)
      if node == None:
        node = TrieNode()
        current.children.update({ch:node})
      current = node
    current.endOfString = True
    print("Successfully inserted")

  # search
  # case 1. String does not exist in the Trie
  # case 2. String exists in Trie
  # case 3. String is a prefix of another string, but it does not exist in a Trie
  # time: O(m) - where m is the lenght of the string that we're looking for
  # space: O(1) - b/c here we are just looking for characters inside a word
  def searchString(self, word):
    currentNode = self.root
    for i in word:
      node = currentNode.children.get(i)
      if node == None:
        return False
      currentNode = node

    if currentNode.endOfString == True:
      return True
    else:
      return False

# delete
# case 1. some other prefix of string is same as the one that we want to delete (Delete API, Keep APPLE)
# case 2. the string is a prefix of another string (Delete API, Keep APIS) (set endOfString to false)
# case 3. other string is a prefix of this string. (Delete APIS, Keep AP)
# case 4. not any node depends on this string (k)
# time:
# space:
def deleteString(root, word, index):
  ch = word[index]
  currentNode = root.children.get(ch)
  canThisNodeBeDeleted = False

  # case 1
  if len(currentNode.children) > 1:
      deleteString(currentNode, word, index + 1)
      return False

  # case 2
  if index == len(word) - 1:
    # this word is not in trie anymore (ex. contains at least 1 character of 'S'))
    if len(currentNode.children) >= 1:
      # last character and endOfString for last character use the same node
      currentNode.endOfString = False
      return False
    else:
      # since this is the last character, we should return true, that it is okay to delete
      root.children.pop(ch)
      return True

  # case 3
  if currentNode.endOfString == True:
    # cannot 'delete' it b/c some other string uses this node, so move onto the next
    deleteString(currentNode, word, index + 1)
    return False

  # case 4
  canThisNodeBeDeleted = deleteString(currentNode, word, index + 1)
  if canThisNodeBeDeleted == True:
    root.children.pop(ch)
    return True
  else:
    return False


newTrie =Trie()
newTrie.insertString('App')
newTrie.insertString('Api')
deleteString(newTrie.root, 'Api', 0)
print(newTrie.searchString('Api'))




# Time O(1)
# Space O(1)
# b/c this is just initializing a root node


#insert a string in a Trie

