let loadData = async(searchText,isSlowAll)=>{
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    let data = await res.json();
    let phones = data.data
    displayPhone(phones,isSlowAll)
}

let displayPhone = (phones,isSlowAll) =>{
    console.log(phones)
    
    let phonesContainer = document.getElementById('phones-container')
    phonesContainer.textContent = '';
    let showAllBtn = document.getElementById('showAllBtn')
    if(phones.length>12 && !isSlowAll){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }
    if(!isSlowAll){
        phones = phones.slice(0,12)
    }
    phones.forEach(phone=>{
        let phoneCards = document.createElement('div')
        phoneCards.classList= `card bg-base-100 shadow-sm`
        phoneCards.innerHTML = `
                    <figure>
                        <img
                        src="${phone.image}" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        
        `
        phonesContainer.appendChild(phoneCards)
    })
    toggleLoadingDot(false)
}

let searchBtn = (isSlowAll)=> {
    toggleLoadingDot(true)
    let searchField = document.getElementById('searchText')
    let searchValue = searchField.value;
    loadData(searchValue,isSlowAll);
}


let toggleLoadingDot=(isLOad)=>{
    let loadingDot = document.getElementById('loading-dot')
    if(isLOad){
        loadingDot.classList.remove('hidden')
    }
    else{
        loadingDot.classList.add('hidden')
    }
}

let showAll =()=>{
    searchBtn(true)
}
