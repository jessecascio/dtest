/**
 * Singly Linked List
 */

module.exports = {
  /**
   * add a value to a specific index, bool on success, false out of range
   * @param int
   * @param T
   * @return bool
   */
  add: null,

  /**
   * add a value to the front of the list
   * @param T
   */
  addFirst: null,

  /**
   * add a value to the end of the list
   * @param T
   */
  addLast: null,

  /**
   * remove a value from a specific index
   * @param int
   * @return T | undefined
   */
  get: null,

  /**
   * remove a value from beginning of list
   * @return T | undefined
   */
  getFirst: null,

  /**
   * remove a value from end of list
   * @return T | undefined
   */
  getLast: null,

  /**
   * read a value from a specific index
   * @param int
   * @return T | undefined
   */
  peek: null,
 
   /**
    * read a value from beginning of list
    * @return T | undefined
    */
   peekFirst: null,
 
   /**
    * read a value from end of list
    * @return T | undefined
    */
   peekLast: null,

  /**
   * return index of a value
   * @param T
   * @return int | undefined
   */
  indexOf: null,

  /**
   * return last index of a value
   * @param T
   * @return int | undefined
   */
  lastIndexOf: null,

  /**
   * get count for a value
   * @param T
   * @return int
   */
  count: null,

  /**
   * determine if list contains a value
   * @param T
   * @return bool
   */
  contains: null,

  /**
   * get size of list
   * @return int
   */
  size: function() {

  },

  /**
   * reset the list
   */
  reset: null,

  /**
   * get an array representation of list
   * @return Array<T>
   */
  toArray: null
};
