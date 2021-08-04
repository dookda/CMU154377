
function randNum() {
    let numb = Math.random();
    let rnd = Math.round(numb * 100);


    if (rnd < 10) {
        console.log("0" + rnd)
        return "0" + rnd;

    } else {
        console.log(rnd)
        return rnd;
    }

}
let ranNum = randNum();

function checkNum(uNum, rNum) {
    $("#lottery").html("เลขที่ออก: " + rNum);
    if (String(uNum) == rNum) {
        $("#result").html('<span class="badge bg-success">ถูกรางวัล</span>');
        // console.log("ถูก")
    } else {
        $("#result").html('<span class="badge bg-warning">ซื้อใหม่นะ</span>');
        // console.log("ผิด")
    }
}

function sendData() {
    let inNumber = $("#inNumber").val();
    // console.log(inNumber);
    checkNum(inNumber, ranNum)
}
