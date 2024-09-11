#include<iostream>
#include<vector>
#include<queue>
using namespace std;
#define int long long 
#define endl '\n'
void read()
{
    int flag,n;
    cin>>flag>>n;
    vector<int>ans;
    cout<<flag<<" "<<(n/2)+1<<endl;
    priority_queue<int,vector<int>,greater<int> >q;
    priority_queue<int>p;//have mid
    int num=0,mid=-1e17;
    while(n--)
    {
       int x;
       cin>>x;
        if(x>mid) q.push(x);
        else p.push(x);
        if(q.size()>p.size())
        {
        while(q.size()>p.size())
        {
            int temp=q.top();
            q.pop();
            p.push(temp);
        }
        }
        else if(p.size()-1>q.size())
        {
        while(p.size()>q.size()+1)
        {
            int temp=p.top();
            p.pop();
            q.push(temp);
        }
        }
        if(p.size()==q.size()+1)
        {
            mid=p.top();
            ans.push_back(mid);
        }
    }
    for(int i=0;i<ans.size();i++)
    {
        cout<<ans[i]<<" ";
        if(i!=0&&(i+1)%10==0&&i!=ans.size()-1) cout<<endl;
    }
    
}
signed main()
{
    int t;
    cin>>t;
    while(t--)
    {
        read();
        if(t!=0) cout<<endl;
    }
}