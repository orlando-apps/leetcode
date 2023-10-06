import math
from collections import deque
import heapq

# None is null (absence of value)
# and = &&
# or = ||

# Looping from i = 0 to i = 4
for i in range(5):
  print (i)

# Looping from i = 2 to i = 5
for i in range(2, 6):
  print(i)

# Looping from i = 5 to i = 2
for i in range(5, 1, -1):
  print(i)

# Division is decimal by default
print(5 / 2) # 2.5

# Double slash rounds down
print(5 // 2) # 2
print(-3 // 2) # -2

# this will round towards zero
print(int(-3 /2 ))

# math helpers
print(math.floor(3 / 2))
print(math.ceil(3 / 2))
print(math.sqrt(2))
print(math.pow(2, 3))

# max / min int
float('inf')
float('-inf')

# Arrays (called lists in python)
arr = [1, 2, 3]
arr.append(4)
arr.append(5)
arr.pop()

arr.insert(1, 7) # O(n)

# Initialize arr of size n with default value of 1
n = 5
arr = [1] * n # [1, 1, 1, 1, 1]

# will read the last value and not out of bounds
arr[-1]

# sublists (aka slicing)
arr = [1, 2, 3, 4]
print(arr[1:3]) #[2, 3]

#unpacking
a, b, c = [1, 2, 3]
print(a, b, c)

# loop through array
nums = [1, 2, 3]
for i in range(len(nums)):
  print(nums[i])

# without index
for n in nums:
  print(n)

# if you need both index and value,
for i, n in enumerate(nums):
  print(i, n)

# loop through multiple arrays simultaneously
nums1 = [1, 3, 5]
nums2 = [2, 4, 6]
for n1, n2 in zip(nums1, nums2):
  print(n1,n2)

#reverse array
nums = [1, 2, 3]
nums.reverse()

# sorting arrays
arr = [5, 4, 7, 3, 8]
arr.sort() # ascending order
print(arr)
arr.sort(reverse = True) # descending order

# List comprehension
arr = [ i for i in range(5)]
print (arr) #[0, 1, 2, 3, 4]

# 2 - D lists
arr = [[0] * 4 for i in range(4)]

# anytime you modify a string its an n time operation
s = 'abc'
print(s[0: 2])

# this creates a new string
s += 'def'
print(s)

# valid numeric string can be converted
print(int('123') + int('123'))

# and numbers can be converted to strings
print(str(123) + str(123))

# get ascii value of a char
print(ord('a'))

# combine a list of strings
strings = ['ab', 'cd', 'ef']
print(''.join(strings))

# Queues(double ended queue)
queue = deque()
queue.append(1)
queue.appende(2)
print (queue) # deque([1,2])

# constant time
queue.popleft()
queue.appendleft(1)
queue.pop()

# HashSet search, insert and remove is constant time
mySet = set()
mySet.add(1)
mySet.add(2)
print(len(mySet))
print(1 in mySet)


#HasMap (aka dict)
myMap = {}
myMap['alice'] = 88
print(len(myMap)) # get number of keys

if ('alice' in myMap):
  myMap.pop('alice')

# Dict comprehension
myMap = { i: 2*i for i in range(3) } # { 0: 0, 1: 2, 2: 4}

# looping through maps
for key in myMap:
  print(key, myMap[key])

for val in myMap.values(): # if you don't need the ky
  print(val)

for key, value in myMap.items(): # get key and value
    print(key, value)

#tuples are like arrays but immutable
tup = (1, 2, 3)
print(tup)
# can use tup as a hash map /set
myMap = {(1,2): 3} # lists can not be keys
print(myMap[(1,2)])


# heaps, under the hood are arrays
minHeap = []
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 2)
heapq.heappush(minHeap, 4)

# min is always at index 0
print(minHeap[0])

while len(minHeap):
  print(heapq.heappop(minHeap)) # 2, 3, 4 smallest to largest


# No max heaps by default, work around is to use min heap and multiply by -1 when push and pop
maxHeap = []
heapq.heappush(maxHeap, -3)
heapq.heappush(maxHeap, -2)
heapq.heappush(maxHeap, -4)

# max is always at index 0
print(-1 * maxHeap[0])

while len(maxHeap):
  print(-1 * heapq.heappop(maxHeap)) # 4, 3, 2

# build heap from initial values
arr = [2, 1, 8, 4, 5]
heapq.heapify(arr)

#function
def myFunc(n, m):
  return n * m

# nested functions have access to outer variables
def outer(a, b):
  c = 'c'

  def inner():
    return a + b + c
  return inner()

# can modify objects but not reassign
# undless using non local keyword
def double(arr, val):
  def helper():
    # modifying array works
     for i, n in enumerate(arr):
      arr[i] *= 2

      #will only modify val in the helper scope
      # val *=2

      #this will modify val outside helper scope
      nonlocal val
      val *= 2
  helper()
  print(arr, val)


class MyClass:
  #constructor
  def __init__(self, nums):
    # create member variables
    self.nums = nums
    self.size = len(nums)

  # self key word required as param
  def getLength(self):
    return self.size

  def getDoubleLength(self):
    return 2 * self.getLength()

