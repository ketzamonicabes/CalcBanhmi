function calc(a,b,c,d){
    d.innerHTML = a + b + c;
}

function calcnho(n,o=document.getElementById('ji')){
    let a = +n;
    if (Number.isFinite(a)){
        o.innerHTML = (+n)*3;
        r1=(+n)*3;
    }
}
function calctrung(n,o=document.getElementById('ji')){
    let a = +n;
    if (Number.isFinite(a)){
        o.innerHTML = (+n)*4;
        r2=(+n)*4;
    }
}
function calclon(n,o=document.getElementById('ji'),d,r,k,l){
    let a = +n;
    if (Number.isFinite(a)){
        o.innerHTML = (+n)*7;
        r3= (+n)*7;
        r.insertBefore(l,k);
         calc(r1,r2,r3,d);
    }
}

function calcMoi(){
    return (+sumbanhra.innerHTML) - (+moi.innerHTML);
}
let resultsang = 0; /// biến an toàn của tổng sáng 

let r1,r2,r3;

let out1 = document.getElementById('compute-nho');
let out2 = document.getElementById('compute-trung');
let out3= document.getElementById('compute-lon');
let h = document.getElementById('sum-banhra');
let sumbanhra = document.getElementById('sum-banhra');
let right = document.getElementById('right1');
let line = document.createElement('hr');
document.getElementById('nho').addEventListener('input',() => calcnho(nho , out1));
document.getElementById('trung').addEventListener('input',() => calctrung(trung,out2));
document.getElementById('lon').addEventListener('input',() => calclon(lon,out3,sumbanhra,right,h,line));

let out4 = document.getElementById('compute-nho1');
let out5 = document.getElementById('compute-trung1');
let out6= document.getElementById('compute-lon1');
let h1 = document.getElementById('moi');
let moi = document.getElementById('moi');
let left = document.getElementById('right2');
let line1 = document.createElement('hr');
// minus moi
let moveMoi = document.getElementById('moi-minus');
let line2 = document.createElement('hr');
let moiminus = document.getElementById('moi-minus-result');
// hoai
let hoai = document.getElementById('hoai') // hoài

document.getElementById('nho1').addEventListener('input',() => {calcnho(nho1 , out4)
    hoai.innerHTML = r1/3;
});
document.getElementById('trung1').addEventListener('input',() => calctrung(trung1,out5));
document.getElementById('lon1').addEventListener('input',function(){calclon(lon1,out6,moi,left,h1,line1); 
    moveMoi.innerHTML = moi.innerHTML;
    right.insertBefore(line2,moiminus);
    moiminus.innerHTML = calcMoi();
    resultsang = (+moiminus.innerHTML); /// kết quả sau khi trừ mối string moiminus 
});


// bỏ minus
let boLon = document.getElementById('bo-lon');
let boMinus = document.getElementById('bo-minus');
let line3 = document.createElement('hr');
let afterBo = document.getElementById('afterbo')

function calcBo(a,b,c,d){
    f= boMinus.innerHTML= (+a)+(+b)+(+c);
    d.innerHTML = (+moiminus.innerHTML) -f;
    resultsang = (+afterBo.innerHTML);// kết quả sau khi trừ bỏ stirng afterBo
}

boLon.addEventListener('input',()=> {calcBo(bonho,botrung,bolon,afterBo);
    right.insertBefore(line3,afterBo);

})

//tinh dối chiếu 
let doichieu = document.getElementById('doichieu');
let chobo = document.getElementById('bo');

function calcdoichieu(a,b,c){
    chobo.innerHTML = bn;
    doichieu.innerHTML = (+a.innerHTML)+(+b)+(+c)+(+bn);
}

// trừ đào 
let daoguide = 0;
let daoLon = document.getElementById('daolon');
let daoMinus = document.getElementById('dao-minus');
let line4 = document.createElement('hr');
let afterDao = document.getElementById('afterdao');

function calcDao(a,b,c,d){
    f= daoMinus.innerHTML= (+a)+(+b)+(+c);
    d.innerHTML = (+afterBo.innerHTML) -f;
    resultsang = (+afterDao.innerHTML); //// kết quả sau khi trừ bỏ stirng afterDao
    daoguide = (+afterBo.innerHTML) -f
}

