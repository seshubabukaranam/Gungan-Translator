

var txtInput = document.querySelector("#txt-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/gungan.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() 
{
    

    if(txtInput.value <= 0)
     {
       alert("Please enter text");
     }
    else
    {
        var inputText = txtInput.value; // taking input

        // calling server for processing
        fetch(getTranslationURL(inputText))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText; // output
               })
            .catch(errorHandler)
    }

    };

btnTranslate.addEventListener("click", clickHandler)