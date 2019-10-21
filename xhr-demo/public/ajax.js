function getPlayresWithCallBack(url, success, error) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function () {
        success(this.responseText);
    }
    xmlHttp.onerror = function () {
        error(this.status)
    }
    xmlHttp.open('GET', url);
    xmlHttp.send();
}

function getPlayersWithPromise(url) {
    var xmlHttp = new XMLHttpRequest();
    let promise = new Promise(function (resolve, reject) {
        xmlHttp.onload = function () {
            resolve(this.responseText);
        }
        xmlHttp.onerror = function () {
            reject(this.status);
        }
        xmlHttp.open('GET', url);
        xmlHttp.send();
    });
    return promise;
}

function getPlayersWithObservable(url) {
    let observable = Rx.Observable.create((observer) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onload = function () {
            observer.next(this.responseText)
        }
        xmlHttp.onerror = function () {
            observer.error(this.status)
        }
        xmlHttp.open('GET', url);
        xmlHttp.send();
    });

    return observable;
}

function loadPlayers() {

    function success(responseText) {
        document.write(responseText);
    }

    function error(status) {
        document.write(status);
    }

    //1. callback based
    //getPlayresWithCallBack('/api/players', success, error)

    //2. Promise based
    //getPlayersWithPromise('/api/players').then(success).catch(error);

    //3. Observable based
    getPlayersWithObservable('/api/players').subscribe(success, error);
}