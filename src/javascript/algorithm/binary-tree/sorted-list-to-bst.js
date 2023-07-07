const sortedListToBST = (head) => {
    if (head == null) return null;
    let len = 0;
    let h = head;
    while (head) {
        len++;
        head = head.next;
    }

    const buildBST = (start, end) => {
        if (start > end) {
            return null;
        }

        const mid = (start + end) / 2;
        const left = buildBST(start, mid - 1);
        const root = new TreeNode(h.val);
        h = h.next;
        root.left = left;

        root.right = buildBST(mid + 1, end);
        return root;
    }

    return buildBST(0, len - 1);
};