/*
### Bài 2. Kiểm tra 1 chuỗi string là 1 chuỗi đối xứng

Sửa hàm **checkStringPalindrome(inputString)** 
sao cho kết quả trả về là true nếu input là 1 chuỗi đối xứng, ngược lại trả về false.

**Input:** một chuỗi string, vd "ABCCBA", "DEFED", "12345", "UIO090OIU"

**Kết quả mong muốn:**

- true: nếu input là 1 chuỗi đối xứng, vd input là một trong "ABCCBA", "DEFED", "UIO090OIU", "100001"
- false: nếu chuỗi không đối xứng vd: "12345", "TUut", "900", "ab"

*/

function checkStringPalindrome(inputString){
    const array = inputString.split(" ");
    const reverseArr = array.reverse();
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== reverseArr[index]) {
            return false;
        }
        return true;
    }
    
}

let string = "huhiha";
console.log(checkStringPalindrome(string))