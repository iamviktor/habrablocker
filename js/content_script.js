chrome.extension.sendRequest({"method": "init"}, processResponse);

function processResponse(response)
{
    //console.log(response);
    if (response.response == 'done')
    {
        processPage();
    }
    else if (response.response == 'disabled')
    {
        var sb = document.getElementById('sidebar');
        sb.style.display = 'block';
        var comments = document.getElementById('comments');
        comments.style.display = 'block';
        return;
    }
    else if (response.response == 'failed')
    {
        return;
    }
}


function processPage()
{
    var sb = document.getElementById('sidebar');
    sb.style.display = 'none';
    //sb.innerHTML = "";
}

function processRequest(request, sender, sendResponse)
{
    switch (request.method)
    {
        case 'pagereload':
            document.location.reload(true);
            break;
    }
    
}

chrome.extension.onRequest.addListener(processRequest);