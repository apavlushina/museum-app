function submitComment () {
    let inputField = document.getElementById('name');
    let name = inputField.value;
    let textArea = document.getElementById('msg');
    let msg = textArea.value;
    let comment = document.createElement('section');
    let h3 = document.createElement('h3');
    let paragraph = document.createElement('p');

    h3.textContent = `${name} said:`;
    paragraph.textContent = `${msg}`;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(paragraph);


    console.log(comment);
}