function tinhTong() {
    // B1: Tạo số phần tử ngẫu nhiên từ 10 -> 20
    let soLuong = Math.floor(Math.random() * 11) + 10; // 10 đến 20

    // B2: Tạo mảng chứa số ngẫu nhiên (0-99 cho dễ nhìn)
    let arr = [];
    for (let i = 0; i < soLuong; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    // B3: Khai báo biến tổng chẵn và tổng lẻ
    let tongChan = 0;
    let tongLe = 0;

    // B4: Duyệt mảng để tính tổng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            tongChan += arr[i];
        } else {
            tongLe += arr[i];
        }
    }

    // B5: Hiển thị kết quả
    alert("Mảng đã tạo: " + arr.join(", "));
    alert("Tổng các số chẵn: " + tongChan);
    alert("Tổng các số lẻ: " + tongLe);
}