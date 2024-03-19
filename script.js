let blankHtml = "";
let proObj = [
    {
        img : "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
        heading : "Shozee",
        proLink : "https://github.com/nayyarhussain/shozeeeee/tree/main/shozee"
    },
    {
        img : "img/netflix.jpg",
        heading : "Netflix Clone",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/Netflix%20Original"
    },
    {
        img : "https://w7.pngwing.com/pngs/663/193/png-transparent-tiktok-2-hd-logo-thumbnail.png",
        heading : "Tik Tok Clone",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/tik%20tok%20web"
    },
   

   
    {
        img : "https://miro.medium.com/v2/resize:fit:1080/1*_5Ij_fmyPk0c-X2OVbOUxA.jpeg",
        heading : "Tic Tac Game",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/Tic%20Tac%20Toe"
    },
    {
        img : "https://www.sourcecodester.com/sites/default/files/images/rems/isa.png",
        heading : "Image Search",
        proLink : "https://imagesearchbynayyar.netlify.app/"
    },
   
    {
        img : "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
        heading : "Qr Code",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/Qr%20Code"
    },
    {
        img : "https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1681924896/Web_Assets/blog/509156f796399ec89c60604b7abf26f4b069f43b-2880x1800-1_28297921f3/509156f796399ec89c60604b7abf26f4b069f43b-2880x1800-1_28297921f3-jpg?_i=AA",
        heading : "Color Generator",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/Gradindt%20color%20generate"
    },
    {
        img : "https://images.squarespace-cdn.com/content/v1/584ee3cc2994cac9e545aadd/1614723936610-2YKDTL8LYQ5H2HT147LG/image2.png",
        heading : "Text to Speech",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/text%20to%20speach"
    },
    {
        img : "https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-flatstyled-round-analog-clock-face-icon-second-timepiece-clock-vector-png-image_36606160.png",
        heading : "Analog Clock",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/analog%20clock/clock.html"
    },
    {
        img : "https://i.pinimg.com/736x/6f/3e/17/6f3e17d25131c295aca4221f2e56d542.jpg",
        heading : "Quotes Generator",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/Quates%20Generator"
    },
    {
        img : "https://i.pinimg.com/originals/b7/66/2e/b7662eb8fb5d4d4d3c8a18ca8de79d5d.png",
        heading : "Calculator",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/Calculator"
    },
    {
        img : "https://codewithfaraz.com/img/Create%20a%20Search%20Filter%20with%20HTML,%20CSS,%20and%20JavaScript%20(Source%20Code).jpg",
        heading : "Filtered Card",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/FilterImage"
    },
   
    {
        img : "https://assets.materialup.com/uploads/6c2dcbab-d500-4dac-8f6f-9c9f66dc2bfb/preview.png",
        heading : "TodoApp",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/todo%20app"
    },
    {
        img : "https://play-lh.googleusercontent.com/0qyI61_yiowO9l5WDWkyBfkxyCch2tMeoQ6eEMR8YgS3RWpFhwnmnfkrqeNugkzSJpkY=w526-h296-rw",
        heading : "Whehter App",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/whether"
    },
    { 
        img : "https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64ffde4034e9e39c5c9617d6_Drag_Drop_UI_OG_Image_40f726a8d7.jpg",
        heading : "Drag & Drop",
        proLink : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/drag%20and%20drop"
    },
    {
        img : "https://cdn.dribbble.com/userupload/4989492/file/original-1f32daa3ddbc075363512dffc067f21a.jpg?resize=400x0",
        heading : "Keansburg Park",
        proLink : "https://keansburg.netlify.app/"
    },
    {
        img : "https://assets.materialup.com/uploads/0895ebb3-5570-4f1d-bc67-29094e586222/preview.jpg",
        heading : "Music App",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/youtubemusic"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbKYA5lBMwABzDlKTzcJ7ETya3EQ2VeYJ8Io67BWHCA&s",
        heading : "Bubbles Game",
        proLink : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/bubbles"
    }
   
    
    


]

let printCard = () => {
    for(let i = 0; i< proObj.length; i++){
        blankHtml += `<div class="card-item headline">
        <div class="card-img"><img src="${proObj[i].img}" alt=""></div>
        <div class="card-contain">
          <h3>${proObj[i].heading}</h3>
          <a href="${proObj[i].proLink}" target="_blank">visit</a>
        </div>
        
        </div>`
        
    }
    document.querySelector(".cards").innerHTML = blankHtml;
}
   
    

printCard();

let count = 1


let humberger = document.querySelector(".toggle");
let menubar = document.querySelector(".u-list")

const menu = () => {
    menubar.classList.toggle("menubar-js")
   
}

humberger.addEventListener("click", (e) => {
    menu()
})



let loder =document.querySelector(".loder");


window.addEventListener("load", () => {
   loder.style.display = "none";
})


