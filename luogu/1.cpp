#include <iostream>
using namespace std;
int main(){
    string str1;
    string str2;
    cin>>str1;
    cin>>str2;
    int num=0;
    for(int i=0;i<int(str2.length());i++){
        if(str1==str2.substr(i,str1.length())){
                num++;  
                i+=str1.length()-1;     
        }
        
    }
    cout<<num<<endl;
    return 0;
}