'use strict'


function passAllValidation (msg, name) {
    if (msg || name) {
        if (msg.length < 280) {
            return true
        } else {
            alert('You message is too long!');
        }
    } else {
        return alert('You forgot to fill in your name or message!');
    }
}


function submitComment() {
const inputField = document.getElementById('name');
const name = inputField.value;
const textArea = document.getElementById('msg');
const msg = textArea.value;
const comment = document.createElement('section');
const h3 = document.createElement('h3');
const paragraph = document.createElement('p');

    if (passAllValidation (msg, name)) {
            h3.textContent = `${name} said:`;
            paragraph.textContent = `"${msg}"`;
            comment.classList.add('comment');
            comment.appendChild(h3);
            comment.appendChild(paragraph);

            let commentSection = document.getElementById('comments');
            commentSection.appendChild(comment);

            inputField.value = null;
            textArea.value = null;
    } 
}






//     if (msg || name) {
//         if (msg.length < 280) {
//             h3.textContent = `${name} said:`;
//             paragraph.textContent = `"${msg}"`;
//             comment.classList.add('comment');
//             comment.appendChild(h3);
//             comment.appendChild(paragraph);

//             commentSection = document.getElementById('comments');
//             commentSection.appendChild(comment)

//             inputField.value = null;
//             textArea.value = null;
//         } else {
//             alert('You message is too long!');
//         }

//     } else {
//         return alert('You forgot to fill in your name or message!');
//     }
// }
