#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;
class fibo{
protected:
static int number ,length;
public:
fibo(){
cin>>number>>length;
} 
};
class fibo2 : public fibo{
public:
void series(){
    int x,s[length];
    s[1] = 0;
    s[2] = 1;
for(int i=3;i<=length;i++){
    s[i] = s[i-1] + s[i-2];
}
for(int i=1;i<=length;i++){
    cout<<s[i]<<" ";  
}
}
};
class fibo3 :public fibo2{
    public:
    
for(int i=1;i<length;i++){
    if(s[i]==number) cout<<endl<<number <<" is on"<<i<<" position"  ;
    else if(i==number) cout<<endl<<s[number] << " is on " <<i<<" position" ;
}
};
int main()
{
    fibo ob;
    fibo2 ob1;
    ob1.series();
   return 0;
}









// #include<iostream>
// #include<vector>
// using namespace std;

// class fibo {
// protected:
//     int number, length;
// public:
//     fibo() {
//         cout << "Enter the number to search and the length of the series: ";
//         cin >> number >> length;
//     }
// };

// class fibo2 : public fibo {
// public:
//     void series() {
//         vector<int> s(length); // use vector to avoid size issues
//         s[0] = 0;  // First Fibonacci number
//         if (length > 1) {
//             s[1] = 1;  // Second Fibonacci number
//         }

//         for (int i = 2; i < length; i++) {
//             s[i] = s[i - 1] + s[i - 2]; // Generate Fibonacci numbers
//         }

//         for (int i = 0; i < length; i++) {
//             cout << s[i] << " ";
//         }
//         cout << endl;
//     }
// };

// class fibo3 : public fibo2 {
// public:
//     void findNumberPosition() {
//         vector<int> s(length);  // Initialize the vector again
//         s[0] = 0;
//         if (length > 1) {
//             s[1] = 1;
//         }

//         for (int i = 2; i < length; i++) {
//             s[i] = s[i - 1] + s[i - 2];
//         }

//         // Search for the number
//         for (int i = 0; i < length; i++) {
//             if (s[i] == number) {
//                 cout << endl << number << " is at position " << (i + 1) << endl;
//                 return;
//             }
//         }
//         cout << number << " is not found in the series." << endl;
//     }
// };

// int main() {
//     fibo3 ob;
//     ob.series();  // Display the Fibonacci series
//     ob.findNumberPosition();  // Find the position of the number in the series
//     return 0;
// }
