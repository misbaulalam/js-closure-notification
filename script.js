function createNotification(info){  
    return function(text){
        let main = document.querySelector(".main");
        let div = document.createElement("div");
        div.className = `${info.textbackgroundColor === "white"? "text-red-500 bg-white": "bg-[#8c3a70] text-white "} px-4 py-2 rounded-2xl text-2xl font-bold`;
        div.textContent = text;
        main.appendChild(div);
        setTimeout(() => {
            main.removeChild(div);
        }, info.duration * 1000);
    }
};

let notification = createNotification({
    textbackgroundColor : "Deep Orchid",
    textColor : "white",
    duration : 4,
});

notification("Crush Accept Your Friend Request");

setTimeout(() => {
    notification("She Liked Your Profile Picture")
}, 1800);