daoLon.addEventListener('input',()=> {calcDao(daonho,daotrung,daolon,afterDao);
    daogroup.insertBefore(line4,afterDao);
    tangDao();
})


let tang = document.getElementById('tangdao');
let tangdaoright = document.createElement('p');
let line8 = document.createElement('hr');
let daogroup = document.getElementById('daogroup');
let aftertangdao= document.createElement('p');
function tangDao(){
    if((+daotrung)>0){
        let calcdaotrung = Math.round((+dt)*0.5);
        tangdaoright.innerHTML=calcdaotrung;
        tang.style.fontWeight='700';
        tang.innerHTML='Tặng Đào';
        console.log(afterDao.innerHTML);
        aftertangdao.innerHTML= (+afterDao.innerHTML) - calcdaotrung;
        aftertangdao.style.fontWeight='700';
        daogroup.appendChild(tangdaoright);
        daogroup.appendChild(line8);
        daogroup.appendChild(aftertangdao);
        daoguide=(+afterDao.innerHTML) - calcdaotrung; 
        resultsang = daoguide;       /// trong trường hợp tặng đào cập nhật result sáng
        
    }
}


// trừ qua chiều 
let quachieutext = document.getElementById('text-2');
let quachieuLon = document.getElementById('quachieulon');
let quachieuMinus = document.getElementById('quachieu-minus');
let line5 = document.createElement('hr');
let afterQuachieu = document.getElementById('afterquachieu')

function calcQuachieu(a,b,c,d){
    f= quachieuMinus.innerHTML= (+a)+(+b)+(+c);
    d.innerHTML = daoguide -f; 
    resultsang = (+afterQuachieu.innerHTML);  /// cập nhật sau khi trừ qua chiều 
}

quachieuLon.addEventListener('input',()=> {calcQuachieu(quachieunho,quachieutrung,quachieulon,afterQuachieu);
    right.insertBefore(line5,afterQuachieu);

})

//khác 
let line7 = document.createElement('hr');
let khacMinus = document.getElementById('khac-minus');
let afterKhac = document.getElementById('afterkhac');



// chi tieu 
let soChitieu = document.getElementById('chitieu');   // input số lượng
let khungchieitieu = document.getElementById('small-4');

let arr = [];
let sumchitieu = 0;
const tongchitieu = document.createElement('p');
let line6 = document.createElement('hr');
tongchitieu.style.marginLeft = '80px';


function chitieu() {
  // dọn khung & mảng nếu sinh lại
  khungchieitieu.querySelectorAll('input.ct').forEach(el => el.remove());
  arr = [];

  const n = parseInt(soChitieu.value, 10) || 0;

  for (let i = 0; i < n; i++) {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.id = 'ct' + i;
    inp.className = 'ct';
    inp.style.display = 'block';
    inp.style.marginLeft = '80px';
    inp.style.width = '100px';

    // gắn event cho MỌI input
    inp.addEventListener('input', sumChitieu);

    khungchieitieu.appendChild(inp);
    arr.push(inp);
  }

  // tính lần đầu (nếu muốn)
  line6.style.display = 'block';
    line6.style.marginLeft = '80px';
    line6.style.width = '100px';
khungchieitieu.appendChild(line6);
  sumChitieu();
}

function sumChitieu() {
    khungchieitieu.appendChild(tongchitieu);
  sumchitieu = 0; // reset trước khi cộng lại
  const n = parseInt(soChitieu.value, 10) || 0;

  for (let i = 0; i < n; i++) {
    sumchitieu += (+arr[i]?.value || 0);  // ép số, rỗng coi như 0
  }

  tongchitieu.textContent = sumchitieu;   // dùng biến, không phải tên hàm
  tongchitieu.style.fontWeight='700';
}

// ketthuc
let afterSang = document.getElementById('aftersang');
let sumSang = 0;
let ket = document.getElementById('ket');
function ketthuc(){
    sumSang = resultsang - sumchitieu;
    afterSang.innerHTML = sumSang;
    let tong = tongthucte - sumSang;
    if (tong < 0){
        ket.innerHTML='Thiếu '+(tong*-1);
    }else if (tong > 0){
        ket.innerHTML='Dư '+tong;
    }else{
        ket.innerHTML='Great, enough';
    }
}

