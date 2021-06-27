$(function(){
    const product=[
        {
           
        }
    ]
    renderheader(product,".header")
    renderfooter(product,".container-footer")
});
function renderheader(products = [], selector) {
 
    products.map(val => (
       $(
        `<div class="container-header">
        <ul class="logo-header">
            <li class="logo"><a href="../phimhay.html">PHIM
                <span class="hay">HAY</span>
            </a></li>
            <nav>
                <div class="gach"></div>
                <div class="nav-container">
                    <ul>
                        <li class="dropdown"><a href="" class="dropTL">THỂ LOẠI</a> 
                            <div class="dropdown-content">
                                <a href="">Phim hành động</a>
                                <a href="">Phim viễn tưởng</a>
                                <a href="">Phim hài </a>
                                <a href="">Phim kinh dị</a>
                                <a href="">Phim chiến tranh</a>
                                <a href="">Phim phưu lưu</a>
                                <a href="">Phim hoạt hình</a>
                                <a href="">Phim hoạt hình</a>
                                
                            </div>
                        </li>
                        <li><a href="">PHIM LẺ</a> </li>
                        <li><a href="">PHIM BỘ</a> </li>
                        <li><a href="">PHIM CHIẾU RẠP</a> </li>
                        <li><a href="">ANIME</a> </li>
                       
                    </ul>
                </div>
            </nav>
            <div class="menu-child">
                <div class="search">
                <span class="click"><i class="fa fa-search" aria-hidden="true"></i></span>
                <div class="input"><input type="text" placeholder="nhập và enter"></div>
                </div>
                <a href="./login/login.html" class="button"><button class="button1">đăng nhập</button></a>
                <a href="./phimdaluu/bookmarks.html" ><button class="button2">hộp phim</button></a>
            </div>
           
        </ul>
    </div>`
       ).appendTo(selector)
    ))
 }
 function renderfooter(products = [], selector) {
 
    products.map(val => (
       $(
        `<a href=""> <div class="logo-footer">PHIM <span>HAY</span></div></a>
            
        <div class="link-footer">
            <h3>PHIM HAY</h3>
            <a href="">Phim hành động</a>
            <a href="">Phim viễn tưởng</a>
            <a href="">Phim hài </a>
            
        </div>
        <div class="link-footer">
            <h3>PHIM LẺ </h3>
            <a href="">Phim kinh dị</a>
            <a href="">Phim chiến tranh</a>
            <a href="">Phim phưu lưu</a>
        </div>
        <div class="link-footer">
            <h3>PHIM BỘ</h3>
            <a href="">Phim hoạt hình</a>
            <a href="">Phim hoạt hình</a>
        </div>
        <div class="contact">
            <span>Thông tin liên lạc</span>
            <p>Email: phimmoizz.contact@gmail.com</p>
            <p>Phone: 0345953931</p>
            <p>Address: 97 man thiện, hiệp phú, quận 9</p>
        </div>`
       ).appendTo(selector)
    ))
 }