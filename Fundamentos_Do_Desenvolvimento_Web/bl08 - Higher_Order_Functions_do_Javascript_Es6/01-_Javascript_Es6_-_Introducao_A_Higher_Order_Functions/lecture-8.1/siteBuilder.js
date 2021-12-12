let configsElem = {
    h1:{
        type: 'h1',
        className: 'main-title',
        text: 'Titulo'
    },
    h2:{
        type: 'h2',
        className: 'second-title',
        text: 'Sub Titulo'
    },
    p:{
        type: 'p',
        className: 'default-p',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus blanditiis qui eveniet, impedit iure sit atque nostrum id fugiat ducimus sequi necessitatibus voluptate neque tempore, aut molestiae reprehenderit non saepe.'
    },
    sectionHeader:{
        type: "section",
        className: 'cont-header',
        text: ''
    },
    section:{
        type: "section",
        className: 'cont-section',
        text: ''
    }
}


// generica


/* createElement(configsElem.h1.type,
              configsElem.h1.className,
              configsElem.h1.text);

function createElement(  type,className,text){

} */

//let retorno = createElement(configsElem.h1);
//console.log(retorno)

function createElement( { type,className,text } ){
    const element = document.createElement(type); 
    element.className = className;
    element.innerText = text;

    return element;
}
// cria dinamicamente uma SECTION NORMAL
function createSection(){
    const elementSection = createElement(configsElem.section);
    const elementH2 = createElement(configsElem.h2);
    const elementP = createElement(configsElem.p);

    elementSection.appendChild(elementH2);
    elementSection.appendChild(elementP);

    return elementSection;    

}


// cria dinamicamente o HEADER
function createHeader(){
    const elementSection = createElement(configsElem.sectionHeader);
    const elementH1 = createElement(configsElem.h1);
    const elementP = createElement(configsElem.p);

    elementSection.appendChild(elementH1);
    elementSection.appendChild(elementP);

    return elementSection;   
}


function addToStage(createFunction){

    setTimeout(function(){ 
        let element = createFunction();
        document.body.appendChild(element);
     }, 3000 ) 
}

addToStage(createHeader);
//addToStage(createSection);
//addToStage(createSection);

let btAdd = document.getElementById('button-add');

btAdd.addEventListener('click', onClicked );

//btAdd.addEventListener('click', (event) => { addToStage(createSection);});
const onClicked = function(e){
    addToStage(createSection);
}
const onClicked = (e) => {
    addToStage(createSection);
}

//btAdd.addEventListener('click', function(){
 //   addToStage(createSection);
//});

//function onClicked(e){
//    addToStage(createSection);
//}






//addToStage(createSection);
//addToStage(createSection);


/* const onClickAdded = (e) => {
    addToStage(createSection,e)
} */

