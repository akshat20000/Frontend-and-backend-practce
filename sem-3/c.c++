// #include<iostream>
// #include<cstdio>
// #include<cmath>
// using namespace std;
// class Vegetable{
// public:
// virtual void two(){
//     cout<<"V2"<<endl;
// }
// };
// class Mineral:public Vegetable{
// public:
// virtual void one(){
//     cout<<"M1"<<endl;
// }
// virtual void two(){
//     cout<<"M2"<<endl;
// }
// };
// class Animal:public Mineral{
//     public:
//     virtual void one(){
//         cout<<"A1"<<endl;
//         two();
//     }
//      virtual void three(){
//         cout<<"A3"<<endl;
//     }
// };
// class Computer : public Animal{
//     public:
//     virtual void two(){
//         cout<<"C2"<<endl;
//     }
//      virtual void three(){
//         cout<<"C3"<<endl;
//     }
// };

// class Ram : public Animal{
// public :
// virtual void two(){
//     cout<<"R 2"<<endl;
//     Mineral::two();
// }
// virtual void three(){
// cout<<"R 3 "<<endl;
// }

// };
// class D{
//     public:
//     virtual void two(){
//         cout<<"D 2"<<endl;
//     }
//     virtual void three(){
//         cout<<"D 3"<<endl;
//     }
// };
// int main(){
// Animal *P;
// Computer ob;
// P=&ob;
// ((D*)P)->three();
// }

#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;
template <class T1,class T2>
void fun(T1 x, T2 y)
{
    
    cout << "Template" << endl;
}
void fun(int a,int b){
    cout << "Non Template" << endl;
}
 
int main()
{
    fun (1,1); 
    fun(11,2.1); 
    fun('c','d');
    fun(1,'d');

    return 0;
}