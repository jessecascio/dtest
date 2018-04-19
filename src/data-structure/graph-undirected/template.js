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
   * determine if two vertices are connected
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
   * @return int
   */
  separation: null,

  /**
   * OPTIONAL: determine if there are any cycles (true for none)
   * @return bool
   */
  acylic: null,

  /** 
   * OPTIONAL: get all the vertices of graph
   * @return Array<T>
   */
  getVertices: null,

  /** 
   * OPTIONAL: total edges count
   * @return int
   */
  getEdgeCount: null,

  /**
   * OPTIONAL: get the degrees (edges to vertice) count
   * @return int
   */
  getDegreeCount: null,

  /**
   * OPTIONAL: get vertice with the max degree
   * @return T
   */
  maxDegree: null,

  /**
   * OPTIONAL: number of vertices
   * @return int
   */
  size: null
};