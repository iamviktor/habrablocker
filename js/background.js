(function ()
{

function readProperty(property, defaultValue)
{
    if(localStorage[property] == null)
    {
        return defaultValue;
    }
    return localStorage[property];
}

function processRequest(request, sender, sendResponse)
{
//    console.log(request);
//    console.log(sender);
    switch (request.method)
    {
        case 'init':
            if (sender.tab.url.indexOf('habrahabr.ru') > -1)
            {
                chrome.pageAction.show(sender.tab.id);
                if (readProperty('enabled', '1') == '0')
                {
                    sendResponse({"response": "disabled"});
                }
                sendResponse({"response": "done"});
            }
            else
            {
                sendResponse({"response": "failed"});
            }
            break;
        default:
            console.log('ERROR: Invalid Request - ' + request.method); 
    }
    return;
}

chrome.extension.onRequest.addListener(processRequest);

})();
