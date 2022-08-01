// DFS Over a Binary tree
const dfs = (node) => {
  if (!node) return null;
  // console.log('Preorder', node)
  dfs(node.left);
  // console.log('Inorder', node)
  dfs(node.right);
  // console.log('Postorder', node)
}
