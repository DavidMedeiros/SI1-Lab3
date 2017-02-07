function restoreSettings(){
    $('body').css({"background":"#ffffff"});
    $('*').css({"font-size":"14px"});
}

function changeSizeFont(option){
    if(option == 'plus'){
        $('*').css({"font-size":"20px"});
    }
    if(option == 'minus'){
        $('*').css({"font-size":"12px"});
    }
}

function addInput(){
    var divConteudo = $('#boxInput');
    var conteudoHTML = '<input name="listaSubTarefas" th:value="${task.listaSubTarefas}" class="form-control input-sub" id="listaSubTarefas" placeholder="Insira uma subtarefa"/>';
                  
    $(conteudoHTML).appendTo(divConteudo);
}

function changeBackGroundColour(){
    $('body').css("background-color","#cfd8dc");  
}




