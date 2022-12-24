

export async function getImage(term) {
    try {
        var url = `http://images.search.yahoo.com/search/images;_ylt=Awr923H5hqRj8poaLCOLuLkF;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X0kDZDFHMDBERXlOeTVWbUlzeFlvNXlzQURkTW1Fd05nQUFBQUE4aWtrWQRfUwM5NjA1NzQ4MwRfcgMyBGNzcmNwdmlkA2QxRzAwREV5Tnk1Vm1Jc3hZbzV5c0FEZE1tRXdOZ0FBQUFBOGlra1kEZnIDBGZyMgNzYi10b3AEZ3ByaWQDBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNpbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMwRxdWVyeQNjYXQEdF9zdG1wAzE2NzE3MjY4NDQEdnRlc3RpZANTWUMyNDcyNUM-?p=${term}&ei=&iscqry=&fr=&fr2=sb-top`;
        var resp = await fetch(url);
        var html = await resp.text();
        var target = "resitem-0"; 
        var li = html.split(target)[1];
        var datasource = li.split("data-src='")[1];
        var finalsplit = datasource.split("'")[0];
        return finalsplit;
    } catch (error) {
        console.log(error);
        return "./images/error.jpg";
    }   
    
}

	









