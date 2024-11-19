#include <string>
#include <iostream>
#include <sstream>
#include <string>
#include <algorithm>

std::string solution(const std::string& s) {
    
  // 去掉前导零，并找到小数点的位置
    std::string number = s;
    number.erase(0, number.find_first_not_of('0'));

    // 特殊情况：字符串全为0
    if (number.empty() || number == ".") number = "0";

    // 找到小数点位置
    size_t decimalPos = number.find('.');

    // 拆分整数部分和小数部分
    std::string integerPart = (decimalPos == std::string::npos) ? number : number.substr(0, decimalPos);
    std::string decimalPart = (decimalPos == std::string::npos) ? "" : number.substr(decimalPos);

    // 反转整数部分，方便插入逗号
    std::reverse(integerPart.begin(), integerPart.end());

    // 插入逗号
    std::string formattedInteger;
    for (size_t i = 0; i < integerPart.size(); ++i) {
        if (i > 0 && i % 3 == 0) {
            formattedInteger += ',';
        }
        formattedInteger += integerPart[i];
    }

    // 再次反转整数部分，得到正确格式
    std::reverse(formattedInteger.begin(), formattedInteger.end());

    // 组合整数部分和小数部分
    return formattedInteger + decimalPart;
}


int main() {
    std::cout << (solution("1294512.12412") == "1,294,512.12412") << std::endl;
    std::cout << (solution("0000123456789.99") == "123,456,789.99") << std::endl;
    std::cout << (solution("987654321") == "987,654,321") << std::endl;
}