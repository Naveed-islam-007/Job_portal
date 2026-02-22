let interviewList=[];
let rejectedList=[];

let total=document.getElementById('total');
let interview=document.getElementById('interviewCount');
let rejected=document.getElementById('rejectedCount');

const allBtn=document.getElementById('allBtn');
const interviewBtn=document.getElementById('interviewBtn');
const rejectedBtn=document.getElementById('rejectedBtn');

const allCards=document.getElementById('allCards');

const mainContainer=document.querySelector('main');
console.log(mainContainer);

function calculate(){
    let totalCount=allCards.children.length;
    total.innerText=totalCount;
    interview.innerText=interviewList.length;
    rejected.innerText=totalCount-interviewList.length;
}
calculate();

function toggleStyle(id){
    allBtn.classList.remove('bg-blue-600');
    interviewBtn.classList.remove('bg-blue-600');
    rejectedBtn.classList.remove('bg-blue-600');

    allBtn.classList.add('bg-gray-100');
    interviewBtn.classList.add('bg-gray-100');
    rejectedBtn.classList.add('bg-gray-100');

    const selected=document.getElementById(id);
    selected.classList.remove('bg-gray-100');
    selected.classList.add('bg-blue-600');


}