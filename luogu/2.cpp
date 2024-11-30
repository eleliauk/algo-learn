#include <iostream>
#include <vector>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    long long sum=0;
    for(int i=0;i<n;i++){
        cin>>a[i];
        sum+=a[i];
    }
    if(sum%3!=0||sum<=0){
        cout<<0<<endl;
        return 0;
    }
    long long target=sum/3;
    long long sum1=0;
    long long ctarget = 0;
    long long result = 0;
    for(int i=0;i<n;i++){
        sum1+=a[i];
        if (sum1 == 2 * target) {
            result = (result + ctarget) % (1007);
        }
        if (sum1 == target) {
            ctarget++;
        }
    }
        cout << result << endl;
    return 0;
}