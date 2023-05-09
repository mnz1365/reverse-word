
var text = "my name is mnz";
var reverse = "";
var word = "";

text = text.split(" ");
for(var i = 0;i<text.length;i++){
    word = text[i];
    word = word.split("");
    for(var j = 0;j<word.length;j++){
        reverse += word[[word.length-j]-1];

    }
    if(i < text.length){
        reverse += " ";
    }
}



console.log(reverse);