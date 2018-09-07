/**
 * Graph - Dijkstra
 */

module.exports = {
  /**
   * Return the shortest distance between two vertices in a directed graph
   * @param Object (graph representation) - { a:[['b',2],['c',3]], b:[['a',3]], c:[[]]}
   * @param T - vertice 1
   * @param T - vertice 2
   * @return int
   */
  distTo: null,

  /**
   * Return the shortest path between two vertices in a directed graph
   * @param Object (graph representation) - { a:[['b',2],['c',3]], b:[['a',3]], c:[[]]}
   * @param T - vertice 1
   * @param T - vertice 2
   * @return Array<T>
   */
  pathTo: null
};