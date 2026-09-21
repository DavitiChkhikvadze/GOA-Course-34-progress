class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(6);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.left = new Node(7);
root.right.right = new Node(9);
root.right.right.right = new Node(11);

function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

function levelOrder(root) {
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
;

inOrder(root);