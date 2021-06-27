

$(function () {

    const productDetail = localStorage.getItem("productDetail1")
 
    const product1 = JSON.parse(productDetail);
 
    document.title = product1.title1;
    rendercontent(product1, ".container-film");
 
 });
function rendercontent(product, selector){
    
        $(
            `<div class="name-film">${product.title1}</div>
            <div class="background-film">
                <img src="${product.image1}" alt="">
                <img src="${product.image2}" alt="">
            </div>
            <div class="impact">
                <div class="left">
                   <a href="">Xem Phim</a> 
                    <a href="">Trailer</a>
                </div>
                <div class="right">
                    <a href="">Thêm Vào Hộp</a> 
                    <a href="">Download</a>
                </div>
            </div>
            <div class="content">
                <div class="info-film">
                    <div class="info-name">THÔNG TIN</div>
                    <div class="boder"></div>
                    <ul>
                        <li>trạng thái: ${product.li1}</li>
                        <li>Quốc Gia: ${product.li2}</li>
                        <li>Năm phát hành :${product.li3}</li>
                        <li>Thể loại: ${product.li4}</li>
                        <li>số tập:${product.li5}</li>
                    </ul>
                </div>
                <div class="content-film">
                    <div class="info-name">NỘI DUNG</div>
                    <div class="boder"></div>
                    <p>${product.content}
                    </p>
                </div>
            </div>`
        ).appendTo(selector)
    
}


