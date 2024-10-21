(function (global) {
    var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','t','v','w','x','y','z','bl','br','ch','ck','cl','cr','dr','fl','fr','gl','gr','kl','kr','pl','pr','sch','sh','shr','sl','st','sz','tch','th','thr','tr','ts','vl','vr','wr'];
    var consonants_nolast = ['qu','bl','br','cl','cr','dr','fl','fr','gl','gr','kl','kr','pl','pr','shr','sl','thr','tr','vr','wr']
    var vowels = ['a','e','i','o','u','y','ae','ee','ie','ei','ea','ou','oo','ai','ey','ao','ay','oy','aa','oi','eu'];
    var wordElement = document.querySelector("#word");
    var numberInput = document.querySelector("#numberBox");

    function getConsonant(){
        var i = Math.floor(Math.random()*consonants.length);
        return consonants[i];
    }
    
    function getConsonantNoLast(){
        var i = Math.floor(Math.random()*consonants_nolast.length);
        return consonants_nolast[i];
    }
    
    function getVowel(){
        var i = Math.floor(Math.random()*vowels.length);
        return vowels[i];
    }
    
    function makeWord (length){
        var result = "";
        for (var i = 0; i < length; i++) {
            if(i%2 == 0 && i != length){
                //even
                result = result + getConsonant();
            }
            if(i%2 == 0 && i == length){
                getConsonantNoLast();
            }
            else{
                //odd
                result = result + getVowel();
            }
        }
        return result;
    }
    function displayWord(word){
        wordElement.innerText = word;
    }
    global.buttonClick = function(){
        var length = numberInput.value;
        var word = makeWord(length);
        displayWord(word);
    }
})(this);