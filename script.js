let interviewList=[];
let rejectedList=[];

let total=document.getElementById('total');
let interview=document.getElementById('interviewCount');
let rejected=document.getElementById('rejectedCount');

const allBtn=document.getElementById('allBtn');
const interviewBtn=document.getElementById('interviewBtn');
const rejectedBtn=document.getElementById('rejectedBtn');
const displayNumber=document.getElementById('numberdisplay');

const allCards=document.getElementById('allCards');

const filteredSection = document.getElementById('filtered-section');

const mainContainer=document.querySelector('main');
console.log(mainContainer);

function calculate(){
    let totalCount=allCards.children.length;
    total.innerText=totalCount;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
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
    
    if(id==='allBtn'){
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if(id==='interviewBtn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderFiltered(interviewList);
    }
    else if(id==='rejectedBtn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderFiltered(rejectedList);
    }

}


mainContainer.addEventListener('click', function(e){
   if(e.target.id.includes('intbtn')){
    const parent = e.target.parentNode.parentNode;
    const officeName = parent.querySelector('#officeName').innerText;
      const role = parent.querySelector('#role').innerText;
      const location = parent.querySelector('#location').innerText;
      const type = parent.querySelector('#type').innerText;
      const salary = parent.querySelector('#salary').innerText;
      const description = parent.querySelector('#description').innerText;
      const statusBtn = parent.querySelector('#status');
     statusBtn.innerText = "Applied";
     const job = {
         officeName,
         role,
         location,
         type,
         salary,
         description,
         status: "Applied"
      };
const exist = interviewList.find(j => j.role == job.role);
      if(!exist){
         interviewList.push(job);
      }

      calculate();
   }
   else if(e.target.id.includes('rjdbtn')){
   const parent = e.target.parentNode.parentNode;
     const officeName = parent.querySelector('#officeName').innerText;
      const role = parent.querySelector('#role').innerText;
      const location = parent.querySelector('#location').innerText;
      const type = parent.querySelector('#type').innerText;
      const salary = parent.querySelector('#salary').innerText;
      const description = parent.querySelector('#description').innerText;
      const statusBtn = parent.querySelector('#status');
     statusBtn.innerText = "Rejected";
    const job = {
         officeName,
         role,
         location,
         type,
         salary,
         description,
         status: "Rejected"
      };
      const exist = rejectedList.find(j => j.role == job.role);
      if(!exist){
         rejectedList.push(job);
      }

      calculate();
   }
   else if(e.target.id.includes('delete')){
    const parent = e.target.parentNode.parentNode;
    parent.remove();

    calculate();
    displayNumber.innerText = `${total.innerText} jobs`;
    

}
});


function renderFiltered(list){
 filteredSection.innerHTML = "";
for(let job of list){

        const div = document.createElement('div');
        div.className = "card flex justify-between border p-8 rounded-2xl bg-[#F8FAFC]";
       div.innerHTML = `
       <div class="space-y-6">
          <div>
                <p class="text-4xl font-bold">${job.officeName}</p>
                <p class="text-[18px]">${job.role}</p>
            </div>
            <div class="flex gap-0.5">
                <p class="text-gray-400 px-5">${job.location}</p>
                <p class="text-gray-400 px-5">${job.type}</p>
                <p class="text-gray-400">${job.salary}</p>
            </div>
            <button class="bg-[#EEF4FF] p-3 rounded-2xl">${job.status}</button>
            <p class="text-gray-400">${job.description}</p>
               <div class="flex gap-5">
                        <button id="intbtn" class="border border-green-400 text-green-500 px-4 py-2 rounded-2xl">Interview</button>
                        <button id="rjdbtn" class="border border-red-600 text-red-600 px-4 py-2 rounded-2xl">Rejected</button>
                     </div>
        </div>
        <div>
            <i  id="delete" class="fa-regular fa-trash-can"></i>
        </div>
        `;

        filteredSection.appendChild(div);
    }
}


  