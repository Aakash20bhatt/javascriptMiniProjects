
let textBox = document.getElementById('textbox');

textBox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;

    let words = text.split(" ");
    document.getElementById('word').innerHTML = words.length;   
})