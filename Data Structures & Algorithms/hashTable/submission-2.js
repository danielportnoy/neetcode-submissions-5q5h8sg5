class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[${this.key}: ${this.value}]`;
    }
}

class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity);
        this.table.fill(null);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index = this.getIndex(key);
        let entry = new Entry(key, value);

        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                this.table[index].value = value;
                return;
            }
            index = (index + 1) % this.capacity;
        }

        if (this.table[index] === null) {
            this.size++;
        }
        this.table[index] = entry;

        if (this.size >= this.capacity / 2) {
            this.resize();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = this.getIndex(key);

        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.capacity;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let index = this.getIndex(key);
        let loopCounter = 0;
        while (this.table[index] !== null && loopCounter < this.capacity) {
            if (this.table[index].key === key) {
                this.table[index] = null;
                this.size--;
                return true;
            }
            index = (index + 1) % this.capacity;
            loopCounter++;
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        this.capacity *= 2;
        let oldTable = [...this.table];
        this.table = new Array(this.capacity);
        this.size = 0;
        this.table.fill(null);

        for (let i = 0; i < oldTable.length; i++) {
            if (oldTable[i] !== null) {
                this.insert(oldTable[i].key, oldTable[i].value);
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    getIndex(key) {
        return key % this.capacity;
    }

    toString() {
        return this.table.toString();
    }
}