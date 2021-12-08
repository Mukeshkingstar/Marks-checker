function mark() {
   let eng = document.getElementById("eng").value;
     let  hind = document.getElementById("hind").value;
       let math  = document.getElementById("math").value;
         let mara = document.getElementById("mara").value;
    let totalmarks = parseFloat(eng) + parseFloat(hind) + parseFloat(math) + 
    parseFloat(mara);
    document.getElementById("result").innerHTML = (totalmarks) 
}
