//Send comment
function send() {
    //convert to base64
    document.getElementById('msgTitle').value = btoa(document.getElementById('msgTitle').value);
    document.getElementById('msgName').value = btoa(document.getElementById('msgName').value);
    document.getElementById('msgContent').value = btoa(document.getElementById('msgContent').value);
    //submit
    document.getElementById('msgForm').submit();
    //convert back to text
    document.getElementById('msgTitle').value = atob(document.getElementById('msgTitle').value);
    document.getElementById('msgName').value = atob(document.getElementById('msgName').value);
    document.getElementById('msgContent').value = atob(document.getElementById('msgContent').value);
}