// chi tiêu chiều 
let tongcuoi = 0; /// biến dùng để tính cuối
let quachieuorbanhra = 0;
let chitieuchieuminus = document.getElementById('chitieuchieu-display');
let markchitieu = document.getElementById('markchitieu');

let soChitieuchieu = document.getElementById('chitieuchieu');   // input số lượng
let khungchieitieuchieu = document.getElementById('chieuright');

let arr1 = [];
let sumchitieuchieu = 0;
const tongchitieuchieu = document.createElement('p');
let line12 = document.createElement('hr');
tongchitieuchieu.style.marginLeft = '100px';


function chitieuchieu() {
  // dọn khung & mảng nếu sinh lại
  khungchieitieuchieu.querySelectorAll('input.ct').forEach(el => el.remove());
  arr1 = [];

  const v = parseInt(soChitieuchieu.value, 10) || 0;

  for (let i = 0; i < v; i++) {
    const inpc = document.createElement('input');
    inpc.type = 'text';
    inpc.id = 'ct' + i;
    inpc.className = 'ct';
    inpc.style.display = 'block';
    inpc.style.marginLeft = '80px';
    inpc.style.width = '100px';

    // gắn event cho MỌI input
    inpc.addEventListener('input', sumChitieuchieu);

    khungchieitieuchieu.appendChild(inpc);
    arr1.push(inpc);
  }

  // tính lần đầu (nếu muốn)
  line12.style.display = 'block';
    line12.style.marginLeft = '80px';
    line12.style.width = '100px';
khungchieitieuchieu.appendChild(line12);
  sumChitieuchieu();
}

function sumChitieuchieu() {
    khungchieitieuchieu.appendChild(tongchitieuchieu);
  sumchitieuchieu = 0; // reset trước khi cộng lại
  const v = parseInt(soChitieuchieu.value, 10) || 0;

  for (let i = 0; i < v; i++) {
    sumchitieuchieu += (+arr1[i]?.value || 0);  // ép số, rỗng coi như 0
  }

  tongchitieuchieu.textContent = sumchitieuchieu;   // dùng biến, không phải tên hàm
  tongchitieuchieu.style.fontWeight='700'; // tongchitieuchieu là string result tổng chi tiêu 

  displaychitieuchieu();

}


// tính chi tiêu 
let line13 = document.createElement('hr');
let afterchitieuchieu = document.getElementById('afterchitieuchieu');
function displaychitieuchieu(){
    
    chitieuchieuminus.innerHTML = tongchitieuchieu.innerHTML;
    chieuleftright.insertBefore(line13,afterchitieuchieu);
    afterchitieuchieu.innerHTML =  quachieuorbanhra-  (+tongchitieuchieu.innerHTML);// tổng sau chi tiêu dạng string afterchitieuchieu
    tongcuoi = (+afterchitieuchieu.innerHTML);
}

// khác chiều
let line14 = document.createElement('hr');
let khacMinuschieu = document.getElementById('khac-minus-chieu');
let afterKhacchieu = document.getElementById('afterkhac-chieu');



// tính dư hay thiếu 
let tongthuctechieu =document.getElementById('tongthuctechieu');
let chieuresult = document.getElementById('chieuresult');

function countthucte(){
    console.log(tongthuctechieu.value);
    let t = (+tongthuctechieu.value) + 500;

    let s = t - tongcuoi;
    if (s > 0){
        chieuresult.innerHTML='Dư '+s;
    }else if(s < 0){
        chieuresult.innerHTML='Thiếu '+(s*-1);
    }

    tongket(t);
}

let tongketall = document.getElementById('tongket');
function tongket(t){
    let endall = tongthucte + t + (+daoMinus.innerHTML);
    tongketall.innerHTML="=>"+endall;
}


window.addEventListener("load", () => {
  document.querySelectorAll("input").forEach(el => {
    el.setAttribute("autocomplete", "off");
  });
});




