// Finding single node in a tree
let filtersdData = function (tree, targetId) {
for (let node of tree) {
    if (node.id === targetId) {
    return node; // Found the object with the targetId
    }
    if (node.children && node.children.length > 0) {
    const result = filtersdData(node.children, targetId);
    if (result) {
        return result; // Found the object with the targetId in children
    }
    }
}
return null; // Object with the targetId not found
};