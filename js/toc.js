const btn=document.getElementsByClassName('toc-button')[0];
const box=document.getElementsByClassName('toc-list')[0];
const btnn=document.getElementsByClassName('toc-button-n')[0];
let showFlag=true;
btn.addEventListener('click',function(){
    if(showFlag){
        //box.style.display='block';
        box.style.bottom='0px';
        box.style.transition='0.5s';
        btnn.style.d='path("M1 4 13 10 M1 10 13 4")'
        showFlag=false;
    }else{
        //box.style.display='none';
        box.style.bottom='calc(-200px - 10px)';
        box.style.transition='0.5s';
        btnn.style.d='path("M1 4 13 4 M1 7 13 7 M1 10 13 10")'
        showFlag=true;
    }
})




/*

$(function(){
    $(".toc-button").click(function(){

        $(".toc-list").toggle(200);

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