/**
 * Binary Max Heap
 */

let heap = [];

module.exports = {
  /**
   * insert value into heap
   * @param T
   */
  insert: null,

  /**
   * return and remove max value
   * @return T
   */
  remove: null,

  /**
   * return but retain max value
   * @return T
   */
  peek: null,

  /**
   * get the size of heap
   * @return int
   */
  size: null,

  /**
   * reset the heap
   */
  reset: function() {
    heap = [];
  },

  /**
   * array representation of heap
   * @return array<T>
   */
  toArray: function() {
    return heap;
  }
};