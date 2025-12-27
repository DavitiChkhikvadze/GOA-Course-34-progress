class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkdeList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    //* O(1)
    pushBack(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }



    //* O(1)
    pushFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(n)
    popBack() {

        if(!this.head) {
            return;
        }
        if(this.head == this.tail ) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;

        while (current.next != this.tail) {
            current = current.next;

        }
        current.next = null;
        this.tail = current;

        this.size--;
    }

    //  head   X  Y  tail

    //* O(1)
    popFront() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
        if(!this.size) {
            this.tail = null;
        }
        this.size--;
    }
};