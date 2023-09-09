// The LinkedList class
class LINKED_LIST {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Add a new node to the end of the list
  append(value) {
    const newNode = new NODE(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new NODE(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // returns the first node in the list
  getHead() {
    if (!this.head) {
      return console.log("No head found");
    } else {
      return console.log("Head:", this.head);
    }
  }

  //  returns the last node in the list
  getTail() {
    if (!this.head) {
      return console.log("No Node found");
    } else {
      let current = this.head;
      while (current) {
        if (current.nextNode === null) {
          return console.log("Tail:", current);
        } else current = current.nextNode;
      }
      this.size++;
    }
  }

  //  returns the node at the given index
  getNodeByIndex(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Node at given index:", null);
    }

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        return console.log("Node at given index:", current);
      }
      current = current.nextNode;
      currentIndex++;
    }
    return console.log("Node at given index:", null);
  }

  // removes the last element from the list
  popNode() {
    if (!this.head) {
      return console.log("Empty list..");
    }

    if (!this.head.nextNode) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return console.log("Removed Node:", removedNode);
    }

    let current = this.head;
    let previous = null;
    // Traverse the list until reaching the last node
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    // Update the tail to be the previous node
    this.tail = previous;

    // Remove the last node from the list
    this.tail.nextNode = null;

    // Change the size of the list
    this.size--;

    return console.log("Removed Node:", current);
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (!this.head) {
      return console.log("Empty list..");
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return console.log("True");
      }
      current = current.nextNode;
    }
    return console.log("False");
  }

  // returns the index of the node containing value, or null if not found.
  findValueIndex(value) {
    if (!this.head) {
      return console.log("Empty list..");
    }

    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (current.value === value) {
        return console.log(
          "Index of the node containing the searched value is: ",
          currentIndex
        );
      }
      current = current.nextNode;
      currentIndex++;
    }

    return console.log("No value index found");
  }

  // inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("Index is out of bounds");
    }

    const newNode = new NODE(value);

    if (index === 0) {
      // Insert at the beginning of the list
      newNode.nextNode = this.head;
      this.head = newNode;

      if (!this.tail) {
        // If the list was empty, set the tail to the new node
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      // Traverse the list to find the insertion point
      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }

      // Insert the new node at the specified index
      newNode.nextNode = current;
      previous.nextNode = newNode;

      if (index === this.size) {
        // If inserting at the end, update the tail to the new node
        this.tail = newNode;
      }
    }

    this.size++;
    // Node inserted successfully
    return console.log("Node inserted successfully");
  }

  // removes the node at the given index
  removeNodeAtIndex(index) {
    if (!this.head) {
      return console.log("Empty list...");
    } else if (index < 0 || index > this.size) {
      return console.log("Index is out of bounds");
    }

    let removedNode = null;

    if (index === 0) {
      // Remove the first node
      removedNode = this.head;
      this.head = this.head.nextNode;

      if (this.size === 1) {
        // If there was only one element, update the tail to null
        this.tail = null;
      }
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      // Traverse the list to find the node to remove
      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }

      if (current) {
        // Remove the node at the specified index
        removedNode = current;
        previous.nextNode = current.nextNode;

        if (index === this.size - 1) {
          this.tail = previous;
        }
      }
    }

    if (removedNode) {
      this.size--;
    }
    return console.log("RemovedNode: ", removedNode);
  }

  // Print the elements of the list
  print() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.nextNode;
    }

    console.log("Linked list:", result.join(" -> "));
  }

  // returns the total number of nodes in the list
  getSize() {
    return console.log("Total numbers of nodes in the list: ", this.size);
  }
}

// Node class
class NODE {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// Usage example:
const myList = new LINKED_LIST();

myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(4);
myList.prepend(0);
myList.prepend(-1);

console.log("********** Linked List: **********");
myList.print();
myList.getSize();
myList.getHead();
myList.getTail();
myList.getNodeByIndex(5);
myList.popNode(3);
myList.contains(2);
myList.findValueIndex(0);
myList.insertAt(10, 0);
myList.removeNodeAtIndex(3);
myList.print();
myList.getSize();
