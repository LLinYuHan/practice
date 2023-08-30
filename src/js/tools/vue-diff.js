function diff(oldVnode, newVnode) {
    if (oldVnode === newVnode) {
        return;
    }

    if (oldVnode.nodeType && oldVnode.nodeType === 1) {
        oldVnode = createVNode(oldVnode);
    }

    if (oldVnode.tag === newVnode.tag){
        updateAttrs(oldVnode, newVnode);

        const oldChildren = oldVnode.children || [];
        const newChildren = newVnode.children || [];
        if (oldChildren.length > 0 || newChildren.length > 0) {
            updateChildren(oldVnode.elm, oldChildren, newChildren);
        }
    }
    else {
        replaceNode(oldVnode, newVnode);
    }
}

function replaceNode(oldVnode, newVnode) {
    const parentElm = oldValue.elm.parentNode;
    const newElm = createElm(newVnode);
    parentElm.replaceChild(newElm, oldVnode.elm);
}

function createVNode(node) {
    return {
        tag: node.tagName.toLowerCase(),
        elm: node,
        children: []
    };
}

function createElm(vnode) {
    const {tag, children} = vnode;
    const el = document.createElement(tag);
    if (children.length > 0) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const childEl = createElm(child);
            el.appendChild(childEl);
        }
    }
    return el;
}