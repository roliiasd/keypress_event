window.addEventListener('DOMContentLoaded', ()=>{
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';

    const textarea = document.createElement('textarea');
    textarea.name = 'area';
    textarea.id = 'area';

    textarea.placeholder = 'Írd be a jelszavad: ';


    containerDiv.append(demoSpan, textarea);
    document.body.append(containerDiv);


    console.log(containerDiv);
})