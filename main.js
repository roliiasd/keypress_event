const kodolas = [
    { name: "@-", value: "A" },
    { name: "@-%", value: "Á" },
    { name: "#-#", value: "B" },
    { name: "#@", value: "C" },
    { name: "#!@", value: "Cs" },
    { name: "#-@", value: "D" },
    { name: "@@", value: "E" },
    { name: "@@%", value: "É" },
    { name: "#-##", value: "F" },
    { name: "##-", value: "G" },
    { name: "#!##", value: "Gy" },
    { name: "###", value: "H" },
    { name: "@--", value: "I" },
    { name: "@--%", value: "Í" },
    { name: "#--", value: "J" },
    { name: "#-@#", value: "K" },
    { name: "#-#-", value: "L" },
    { name: "##@", value: "M" },
    { name: "##-@", value: "N" },
    { name: "#!@-", value: "Ny" },
    { name: "@-@", value: "O" },
    { name: "@-@%", value: "Ó" },
    { name: "@-@*", value: "Ö" },
    { name: "@-@%*", value: "Ő" },
    { name: "#-@@", value: "P" },
    { name: "##-#", value: "Q" },
    { name: "#-##-", value: "R" },
    { name: "###@", value: "S" },
    { name: "#!###", value: "Sz" },
    { name: "#-###", value: "T" },
    { name: "#!#-", value: "Ty" },
    { name: "@@@", value: "U" },
    { name: "@@@%", value: "Ú" },
    { name: "@@@*", value: "Ü" },
    { name: "@@@%*", value: "Ű" },
    { name: "##--", value: "V" },
    { name: "##-@#", value: "W" },
    { name: "#-@##", value: "X" },
    { name: "#-##@", value: "Y" },
    { name: "###-", value: "Z" },
    { name: "#!####", value: "Zs" }
];


window.addEventListener('DOMContentLoaded', () => {
    const kod = kodolas.name;
    const betu = kodolas.value;
    //console.log(kod, betu);
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';
    demoSpan.classList.add('glow');
    const demoSpan2 = document.createElement('span');
    demoSpan2.id = 'demo';
    demoSpan2.classList.add('glow');

    const textarea = document.createElement('textarea');
    textarea.name = 'area';
    textarea.id = 'area';

    const textarea2 = document.createElement('textarea');
    textarea2.name = 'area';
    textarea2.id = 'area';



    const img = document.createElement('img');
    img.src = 'question.png';
    img.alt = 'helper';
    img.id = 'helper';

    const modalDIV = document.createElement('div');
    modalDIV.classList.add('modal');
    modalDIV.id = 'modal';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalspan = document.createElement('span');
    modalspan.innerHTML = 
    'A jelszavak forditasahoz segitseg:<br>' +
    'A = @-,<br>' +
    'B = #-,<br>' +
    'C = #@,<br>' + 
    'Cs = #!@,<br>' + 
    'D = #-@,<br>' +
    'E = @@,<br>' +
    'É = @@%,<br>' +
    'F = #-##,<br>' +
    'G = ##-,<br>' +
    'Gy = #!##,<br>' +
    'H = ###,<br>' +
    'I = @--,<br>' +
    'Í = @--%,<br>' +
    'J = #--,<br>' +
    'K = #-@#,<br>' +
    'L = #-#-,<br>' +
    'M = ##@,<br>' +
    'N = ##-@,<br>' +
    'Ny = #!@-,<br>' +
    'O = @-@,<br>' +
    'Ó = @-@%,<br>' +
    'Ö = @-@*,<br>' +
    'Ő = @-@%*,<br>' +
    'P = #-@@,<br>' +
    'Q = ##-#,<br>' +
    'R = #-##-,<br>' +
    'S = ###@,<br>' +
    'Sz = #!###,<br>' +
    'T = #-###,<br>' +
    'Ty = #!#-,<br>' +
    'U = @@@,<br>' +
    'Ú = @@@%,<br>' +
    'Ü = @@@*,<br>' +
    'Ű = @@@%*,<br>' +
    'V = ##--,<br>' +
    'W = ##-@#,<br>' +
    'X = #-@##,<br>' +
    'Y = #-##@,<br>' +
    'Z = ###-,<br>' +
    'Zs = #!####';

            modalContent.append(modalspan);
            modalDIV.append(modalContent);
            textarea.placeholder = 'Írd be a jelszavad: ';
            textarea.addEventListener('keyup', () => jelszo(textarea, demoSpan, kod, betu));
            textarea2.addEventListener('keyup', () => visszafejt(textarea2, demoSpan2, kod, betu));


            img.addEventListener('click', () => {
                modalDIV.style.display = 'block';
                window.onclick = function (event) {
                    if (event.target == modalDIV) {
                        modalDIV.style.display = 'none';
                    }
                }
            });



            containerDiv.append(demoSpan, demoSpan2, textarea, textarea2, img, modalDIV);
            document.body.append(containerDiv);


            //console.log(containerDiv);
        })

    function jelszo(textarea, demoSpan, kod, betu) {
        let kodoltUzenet = '';
        for (let i = 0; i < textarea.value.length; i++) {
            const betu = textarea.value[i].toUpperCase();

            const kodasd = kodolas.find((item) => item.value === betu);
            if (kodasd) {
                kodoltUzenet += ` ${kodasd.name}`;
            } else {
                kodoltUzenet += ` ${betu}`;
            }

        }
        demoSpan.textContent = ` ${kodoltUzenet}`;
    }

    function visszafejt(textarea2, demoSpan2, kod, betu) {
        let kodoltUzenet = '';
        let kodok = textarea2.value.split(" "); // A kódokat szóközök választják el

        for (let kod of kodok) {
            const betu = kodolas.find((item) => item.name === kod);
            if (betu) {
                kodoltUzenet += ` ${betu.value}`; // Ha van kód, hozzáadjuk a megfelelő betűt
            } else {
                kodoltUzenet += ` ${kod}`; // Ha nincs megfejtés, marad a kód
            }
        }

        demoSpan2.textContent = ` ${kodoltUzenet}`;
    }
