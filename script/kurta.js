import navbar from "../components/navbar.js";
console.log("navbar",navbar);

document.getElementById("navbar").innerHTML=navbar();



let kurta = [
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17048614/2022/2/4/e92cf554-7327-463b-802b-fe432f3d7e241643971560331KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit5.jpg",
        name: "KHUSHAL K",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "159",
        sprice: "5019"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
        name: "Kalini",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "961",
        sprice: "3699",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16836356/2022/3/24/c60dd80e-4c0b-404d-bf6b-18b5734541391648119245965-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-2.jpg",
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
        name: "KHAUSAL K",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "1424",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13391080/2022/2/21/761d883b-8574-4b04-b56b-97660caf4a791645460975193KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta11.jpg",
        sprice: "4774"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11056866/2022/4/20/3074aca2-abb4-472f-98e6-b25cad1e1dde1650451182975ZIYAAFloralLeafyFoilPrintKurtaSet1.jpg",
        name: "ZiIYYA",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "863",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17048604/2022/2/4/a9f95cb4-caf9-4836-a096-dab350c25f431643970773360KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot2.jpg",
        sprice: "2465"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
        name: "KHUSHAL K",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "1200",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17062988/2022/2/5/4c1dbf96-c3d1-474d-965e-84cccdb727d21644056622730KALINIWomenMaroonEmbroideredPleatedKurtawithSharara2.jpg",
        sprice: "4000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
        name: "KALINI",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "200",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14226530/2022/2/4/c2de2cd8-1c50-4ebc-8df5-a31eaf138de81643937539893NayoWomenBlueFloralPureCottonKurtawithTrousersWithDupatta2.jpg",
        sprice: "500"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14226530/2022/2/4/d65f5a27-1fcf-44a8-9db6-e4912e57b5381643937539870NayoWomenBlueFloralPureCottonKurtawithTrousersWithDupatta1.jpg",
        name: "NAYO",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "876",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10356511/2019/8/8/80690c21-ed38-4cee-83da-bb0ad9a5773c1565263388818-Libas-Women-Kurta-Sets-571565263387250-2.jpg",
        sprice: "1600"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
        name: "VARANGA",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "2000",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11056866/2022/4/20/b78052c3-9281-419a-b024-5e157e6263b41650451183053ZIYAAFloralLeafyFoilPrintKurtaSet7.jpg",
        sprice: "4000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13771278/2022/2/4/e8655bc1-6cf7-4c8b-a206-a8513b146c621643937587740NayoWomenBurgundyPrintedKurtawithPalazzosDupatta1.jpg",
        name: "NAYO",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "1234",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16331314/2021/12/2/722ef778-5ae2-4549-80e2-1a4c63fb4b5a1638428903205KurtaSets2.jpg",
        sprice: "3444"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16331314/2021/12/2/daf4c09e-d35d-4961-a153-e3bb0eb5d9191638428903270KurtaSets1.jpg",
        name: "ANUBHUTEE",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "3344",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13771278/2022/2/4/08c78b02-77a4-405e-8243-87faa563549b1643937587764NayoWomenBurgundyPrintedKurtawithPalazzosDupatta2.jpg",
        sprice: "5555"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
        name: "INWEAVE",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "700",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12541372/2020/11/6/2776b680-7805-4fb8-a506-07069d98c6871604665115345VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers3.jpg",
        sprice: "8000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
        name: "LIBAS",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "500",
        poster1:"",
        sprice: "3000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17824832/2022/4/8/483731b0-eb5a-4557-a0ae-3563287348751649425133937GULMOHARJAIPURWomenFuchsiaEthnicMotifsEmbroideredMirrorWorkA1.jpg",
        name: "GULMOHAR JAIPUR",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "5666",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17507082/2022/3/31/59c36d37-6f18-4fd1-9621-b9ed09bded511648689068156KALINIWomenPinkYokeDesignKurtawithTrousersWithDupatta2.jpg",
        sprice: "4444"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
        name: "AHALYAA",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "2000",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14951330/2022/2/16/ccc5bd1a-5515-41b9-b1c5-14069b4958d91645010770483-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-2.jpg",
        sprice: "5999"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16875002/2022/2/8/8bc953f0-fd29-4e2f-907c-765fa48c63571644320968653-Stylum-Women-Beige--Golden-Printed-Kurta-with-Trousers--Dupa-1.jpg",
        name: "ATYLUM",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "3456",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17824832/2022/4/8/3f62eb59-c84d-4076-a58f-758463b27ee21649425133915GULMOHARJAIPURWomenFuchsiaEthnicMotifsEmbroideredMirrorWorkA2.jpg",
        sprice: "4567"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17507082/2022/3/31/e9d876ea-4fc9-4061-99b5-7ec9595e42441648689068112KALINIWomenPinkYokeDesignKurtawithTrousersWithDupatta1.jpg",
        name: "KALINI",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "555",
        poster1:"",
        sprice: "7800"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15344728/2021/10/8/1e1e3a64-0b96-476f-8e3d-964c47f29c0e1633685885520-Indo-Era-Red-Printed-A-line-Kurta-Trouser-With-Dupatta-Set-7-1.jpg",
        name: "INDO ERA",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "666",
        poster1:"",
        sprice: "888"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15561680/2021/9/22/ae87dd98-3d80-449b-bf62-3834797d9a561632315919781DIVYANKWomenNavyBlueEthnicMotifsPrintedRegularMirrorWorkKurt1.jpg",
        name: "DIVYANK",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "400",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16524740/2021/12/29/56d91736-f30f-4220-961f-5fe31ef67a651640754214956-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-1.jpg",
        sprice: "9000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15003602/2021/8/5/b617ea13-c8be-4c2d-b295-3dcfe941cece1628187918692JAIPURIBUNAAIWomenTealPrintedKurtawithTrousersWithDupatta1.jpg",
        name: "KALINI",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "600",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15003602/2022/3/2/d59dc52c-b6dc-479d-8f6e-c2466d0d6c171646212191373-JAIPURI-BUNAAI-Women-Teal-Printed-Kurta-with-Trousers--With--6.jpg",
        sprice: "6000"
    },
    {
        poster: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16904824/2022/1/28/0f3a0b4d-686d-4d48-a8a6-79fe6d612cc61643390570899-KALINI-Women-Navy-Blue--White-Yoke-Design-Empire-Kurta-with--1.jpg",
        name: "JAIPURI BUNAI",
        sname: "WOMEN Kurtas Set With Dupatta",
        price: "400",
        poster1:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16875002/2022/2/8/2ef72b24-6a42-4d6d-beca-4411617d394b1644320968632-Stylum-Women-Beige--Golden-Printed-Kurta-with-Trousers--Dupa-2.jpg",
        sprice: "500"
    },
]

let imgdiv=document.getElementById("right")




    kurta.forEach(function(el){
        let div = document.createElement("div");

        let div1 = document.createElement("div");

        let name = document.createElement("p");
        name.innerText =el.name ;

        let img = document.createElement("img");
        img.src=el.poster;

        let sname = document.createElement("p");
        sname.innerText=el.sname;

        let price = document.createElement("p");
        price.innerText=`Rs. ${el.price}`;

        let sprice = document.createElement("p");
        sprice.innerText=`Rs. ${el.sprice}`;
    
        div1.append(price,sprice)
        
        div.append(img,name,sname,div1)
       div.addEventListener("click",function(){
           add(el)
       })
        console.log(img)
        imgdiv.append(div)
    })




    import footer from "../components/footer.js"

    console.log("footer",footer)
    document.getElementById("footer").innerHTML=footer();



    function add(el){
        console.log("el",el)
        localStorage.setItem("bag",JSON.stringify(el))
        window.location.href="addtobag.html"

    }