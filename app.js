document.getElementById('kgInput').addEventListener('input', function(e){
    let kg = e.target.value;
    document.getElementById('poundOutput').innerHTML = kg*2.20462262;
    document.getElementById('dyneOutput').innerHTML = kg*980665;
    document.getElementById('ozOutput').innerHTML = kg*35.273962;
})


// https://github.com/Git-Commit-Show/100-Days-of-Code/compare/main...YashTygi:demo