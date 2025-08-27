let choose;
let fullName; 
let age; 
do {
  choose = prompt(`Mời nhập lựa chọn: 
        1: Nhập tên
        2. Nhập tuổi người dùng
        3. In tên và tuổi của người dùng.
        4. In bảng cửu chương của một số.
        5. Kiểm tra số nhập vào là số chẵn hay lẻ.
        6. Tính tổng các số từ 1 đến N (N do người dùng nhập).
        7. In các số trong một dãy (người dùng nhập dãy bất kì).
        8. Kiểm tra số nhập vào có phải là số nguyên tố hay không.
        9. In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
        10. Thoát chương trình
        `);
  switch (choose) {
    case "1":
      fullName = prompt("mời nhập tên người dùng!");
      break;
    case "2":
      age = prompt("mời nhập tuổi người dùng");
      break;
    case "3":
      console.log(`tên người dùng: ${fullName}, tuổi: ${age}`);
      break;
    case "4":
      let number= Number(prompt("mời nhập bảng cửu chương"));
      if(number<1 || number>10){
        console.log("giá trị nhập không hợp lệ ");
      }else{
        for (let i = 1; i <=10; i++) {
            console.log(`${number} X ${i} = ${number*i}`);
        }
      }
      break;
    case "5":
        let _number = +prompt("mời bạn nhập số bất kì");
        if(_number%2==0){
            console.log("số chẵn");
        }else{
            console.log("số lẻ");
        }
      break;
    case "6":
        let sum=0;
        let number1= prompt("mời nhập số bất kì");
        for (let i = 1; i <= number1; i++) {
            sum= sum +i ;
            // sum+=i;
        }
        console.log(` Tổng các số từ 1 đến ${number1} = ${sum}`);
      break;
    case "7":
        let string=prompt("mời bạn nhập 1 dãy bất kì");
        for (let i = 0; i < string.length; i++) {
           if(!isNaN(string[i])){
            console.log(string[i]);
           }
        }
      break;
    case "8":
        let number2= +prompt("mời bạn nhập số bất kì"); 7
        let count=0;
        for (let i = 1; i <= number2; i++) { 
            if(number2%i==0){
                count++; 
            }
        }
        if(count==2){
            console.log(`${number2} là số nguyên tố!`);
            
        }else{
            console.log("không phải số nguyên tố!"); 
        }

      break;
    case "9":
        // in một chuỗi đảo ngược
        let reverse_string= prompt("mời nhập một chuỗi bất kì");// hello 
        let result="";
        for (let i = reverse_string.length-1; i>=0; i--) {
            result+= reverse_string[i];
        }
        console.log("trước khi đảo ngược",reverse_string);
        console.log("sau khi đảo ngược",result);
      break;
  
  }
} while (choose != 10);