
async function menu(){

    // منوی سمت راست 

    let data = await fetch("https://alihadavandi13.github.io/db.json/db.json");
    let res = await data.json();
    let menu = res.menu.map((elem)=>{
        return`<li><a href="${elem.link}">${elem.name}</a></li>`
    });
    document.querySelector(".menu-right").insertAdjacentHTML("beforeend",menu.join(""))

    // منوی سمت چپ دکمه خرید اشتراک

    let subData = await fetch("https://alihadavandi13.github.io/db.json/db.json");
    let subRes = await subData.json();
    let Subscription = subRes.sub.map((elem)=>{
        return `<a href="${elem.link}" class="white">${elem.name}</a>`
    });
    document.querySelector(".Subscription").insertAdjacentHTML("afterbegin",Subscription.join(""))

    // منوی سمت چپ دکمه ورود
    
    let logData = await fetch("https://alihadavandi13.github.io/db.json/db.json");
    let logRes = await logData.json();
    let login = logRes.login.map((elem)=>{
        return `<a href="${elem.link}" class="white">${elem.name}</a>`
    });
    document.querySelector(".login").insertAdjacentHTML("afterbegin",login.join(""))
}


export default menu;