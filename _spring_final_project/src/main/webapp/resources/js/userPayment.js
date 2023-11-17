console.log(pkVo);

// 정규식을 사용하여 패턴에 맞게 문자열 파싱
const matches = pkVo.match(/pkNo=(\d+), pkName=([^,]+), pkPrice=(\d+)/);

// matches 배열에서 필요한 정보 추출
const pkNo = matches[1];
const pkName = matches[2];
const pkPrice = matches[3];









   function requestPay() {
    var uid = '';
    IMP.init("imp76450478");
   
   
   var selectedValue = document.getElementById("paymentMethod").value;
   console.log(selectedValue);
    IMP.request_pay({
          pg: selectedValue,
          pay_method: "card",
          merchant_uid: createOrderNum(),
          name: pkName,
          amount: pkPrice,
          buyer_email: "gildong@gmail.com",
          buyer_name: "홍길동",
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181"
    }, function(response) {
        //결제 후 호출되는 callback함수
        if ( response.success ) { //결제 성공
            console.log(response);
        } else {
            alert('결제실패 : ' + response.error_msg);
        }
    })
}



// 주문번호 만들기
function createOrderNum(){
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	
	let orderNum = year + month + day;
	while (i < 5) {
    paynum += Math.floor(Math.random() * 5);
    i++;
}
	return orderNum;
}