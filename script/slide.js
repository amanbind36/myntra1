
    function start(){
        
       return` let obj=[
        "https://assets.tatacliq.com/medias/sys_master/images/33789557243934.jpg",
     
        "https://assets.tatacliq.com/medias/sys_master/images/33789557571614.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg",
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg",
     
     ];
     console.log("obj",obj)
     
     
             let i=0;
             var t=JSON.parse(localStorage.getItem("ima"));
             console.log("t",t)
     
     
     
     // localStorage.setItem("img2",JSON.stringify(obj))
              let imagediv=document.getElementById("image");
     
           
     
             let img=document.createElement("img");
             setInterval(function(){
                 if(i==obj.length){
                     i=0
                 }
                 img.src=obj[i];
                 imagediv.append(img)
                
                console.log("imgae",obj[i])
             
                
                 i++
                 
             },2000)`;
          
            }
            export default start
            
         
           