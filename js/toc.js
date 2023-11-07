const btn=document.getElementsByClassName('toc-button')[0];
const box=document.getElementsByClassName('toc-list')[0];
let showFlag=true;
btn.addEventListener('click',function(){
    if(showFlag){
        box.style.display='block';
        showFlag=false;
    }else{
        box.style.display='none';
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