/*
### Bài 3. Kiểm tra mảng có chứa số chẵn nào không
Sửa hàm **checkArrayHasAnEvenNumber(numbersArray)** 
sao cho kết quả trả về là true nếu numbersArray có ít nhất 1 số chẵn, ngược lại trả về false.
**Input:** numbersArray là một mảng có một hoặc nhiều số vd: [-1], [1, 4, 5, 2, 9]
**Kết quả mong muốn:**
- true: nếu numbersArray có chứa ít nhất 1 số chẵn
- false: nếu numbersArray không có số chẵn nào
*/

const array = [1, 3, 5, 13, 9, 15, 17]
function checkArrayHasAnEvenNumber(numbersArray){
    for (let i = 0; i< numbersArray.length; i++){
        if(numbersArray[i] % 2 === 0) return true;
    }
    return false;
}

console.log(checkArrayHasAnEvenNumber(array));