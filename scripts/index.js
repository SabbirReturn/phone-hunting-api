let loadData = async()=>{
    let res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    let data = await res.json();
    let phones = data.data
    displayPhone(phones)
}

let displayPhone = phones =>{
    console.log(phones)
    let phonesContainer = document.getElementById('phones-container')
    phones.forEach(phone=>{
        let phoneCards = document.createElement('div')
        phoneCards.classList= `card bg-base-100 w-96 shadow-sm`
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



loadData()