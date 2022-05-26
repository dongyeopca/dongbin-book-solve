
class Node:
    def __init__(self, prev=None, next=None, data=None):
        self.__next = next
        self.__prev = prev
        self.__data = data

    def set_next(self, next):
        self.__next = next

    def set_prev(self, prev):
        self.__prev = prev

    def next(self):
        return self.__next

    def prev(self):
        return self.__prev

    def __repr__(self):
        return str(self.__data)


class LinkedList:
    def __init__(self, data=None):
        # 적절히 구현하시오.
        self.__head = Node()
        self.__tail = Node()
        self.__data = []
        cur_node = self.__head
        if data!=None:
            for i in range(len(data)):
                if i==len(data)-1:
                    new_node = Node(data=data[i], prev=cur_node,next=self.__tail)
                    cur_node.set_next(new_node)
                    self.__tail.set_prev(new_node)
                    self.__data.append(new_node)
                    cur_node = new_node
                else:
                    new_node = Node(data=data[i], prev=cur_node)
                    cur_node.set_next(new_node)
                    cur_node = new_node
                    self.__data.append(new_node)
        # self.__next = None
    def empty(self):
        if self.size()==0:
            return True
        else:
            return False

    def size(self):
        return len(self.__data)

    def head(self):
        return self.__head.next()

    def tail(self):
        return self.__tail.prev()

    def appendleft(self, data):
        if self.__head.next() == None:
            self.__head.set_next(Node(data=data,prev=self.__head))
            self.__data.append(data)
            self.__tail.set_prev(self.__head.next())
        else:
            node = self.__head.next()
            new_node = Node(data=data)
            node.set_prev(new_node)
            self.__data.append(new_node)
            self.__head.set_next(new_node)

    def append(self, data):
        if self.__head.next() == None:
            new_node = Node(data=data,prev=self.__head,next=self.__tail)
            self.__head.set_next(new_node)
            self.__tail.set_prev(new_node)
            self.__data.append(new_node)
            return new_node
        else:
            node = self.__tail.prev()
            new_node = Node(data=data,prev=node,next=self.__tail)
            node.set_next(new_node)
            self.__tail.set_prev(new_node)
            self.__data.append(new_node)
            return new_node

    def insert(self, cur_node, data):
        # 적절히 구현하시오.
        # 기본적으로 cur_node 다음 위치에 노드를 추가함
        if self.__head == cur_node or cur_node == None:
            new_node = Node(data=data,prev=self.__head,next=self.__head.next())
            if self.__tail.prev()==None:
                self.__head.set_next(new_node)
                new_node.set_next(self.__tail)
                self.__tail.set_prev(new_node)
            else:
                self.__head.next().set_prev(new_node)
                self.__head.set_next(new_node)
            self.__data.append(new_node)
            return self.__head.next()
        elif cur_node.next() == self.__tail:
            new_node = Node(data=data,next=self.__tail,prev=self.__tail.prev())
            self.__tail.prev().set_next(new_node)
            self.__tail.set_prev(new_node)
            self.__data.append(new_node)
            return self.__tail.prev()
        else:
            new_node = Node(data=data,prev=cur_node,next=cur_node.next())
            cur_node.next().set_prev(new_node)
            cur_node.set_next(new_node)
            self.__data.append(new_node)
            return new_node
        # 단, cur_node 가 head or None 이면 첫 번째에 입력
        # 단, cur_node 가 tail 이면 마지막에 입력

    def remove(self, cur_node):
        # 적절히 구현하시오.
        # 기본적으로 cur_node 를 삭제함
        if cur_node==None:
            return cur_node
        if cur_node==self.__head:
            return self.__head
        if self.empty():
            return cur_node
        else:
            if cur_node==self.__tail.prev():
                if cur_node.prev()==self.__head:
                    self.__tail.set_prev(None)
                    self.__head.set_next(None)
                else:
                    cur_node.prev().set_next(self.__tail)
                    self.__tail.set_prev(cur_node.prev())
                self.__data.pop()
                return cur_node.prev()
            else:
                
                cur_node.prev().set_next(cur_node.next())
                cur_node.next().set_prev(cur_node.prev())
                self.__data.pop()
                return cur_node.prev()
        # 단, cur_node 가 None 이면 아무것도 하지 않음
        # 단, linkedlist 가 empty 이면 아무것도 하지 않음
        # 단, 원소가 하나일 때, 삭제하면 LinkedList의 초기 상태를 고려해 봄 (llist = LinkedList() 했을 때의 상태)
        # 단, cur_node 가 tail 이면 제일 마지막 원소를 삭제

    def next(self, cur_node):
        if cur_node ==None or cur_node.next()==self.__tail:
            return cur_node
        return cur_node.next()

    def prev(self, cur_node):
        if cur_node==None:
            return cur_node
        return cur_node.prev()


    def __len__(self):
        return self.size()

    def __repr__(self):
        cur_node = self.__head.next()
        elements = []
        while cur_node is not None and cur_node.next():
            elements.append(str(cur_node))
            cur_node = cur_node.next()
        return str(elements)

    def __iter__(self):
        self.__next = self.__head.next()
        return self

    def __next__(self):
        if self.__next is not None and\
                self.__next.next():
            next_node = self.__next
            self.__next = self.__next.next()
            return next_node
        else: raise StopIteration