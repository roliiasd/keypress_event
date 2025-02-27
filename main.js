window.addEventListener('DOMContentLoaded', () => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';
    demoSpan.classList.add('glow');

    const textarea = document.createElement('textarea');
    textarea.name = 'area';
    textarea.id = 'area';

    textarea.placeholder = 'Írd be a jelszavad: ';
    textarea.addEventListener('keyup', () => jelszo(textarea, demoSpan));

    containerDiv.append(demoSpan, textarea);
    document.body.append(containerDiv);


    console.log(containerDiv);
})

function jelszo(textarea, demoSpan) {
    let csillag = '';
    for (let i = 0; i < textarea.value.length; i++) {
        csillag += '*';

    }
    demoSpan.textContent = csillag;
}