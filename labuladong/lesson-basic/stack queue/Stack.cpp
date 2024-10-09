#include <list>
#include <iostream>
template <typename E>
class MyLinkedStack{
    private:
     std::list<E> list;
    public:
    // 向栈顶加入元素，时间复杂度 O(1)
    void push(const E &e) {
        list.push_back(e);
    }

    // 从栈顶弹出元素，时间复杂度 O(1)
    E pop() {
        E value = list.back();
        list.pop_back();
        return value;
    }

    // 查看栈顶元素，时间复杂度 O(1)
    E peek() const {
        return list.back();
    }

    // 返回栈中的元素个数，时间复杂度 O(1)
    int size() const {
        return list.size();
    }
}