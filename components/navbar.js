function navbar(){
    return `<!-- /* navabar start---------------------------->
    <div id="container">
        <div id="img">
        <a href="index.html">
            <img id="img2" height="60%"
                src="data:image/png;base64,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"
                alt="">
                </a>
        </div>
        <div id="cate">
            <div>MEN</div>
            <div>WOMEN</div>
            <div>KIDS</div>
            <div>HOME & LIVING</div>
            <div>BEAUTY</div>
            <div>STUDIO</div>
        </div>
        <div id="search">


            <input id="t" class="icon" type="text" placeholder="Search for Products, brands and more">
        </div>
        <div id="pro">
            <div><i class="fa-solid fa-user"><br>
             <select  id="se" onchange="location=this.value">
        //     <option value=""><h1>USER</h1></option>
        //     <option value="">Wishlist</option>
        //     <option value="">Bag</option>
        //     <option value="">Order</option>
        //    <option value="login.html">Login</option></a>
        //     <option value="signup.html">Signup</option></a>
           
        // </select>
                </i></div>
            <div><i class="fa-solid fa-heart"> <br>
                    <h6>Wishlist</h6>
                </i></div>
            <div><a href="checkout.html"><i class="fa-solid fa-suitcase"><br>
                    <h6>Bag</h6>
                </i> </a></div>
        </div>
    </div>
`;
}

export default navbar;