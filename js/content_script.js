var storageEnabled = window.localStorage != null;

chrome.extension.sendRequest({"method": "init"}, processResponse);


function processResponse(response)
{
    console.log(response);
    if (response.response == 'done') {
        processPage();
    }
    else if (response.response == 'failed') {
        return;
    }
}

function processPage() {
    var sb = document.getElementById('sidebar');
    //sb.style.display = 'block';
    var len = sb.childNodes.length - 1;
    for(var i = len; i > 0; i--)
    {
        sb.removeChild(sb.childNodes[i]);
    }
    
}
