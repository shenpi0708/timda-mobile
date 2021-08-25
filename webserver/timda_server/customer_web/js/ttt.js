
function aaa(){
    
        //建立DIV
        var fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        //建立按鈕
        var btn1 = document.createElement('aaa');
        btn1.textContent = '+';
        var btn2 = document.createElement('bbb');
        btn2.textContent = '-';
        fileItem.appendChild(btn1);
        fileItem.appendChild(btn2);
        $('file-box').appendChild(fileItem);
        
        //為按鈕設定點選事件(刪除)
        btn1.addEventListener('click',function(){
            //刪除當前按鈕節點所在父節點
    //					$('file-box').removeChild(this.parentNode);
            this.parentNode.remove();
        })
}
function $(id){
    return document.getElementById(id);
}
