<script>
			$(".toc").hide()
			$(".toc-button").click(function(){
				$(".toc").fadeToggle()
			})
</script>


let nav-icon = document.querySelector("#toc-button");
nav-icon.addEventListener("click",function(){
    if( nav-icon.classList.contains("active")){
        nav-icon.classList.remove("active");
    }else{
        nav-icon.classList.add("active");
    }
});