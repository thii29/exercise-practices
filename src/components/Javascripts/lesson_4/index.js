/*
### Bài 4. Tìm những phần tử chung của 2 mảng số nguyên
Sửa hàm **findIntersectNumbers** để kết quả trả về là 1 array
gồm tất cả các số có trong cả 2 danh sách arr1 và arr2

**Inputs:**
- arr1: một array các số nguyên, vd [1,3,5,7]
- arr2: một array các số nguyên, vd [1,5,7,9,9]

**Kết quả mong muốn:** Một arr chứa các số nguyên có mặt ở cả 2 arrays arr1 và arr2, 
mỗi số chỉ xuất hiện một lần trong mảng kết quả này.
vd1: Kết quả của findIntersectNumbers([1, 3, 4, 8], [2, 4, 6, 8]) là [4, 8].
vd2: kết quả của findIntersectNumbers([2, 3, 4, 5], [5, 5]) là [5].
*/

const arr1 = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]
const arr2 = [2, 4, 6, 2, 12, 0, 17]
// 2,4,6

// function findIntersectNumbers(arrNumber1, arrNumber2){
//     let arrResult = [];
//     for (let i = 0; i < arrNumber1.length; i++){
//         for (let j = 0; j < arrNumber2.length; j++){
//             if (arrNumber1[i] === arrNumber2[j]) {
//                 arrResult.push(arrNumber1[i]);
//             } // dung them if (includes) de loc nhung so da ton tai

//         }
//     }
//     return arrResult;
// }

function findIntersectNumbers(arrNumber1, arrNumber2){
    let arrResult = arrNumber1.filter((value) => {
       return arrNumber2.includes(value)
    })

    return arrResult;
}
console.log(findIntersectNumbers(arr1, arr2));

