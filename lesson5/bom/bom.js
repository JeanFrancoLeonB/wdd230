const input = document.querySelector('input');
        const button = document.querySelector('button');
        const list = document.querySelector('.list');
        const main = document.querySelector('main');
        const p = document.createElement('p');

        button.addEventListener('click', function() {
            let userInput =  input.value;

            if (userInput == ""){
                p.textContent ='Please enter a Book of Mormon chapter.';
                main.appendChild(p);
                p.style.display = 'block';
        }
            
            else {    
                const listItem = document.createElement('li');
                const deleteBtn = document.createElement('button');
                listItem.textContent = userInput;
                deleteBtn.textContent = "\u274C";
                listItem.appendChild(deleteBtn);
                list.appendChild(listItem);
                console.log(p);
                p.style.display = 'none';
                deleteBtn.addEventListener('click',function() {
                list.removeChild(listItem)
                input.focus();    
            })
            }
        input.focus();
        input.value = "";
         })
