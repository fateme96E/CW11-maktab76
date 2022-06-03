//1 clear after 2seconds
function firstQuestion(){
    function clear(elem) {
        setTimeout(() =>{
            elem.innerHTML = "";
            console.log(`after 2 seconds: ${elem.innerHTML}`);
        },2000)
    }
    
    const elem = document.getElementById("elem");
    console.log(`before: ${elem.innerHTML}`);
    clear(elem);
}






// 2-Make a simple page with a button and do the following in order
// The body color of the screen changed to gray
// Write a function that takes the page address by clicking the 
// button and adds it to the end of the contact us and changes the page 
// address to the new address
// Creates a function called addElement Make
// a paragraph and add it to the page ‌body with paragraph orders
// Add Hi Javascript text inside div with DOM orders
// create table to body by DOM

const btn = document.getElementById("btn");
btn.onclick = function() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = 'silver';
    let url = document.URL;
    let link = document.createElement("a");
    let newLink = document.getElementById("changeLink");
    link.href = url+"/contactus";
    link.innerHTML = "Contact Us";
    newLink.appendChild(link);
    console.log(link);
}

function showPar() {
    //add paragraph
    const par = document.createElement('p');
    par.innerHTML = "Hi Javascript";
    const secondDiv = document.getElementById("q-2");
    secondDiv.getElementsByTagName('div')[0].appendChild(par);

    //remove paragraph
    setTimeout(() => {
        par.remove();
        alert("paragraph disappeared after 2seconds");
    },2000)
}

function showTable(){
        // create table to body by DOM
        const table = document.createElement('div');
        let username = 'fateme';
        table.innerHTML = `<table id="myTable" style="width:80%;" border="1">
                <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Mobile</th>
                <th>Email</th>
            </tr>
            <tr>
                <th>${username}</th>
                <th>Modiri</th>
                <th>0912121212</th>
                <th>Sara@test.com</th>
            </tr>
            <tr>
                <th>Sara</th>
                <th>Modiri</th>
                <th>0912121212</th>
                <th>Sara@test.com</th>
            </tr>
            <tr>
                <th>Sara</th>
                <th>Modiri</th>
                <th>0912121212</th>
                <th>Sara@test.com</th>
            </tr>
        </table>`;
        table.classList.add('tableStyle')
        const secondDiv = document.getElementById("q-2");
        secondDiv.getElementsByTagName('div')[0].appendChild(table);
}






// 3-Create a page that contains body tags
function createTags() {
    //1
    let firstPar = document.querySelector('p');
    firstPar.setAttribute('id', 'first-patagraph');

    //2
    console.log(firstPar.getAttribute('id'));

    //3
    let newValue = document.getElementById("greeting");
    newValue.value = "Hello There";

    //4
    let Content = document.getElementById("content");
    console.log(Content.style.color);

    //5
    Content.setAttribute('class', 'title')
}



