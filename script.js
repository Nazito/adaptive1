var showServisMenu = document.getElementById("touch-servis-menu");
showServisMenu.addEventListener('click', servisMenu);

var stateServisMenu = false

function servisMenu(){
    stateServisMenu = !stateServisMenu;
    if(stateServisMenu){
        document.getElementById('servis-menu').style.display = "block";
    }
    else if(!stateServisMenu){
        document.getElementById('servis-menu').style.display = "none";
    }

}

var rangeMenu = document.getElementsByClassName("range-menu__adaptive-colum_items");
for(var i = 0;i < rangeMenu.length; i++ ){
    rangeMenu[i].addEventListener('click', activatedBorderStyleRangeMenu);
}

function activatedBorderStyleRangeMenu(){
    
    for(var i = 0;i < rangeMenu.length; i++ ){
        rangeMenu[i].setAttribute("class", "range-menu__adaptive-colum_items")
    } 

    if(event.target.getAttribute('class') === "range-menu__adaptive-colum_items"){
        event.target.classList.add("acivated-border");
        }
}

var showRangeMenu = document.getElementById("range-menu_text-style");
showRangeMenu.addEventListener('click', RangeMenu);

var stateRangeMenu = false

function RangeMenu(){
    stateRangeMenu = !stateRangeMenu;
    if(stateRangeMenu){
        document.getElementById('range-menu').style.display = "block";
    }
    else if(!stateRangeMenu){
        document.getElementById('range-menu').style.display = "none";
    }

}

var saleCategoriesStyle = document.getElementsByClassName("sales-categories__items");
for(var i = 0;i < saleCategoriesStyle.length; i++ ){
    saleCategoriesStyle[i].addEventListener('click', saleCategoriesBoldStyle);
}

function saleCategoriesBoldStyle(){
    for(var i = 0;i < saleCategoriesStyle.length; i++ ){
        saleCategoriesStyle[i].setAttribute("class", "sales-categories__items")
    } 

    if(event.target.getAttribute('class') === "sales-categories__items"){
        event.target.classList.add("bold-style");
    }
}

var activeSelfy =  document.querySelectorAll("div.social-content_user");
for(var i = 0;i < activeSelfy.length; i++ ){
    activeSelfy[i].addEventListener('click', activeOpasitySelfi);
}

var userComments = [{name:"Cristofer Atkins",comment:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi adipisci tempore sapiente exercitationem, quaerat eaque dolore dolorem repellat quia, magnam facilis illo corporis earum, non modi consequatur id repellendus? Maiores unde consectetur doloremque impedit ea placeat odit, asperiores similique mollitia atque ad. Adipisci deleniti minus placeat. Quaerat, repellendus qui perferendis quo temporibus, itaque quidem odit ipsam, odio commodi nisi non sint asperiores nam nihil. Error quasi tenetur molestiae deleniti sed impedit voluptatibus repellendus quas nostrum nam beatae facilis placeat est illo aperiam, amet similique voluptate dolores harum dolore. Cumque, id ab similique nemo, provident necessitatibus eveniet laboriosam voluptatibus temporibus doloribus nam fuga optio quo dolorem laudantium ullam aliquam ea repudiandae et tempore minus vel qui. Fugit vitae dolores at! Aspernatur quas sint expedita possimus pariatur laudantium ex officia, totam exercitationem impedit, tenetur commodi odio ipsum corporis, consequuntur quia non deleniti tempora blanditiis voluptas. Enim possimus veritatis eaque dolore ipsam aperiam dicta consequatur voluptas nulla recusandae veniam necessitatibus eos, sit nam tempore aspernatur! Possimus autem quod placeat blanditiis quis iste qui neque corrupti suscipit quam quibusdam veritatis perspiciatis ipsum nostrum aliquam, sit officia dolore magnam ratione unde natus delectus! Provident nihil ratione aperiam maxime eligendi odit consectetur numquam commodi, rerum voluptates itaque exercitationem necessitatibus dolorem voluptas saepe non expedita quis, error assumenda, temporibus quaerat porro? Asperiores rerum itaque culpa accusantium quo saepe molestiae expedita dolore qui, natus exercitationem autem amet ea, alias recusandae vitae eum illum fugiat praesentium perferendis provident voluptatem. Beatae officiis laborum maiores qui quam facere! Quo suscipit harum quaerat itaque eligendi voluptatem aut enim autem quisquam distinctio quam fugiat est illum tempore hic impedit atque, alias, odio asperiores rem provident cupiditate assumenda perspiciatis. Officiis tempora quia hic eum optio cumque porro molestias voluptates facere obcaecati commodi exercitationem maiores voluptatum, nostrum illo minus! Architecto illo unde ad ducimus distinctio."},
                    {name:"Andrew Ferracioli",comment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quidem asperiores! Voluptatum, ut laudantium repellat ab possimus quo iste accusantium quibusdam nisi sit, quia nemo voluptatibus aperiam minus, animi fugit."},
                    {name:"Sandra Jansen",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis."}
                ];


function activeOpasitySelfi(event){
    for(var i = 0;i < activeSelfy.length; i++ ){
        activeSelfy[i].setAttribute("class", "social-content_user");
    } 

    var elem = event.target.closest('.social-content_user')

    if(elem){
        elem.classList.add("active-selfy");
        elem.classList.add("active-pointer");   
    }

    var p = document.getElementById("showComments")

    for(var i = 0; i < userComments.length; i++){
        if(elem.getAttribute('id') === userComments[i]['name']){
            p.innerHTML = userComments[i]['comment']
        }
    }

    
}