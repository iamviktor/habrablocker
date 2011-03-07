function readProperty(property, defaultValue)
{
    if(localStorage[property] == null)
    {
        return defaultValue;
    }
    return localStorage[property];
}

function page_reload()
{
    document.location.reload(true);
}

function switcher(command)
{
    chrome.tabs.getSelected(null, function(tab)
                {
                    chrome.tabs.sendRequest(tab.id, {method: "pagereload"});
                });
    switch (command)
    {
        case 'on':
            if (readProperty('enabled', '0') == '0')
            {
                localStorage['enabled'] = '1';
                chrome.tabs.getSelected(null, function(tab)
                {
                    chrome.tabs.sendRequest(tab.id, {method: "pagereload"});
                }
                );
                window.close();
            }
            else
            {
                localStorage['enabled'] = '1';
            }
            break;
        case 'off':
            if (readProperty('enabled', '1') == '1')
            {
                localStorage['enabled'] = '0';
                chrome.tabs.getSelected(null, function(tab)
                {
                    chrome.tabs.sendRequest(tab.id, {method: "pagereload"});
                }
                );
                window.close();
            }
            else
            {
                localStorage['enabled'] = '0';
            }
            break;
    }
}

(function ()
{
    if (readProperty('enabled', '1') == '1')
    {
        document.getElementById('switch-on').checked = true;
        
    }
    else
    {
        document.getElementById('switch-off').checked = true;
    }
})();