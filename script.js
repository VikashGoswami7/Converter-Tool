function convertText(){
    let inputText = document.getElementById('input').value;
    let textLines = inputText.split('\n');
    const array = textLines.map(textLines => textLines.trim()).join(',');

    let outputText = document.getElementById('output');
    outputText.textContent = array;
}

// convertText();





// let arr =["hey","hello","hii"];

// var data = arr.join(",");

// console.log(data);


