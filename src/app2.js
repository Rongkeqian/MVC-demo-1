import "./app2.css"
import  $ from "jquery"

//第二部分
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
$tabBar.on("click",'li',(e)=>{
    const $li = $(e.currentTarget)
    $li.addClass("selected").siblings().removeClass("selected")
    const index = $li.index();
    $tabContent.children()
        .eq(index).addClass("active")
        .siblings().removeClass("active")//不要用show(),hide(),css();  这三个api
    //样式与行为分离的思想

})
$tabBar.children().eq(0).trigger("click")