function insert(num){
    $('.display').val($('.display').val() + num)
}

function equation(){
    $('.display').val(eval($('.display').val()))
}