document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementsByClassName('toc-button')[0];
    const box = document.getElementsByClassName('toc-list')[0];
    const btnn = document.getElementsByClassName('toc-button-n')[0];
    let showFlag = true;

    if (btn && box && btnn) {
        btn.addEventListener('click', function() {
            if (showFlag) {
                // 显示目录
                //box.style.display='block';
                box.style.bottom = '0px';
                box.style.transition = '0.5s';
                box.style.boxShadow = '0px -5px 10px rgba(0, 0, 0, 0.2)';
                btnn.setAttribute('d', 'M1 4 13 10 M1 10 13 4');
                showFlag = false;
            } else {
                // 隐藏目录
                //box.style.display='none';
                box.style.bottom = 'calc(-300px - 10px)';
                box.style.transition = '0.5s';
                box.style.boxShadow = 'none'; 
                btnn.setAttribute('d', 'M1 4 13 4 M1 7 13 7 M1 10 13 10');
                showFlag = true;
            }
        });
    }
});


/*

$(function(){
    $(".toc-button").click(function(){

        $(".toc-list").toggle(300);

    });
});


$(function(){
    $(".toc-button").click(function(){
        if ($(".toc-list") .is(':hidden')){

            $(".toc-list").show();
        } else {
            $(".toc-list").hide();
        }
    });
});

*/
