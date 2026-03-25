
document.querySelector("body").addEventListener('click', function(e) {

  var anchor2 = e.target.closest('#s-result-sort-select.a-native-dropdown');
  if(anchor2 !== null) {
    //  console.log("click event fired anchor");
window.setTimeout(sendPairsAz, 3000);
  }
  var anchor3 = e.target.closest('a.a-link-normal.s-navigation-item');
  if(anchor3 !== null) {
    //  console.log("click event fired anchor");s-navigation-item
window.setTimeout(sendPairsAz, 3000);
  }
  var anchor4 = e.target.closest('a.s-pagination-item.s-pagination-button');
  if(anchor4 !== null) {
    //  console.log("click event fired anchor");s-navigation-item
window.setTimeout(sendPairsAz, 3000);
  }
  var anchor5 = e.target.closest('div#twister_feature_div ul li');
  if(anchor5 !== null) {
    //  console.log("click event fired anchor");s-navigation-item
window.setTimeout(sendPairsAz, 3000);
  }
  var a6 = e.target.closest('div#twister_feature_div .variation-dropdown #native_dropdown_selected_size_name');
  if(a6 !== null) {

window.setTimeout(sendPairsAz, 3000);
  }
}, false);
$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
var oos = 0;
abh = window.location.href.split('?')[0];

    window.setTimeout(sendPairsAz, 5000);

