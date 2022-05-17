let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let finalbmi = (weight/(height*height)*10000).toFixed(2);
    document.getElementById('bmioutput').value = finalbmi;
})
