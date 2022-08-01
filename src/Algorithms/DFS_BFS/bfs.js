function bfs(node) {
  if (!node) return;
  const queue = [];
  queue.push(node);
  while (queue.length) {
    const n = queue.shift();
    console.log(n.val)
    if (n.left) queue.push(n.left)
    if (n.right) queue.push(n.right)
  }
}
