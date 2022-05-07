
    import navbar from "../components/navbar.js";
    console.log("navbar",navbar);
    document.getElementById("navbar").innerHTML=navbar();

    function start() {

        let obj = [
            "https://assets.tatacliq.com/medias/sys_master/images/33789557243934.jpg",

            "https://assets.tatacliq.com/medias/sys_master/images/33789557571614.jpg",
            "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
            "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg",
            "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg",
            "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
            "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
        ];
        console.log("obj", obj)


        let i = 0;
        var t = JSON.parse(localStorage.getItem("ima"));
        console.log("t", t)



        // localStorage.setItem("img2",JSON.stringify(obj))
        let imagediv = document.getElementById("image");



        let img = document.createElement("img");
        setInterval(function () {
            if (i == obj.length) {
                i = 0
            }
            img.src = obj[i];
            imagediv.append(img)

            console.log("imgae", obj[i])


            i++

        }, 3000);

    }
    start();

    let dealimg = document.getElementById("dealimg")

    let dealoftheday = [
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0a407da5-e9c9-4b70-842e-e9398d6fea7d1651581839148-Bath---Body-Care.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/45b33d1a-cfe6-4827-b182-87b9d3b0aa981651581900033-Shirts.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f514a51-2d55-419c-b856-b6d0853120691651581966456-Indian-Styles.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/79f8457b-a78b-423b-b2bd-5d443d3e44cb1651581997025-Myntra-Unique-T-Shirts.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/1c65ed3d-cba1-4a5f-b0ae-ab4545f940731651582184306-Flats---Heels.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0070e6d7-9d06-49c8-b4f4-135ff74e2d6a1651582325724-Dresses--3-.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/c581f602-7ea9-4650-9d1b-0514416886ad1651582184272-Elegant-Watches.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/6144fd79-60c2-4a61-9c84-3c75ff5bde5e1651582184281-Premium-Handbags.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/4b4b8940-6dd9-48d7-a93d-db777ffb28d91651582184297-Handbags---Wallets.jpg" },
    ]
    console.log("dealoftheday", dealoftheday)

    dealoftheday.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;
        console.log(img)
        dealimg.append(img)

    })

    let forher = document.getElementById("forherimg")
    let her = [
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fabc0cd1-5535-4ea4-bf36-2b1857f2eb371645776096602-SS22-Trends-Women-Intricate-Threadwork.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/0d98cf21-4407-45e7-9b40-5f1fce278b6d1646753584544-SS22-TrendsForHer-Maxi-_-Mini-Dresses.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/819cc1cd-678b-43d2-aa63-f34b44755e561646753584613-SS22-TrendsForHer-Wide-_-Bootcut-Bottoms.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2db05e12-4981-470f-a7cf-43355c4c3fb31646753584596-SS22-TrendsForHer-Tie-_-Dye-Sarees.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/1a66b994-5b88-4d40-b8d3-cff57b438d4a1646753584579-SS22-TrendsForHer-Summer-Sandals.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/6eed6ace-940e-47d4-8441-a362c2c4fba11647516398904-SS22-Trends-Women-Blouson-Tops.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a39069f5-a7c9-4a57-81a0-bd6f5eb65b061645776096638-SS22-Trends-Women-Minimalist-Jewellery.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/80692309-98b1-4572-905b-6dcac3ecf32a1647516398938-SS22-Trends-Women-Gota-Patti-Kurtas.jpg" },
    ];


    her.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;
        console.log(img)
        forher.append(img)
    })


    let him = [
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0df04bdd-853b-42fe-a494-00bc329ed1871645776676864-SS22-Trends-Men-Logo-Mania-Joggers.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/43ed9e78-f1d5-4398-94bd-db22cf7165e41646753693317-SS22-TrendsForHim-Textured-Shoes.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2bd946cc-34f4-4958-91ed-91fa41eadd231646753693282-SS22-TrendsForHim-Colourblocked-Top-Wear.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/d158792a-f92a-4eac-b9b1-a0f54e8fd59d1647516418438-SS22-Trends-Men-Military-Inspired-Styles.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/21975168-2bdd-4f8d-9567-cb04a0132fbb1645776676882-SS22-Trends-Men-Logo-Mania-Tees.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/85821f6f-0cf0-4100-9527-af1e8e080ae31647516418456-SS22-Trends-Men-Multi-Pocket-Nehru-Jackets.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/bc7b623e-96e5-4811-8aba-679bf0c8ac401646753693245-SS22-TrendsForHim-Character-Tees.jpg" },
    ]

 
    let forhimimg=document.getElementById("forhimimg");
    him.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;
        console.log(img)
        forhimimg.append(img)
    });

    let best1 = [
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg" },
        { img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg" },
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg"},
    ]

 
    let best=document.getElementById("bestimg");
    best1.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img;
        console.log(img)
        best.append(img)
    });


    import footer from "../components/footer.js"

    console.log("footer",footer)



  document.getElementById("footer").innerHTML=footer();
