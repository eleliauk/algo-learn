#include <iostream>
#include <stdexcept>
#include <vector>
template<typename E>
class MyArrayList {
    private:
        // 真正存储数据的底层数组
        E* data;
        //元素个数
        int size=0;
        //默认初始容量
        static const int INIT_CAP=10;
    public:
        MyArrayList(){
            this.data->new E[INIT_CAP];
            this.size=0;
        }
        MyArrayList(int initCapacity){
            this.data->new E[initCapacity];
            this.size=0;
        }
        void AddLast(E,e){
            int cap=sizeof(data)/sizeof(data[0])
            //检查data容量是否足够
            if(size>=cap)
            resize(cap*2);
            data[size]=e;
            size++;
        }
    void add(int index, E e) {
        // 检查索引越界
        checkPositionIndex(index);

        int cap = sizeof(data) / sizeof(data[0]);
        // 看 data 数组容量够不够
        if (size == cap) {
            resize(2 * cap);
        }

        // 搬移数据 data[index..] -> data[index+1..]
        // 给新元素腾出位置
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }

        // 插入新元素
        data[index] = e;

        size++;
    }

    void addFirst(E e) {
        add(0, e);
    }
    E removeList(int index){
        checkPositionIndex(index);
        int cap=sizeof(data)/sizeof(data[0]);
          // 可以缩容，节约空间
         if (size == cap / 4) {
            resize(cap / 2);
        }
        E deleteVal=data[index];
         // 搬移数据 data[index+1..] -> data[index..]
        for(int i=index;i<size-1;i++)
        {
            data[i]=data[i+1];
        }
        data[size - 1] = NULL;
        size--;
        return deleteVal;

    }

}