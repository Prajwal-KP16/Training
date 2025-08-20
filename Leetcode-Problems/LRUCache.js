class Node{
  constructor(){
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = this.prev;
  }
}

class LRUCache{
  constructor(capacity){
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node){
   node.prev.next = node.next;
   node.next.prev = node.prev;
  }

  _insert(node){
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key){
    if(!this.map.has(key)) return -1;

    let node = this.map.get(key);
    this._remove(node);
    this._insert(node);

    return node.value;
  }

  put(key){
    if(this.map.has(key)){
      this._remove(this.map.get(key));
    }

    let node = this.map.get(key);
    this._insert(node);
    this.map.set(key, node);

    if(this.map.size > this.capacity){
      let lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }

  }
}