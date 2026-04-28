let loadData = async(searchText)=>{
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    let data = await res.json();
    let phones = data.data
    displayPhone(phones)
}

let displayPhone = phones =>{
    console.log(phones)
    let phonesContainer = document.getElementById('phones-container')
    phonesContainer.textContent = '';
    let showAllBtn = document.getElementById('showAllBtn')
    if(phones.length>12){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }
    phones = phones.slice(0,12)
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
}

let searchBtn = ()=> {
    let searchField = document.getElementById('searchText')
    let searchValue = searchField.value;
    loadData(searchValue);
}

