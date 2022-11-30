class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
    
class BTS:
    def __init__(self):
        self.root = None
        self.templist = []

    def insert(self,value):
        self.current = self.root
        while True:
            if value < self.current.value:
                if self.current.left != None:
                    self.current = self.current.left
                    continue
                else:
                    self.current.left = Node(value)
                    break

            if value > self.current.value:
                if self.current.right != None:
                    self.current = self.current.right
                    continue
                else:
                    self.current.right = Node(value)
                    break
            
            if value == self.current.value:
                return

    def delete(self,root,value):
        parent = None
        current = root
        while current and current.value != value:
            parent = current
            if value < current.value:
                current = current.left
            else:
                current= current.right
        #찾는 값이 트리에 없으면
        if current==None:
            return
        #리프노드
        if current.left == None and current.right == None:
            if current != self.root:
                if parent.left == current:
                    parent.left = None
                else:
                    parent.right = None
            else:
                self.root = None

        # 둘다 있을때
        elif current.left and current.right:
            max = self.getMaximum(current.left)#왼쪽 서브트리의 최대값
            self.delete(root,max.value)
            current.value = max.value
        
        else:
            if current.left:
                max = self.getMaximum(current.left)#왼쪽 서브트리의 최대값
                if current.left.value == max.value:
                    if current != self.root:
                        if current == parent.left:
                            parent.left = max
                        else:
                            parent.right = max
                    else:
                        self.root = max
                else:
                    self.delete(root,max.value)
                    current.value = max.value
            else:
                min = self.getMinimum(current.right)
                if current.right.value == min.value:
                    if current != self.root:
                        if current == parent.right:
                            parent.right = min
                        else:
                            parent.left = min
                    else:
                        self.root = min
                else:
                    self.delete(root,min.value)
                    current.value = min.value
        return

    def getMaximum(self,curr):
        while curr.right:
            curr = curr.right
        return curr

    def getMinimum(self,curr):
        while curr.left:
            curr = curr.left
        return curr

    def depth(self,k,curNode,curDepth):
        if k==curDepth:
            self.templist.append(curNode.value)
            return
        else:
            if curNode.left==None and curNode.right ==None:
                return
            if curNode.left!= None:
                self.depth(k,curNode.left,curDepth+1)
            if curNode.right!= None:
                self.depth(k,curNode.right,curDepth+1)
                return

    def leaf(self,curNode):
        if curNode.left==None and curNode.right==None:
            self.templist.append(curNode.value)
            return
        else:
            if curNode.left!= None:
                self.leaf(curNode.left)
            if curNode.right!=None:
                self.leaf(curNode.right)
                return

bts = BTS()
while True:
    order = input().split()
    if order[0]=="quit":
        break

    elif order[0]=="+":
        if bts.root== None:
            bts.root = Node(order[1])
            continue
        bts.insert(order[1])

    elif order[0]=="-":
        bts.delete(bts.root,order[1])

    elif order[0]=="leaf":
        if bts.root== None:
            continue
        bts.leaf(bts.root)
        if(bts.templist):
            print(' '.join(sorted(bts.templist)))
        bts.templist = []

    elif order[0]=="depth":
        if bts.root==None:
            print("NO")
            continue
        bts.depth(int(order[1]),bts.root,1)
        if(bts.templist):
            print(' '.join(sorted(bts.templist)))
        else:
            print("NO")
        bts.templist = []

    
