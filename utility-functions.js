export const createOptionElement = (val,txt,appendTo=null) => {
    const option = document.createElement('option');
    option.value = val;
    option.text = txt;

    if(appendTo) 
        document.querySelector(appendTo).appendChild(option);
    else
        return option;
};