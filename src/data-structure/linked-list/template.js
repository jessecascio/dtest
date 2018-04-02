/**
 * Linked List
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
  size: null,

  /**
   * get an array representation of list
   * @return Array<T>
   */
  toArray: null,

  /**
   * BONUS POINTS
   */

  /**
   * OPTIONAL: reverse the list
   */
  reverse: null,

  /**
   * OPTIONAL: reverse a subset of the list
   * @param int - starting index
   * @param int - ending index
   */
  reversePartial: null,

  /**
   * OPTIONAL:  find the middle value, if even entries return second
   *    [1,2,3] -> 2 OR [1,2,3,4] -> 3
   * @return T || undefined
   */
  middle: null,

  /**
   * OPTIONAL: sort the list in ASC order, [1,3,4,5,6]
   */
  sort: null,

  /**
   * OPTIONAL: remove all duplicates from the list
   */
  dedupe: null,

  /**
   * OPTIONAL: rotate elements from end to front
   *  k=2, [1,2,3,4,5] -> [4,5,1,2,3]
   */
  rotate: null,

  /**
   * OPTIONAL: determine if list is a palidrome
   *  i.e. reads the same sequence front to back
   * @return bool
   */
  isPalidrome: null
};
