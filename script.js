
const listHolder= document.querySelector('#listHolder');
const listButton = document.querySelector('#ListButton');

listButton.addEventListener('click', () => {
    if (listHolder.style.display === "none") {
        listHolder.style.display = "block";
      } else {
        listHolder.style.display = "none";
      }
    });

listButton.addEventListener('click', () => {
if(listHolder.style.display === "block"){
    listButton.innerText = "Hide Items";
}else if (listHolder.style.display === "none")
        listButton.innerText = "Show  Items";
});



const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('.addButton');


button.addEventListener('click', () => {
const myItem = input.value;

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
     });
});

