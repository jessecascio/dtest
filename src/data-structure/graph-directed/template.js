/**
 * Directed Graph
 */

module.exports = {
  /**
   * add vertice
   * @param T
   */
  addVertice: null,

  /**
   * add edge
   * @param T
   * @param T
   */
  addEdge: null,

  /**
   * determine if two vertices are adjacent (an edge between them)
   * @param T
   * @param T
   * @return bool
   */
  adjacent: null,

  /**
   * determine if two vertices are connected (on the same path)
   * @param T
   * @param T
   * @return bool
   */
  connected: null,

  /**
   * perform a depth search, returning vertices in path
   * @param T
   * @param T
   * @return Array<T>
   */
  searchDepth: null,

  /**
   * perform a breadth search, returning vertices in path
   * @param T
   * @param T
   * @return Array<T>
   */
  searchBreadth: null,

  /**
   * string representation of graph
   * @return string
   */
  toString: null,

  /**
   * BONUS POINTS
   */

  /**
   * OPTIONAL: reverse all of the edges
   */
  reverse: null,

  /**
   * OPTIONAL: sort vertices into pre order
   * @return Array<T>
   */
  preOrder: null,

  /**
   * OPTIONAL: sort vertices into post order
   * @return Array<T>
   */
  postOrder: null,

  /**
   * OPTIONAL: sort vertices in topological order
   *  i.e. put the vertices in order so directed edges point from a 
   *    vertex earlier in the order to a vertex later in the order
   * @return Array<T>
   */
  topoSort: null,

  /**
   * OPTIONAL: determine if there are any cycles (true for none)
   * @return bool
   */
  acylic: null,

  /**
   * OPTIONAL: determine the number of strong components
   *  i.e. how many groups of strongly connected vertices exist
   * @return int
   */
  strongComponents: null
};