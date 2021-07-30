//let table = document.querySelector('#tbody');
let table = document.getElementById('tbody');
let table2 = document.getElementById('tbody2');
var arr = [];
create_table(1, 1);

function create_table(num, buttonck) {
    var i, l, k, z;
    var amountSelect = document.getElementById("amount");  
    var selectValue = amountSelect.options[amountSelect.selectedIndex].value;  

    for (i = 1; i < 26; i++) {

        for (l = 1; l < 4; l++) {
            var row = table.insertRow(table.rows.length); // 하단에 추가
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = 'KLCSM0' + table.rows.length;
            cell2.innerHTML = 'KACACIA';
            cell3.innerHTML = 'rkdgusdl789@naver.com';
            cell1.id = "row_1" + table.rows.length;
            cell2.id = "row_2" + table.rows.length;
            cell3.id = "row_3" + table.rows.length;
            if (l % 2 == 0) {
                cell1.innerHTML = 'POSSMM' + table.rows.length;
                cell2.innerHTML = 'ADONIS';
                cell3.innerHTML = 'rkdgusdl95@daum.net';
                cell1.id = "row_1" + table.rows.length;
                cell2.id = "row_2" + table.rows.length;
                cell3.id = "row_3" + table.rows.length;
            }
            if (l % 3 == 0) {
                cell1.innerHTML = 'FSRNT' + table.rows.length;
                cell2.innerHTML = 'BOFUCSD';
                cell3.innerHTML = 'rkdgusdl123@fsrnt.net';
                cell1.id = "row_1" + table.rows.length;
                cell2.id = "row_2" + table.rows.length;
                cell3.id = "row_3" + table.rows.length;
            }
            // document.write('('+cell1.id +'\n'+'cell1');
            // document.write(cell2.id+'\n'+'cell2');
            // document.write(cell3.id+'\n'+'cell3'+')');
            document.getElementById('row_1' + table.rows.length).style.display = "none";
            document.getElementById('row_2' + table.rows.length).style.display = "none";
            document.getElementById('row_3' + table.rows.length).style.display = "none";
        }
    }
    if (num < 19 || selectValue == 5) {
     
        for (k = 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 1; k < 6; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
    }

//10개씩 보기 일때
    if(num>19){
       if(selectValue == 10){
        for (k = 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 1; k < 11; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
    }
    if(selectValue == 15){
        for (k = 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 1; k < 16; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
    }
    
    }

    // alert(table.rows.length);
    if (num > 0 && num<19) {
        for (k = 1; k < 5 * (num - 1) + 1; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 5 * (num - 1) + 1; k < num * 5 + 1; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
        for (k = num * 5 + 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
    }

    // 버튼 관리 5개씩 볼때
    for (z = 6; z < 15; z++) {
        document.getElementById('btn' + z).className = 'hidden';
        //초기버튼 생성
    }
  
    if (buttonck > 3 && buttonck < 14) {
        for (z = 1; z < 16; z++) {
            document.getElementById('btn' + z).className = 'hidden';
        }
        for (z = buttonck - 2; z < buttonck + 3; z++) {
            document.getElementById('btn1').className = 'show';
            document.getElementById('btn' + z).className = 'show';
            document.getElementById('btn...2').className = 'show';
        }
        if(buttonck>12){
            document.getElementById('btn...').className = 'hidden';
        }
        else if(buttonck<13){
            document.getElementById('btn...').className = 'show';
        }
    }  
    if(buttonck<4){
        console.log(buttonck);
        document.getElementById('btn...2').className = 'hidden';
            for(z=1;z<5;z++){
                document.getElementById('btn' + z).className = 'show';
            }
        }
    if(buttonck==15 || buttonck==14){
        for(z=11;z<16;z++){
            document.getElementById('btn' + z).className = 'show';
        }
        for(z=2;z<6;z++){
            document.getElementById('btn' + z).className = 'hidden';
        }
        document.getElementById('btn...2').className = 'show';
        document.getElementById('btn...').className = 'hidden';
    }
    if(buttonck==1){
        for(z=1;z<6;z++){
            document.getElementById('btn' + z).className = 'show';
        }
        for(z=6;z<16;z++){
            document.getElementById('btn' + z).className = 'hidden';
        }
        document.getElementById('btn...').className = 'show';
        document.getElementById('btn...2').className = 'hidden';
    }
    document.getElementById('btn15').className = 'show';


    

    if(selectValue == 10){
        for (k = 1; k < 11 ; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
        for (k = 11; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }

        if(num<19){
        for (k = 1; k < 10 * (num - 1) + 1; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 10 * (num - 1) + 1; k < num * 10 + 1; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
        for (k = num * 10 + 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
    }

    // 버튼 관리 10개씩 볼때
    for (z = 6; z < 15; z++) {
        document.getElementById('btn' + z).className = 'hidden';
        //초기버튼 생성
    }
  
    if (buttonck > 3 && buttonck < 14) {
        for (z = 1; z < 16; z++) {
            document.getElementById('btn' + z).className = 'hidden';
        }
        for (z = buttonck - 2; z < buttonck + 3; z++) {
            document.getElementById('btn1').className = 'show';
            document.getElementById('btn' + z).className = 'show';
            document.getElementById('btn...2').className = 'show';
        }
        if(buttonck>12){
            document.getElementById('btn...').className = 'hidden';
        }
        else if(buttonck<13){
            document.getElementById('btn...').className = 'show';
        }
    }  
    if(buttonck<4){
        console.log(buttonck);
        document.getElementById('btn...2').className = 'hidden';
            for(z=1;z<5;z++){
                document.getElementById('btn' + z).className = 'show';
            }
        }
    if(buttonck==15 || buttonck==14){
        for(z=11;z<16;z++){
            document.getElementById('btn' + z).className = 'show';
        }
        for(z=2;z<6;z++){
            document.getElementById('btn' + z).className = 'hidden';
        }
        document.getElementById('btn...2').className = 'show';
        document.getElementById('btn...').className = 'hidden';
    }
    if(buttonck==1){
        for(z=1;z<6;z++){
            document.getElementById('btn' + z).className = 'show';
        }
        for(z=6;z<16;z++){
            document.getElementById('btn' + z).className = 'hidden';
        }
        document.getElementById('btn...').className = 'show';
        document.getElementById('btn...2').className = 'hidden';
    }
    document.getElementById('btn15').className = 'show';
    }


    if(selectValue == 15){
        for (k = 1; k < 16 ; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
        for (k = 16; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }

        if(num<19){
        for (k = 1; k < 15 * (num - 1) + 1; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
        for (k = 15 * (num - 1) + 1; k < num * 15 + 1; k++) {
            document.getElementById('row_1' + k).style.display = "";
            document.getElementById('row_2' + k).style.display = "";
            document.getElementById('row_3' + k).style.display = "";
        }
        for (k = num * 15 + 1; k < table.rows.length; k++) {
            document.getElementById('row_1' + k).style.display = "none";
            document.getElementById('row_2' + k).style.display = "none";
            document.getElementById('row_3' + k).style.display = "none";
        }
    }
}

}







// if (document.getElementById('btn1').onclick = function () {
//     for (k = 1; k < 6; k++) {
//         document.getElementById('row_1' + k).style.display = "";
//         document.getElementById('row_2' + k).style.display = "";
//         document.getElementById('row_3' + k).style.display = "";
//     }
//     for (k = 6; k < table.rows.length; k++) {
//         document.getElementById('row_1' + k).style.display = "none";
//         document.getElementById('row_2' + k).style.display = "none";
//         document.getElementById('row_3' + k).style.display = "none";
//     }
//     for(z=6; z<16; z++){
//         document.getElementById('btn'+z).className = 'hidden'; 
//     }
//     document.getElementById('btn1').className = 'show';
//     document.getElementById('btn2').className = 'show';
//     document.getElementById('btn3').className = 'show';
//     document.getElementById('btn4').className = 'show';
//     document.getElementById('btn5').className = 'show';
//     document.getElementById('btn...').className = 'show';
//     document.getElementById('btn...2').className = 'hidden';
//     document.getElementById('btn11').className = 'hidden';
//     document.getElementById('btn12').className = 'hidden';
//     document.getElementById('btn13').className = 'hidden';
//     document.getElementById('btn14').className = 'hidden';
//     document.getElementById('btn15').className = 'show';
// });
// if (document.getElementById('btn2').onclick = function () {
//     for (k = 1; k < 6; k++) {
//         document.getElementById('row_1' + k).style.display = "none";
//         document.getElementById('row_2' + k).style.display = "none";
//         document.getElementById('row_3' + k).style.display = "none";
//     }
//     for (k = 6; k < 11; k++) {
//         document.getElementById('row_1' + k).style.display = "";
//         document.getElementById('row_2' + k).style.display = "";
//         document.getElementById('row_3' + k).style.display = "";
//     }
//     for (k = 11; k < table.rows.length; k++) {
//         document.getElementById('row_1' + k).style.display = "none";
//         document.getElementById('row_2' + k).style.display = "none";
//         document.getElementById('row_3' + k).style.display = "none";
//     }
//     for(z=6; z<16; z++){
//         document.getElementById('btn'+z).className = 'hidden'; 
//     }
//     document.getElementById('btn...2').className = 'hidden';
//     document.getElementById('btn15').className = 'show';
//     document.getElementById('btn2').className = 'show';
//     document.getElementById('btn3').className = 'show';
//     document.getElementById('btn4').className = 'show';
//     document.getElementById('btn5').className = 'show';
// });

// if (document.getElementById('btn3').onclick = function () {
//     for (k = 1; k < 11; k++) {
//         document.getElementById('row_1' + k).style.display = "none";
//         document.getElementById('row_2' + k).style.display = "none";
//         document.getElementById('row_3' + k).style.display = "none";
//     }
//     for (k = 11; k < 16; k++) {
//         document.getElementById('row_1' + k).style.display = "";
//         document.getElementById('row_2' + k).style.display = "";
//         document.getElementById('row_3' + k).style.display = "";
//     }
//     for (k = 16; k < table.rows.length; k++) {
//         document.getElementById('row_1' + k).style.display = "none";
//         document.getElementById('row_2' + k).style.display = "none";
//         document.getElementById('row_3' + k).style.display = "none";
//     }
//     document.getElementById('btn1').className = 'show';
//     document.getElementById('btn2').className = 'show';
//     document.getElementById('btn6').className = 'hidden';
//     document.getElementById('btn7').className = 'hidden';
//     document.getElementById('btn...2').className = 'hidden';
// });

// if (document.getElementById('btn4').onclick = function () {
// for (k = 1; k < 16; k++) {
//     document.getElementById('row_1' + k).style.display = "none";
//     document.getElementById('row_2' + k).style.display = "none";
//     document.getElementById('row_3' + k).style.display = "none";
// }
// for (k = 16; k < 21; k++) {
//     document.getElementById('row_1' + k).style.display = "";
//     document.getElementById('row_2' + k).style.display = "";
//     document.getElementById('row_3' + k).style.display = "";
// }
// for (k = 21; k < table.rows.length; k++) {
//     document.getElementById('row_1' + k).style.display = "none";
//     document.getElementById('row_2' + k).style.display = "none";
//     document.getElementById('row_3' + k).style.display = "none";
// }   
// document.getElementById('btn1').className = 'show';
// document.getElementById('btn2').className = 'show';
// document.getElementById('btn...2').className = 'show';
// document.getElementById('btn6').className = 'show';
// document.getElementById('btn7').className = 'hidden';

// });
// for(k = 0 ; k<table.rows.length ; k++){
// arr[k]=cell1.innerHTML +',' + cell2.innerHTML +',' + cell3.innerHTML;    

// }
// 
// function test(value){
//     // var z=0;

//     // if(value == 1){

//     //     for(z=0;z<10;z++){
//     //         table.lastChild.remove();
//     //       }
//     // }
//     // if(value == 2){
//     //     create_table();
//     //     for(z=0;z<5;z++){
//     //         table.lastChild.remove();
//     //         table.firstChild.remove();
//     //       }
//     // }


// }
// $(document).ready(function() {
//     $('td').click(function(){
//         var tdindex = this.cellIndex+1;
//         var trindex = $('tr').index($(this).parent())+1;

//         alert("Row: "+trindex+" Column: "+tdindex);
//     });
// });
// var $setRows = $('#setRows');
