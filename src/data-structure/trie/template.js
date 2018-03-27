/**
 * Trie
 */

module.exports = {
  /**
   * insert value
   * @param string (key)
   * @param T (value)
   */
  put: null,

  /**
   * return value
   * @param string (key)
   * @return T (value)
   */
  get: null,

  /** 
   * remove value and any unused keys
   * @param string (key)
   */
  remove: null,

  /** 
   * check for key
   * @param string (key)
   * @return bool
   */
  contains: null,

  /**
   * get all keys
   * @return array<String>
   */
  keys: null,

  /**
   * get keys that start with a value
   * @param string
   * @return array<String>
   */
  keysWithPrefix: null,

  /**
   * get the size
   * @return int
   */
  size: null,

  /**
   * JSON representation
   * @return object
   */
  toJson: null
};