function getPrice()
{
  var currentPrice = $s("#priceblock_ourprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s(".a-color-price")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
        return currentPrice;
}
function getTitle()
{
  var title=$s("#productTitle")
        .text();
        return title;
}
function getsiteName()
{

        return "Amazon.in";
}
function sendPairsAz() {
    var arrayToSend = [];
      var title;
    var imgurl;
      var cPrice=0;
var cTitle="";
var cPID="";
var oos = 0;
var primepantry=0;
var pantry=0;
var maincat1="";
var cat1="";
var subcat="";
var bsmaincat=0;
var bscat=0;
var bssubcat=0;
var regprice;
var pricerangeflag=1;
var cat="";
var maincategory="";

var category="";
var subcategory="";
    var price;
  //  var debug=$s('div.s-main-slot > div:not(.AdHolder).s-asin').length;
  //  var test=$s('div.s-main-slot > div:not(.AdHolder).s-asin:eq(0)').attr("data-asin");
//    console.log("Result Length:"+debug+" :"+test);
     var PID;
      if ($s('div#dp-container')
        .length > 0) {

         PID=window.location.href;
       if(PID.search("/dp/")>0)
            PID = PID.split("/dp/")[1].split('?')[0].split('/')[0];
            else if(PID.search("/product/")>0)
            PID = PID.split("/product/")[1].split('?')[0].split('/')[0];
            else  if(PID.search("/d/")>0)
            PID = PID.split("/d/")[1].split('?')[0].split('/')[0];
            //var ab=PID.lastIndexOf('-');
            //PID=PID.substring(ab+1,PID.length);

                cPID=PID;
            //price = filter_price($s('div#priceblock_ourprice:eq(0)').text().trim());
            var seller=$s("#merchant-info a:eq(0)").text();
            try{
            if ((($s("#productDetails_detailBullets_sections1").length>0)||($s("#detailBulletsWrapper_feature_div ul:eq(1).a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list").length>0))&&(($s("#productDetails_detailBullets_sections1 tr:eq(2)").text().search("Sellers")>0)||($s("#detailBulletsWrapper_feature_div ul:eq(1).a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list li span").text().search("Sellers")>0)))
            {

              if($s("#productDetails_detailBullets_sections1").length>0)
  cat=$s("#productDetails_detailBullets_sections1 tr:eq(2)").text().replace("Best Sellers Rank:","");
  else if($s("#detailBulletsWrapper_feature_div ul:eq(1).a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list #SalesRank").length>0)
  {
    cat=$s("#detailBulletsWrapper_feature_div ul:eq(1).a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list #SalesRank").text();
  }
  else {
    cat=$s("#detailBulletsWrapper_feature_div ul:eq(1).a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list li span").text().replace("Best Sellers Rank:","");
  }
 maincategory=cat.split("#")[1].trim();
 bsmaincat=filter_price(maincategory.split("in ")[0].trim());
maincategory=maincategory.split("in ")[1].split("(")[0].trim().replace("Best Sellers Rank:","").trim();
 category=cat.split("#")[2].trim();
 bscat=filter_price(category.split(" in")[0].trim());
category=category.split(" in")[1].trim().replace("Best Sellers Rank:","").trim();
if(cat.split("#").length>3)
{
  subcategory=cat.split("#")[3].trim();
  bssubcat=filter_price(subcategory.split(" in")[0].trim());
 subcat=subcategory.split(" in")[1].trim().replace("Best Sellers Rank:","").trim();
}
switch(maincategory) {
  case "Home & Kitchen":
  maincat1="Home & Kitchen";
  break;
  case "Electronics":
  maincat1="Electronics";
  break;
  case "Computers & Accessories":
  maincat1="Computers";
  break;
  case "Baby Products":
  maincat1="Baby";
  break;
  case "Bags, Wallets and Luggage":
  maincat1="Bags, Wallets and Luggage";
  break;
  case "Watches":
  maincat1="Watches";
  break;
  case "Shoes & Handbags":
  maincat1="Shoes & Handbags";
  break;
  case "Clothing & Accessories":
  maincat1="Clothing";
  break;
  default:
  maincat1=maincategory;
  // code block
}
switch(category) {
  case "Inkjet Printers":
  cat1="Printers";
  break;
  case "Smartphones":
  cat1="Smartphones";
  break;
  case "Basic Mobiles":
  cat1="Basic Mobiles";
  break;
  case "Laptops":
  cat1="Laptops";
  break;
  case "Tablets":
  cat1="Tablets";
  break;
  case "Monitors":
  cat1="Monitors";
  break;
  case "Routers":
  cat1="Routers";
  break;
  case "External Solid State Drives":
  cat1="External HDD";
  break;
  case "Pen Drives":
  cat1="Pen Drives";
  break;
  case "External Hard Disks":
  cat1="External HDD";
  break;
  case "Keyboards":
  cat1="Keyboards";
  break;
  case "Mice":
  cat1="Mouse";
  break;
  case "Smart Televisions":
  cat1="Smart TVs";
  break;
  case "Home Theater Systems":
  cat1="Home Theaters";
  break;
  case "Home Cinema Projectors":
  cat1="Projectors";
  break;
  case "Bluetooth Speakers":
  cat1="Speakers";
  break;
  case "In-Ear Headphones":
  cat1="Headphones";
  break;
  case "Digital SLR Cameras":
  cat1="DSLR Cameras";
  break;
  case "Security Cameras":
  cat1="CCTV";
  break;
  case "Diaper Pants":
  cat1="Diapers";
  break;
  case "Dining Room Sets":
  cat1="Dining";
  break;
  case "Sofa Sets":
  cat1="Sofa";
  break;
  case "Washing Machines & Dryers":
  cat1="Washing Machines";
  break;
  case "Air Conditioners":
  cat1="ACs";
  break;
  case "Refrigerators":
  cat1="Refrigerators";
  break;
  case "Microwave Ovens":
  cat1="Microwave Ovens";
  break;
  case "Suitcases & Trolley Bags":
  cat1="Suitcases";
  break;
  case "Women's Watches":
  cat1="Wrist Watches";
  break;
  case "Men's Watches":
  cat1="Wrist Watches";
  break;
  case "Women's Jackets":
  cat1="Jackets";
  break;
  case "Men's Jackets":
  cat1="Jackets";
  break;
default:
cat1=category;
  // code block
}
          //  console.log("NewAmazon:"+maincat1+bsmaincat+cat1+bscat);
            }
          }
          catch(err)
              {
                cat1=cat1;
              }
              var reviewcount="";
              var reviewval="";
              if($s("#acrCustomerReviewLink #acrCustomerReviewText").length>0)
                 reviewcount= $s("#acrCustomerReviewLink #acrCustomerReviewText:eq(0)").text().replace(" ratings","").replace(" rating","").trim();
                if($s("#averageCustomerReviews #acrPopover").length>0)
                   reviewval= $s("#averageCustomerReviews #acrPopover").attr("title").replace(" out of 5 stars","").trim();
            if ($s(".pantry-IN").length>0)
            {
            primepantry=1;
            pantry=1;
            }
             else if ($s("div#AMAZON_DELIVERED").length>0)
            primepantry=1;
              else if ($s("span.fbaBadge.swSprite").length>0)
            primepantry=1;
                price = $s("#priceblock_ourprice.a-color-price")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
        regprice=price;
    if ( $s("#priceblock_saleprice").length>0)
    {
     price = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
          regprice=price;
      }
      if ( $s("#price_inside_buybox").length>0)
      {
       price = $s("#price_inside_buybox")
          .text()
          .trim()
          .replace(",", "").replace(",", "")
          .split(".")[0];
            regprice=price;
        }
        if ($s("#centerCol span.a-price-range").length>0)
        pricerangeflag=0;

        if ( $s("#desktop_buybox").length>0)
        {
         price = $s("#desktop_buybox #qualifiedBuybox span.a-price span.a-price-whole")
            .text()
            .trim()
            .replace(",", "").replace(",", "")
            .split(".")[0];
              regprice=price;
          }
          if ( $s("#corePrice_feature_div").length>0)
          {
           price = $s("#corePrice_feature_div .reinventPriceAccordionT2 span.a-price-whole")
              .text()
              .trim()
              .replace(",", "").replace(",", "")
              .split(".")[0];
              if(price=="")
              price = $s("#corePrice_feature_div span.a-price span.a-price-whole")
                 .text()
                 .trim()
                 .replace(",", "").replace(",", "")
                 .split(".")[0];
                regprice=price;
            }
    if ($s("#priceblock_dealprice").length>0)
    {
     price = $s("#priceblock_dealprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
        regprice=$s("#newBuyBoxPrice")
           .text()
           .trim()
           .replace(",", "").replace(",", "")
           .split(".")[0];
      }
      if ( $s("#corePrice_desktop").length>0)
      {
       price = $s("#corePrice_desktop .apexPriceToPay span.a-offscreen")
          .text()
          .trim()
          .replace(",", "").replace(",", "")
          .split(".")[0];
          if(price=="")
          price = $s("#corePrice_desktop #priceblock_ourprice span.a-color-price")
             .text()
             .trim()
             .replace(",", "").replace(",", "")
             .split(".")[0];
            regprice=price;
        }
        if(!price)
        {
       if ( $s("#newAccordionRow_0").length>0)
        {
         price = $s("#newAccordionRow_0 h5 div span.a-color-price")
            .text()
            .trim()
            .replace(",", "").replace(",", "")
            .split(".")[0];
              regprice=price;
          }
        }
        if ($s("#priceblock_businessprice").length>0)
        {
        price = $s("#priceblock_businessprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
          regprice=price;
      }
         if ($s("span.priceblock_vat_inc_price").length>0)
         {
        price = $s("span.priceblock_vat_inc_price")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
          regprice=price;
      }

      if ($s("#outOfStock").length>0)
      {
      oos = 1;

    }
            cPrice=price;
            var merchantid="";
            var abc="";
              var urlParams1 = new URLSearchParams(window.location.search);
              abc=urlParams1.get('smid');
              if(String(abc).length>5)
              merchantid=abc;
              else {
                abc=urlParams1.get('me');
                if(String(abc).length>5)
                merchantid=abc;
                else {
                  abc=urlParams1.get('m');
                  if(String(abc).length>5)
                  merchantid=abc;
                }
              }
              if(merchantid.length>8)
              seller="smid="+merchantid;
            title=$s('span#productTitle').text().trim();
             title = title.replace("'", '').replace("'", '').replace("'", '');
            cTitle=title;
                imgurl=$s('div#imgTagWrapperId img')
                    .attr('src');
                    //console.log(PID+":"+price);
                     //arrayToSend.push([PID,title,imgurl, price]);regprice
              price = filter_price(price);
                regprice = filter_price(regprice);
              if($s('td#couponBadgeRegularVpc').length > 0){
            //  title="[Apply Coupon]:"+title;
            var cou=$s('td.regularVpc #unclippedCoupon .a-text-bold').text().replace("Apply", "").replace("coupon", "").trim();
             if(cou.split("₹").length > 1){
            var finalcouponamount=filter_price(cou);
            price=Math.round(price-finalcouponamount);

            }
               if(cou.split("%").length > 1){
            var finalcouponamount=cou.replace("%", "");
            price=Math.round(price-((regprice*finalcouponamount)/100));

            }
            }    else if($s('div#promoPriceBlockMessage_feature_div .a-color-success:eq(0)').length > 0){

                   var cou=$s('div#promoPriceBlockMessage_feature_div .a-color-success:eq(0)').text().split(" voucher ")[0].split(" coupon applied")[0].trim();
                     if(cou.split("₹").length > 1){
                var finalcouponamount=filter_price(cou.replace(" off", ""));
                price=Math.round(price-finalcouponamount);

                  }
                       if(cou.split("%").length > 1){
                var finalcouponamount=cou.replace("%", "").replace(" off", "");
                price=Math.round(price-((regprice*finalcouponamount)/100));

                  }
                		}

            if (PID && PID.length==10 &&  price && primepantry && pricerangeflag) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price,oos,seller,pantry,maincat1,cat1,subcat,bsmaincat,bscat,bssubcat,filter_price(reviewcount),reviewval]);
                }
            }
            else if(PID && PID.length==10 && pricerangeflag)
            {
                arrayToSend.push([PID,title,imgurl, price,oos,seller,pantry,maincat1,cat1,subcat,bsmaincat,bscat,bssubcat,filter_price(reviewcount),reviewval]);
            }
        } //for loop ends
       //console.log("NewAmazon:"+arrayToSend+"-1-"+price+"-2-"+PID);
       oos=0;
       pantry=0;
       // For book Starts
           if ($s('div#booksTitle')
        .length > 0) {

         PID=window.location.href;

             if(PID.search("/dp/")>0)
            PID = PID.split("/dp/")[1].split('?')[0].split('/')[0];
            else if(PID.search("/product/")>0)
            PID = PID.split("/product/")[1].split('?')[0].split('/')[0];
            //var ab=PID.lastIndexOf('-');
            //PID=PID.substring(ab+1,PID.length);
              var seller=$s("#merchant-info a:eq(0)").text();
             if ($s("#pantryBadge").text().trim().length>0)
            primepantry=1;
             else if ($s("#promiseBasedBadge_feature_div").text().trim().length>0)
            primepantry=1;
             else if ($s("span.fbaBadge.swSprite").length>0)
            primepantry=1;
                cPID=PID;
            //price = filter_price($s('div#priceblock_ourprice:eq(0)').text().trim());
                price = $s("div#soldByThirdParty span.offer-price")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];

            cPrice=price;
            title=$s('span#productTitle').text().trim();
            title = title.replace("'", '').replace("'", '').replace("'", '');
            cTitle=title;
                imgurl=$s('div#main-image-container img.frontImage')
                    .attr('src');
                    //console.log(PID+":"+price);
                     //arrayToSend.push([PID,title,imgurl, price]);

            if (PID && price && primepantry) {
                if (price > 0) {
                    arrayToSend.push([PID,title,imgurl, price,oos,seller,pantry]);
                }
            }
        }
     /*
    PID = window.location.href;
    if (PID.split("/offer-listing/")
                            .length > 1) {
                            PID = PID.split("/offer-listing/")[1];
                            if (PID.split("/")
                                .length > 1) {
                                PID = PID.split("/");
                                PID = PID[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }
                            cPID=PID;
                            cPrice="UnAvailable";
                              cTitle=$s("h1").text();
       if(cPID.length!=0)
      {
       var check1 = window.location.href;
         if(check1.search("ztr=nothing")>0 )
         {
      plotFlipGraph(cPID,cTitle,cPrice,'1');
         }
    }
//console.log("tsest:"+cPID+":"+cPrice+":"+cTitle);
                        }
    PID = PID.split("?")[0];
    PID = PID.split("/ref=")[0];
    PID = PID.split("/");
    PID2 = PID[PID.length - 1];
    PID1 = PID[PID.length - 2];
    if (PID2 == "") {
        PID = PID1;
    } else {
        PID = PID2;
    }
    cPID=PID;
    title=$s("#productTitle")
        .text();
        cTitle=title;
        if($s("#imgTagWrapperId")
        .length > 0)
        {
    imgurl=$s("#imgTagWrapperId").find('img').attr('src');
   // imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
         if($s("#landingImage")
        .length > 0)
        {
    imgurl=$s("#landingImage").attr('src');
    //imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
           if($s("#imageBlock")
        .length > 0)
        {
    imgurl=$s("#imageBlock").find('img:eq(0)').attr('src');
    //imgurl=imgurl+"._SY100_.jpg";
    //imgurl=imgurl.replace("http://ecx.","https://images-na.ssl-");
        }
    currentPrice = $s("#priceblock_ourprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
    if ( $s("#priceblock_saleprice").length>0) currentPrice = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
    if ($s("#priceblock_dealprice").length>0) currentPrice = $s("#priceblock_dealprice")
        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
       // console.log("price log:"+currentPrice);
        if(!currentPrice)
        {
          if ($s("#centerCol .a-color-base").length>0) currentPrice = $s("#centerCol .a-color-base .a-color-price:eq(0)")

        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
        }
       //  console.log("price log1:"+currentPrice);
        if(!currentPrice)
        {
           if ($s("#centerCol span.a-color-price").length>0) currentPrice = $s("#centerCol span.a-color-price")

        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
        if($s('#centerCol span.a-color-price').prev('a').text().split("used")
                            .length>1 || $s('#centerCol span.a-color-price').prev('a').text().split("Used")
                            .length>1)
        currentPrice=0;
        }
        /// console.log("price log2:"+currentPrice);
               if(!currentPrice)
        {
           if ($s("#unqualifiedBuyBox span.a-color-price").length>0) currentPrice = $s("#unqualifiedBuyBox span.a-color-price")

        .text()
        .trim()
        .replace(",", "").replace(",", "")
        .split(".")[0];
        if($s('#unqualifiedBuyBox span.a-color-price').prev('a').text().split("Used")
                            .length>1 || $s('#unqualifiedBuyBox span.a-color-price').prev('a').text().split("used")
                            .length>1)
        currentPrice=0;
        }
        // console.log("price log3:"+currentPrice);
        cPrice=currentPrice;
        //console.log("price log after base:"+currentPrice);
        var ptban = window.location.href;
 if(ptban.split('ptbanpid=1')[1])
  oos = 5;
    if (currentPrice&&(PID.length==10)) arrayToSend.push([PID,title,imgurl,currentPrice,oos]);

    */


   //For Lightening Deals var
   var seller="5";
   pantry=0;
      if($s('.dealTile').length > 0){
    var slider = $s('.dealTile');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var prod = "";
    var image = "";
    var oos = 0;
    for(i=0;i<sliderLength;i++){
      price = 0;
      PID = "";
      prod = "";
      image = "";
      oos = 0;
      price_now = 0;
      if($s('.dealTile:eq('+ i +')').length > 0){
        if($s('.dealTile:eq('+ i +')').attr("data-asin")){
          PID = $s('.dealTile:eq('+ i +')').attr("data-asin");
        }
        else if($s('.dealTile:eq('+ i +') a').attr("href")){
          link = $s('.dealTile:eq('+ i +') a').attr("href");
          if(link.split("/slredirect/picca").length > 1){
            link = $s('.dealTile:eq('+ i +') a:eq(1)').attr("href");
          }
          if(link.split("amazon.in").length < 2){
            link = "www.amazon.in"+link;
          }
          PID = returnPID(link);

        }
        else{
          PID = "";
        }
        if(PID != ""){
          if($s('.dealTile:eq('+ i +')').find('img').attr("src")){
            image = $s('.dealTile:eq('+ i +') #dealImage').find('img:eq(0)').attr("src").trim();
            if(image.split("1x").length > 1){
              image = image.split("1x");
              image = image[0]+"1x";
              image = image.trim();
            }
          }
          if($s('.dealTile:eq('+ i +')').find('.a-price-range').length>0 )
          continue;
          if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.dealTile:eq('+ i +')').find('img').attr("src")){
            image = $s('.dealTile:eq('+ i +')').find('img:eq(0)').attr("src").trim();
          }


          if($s('.dealTile:eq('+ i +') #dealImage').find('img').attr("alt")){
            prod = $s('.dealTile:eq('+ i +') #dealImage').find('img:eq(0)').attr("alt").trim();
            prod = prod.replace("'", '');
          }
          if(prod == "" || prod == "undefined"){
            if($s('.dealTile:eq('+ i +')').find('h2').attr("data-attribute")){
              prod = $s('.dealTile:eq('+ i +')').find('h2:eq(0)').attr("data-attribute").trim();
               prod = prod.replace("'", '').replace("'", '').replace("'", '');
            }
          }




        price = $s('.dealTile:eq('+ i +') div.priceBlock').find('span.a-color-base:eq(0)').text().trim();
             // console.log("Amazon Card"+price);
              price = price.split("&nbsp;").join("").trim();
              price = filter_price(price);

          if(PID != "" && price != "" && price != 0 && !isNaN(price)){
            arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
            //dropToSend.push(PID);
           // arrayToSend.push([PID,title,imgurl, price]);
          }

        }
      }
    }
  }




  if($s('.s-result-item').length > 0){
    var slider = $s('.s-result-item');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var prod = "";
    var image = "";
    var oos = 0;
    var brand="";
    var pantryprime=0;
    var maincat1="";
    var cat1="";
    var subcat="";
    var bsmaincat=0;
    var bscat=0;
    var bssubcat=0;
    var reviewcount=0;
    var reviewval=0;

    for(i=0;i<sliderLength;i++){
      price = 0;
      pantry=0;
      PID = "";
      prod = "";
      image = "";

      oos = 0;
      price_now = 0;
      if($s('.s-result-item:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
      pantry=1;
      if($s('.s-result-item:eq('+ i +')').length > 0){
        if($s('.s-result-item:eq('+ i +')').attr("data-asin")){
          PID = $s('.s-result-item:eq('+ i +')').attr("data-asin");
        }
        else if($s('.s-result-item:eq('+ i +') a').attr("href")){
          link = $s('.s-result-item:eq('+ i +') a').attr("href");
          if(link.split("/slredirect/picca").length > 1){
            link = $s('.s-result-item:eq('+ i +') a:eq(1)').attr("href");
          }
          if(link.split("amazon.in").length < 2){
            link = "www.amazon.in"+link;
          }
          PID = returnPID(link);

        }
        else{
          PID = "";
        }
        if(PID != ""){
          if($s('.s-result-item:eq('+ i +')').find('img').attr("srcset")){
            image = $s('.s-result-item:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
            if(image.split("1x").length > 1){
              image = image.split("1x");
              image = image[0]+"1x";
              image = image.trim();
            }
          }

          if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.s-result-item:eq('+ i +')').find('img').attr("src")){
            image = $s('.s-result-item:eq('+ i +')').find('img:eq(0)').attr("src").trim();
          }
          brand="";
          if($s('.s-result-item:eq('+ i +')').find('h2.s-line-clamp-1:eq(0)').length>0){
            brand = $s('.s-result-item:eq('+ i +')').find('h2.s-line-clamp-1:eq(0)').text().trim();
             brand = brand.replace("'", '');
          }

          if($s('.s-result-item:eq('+ i +')').find('h2:eq(1)').attr("aria-label")){
            prod = $s('.s-result-item:eq('+ i +')').find('h2:eq(1)').attr("aria-label").trim();
             prod = prod.replace("'", '');
          }
          if(prod == "" || prod == "undefined"){
            if($s('.s-result-item:eq('+ i +')').find('h2').text()){
              prod = $s('.s-result-item:eq('+ i +')').find('h2:eq(0)').text().trim();
               prod = prod.replace("'", '').replace("'", '').replace("'", '');
            }
          }
            if($s('.s-result-item:eq('+ i +')').find('.a-price-range').length>0 )
            continue;
          prod=brand+" "+prod;
prod=prod.trim();
          if($s('.s-result-item:eq('+ i +')').find('.a-icon-prime').length>0 )
          pantryprime=1;
   else  if($s('.s-result-item:eq('+ i +')').find('.s-eu-icon-amazon-pantry').length>0 )
          pantryprime=1;

var navlogo=$s('#nav-logo a.nav-logo-link').attr("aria-label");
if(navlogo=="Amazon Business")
{
  price = $s('.s-result-item:eq('+ i +') .a-link-normal.s-no-hover').find('.a-price:eq(0) .a-offscreen:eq(0)').text().trim();
        price = filter_price(price);
//  if($s('.s-result-item:eq('+ i +') .a-price-whole').length>0)
  //price = $s('.s-result-item:eq('+ i +')').find('.a-price:eq(0) .a-price-whole:eq(0)').text().trim();
}
else
price = $s('.s-result-item:eq('+ i +')').find('.a-price:eq(0) .a-price-whole:eq(0)').text().trim();
             // console.log("Amazon Card"+price);
            //  price = price.split("&nbsp;").join("").trim();
              price = filter_price(price);
              if($s('.s-result-item:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
              {
var coupondiscount=$s('.s-result-item:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
 if((coupondiscount.split("on").length < 2)){
   price=afterCouponPrice(price,coupondiscount);
 }
else {
  price=afterCouponPrice(price,"₹0");
}
}
if($s('.s-result-item:eq('+ i +')').find('.rush-component span.a-truncate-cut').length>0)
{
var coupondiscount1=$s('.s-result-item:eq('+ i +')').find('.rush-component span.a-truncate-cut').text().replace("Save","").replace("with Coupon","").trim();
//price=afterCouponPrice(price,coupondiscount1);
if((coupondiscount1.split("on").length < 2)){
  price=afterCouponPrice(price,coupondiscount1);
}
else {
 price=afterCouponPrice(price,"₹0");
}
}
  if($s('.s-result-item:eq('+ i +') div.a-spacing-top-micro:eq(0) a.a-popover-trigger').length>0 )
  {
    reviewval=$s('.s-result-item:eq('+ i +') div.a-spacing-top-micro:eq(0) span:eq(0)').text();
    reviewcount=$s('.s-result-item:eq('+ i +') div.a-spacing-top-micro:eq(0) a.s-underline-text.s-underline-link-text').attr("aria-label").replace(" ratings","");
    reviewcount=filter_price(reviewcount);
  }

          if(PID != "" && price != "" && price != 0 && !isNaN(price)  && pantryprime && PID != "glance" && PID != "product"){
            arrayToSend.push([PID, prod, image,price,oos,seller,pantry,maincat1,cat1,subcat,bsmaincat,bscat,bssubcat,reviewcount,reviewval]);
            //dropToSend.push(PID);
           // arrayToSend.push([PID,title,imgurl, price]);
           pantryprime=0;
          }

        }
      }
    }
  }
    ///

  // dealContainer

//added to fetch from other pages like categories
if($s('.acs-product-block--default').length > 0){
  var slider = $s('.acs-product-block--default');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;
  var prod = "";
  var image = "";
  var oos = 0;
  var brand="";
  var pantryprime=0;

  for(i=0;i<sliderLength;i++){
    price = 0;
    pantry=0;
    PID = "";
    prod = "";
    image = "";

    oos = 0;
    price_now = 0;
    if($s('.acs-product-block--default:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
    pantry=1;
    if($s('.acs-product-block--default:eq('+ i +')').length > 0){
      if($s('.acs-product-block--default:eq('+ i +')').attr("data-asin")){
        PID = $s('.acs-product-block--default:eq('+ i +')').attr("data-asin");
      }
      else if($s('.acs-product-block--default:eq('+ i +') a').attr("href")){
        link = $s('.acs-product-block--default:eq('+ i +') a').attr("href");
        if(link.split("/slredirect/picca").length > 1){
          link = $s('.acs-product-block--default:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link.split("amazon.in").length < 2){
          link = "www.amazon.in"+link;
        }
        PID = returnPID(link);

      }
      else{
        PID = "";
      }
      if(PID != ""){
        if($s('.acs-product-block--default:eq('+ i +')').find('img').attr("srcset")){
          image = $s('.acs-product-block--default:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
          if(image.split("1x").length > 1){
            image = image.split("1x");
            image = image[0]+"1x";
            image = image.trim();
          }
        }

        if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.acs-product-block--default:eq('+ i +')').find('img').attr("src")){
          image = $s('.acs-product-block--default:eq('+ i +')').find('img:eq(0)').attr("src").trim();
        }
        if($s('.acs-product-block--default:eq('+ i +')').find('h5').length>0){
          brand = $s('.acs-product-block--default:eq('+ i +')').find('h5:eq(0)').text().trim();
           brand = brand.replace("'", '');
        }

        if($s('.acs-product-block--default:eq('+ i +')').find('span.a-truncate-full').length>0){
          prod = $s('.acs-product-block--default:eq('+ i +')').find('span.a-truncate-full').text().trim();
           prod = prod.replace("'", '');
        }
        if(prod == "" || prod == "undefined"){
          if($s('.acs-product-block--default:eq('+ i +')').find('h2').text()){
            prod = $s('.acs-product-block--default:eq('+ i +')').find('h2:eq(0)').text().trim();
             prod = prod.replace("'", '').replace("'", '').replace("'", '');
          }
        }
        if($s('.acs-product-block--default:eq('+ i +')').find('.a-price-range').length>0 )
        continue;
        prod=brand+" "+prod;
prod=prod.trim();
        if($s('.acs-product-block--default:eq('+ i +')').find('.a-icon-prime').length>0 )
        pantryprime=1;
 else  if($s('.acs-product-block--default:eq('+ i +')').find('.s-eu-icon-amazon-pantry').length>0 )
        pantryprime=1;


      price = $s('.acs-product-block--default:eq('+ i +')').find('.a-price .a-offscreen:eq(0)').text().trim();
           // console.log("Amazon Card"+price);
            price = price.split("&nbsp;").join("").trim();
            price = filter_price(price);
            if($s('.acs-product-block--default:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
            {
var coupondiscount=$s('.acs-product-block--default:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
price=afterCouponPrice(price,coupondiscount);
}
/*if($s('.acs-product-block--default:eq('+ i +')').find('.rush-component span.a-truncate-cut').length>0)
{
var coupondiscount1=$s('.acs-product-block--default:eq('+ i +')').find('.rush-component span.a-truncate-cut').text().replace("Save","").replace("with Coupon","").trim();
price=afterCouponPrice(price,coupondiscount1);
}*/


        if(PID != "" && price != "" && price != 0 && !isNaN(price) && pantryprime && PID != "glance" && PID != "product"){
          arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
          //dropToSend.push(PID);
         // arrayToSend.push([PID,title,imgurl, price]);
         pantryprime=0;
        }

      }
    }
  }
}

if($s('.apb-browse-searchresults-product').length > 0){
  var slider = $s('.apb-browse-searchresults-product');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;
  var prod = "";
  var image = "";
  var oos = 0;
  var brand="";
  var pantryprime=0;

  for(i=0;i<sliderLength;i++){
    price = 0;
    pantry=0;
    PID = "";
    prod = "";
    image = "";

    oos = 0;
    price_now = 0;
    if($s('.apb-browse-searchresults-product:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
    pantry=1;
    if($s('.apb-browse-searchresults-product:eq('+ i +')').length > 0){
      if($s('.apb-browse-searchresults-product:eq('+ i +')').attr("data-asin")){
        PID = $s('.apb-browse-searchresults-product:eq('+ i +')').attr("data-asin");
      }
      else if($s('.apb-browse-searchresults-product:eq('+ i +') a').attr("href")){
        link = $s('.apb-browse-searchresults-product:eq('+ i +') a').attr("href");
        if(link.split("/slredirect/picca").length > 1){
          link = $s('.apb-browse-searchresults-product:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link.split("amazon.in").length < 2){
          link = "www.amazon.in"+link;
        }
        PID = returnPID(link);

      }
      else{
        PID = "";
      }
      if(PID != ""){
        if($s('.apb-browse-searchresults-product:eq('+ i +')').find('img').attr("srcset")){
          image = $s('.apb-browse-searchresults-product:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
          if(image.split("1x").length > 1){
            image = image.split("1x");
            image = image[0]+"1x";
            image = image.trim();
          }
        }
        if($s('.apb-browse-searchresults-product:eq('+ i +')').find('.a-price-range').length>0 )
        continue;
        if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.apb-browse-searchresults-product:eq('+ i +')').find('img').attr("src")){
          image = $s('.apb-browse-searchresults-product:eq('+ i +')').find('img:eq(0)').attr("src").trim();
        }
        if($s('.apb-browse-searchresults-product:eq('+ i +')').find('h5').length>0){
          brand = $s('.apb-browse-searchresults-product:eq('+ i +')').find('h5:eq(0)').text().trim();
           brand = brand.replace("'", '');
        }

        if($s('.apb-browse-searchresults-product:eq('+ i +')').find('span.a-truncate-full').length>0){
          prod = $s('.apb-browse-searchresults-product:eq('+ i +')').find('span.a-truncate-full').text().trim();
           prod = prod.replace("'", '');
        }
        if(prod == "" || prod == "undefined"){
          if($s('.apb-browse-searchresults-product:eq('+ i +')').find('h2').text()){
            prod = $s('.apb-browse-searchresults-product:eq('+ i +')').find('h2:eq(0)').text().trim();
             prod = prod.replace("'", '').replace("'", '').replace("'", '');
          }
        }
        prod=brand+" "+prod;
prod=prod.trim();
        if($s('.apb-browse-searchresults-product:eq('+ i +')').find('.a-icon-prime').length>0 )
        pantryprime=1;
 else  if($s('.apb-browse-searchresults-product:eq('+ i +')').find('.s-eu-icon-amazon-pantry').length>0 )
        pantryprime=1;


      price = $s('.apb-browse-searchresults-product:eq('+ i +')').find('.a-price .a-offscreen:eq(0)').text().trim();
           // console.log("Amazon Card"+price);
            price = price.split("&nbsp;").join("").trim();
            price = filter_price(price);
            if($s('.apb-browse-searchresults-product:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
            {
var coupondiscount=$s('.apb-browse-searchresults-product:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
price=afterCouponPrice(price,coupondiscount);
}
/*if($s('.apb-browse-searchresults-product:eq('+ i +')').find('.rush-component span.a-truncate-cut').length>0)
{
var coupondiscount1=$s('.apb-browse-searchresults-product:eq('+ i +')').find('.rush-component span.a-truncate-cut').text().replace("Save","").replace("with Coupon","").trim();
price=afterCouponPrice(price,coupondiscount1);
}*/


        if(PID != "" && price != "" && price != 0 && !isNaN(price)  && pantryprime && PID != "glance" && PID != "product"){
          arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
          //dropToSend.push(PID);
         // arrayToSend.push([PID,title,imgurl, price]);
         pantryprime=0;
        }

      }
    }
  }
}

if($s('.octopus-pc-item').length > 0){
  var slider = $s('.octopus-pc-item');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;
  var prod = "";
  var image = "";
  var oos = 0;
  var brand="";
  var pantryprime=0;

  for(i=0;i<sliderLength;i++){
    price = 0;
    pantry=0;
    PID = "";
    prod = "";
    image = "";

    oos = 0;
    price_now = 0;
    if($s('.octopus-pc-item:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
    pantry=1;
    if($s('.octopus-pc-item:eq('+ i +')').length > 0){
      if($s('.octopus-pc-item:eq('+ i +')').attr("data-asin")){
        PID = $s('.octopus-pc-item:eq('+ i +')').attr("data-asin");
      }
      else if($s('.octopus-pc-item:eq('+ i +') a').attr("href")){
        link = $s('.octopus-pc-item:eq('+ i +') a').attr("href");
        if(link.split("/slredirect/picca").length > 1){
          link = $s('.octopus-pc-item:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link.split("amazon.in").length < 2){
          link = "www.amazon.in"+link;
        }
        PID = returnPID(link);

      }
      else{
        PID = "";
      }
      if(PID != ""){
        if($s('.octopus-pc-item:eq('+ i +')').find('img').attr("srcset")){
          image = $s('.octopus-pc-item:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
          if(image.split("1x").length > 1){
            image = image.split("1x");
            image = image[0]+"1x";
            image = image.trim();
          }
        }
        if($s('.octopus-pc-item:eq('+ i +')').find('.a-price-range').length>0 )
        continue;
        if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.octopus-pc-item:eq('+ i +')').find('img').attr("src")){
          image = $s('.octopus-pc-item:eq('+ i +')').find('img:eq(0)').attr("src").trim();
        }
        if($s('.octopus-pc-item:eq('+ i +')').find('h5').length>0){
          brand = $s('.octopus-pc-item:eq('+ i +')').find('h5:eq(0)').text().trim();
           brand = brand.replace("'", '');
        }

        if($s('.octopus-pc-item:eq('+ i +')').find('span.a-truncate-full').length>0){
          prod = $s('.octopus-pc-item:eq('+ i +')').find('span.a-truncate-full').text().trim();
           prod = prod.replace("'", '');
        }
        if(prod == "" || prod == "undefined"){
          if($s('.octopus-pc-item:eq('+ i +') .octopus-pc-asin-title').find('span').text()){
            prod = $s('.octopus-pc-item:eq('+ i +') .octopus-pc-asin-title').find('span').text().trim();
             prod = prod.replace("'", '').replace("'", '').replace("'", '');
          }
        }
        prod=brand+" "+prod;
prod=prod.trim();
        if($s('.octopus-pc-item:eq('+ i +')').find('.a-icon-prime').length>0 )
        pantryprime=1;
 else  if($s('.octopus-pc-item:eq('+ i +')').find('.s-eu-icon-amazon-pantry').length>0 )
        pantryprime=1;


      price = $s('.octopus-pc-item:eq('+ i +')').find('.a-price .a-offscreen:eq(0)').text().trim();
           // console.log("Amazon Card"+price);
            price = price.split("&nbsp;").join("").trim();
            price = filter_price(price);
            if($s('.octopus-pc-item:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
            {
var coupondiscount=$s('.octopus-pc-item:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
price=afterCouponPrice(price,coupondiscount);
}
/*if($s('.octopus-pc-item:eq('+ i +')').find('.rush-component span.a-truncate-cut').length>0)
{
var coupondiscount1=$s('.octopus-pc-item:eq('+ i +')').find('.rush-component span.a-truncate-cut').text().replace("Save","").replace("with Coupon","").trim();
price=afterCouponPrice(price,coupondiscount1);
}*/


        if(PID != "" && price != "" && price != 0 && !isNaN(price)  && pantryprime && PID != "glance" && PID != "product"){
          arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
          //dropToSend.push(PID);
         // arrayToSend.push([PID,title,imgurl, price]);
         pantryprime=0;
        }

      }
    }
  }
}

/*
if($s('.s-card-container').length > 0){
  var slider = $s('.s-card-container');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;
  var prod = "";
  var image = "";
  var oos = 0;
  var brand="";
  var pantryprime=0;

  for(i=0;i<sliderLength;i++){
    price = 0;
    pantry=0;
    PID = "";
    prod = "";
    image = "";

    oos = 0;
    price_now = 0;
    if($s('.s-card-container:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
    pantry=1;
    if($s('.s-card-container:eq('+ i +')').length > 0){
      if($s('.s-card-container:eq('+ i +')').attr("data-asin")){
        PID = $s('.s-card-container:eq('+ i +')').attr("data-asin");
      }
      else if($s('.s-card-container:eq('+ i +') .s-product-image-container a').attr("href")){
        link = $s('.s-card-container:eq('+ i +') .s-product-image-container a').attr("href");
        if(link.split("/slredirect/picca").length > 1){
          link = $s('.s-`card`-container:eq('+ i +') .s-product-image-container a:eq(1)').attr("href");
        }
        if(link.split("amazon.in").length < 2){
          link = "www.amazon.in"+link;
        }
        PID = returnPID(link);

      }
      else{
        PID = "";
      }
      if(PID != ""){
        if($s('.s-card-container:eq('+ i +')').find('img').attr("srcset")){
          image = $s('.s-card-container:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
          if(image.split("1x").length > 1){
            image = image.split("1x");
            image = image[0]+"1x";
            image = image.trim();
          }
        }

        if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.s-card-container:eq('+ i +')').find('img').attr("src")){
          image = $s('.s-card-container:eq('+ i +')').find('img:eq(0)').attr("src").trim();
        }
        if($s('.s-card-container:eq('+ i +')').find('h5').length>0){
          brand = $s('.s-card-container:eq('+ i +')').find('h5:eq(0)').text().trim();
           brand = brand.replace("'", '');
        }

        if($s('.s-card-container:eq('+ i +')').find('span.a-truncate-full').length>0){
          prod = $s('.s-card-container:eq('+ i +')').find('span.a-truncate-full').text().trim();
           prod = prod.replace("'", '');
        }
        if(prod == "" || prod == "undefined"){
          if($s('.s-card-container:eq('+ i +')').find('h2').text()){
            prod = $s('.s-card-container:eq('+ i +')').find('h2:eq(0)').text().trim();
             prod = prod.replace("'", '').replace("'", '').replace("'", '');
          }
        }
        prod=brand+" "+prod;
prod=prod.trim();
        if($s('.s-card-container:eq('+ i +')').find('.a-icon-prime').length>0 )
        pantryprime=1;
 else  if($s('.s-card-container:eq('+ i +')').find('.s-eu-icon-amazon-pantry').length>0 )
        pantryprime=1;


      price = $s('.s-card-container:eq('+ i +')').find('.a-price .a-offscreen:eq(0)').text().trim();
           // console.log("Amazon Card"+price);
            price = price.split("&nbsp;").join("").trim();
            price = filter_price(price);
            if($s('.s-card-container:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
            {
var coupondiscount=$s('.s-card-container:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
price=afterCouponPrice(price,coupondiscount);
}



        if(PID != "" && price != "" && price != 0 && !isNaN(price) && pantryprime && PID != "glance" && PID != "product"){
          arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
          //dropToSend.push(PID);
         // arrayToSend.push([PID,title,imgurl, price]);
         pantryprime=0;
        }

      }
    }
  }
}*/



if($s('.expandableGrid').length > 0){
  var slider = $s('.expandableGrid');
  var sliderLength = slider.length;
  var link;
  var price;
  var PID;
  var prod = "";
  var image = "";
  var oos = 0;
  var brand="";
  var pantryprime=0;

  for(i=0;i<sliderLength;i++){
    price = 0;
    pantry=0;
    PID = "";
    prod = "";
    image = "";

    oos = 0;
    price_now = 0;
    if($s('.expandableGrid:eq('+ i +') .s-eu-icon-amazon-pantry').length > 0)
    pantry=1;
    if($s('.expandableGrid:eq('+ i +')').length > 0){
      if($s('.expandableGrid:eq('+ i +')').attr("data-asin")){
        PID = $s('.expandableGrid:eq('+ i +')').attr("data-asin");
      }
      else if($s('.expandableGrid:eq('+ i +') a').attr("href")){
        link = $s('.expandableGrid:eq('+ i +') a').attr("href");
        if(link.split("/slredirect/picca").length > 1){
          link = $s('.expandableGrid:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link.split("amazon.in").length < 2){
          link = "www.amazon.in"+link;
        }
        PID = returnPID(link);

      }
      else{
        PID = "";
      }
      if(PID != ""){
        if($s('.expandableGrid:eq('+ i +')').find('img').attr("srcset")){
          image = $s('.expandableGrid:eq('+ i +')').find('img:eq(0)').attr("srcset").trim();
          if(image.split("1x").length > 1){
            image = image.split("1x");
            image = image[0]+"1x";
            image = image.trim();
          }
        }
        if($s('.expandableGrid:eq('+ i +')').find('.a-price-range').length>0 )
        continue;
        if( (image == "" || image.split(".jpg").length < 2 || image.split(".jpeg").length < 2 || image.split(".png").length < 2) && $s('.expandableGrid:eq('+ i +')').find('img').attr("src")){
          image = $s('.expandableGrid:eq('+ i +')').find('img:eq(0)').attr("src").trim();
          prod= $s('.expandableGrid:eq('+ i +')').find('img:eq(0)').attr("alt").trim();
        }
        if($s('.expandableGrid:eq('+ i +')').find('h5').length>0){
          brand = $s('.expandableGrid:eq('+ i +')').find('h5:eq(0)').text().trim();
           brand = brand.replace("'", '');
        }

        if($s('.expandableGrid:eq('+ i +')').find('span.a-truncate-full').length>0){
          prod = $s('.expandableGrid:eq('+ i +')').find('span.a-truncate-full').text().trim();
           prod = prod.replace("'", '');
        }
        if(prod == "" || prod == "undefined"){
          if($s('.expandableGrid:eq('+ i +')').find('h2').text()){
            prod = $s('.expandableGrid:eq('+ i +')').find('h2:eq(0)').text().trim();
             prod = prod.replace("'", '').replace("'", '').replace("'", '');
          }
        }
        prod=brand+" "+prod;
prod=prod.trim();

        pantryprime=1;



      price = $s('.expandableGrid:eq('+ i +')').find('.a-link-normal span.a-color-price span:eq(0)').text().trim();
           // console.log("Amazon Card"+price);
            price = price.split("&nbsp;").join("").trim();
            price = filter_price(price);
            if($s('.expandableGrid:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').length>0)
            {
var coupondiscount=$s('.expandableGrid:eq('+ i +')').find('.rush-component span.s-coupon-highlight-color').text().replace("Save","").trim();
price=afterCouponPrice(price,coupondiscount);
}



        if(PID != "" && price != "" && price != 0 && !isNaN(price) && PID != "glance" && PID != "product"){
          arrayToSend.push([PID, prod, image,price,oos,seller,pantry]);
          //dropToSend.push(PID);
         // arrayToSend.push([PID,title,imgurl, price]);
         pantryprime=0;
        }

      }
    }
  }
}


    arrayToSend = JSON.stringify(arrayToSend);
    console.log("2Amazon NewFinal Price"+arrayToSend);
       if (arrayToSend.length > 0)
       {
          if((xx.search("&flk=1")<0)&&(arrayToSend.length>5))
        {
    chrome.runtime.sendMessage({
        sksmode: "amazon",
        pairs: arrayToSend
    }, function (response) {

      });
        }
       }

}

function afterCouponPrice(currentPrice,cou)
{


 if(cou.split("₹").length > 1){
var finalcouponamount=filter_price(cou);
currentPrice=Math.round(currentPrice-finalcouponamount);
if (currentPrice<0) {
currentPrice=0;
}
}
   if(cou.split("%").length > 1){
var finalcouponamount=cou.replace("%", "");
currentPrice=Math.round(currentPrice-((currentPrice*finalcouponamount)/100));

}
return currentPrice;

}

function filter_price(pr) {
  pr=pr+"";
    if (pr.split("Rs.")
        .length > 1) {
        pr = pr.split("Rs.")[1];
    }
    if (pr.split("Rs")
        .length > 1) {
        pr = pr.split("Rs")[1];
    }
    if (pr.split("INR")
        .length > 1) {
        pr = pr.split("INR")[1];
    }
    if (pr.split("Inr")
        .length > 1) {
        pr = pr.split("Inr")[1];
    }
    if (pr.split("RS.")
        .length > 1) {
        pr = pr.split("RS.")[1];
    }
    if (pr.split("RS")
        .length > 1) {
        pr = pr.split("RS")[1];
    }
    if (pr.split("R")
        .length > 1) {
        pr = pr.split("R")[1];
    }
    if (pr.split("`")
        .length > 1) {
        pr = pr.split("`")[1];
    }
      if(pr.split("₹").length > 1){
    pr = pr.split("₹")[1];
  }
    if (pr.split("MRP")
        .length > 1) {
        pr = pr.split("MRP")[1];
    }
    if (pr.split("mrp")
        .length > 1) {
        pr = pr.split("mrp")[1];
    }
    if (pr.split("/")
        .length > 1) {
        pr = pr.split("/")[0];
    }
    if (pr.split("â‚¹")
        .length > 1) {
        pr = pr.split("â‚¹")[1].trim();
    }
        if (pr.split("₹")
        .length > 1) {
        pr = pr.split("₹")[1].trim();
    }
    if (pr.split("-")
        .length > 1) {
        pr = 0;
    }
    pr = pr.split(",")
        .join("")
        .split(".")[0]
        .trim().replace(",","");
  pr = Number(pr);
    if(isNaN(pr)){
      price = 0;
    }
    return pr;
}
function returnPID(link){

  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
  }
  if(pid.split("?ASIN=").length > 1){
    pid = pid.split("?ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("&ASIN=").length > 1){
    pid = pid.split("&ASIN=")[1];
    if(pid.split("/").length > 1){
      pid = pid.split("/")[0];
    }
  }
  else if(pid.split("/product/").length > 1){
    pid = pid.split("/product/")[1];
  }
  else if(pid.split("/dp/").length > 1){
    pid = pid.split("/dp/")[1];
  }
  else{
    pid = "";
  }

  if(pid != ""){
    if(pid.split("?").length > 1){
      pid = pid.split("?")[0];
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0];
    }
    if(pid.split("/ref").length > 1){
      pid = pid.split("/ref")[0];
    }
    if(pid.split("/").length > 1){
      pid1 = pid.split("/");
      pid1 = pid1[pid1.length - 1];
      if(pid1 == ""){
        pid = pid.split("/");
        pid = pid[pid.length - 2];
      }
      else {
        pid = pid1;
      }
    }

    if(link.split('amazon.in').length < 2){
      pid = "";
    }
    if(link == ""){
      pid = "";
    }
    if(pid != pid.toUpperCase()){
      pid = "";
    }
  }
  return pid;
}
