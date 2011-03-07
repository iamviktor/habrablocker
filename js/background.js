(function () {

function processRequest(request, sender, sendResponse) {
    console.log(request);
    console.log(sender);
    switch (request.method) {
        case 'init':
            if (sender.tab.url.indexOf('habrahabr.ru') > -1) {
                chrome.pageAction.show(sender.tab.id);
                sendResponse({"response": "done"});
            }
            else {
                sendResponse({"response": "failed"});
            }
            break;
        default:
            console.log('ERROR: Invalid Request - ' + request.method); 
    }
    return;
}

chrome.extension.onRequest.addListener(processRequest);

console.log('started.');

})();
