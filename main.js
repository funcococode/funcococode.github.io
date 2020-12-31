const keyup = document.querySelector("#keyup");
const keypress = document.querySelector("#keypress");
const keydown = document.querySelector("#keydown");
const keyInput = document.querySelector("#keyInput")

const infoChar = document.querySelector("#character");
const infoKeyup = document.querySelector("#infoKeyup");
const infoKeydown = document.querySelector("#infoKeydown");
const infoKeypress = document.querySelector("#infoKeypress");

const reset = document.querySelector("#resetBtn");

addEventListener("keypress", (e) => {
    keypress.innerHTML = `${e.keyCode}`;
    infoChar.innerHTML = `Character : ${e.code}`;
    infoKeypress.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})

addEventListener("keyup", (e) => {
    keyup.innerHTML = `${e.keyCode}`;
    infoKeyup.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})
addEventListener("keydown", (e) => {

    keydown.innerHTML = `${e.keyCode}`;
    infoKeydown.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})



keyInput.addEventListener("keypress", (e) => {
    keypress.innerHTML = `${e.keyCode}`;
    infoChar.innerHTML = `Character : ${e.code}`;
    infoKeypress.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})

keyInput.addEventListener("keyup", (e) => {
    keyup.innerHTML = `${e.keyCode}`;
    infoKeyup.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})
keyInput.addEventListener("keydown", (e) => {

    keydown.innerHTML = `${e.keyCode}`;
    infoKeydown.innerHTML = `
                    <br>Shift Key : <span style="color:${(e.shiftKey)?'green':'red'};text-transform:capitalize"> ${e.shiftKey} </span>
                    <br>Ctrl Key : <span style="color:${(e.ctrlKey)?'green':'red'};text-transform:capitalize">${e.ctrlKey}</span>
                    <br>Alt Key : <span style="color:${(e.altKey)?'green':'red'};text-transform:capitalize">${e.altKey}</span>
                    <br>Meta Key : <span style="color:${(e.metaKey)?'green':'red'};text-transform:capitalize">${e.metaKey}</span>
                    `
})



reset.addEventListener("click", (e) => {
    keyup.innerHTML = keydown.innerHTML = keypress.innerHTML = "code";
    infoKeyup.innerHTML = infoKeydown.innerHTML = infoKeypress.innerHTML = "";
    infoChar.innerHTML = ""
    keyInput.value = ""
})