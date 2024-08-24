let boxContent = document.getElementById('input')

document.getElementById('btn').addEventListener('click' , () =>{
if (boxContent.value !== ''){
    let liTag = document.createElement('li')
    liTag.innerHTML = boxContent.value + '<span onclick="deleteFunc(this)" class="material-symbols-outlined">\n' +
        'delete\n' +
        '</span>';

    document.getElementById('list').appendChild(liTag)
    liTag.classList.add('line')
    boxContent.value = '';
    boxContent.focus();
}else{
    alert("موردی برای اضافه کردن وجود ندارد")
}
})
function deleteFunc (line) {
    line.parentElement.remove();
}