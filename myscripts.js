var s="";
var ele=document.getElementsByClassName("btn");
// console.log(ele);

function evaluat(x){
    let str=ele[x].value;
    s=s+str;
    console.log(s);
    document.getElementById("ans").innerHTML=s;
}

function clearr(){
    s=""; let x="0";
    console.log('clear string',s,'ok');
    document.getElementById("ans").innerHTML=x;
}

function equalto(){
    let res=eval(s);
    console.log(res);
    let a= s+' =  '+res;
    document.getElementById("ans").innerHTML=a;
}

function backspace(){
    s=s.slice(0,-1);
    document.getElementById("ans").innerHTML=s;
}