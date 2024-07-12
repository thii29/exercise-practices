// Sửa hàm **joinBrandNames(arr)** 
//sao cho xuất ra một chuỗi string là danh sách các name của mỗi phần tử trong array 
//nối tiếp nhau ngăn cách bởi dấu phẩy và phải có 1 dấu cách sau dấu phẩy

// **Inputs:**

// - arr: một array các objects, mỗi object có 2 properties id và name, vd:
const arr = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Suzuki" },
  { id: 3, name: "Ford" },
];
// **Kết quả mong muốn:** 
//Một chuỗi string gồm tất cả các name 
//của các object trong arr chuyền vào, 
//ngăn cách bởi dấu phẩy và một khoảng trắng sau dấu phẩy ", " vd: "Toyota, Suzuki, Ford"
// => const result = "Toyota, Suzuki, Ford";

// VIẾT HÀM Ở ĐÂY

function joinBrandNames(array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
      newArr = newArr.push(array[index]?.name);
    }
    let strName = newArr.join(", ");
    return strName;
  }
  
  let result = joinBrandNames(arr);
  console.log(result);

