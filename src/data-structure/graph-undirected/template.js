/**
 * Undirected Graph
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
  adjacent:null,

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
   * OPTIONAL: get number of components (isolated graphs)
   * @return int
   */
  components: null,

  /**
   * OPTIONAL: get degrees of separation (distance between two vertices)
   * @param T
   * @param T
   * @return int
   */
  separation: null,

  /**
   * OPTIONAL: determine if there are any cycles (true for none)
   * @return bool
   */
  acylic: null,

  /**
   * OPTIONAL: get the degree count to a vertice (edge count)
   * @param T
   * @return int
   */
  getDegreeCount: null,

  /**
   * OPTIONAL: get the vertice with the max degree
   * @return T
   */
  maxDegree: null
};