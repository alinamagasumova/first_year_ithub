let table = document.body.firstElementChild.firstElementChild;
if (table.hasChildNodes()) {
    console.log(table.firstChild.nodeName);
}
let count = 3;
while(count--) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let n = 5;
    while(n--) {
    if (count === 2 ) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.innerText = 'capt' + n;
    } else {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = n;
    }
    }
}
