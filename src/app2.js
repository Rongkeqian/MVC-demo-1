import "./app2.css"
import $ from "jquery"

//第二部分
const html =`
<section id="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`
const  $element = $(html).appendTo($('body>.page'))
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) ?? 0
$tabBar.on("click", 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index();
    localStorage.setItem(localKey,index)
    $tabContent.children()
                .eq(index)
                .addClass("active")
                .siblings()
                .removeClass("active")//不要用show(),hide(),css();  这三个api
    //样式与行为分离的思想

})
$tabBar.children().eq(index).trigger("click")