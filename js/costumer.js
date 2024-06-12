var login = document.getElementById('login');
var info = document.getElementById('info');
var hist = document.getElementById('history');
var comm = document.getElementById('comment');

//顯示畫面切換
function loginchange() {
    login.style.display="block";
    if(info.style.display!="none")
        info.style.display="none";
    if(hist.style.display!="none")
        hist.style.display="none";
    if(comm.style.display!="none")
        comm.style.display="none";
}

function infochange() {
    info.style.display="block";
    if(login.style.display!="none")
        login.style.display="none";
    if(hist.style.display!="none")
        hist.style.display="none";
    if(comm.style.display!="none")
        comm.style.display="none";
}

function histchange() {
    hist.style.display="block";
    if(login.style.display!="none")
        login.style.display="none";
    if(info.style.display!="none")
        info.style.display="none";
    if(comm.style.display!="none")
        comm.style.display="none";
}

function commchange() {
    comm.style.display="block";
    if(login.style.display!="none")
        login.style.display="none";
    if(info.style.display!="none")
        info.style.display="none";
    if(hist.style.display!="none")
        hist.style.display="none";
}