
document.querySelector("body").addEventListener('click', function(e) {
  $s = jQuery.noConflict();
  var anchor = e.target.closest('div.r2CdBx a');
  if(anchor !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor1 = e.target.closest('div.zg-M3Z');
  if(anchor1 !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor2 = e.target.closest('a._2SqgSY');
  if(anchor2 !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor3 = e.target.closest('div.QCKZip.hpLdC3');
  if(anchor3 !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor4 = e.target.closest('div._1fwVde a._3QN6WI');
  if(anchor4 !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor5 = e.target.closest('li._3V2wfe');
  if(anchor5 !== null) {
    $s("#containerMainPTID").remove();
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
window.setTimeout(function() { sendPairs(0);}, 3000);
  }
  var anchor6 = e.target.closest('a._1AcS-S');
  if(anchor6 !== null) {
    //  console.log("click event fired anchor");setTimeout(function() { congratflippt(msec-1000);}, 1000);
  window.setTimeout(function() { sendPairs(1);}, 3000);
}
}, false);

$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
var cPrice=0;
var cTitle="";
var cPID="";
iii =0;
 var oos = 0;
abh = window.location.href.split('?')[0];
function getPrice()
{

  var currentPrice=$s("._1MVZfWFYBd5p7-LIqNwH2B ._3ZYEWOIFMWQhXjbUofVeRw ._2MUtYGbDTFIAaSTRIJh0jo ._37U4_gnOsEFLxCAC4Sn1rO").text().replace(/[^\d.]/g, '').replace(/^\./, '');
  cPrice=currentPrice;
       // return currentPrice;
}
getPrice();
function getTitle()
{

  var  title=$s("h1").text();
  cTitle=title;
        //return title;
}
getTitle();
function getsiteName()
{

        return "Flipkart";
}
function getPID()
{
  PID = window.location.href;
    if (PID.split("pid=")[1]) {
        PID = PID.split("pid=")[1].split("&")[0];
        cPID= PID;
}
}
getPID();
window.setTimeout(function() { sendPairs(1);}, 5000);
// window.setTimeout(sendPairsFk, 8000);
    //window.setTimeout(sendPairsFk, 16000);





function sendPairs(calltype)
{
    $ = jQuery.noConflict();
    arrayToSend = [];
  dropToSend = [];
    var cPrice=0;
var cTitle="";
var cPID="";
var maincat1="";
var cat1="";
var subcat="";
var bsmaincat=0;
var bscat=0;
var bssubcat=0;
var cur_url = window.location.href;
  if(cur_url.split("/p/").length > 1){

  var prod = getProd().replace("'", "").replace("'", "").replace("'", "");
  var image = getImage();
  var myPrice = getPriceN();
  var cur_url = "";
  var avail = getAvailability();
  if(avail == 0){
    var current_status = 1;
  }
  else if(avail == 1){
    current_status = 0;
  }
  else if(avail == -1){
    current_status = 2;
  }
  var seller=$s('#sellerName span span').text();
  var supermarket=$s('div._1joEet ._1HEvv0:eq(1) a._1KHd47').text();
  if ($s("div._1MR4o5").length>0)
  {
    var cat="";
    var maincategory="";

    var category="";
var subcategory="";

//cat=$s("div._1MR4o5 _3GIHBu:eq(2)").text().replace("Best Sellers Rank:","");

maincategory=$s("div._1MR4o5 ._3GIHBu:eq(1) a").text();
//bsmaincat=filter_price(maincategory.split("in ")[0].trim());
//maincategory=maincategory.split("in ")[1].split("(")[0].trim().replace("Best Sellers Rank:","").trim();
category=$s("div._1MR4o5 ._3GIHBu:eq(2) a").text();
//bscat=filter_price(category.split(" in")[0].trim());
//category=category.split(" in")[1].trim().replace("Best Sellers Rank:","").trim();
subcat=$s("div._1MR4o5 ._3GIHBu:eq(3) a").text();

switch(maincategory) {
case "Kitchen, Cookware & Serveware":
maincat1="Home & Kitchen";
break;
case "Mobiles & Accessories":
maincat1="Electronics";
break;
case "Cameras & Accessories":
maincat1="Electronics";
break;
case "Wearable Smart Devices":
maincat1="Electronics";
break;
case "Computers":
maincat1="Computers";
break;
case "Baby Care":
maincat1="Baby";
break;
case "Bags, Wallets & Belts":
maincat1="Bags, Wallets and Luggage";
break;
case "Watches":
maincat1="Watches";
break;
case "Footwear":
maincat1="Shoes & Handbags";
break;
case "Clothing and Accessories":
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
case "Mobiles":
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
case "Computer Components":
cat1="Computer Components";
break;
case "Routers":
cat1="Routers";
break;
case "External Solid State Drives":
cat1="External SSD";
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
cat1="Mice";
break;
case "Televisions":
cat1="Smart TVs";
break;
case "Home Theater Systems":
cat1="Home Theaters";
break;
case "Home Cinema Projectors":
cat1="Projectors";
break;
case "Bluetooth Speakers":
cat1="Bluetooth Speakers";
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
cat1="Womens Watches";
break;
case "Men's Watches":
cat1="Mens Watches";
break;
case "Women's Jackets":
cat1="Womens Jackets";
break;
case "Men's Jackets":
cat1="Mens Jackets";
break;
default:
cat1=category;
// code block
}
switch(subcat) {
case "Inkjet Printers":
cat1="Printers";
break;
case "Mobiles":
cat1="Smartphones";
break;
case "Sofas":
cat1="Sofa";
break;
case "Laptops":
cat1="Laptops";
break;
case "Tablets":
cat1="Tablets";
break;
case "Computer Components":
cat1="Computer Components";
break;
case "Routers":
cat1="Routers";
break;
case "External Solid State Drives":
cat1="External SSD";
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
case "Mouse":
cat1="Mouse";
break;
case "Televisions":
cat1="Smart TVs";
break;
case "Home Theater Systems":
cat1="Home Theaters";
break;
case "Home Cinema Projectors":
cat1="Projectors";
break;
case "Speakers":
cat1="Speakers";
break;
case "In-Ear Headphones":
cat1="Headphones";
break;
case "DSLR & Mirrorless":
cat1="DSLR Cameras";
break;
case "Security Cameras":
cat1="CCTV";
break;
case "Baby Diapers":
cat1="Diapers";
break;
case "IFB Home Appliances":
cat1="Washing Machines";
break;
case "Water purifiers"://done
cat1="Water purifiers";
break;
case "Washing Machines":
cat1="Washing Machines";
break;
case "Air Conditioners"://done
cat1="ACs";
break;
case "Refrigerators"://done
cat1="Refrigerators";
break;
case "Microwave Ovens":
cat1="Microwave Ovens";
break;
case "Suitcases":
cat1="Suitcases";
break;
case "Jackets":
cat1="Jackets";
break;
default:
cat1=cat1;
// code block
}
  console.log("NewFlipkart:"+maincat1+bsmaincat+cat1+bscat+subcat);
  }
  var pantrystat=0;
  if(supermarket=="Grocery")
  pantrystat=1;
  var pidFlipkart = getPIDN();
    pidFlipkart = pidFlipkart.trim();
     cPrice=myPrice;
        cPID=pidFlipkart;
        cTitle=prod;
        var marketplace="FLIPKART";
        var abc="";
          var urlParams1 = new URLSearchParams(window.location.search);
         abc=urlParams1.get('marketplace');
         if(abc=="GROCERY")
         marketplace="GROCERY";
         var lid=urlParams1.get('lid');
         if(String(lid).length<8)
         lid="";
          seller="marketplace="+marketplace+"&lid="+lid;
     console.log("cPrice:"+cPrice+"cPID:"+cPID+"cTitle:"+cTitle);
     if(pidFlipkart != "" && myPrice != "" && myPrice != 0)
         {
          if(calltype)
          arrayToSend.push([pidFlipkart,prod, image,myPrice, current_status,seller,pantrystat,maincat1,cat1,subcat,bsmaincat,bscat,bssubcat]);
         }
  }
  var seller="5";
  var pantrystat=0;
 /* if($('*[class^="_2kSfQ4"]').length > 0){
    var slider = $('*[class^="_2kSfQ4"]');
    var sliderLength = slider.length;
    var link;
    var price = 0;
    var prod = "";
    var image = "";
    var oos = 100;
    var PID;
    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      image = "";
      oos = 100;
      prod = "";
      link = "";
      PID = "";
      if($('*[class^="_2kSfQ4"]')[i].querySelectorAll("a").length > 0){
        link = $('*[class^="_2kSfQ4"]')[i].querySelectorAll("a")[0].getAttribute("href");
        prod = $('*[class^="_2kSfQ4"]')[i].querySelectorAll("a")[0].getAttribute("title").replace("'", "").replace("'", "").replace("'", "");
        if(link.split("/p/").length < 2){
          link = "";
        }

        if(link != ""){
          PID = returnPID(link);
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        //price
        if($('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1vC4OE"]').length > 0){
          price = $('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1vC4OE"]')[0].innerText.trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }

        //image
        if($('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1Nyyb"]').length > 0 && $('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1Nyyb"]')[0].getAttribute("src")){
          image = $('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1Nyyb"]')[0].getAttribute("src").trim();
        }
      /*  if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }

        //oos
        if($('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]').length > 0){
          oos1 = $('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]')[0].innerText;
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 2;
          }
          else{
            oos = 0;
          }
        }
        else if($('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="rIHMVr"]').length > 0){
          oos1 = $('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="rIHMVr"]')[0].innerText;
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }

       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
          arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
          //dropToSend.push(PID);[PID,title,imgurl, price,oos])
        }

    } // for ends

  }
}*/

      //added on 18th Nov 2020

      if($('._4ddWXP').length > 0){
  var slider = $('._4ddWXP');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._4ddWXP:eq('+ i +') a').length > 0){
      link = $('._4ddWXP:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('._4ddWXP:eq('+ i +')').find('._25b18c').length > 0 && $('._4ddWXP:eq('+ i +')').find('._25b18c ._30jeq3').length > 0){
          price = $('._4ddWXP:eq('+ i +')').find('._25b18c ._30jeq3:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('._4ddWXP:eq('+ i +')').find('._30jeq3').length > 0){
          price = $('._4ddWXP:eq('+ i +')').find('._30jeq3:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('._4ddWXP:eq('+ i +')').find('img').attr("src")){
          image = $('._4ddWXP:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._4ddWXP:eq('+ i +')').find('img').attr("data-src")){
          image = $('._4ddWXP:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod

         if($('._4ddWXP:eq('+ i +')').find('.s1Q9rs').length > 0){
          prod = $('._4ddWXP:eq('+ i +')').find('.s1Q9rs:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else     if($('._4ddWXP:eq('+ i +')').find('a._2rpwqI').length > 0){
              prod = $('._4ddWXP:eq('+ i +')').find('a._2rpwqI:eq(0)').attr("title").text().replace("'", "").replace("'", "").replace("'", "");

            }
        else if($('._4ddWXP:eq('+ i +')').find('.s1Q9rs').length > 0){
          prod = $('._4ddWXP:eq('+ i +')').find('.s1Q9rs:eq(0)').attr("title").text().replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('._4ddWXP:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('._4ddWXP:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").text().replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('._4ddWXP:eq('+ i +')').find('._3G6awp').length > 0){
          oos1 = $('._4ddWXP:eq('+ i +')').find('._3G6awp:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOC").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
            else if(oos1.toUpperCase().split("TEMPORARILY UNAVAILA").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("COMING SOO").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('._4ddWXP:eq('+ i +')').find('._3G6awp').length > 0){
          oos1 = $('._4ddWXP:eq('+ i +')').find('._3G6awp:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOO").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}

      if($('._13oc-S').length > 0){
  var slider = $('._13oc-S');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._13oc-S:eq('+ i +') a').length > 0){
      link = $('._13oc-S:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('._13oc-S:eq('+ i +')').find('._25b18c').length > 0 && $('._13oc-S:eq('+ i +')').find('._25b18c ._30jeq3._1_WHN1').length > 0){
          price = $('._13oc-S:eq('+ i +')').find('._25b18c ._30jeq3._1_WHN1:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('._13oc-S:eq('+ i +')').find('._30jeq3._1_WHN1').length > 0){
          price = $('._13oc-S:eq('+ i +')').find('._30jeq3._1_WHN1:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('._13oc-S:eq('+ i +')').find('img').attr("src")){
          image = $('._13oc-S:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._13oc-S:eq('+ i +')').find('img').attr("data-src")){
          image = $('._13oc-S:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('._13oc-S:eq('+ i +')').find('._4rR01T').length > 0){
          prod = $('._13oc-S:eq('+ i +')').find('._4rR01T:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('._13oc-S:eq('+ i +')').find('._396cs4._3exPp9').length > 0){
          prod = $('._13oc-S:eq('+ i +')').find('._396cs4._3exPp9:eq(0)').attr("alt").replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('._13oc-S:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('._13oc-S:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('._13oc-S:eq('+ i +')').find('._3G6awp').length > 0){
          oos1 = $('._13oc-S:eq('+ i +')').find('._3G6awp:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("TEMPORARILY UNAVAILA").length > 1){
            oos = 1;
          }
             else if(oos1.toUpperCase().split("COMING SOO").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('._13oc-S:eq('+ i +')').find('._3G6awp').length > 0){
          oos1 = $('._13oc-S:eq('+ i +')').find('._3G6awp:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}

//20 Dec 2020
if($('._1xHGtK._373qXS').length > 0){
var slider = $('._1xHGtK._373qXS');
var sliderLength = slider.length;
var link;
var price = 0;
var prod = "";
var image = "";
var oos = 100;
var PID;
for(i=0;i<sliderLength;i++){
price = "";
PID = "";
image = "";
oos = 100;
prod = "";
link = "";
PID = "";
if($('._1xHGtK._373qXS:eq('+ i +') a').length > 0){
link = $('._1xHGtK._373qXS:eq('+ i +') a:eq(0)').attr('href');
if(link.split("/p/").length < 2){
  link = "";
}

if(link != ""){
  PID = returnPID(link);
}
else{
  PID = "";
}
}
var marketplace="FLIPKART";
var abc="";
  var urlParams1 = new URLSearchParams(link);
 abc=urlParams1.get('marketplace');
 if(abc=="GROCERY")
 marketplace="GROCERY";
var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
 seller="marketplace="+marketplace+"&lid="+lid;
if(PID != ""){
  //price
  if($('._1xHGtK._373qXS:eq('+ i +')').find('._25b18c').length > 0 && $('._1xHGtK._373qXS:eq('+ i +')').find('._25b18c ._30jeq3').length > 0){
    price = $('._1xHGtK._373qXS:eq('+ i +')').find('._25b18c ._30jeq3:eq(0)').text().trim();
    price = price.split(",").join("").trim();
    price = filter_price(price);

  }
  else if($('._1xHGtK._373qXS:eq('+ i +')').find('._30jeq3._1_WHN1').length > 0){
    price = $('._1xHGtK._373qXS:eq('+ i +')').find('._30jeq3._1_WHN1:eq(0)').text().trim();
    price = price.split(",").join("").trim();
    price = filter_price(price);

  }
  //image
  // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
  if($('._1xHGtK._373qXS:eq('+ i +')').find('img').attr("src")){
    image = $('._1xHGtK._373qXS:eq('+ i +')').find('img:eq(0)').attr("src");
  }
  else if($('._1xHGtK._373qXS:eq('+ i +')').find('img').attr("data-src")){
    image = $('._1xHGtK._373qXS:eq('+ i +')').find('img:eq(0)').attr("data-src");
  }
  else{
    image = "";
  }
  if(image.split("data:image").length > 1){
    image = "";
  }
  // prod
  if($('._1xHGtK._373qXS:eq('+ i +')').find('._2WkVRV').length > 0){
  prod = $('._1xHGtK._373qXS:eq('+ i +')').find('._2WkVRV').text()+" "+$('._1xHGtK._373qXS:eq('+ i +')').find('a.IRpwTa:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

}
  else if($('._1xHGtK._373qXS:eq('+ i +')').find('._4rR01T').length > 0){
    prod = $('._1xHGtK._373qXS:eq('+ i +')').find('._4rR01T:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

  }
  else if($('._1xHGtK._373qXS:eq('+ i +')').find('._396cs4._3exPp9').length > 0){
    prod = $('._1xHGtK._373qXS:eq('+ i +')').find('._396cs4._3exPp9:eq(0)').attr("alt").replace("'", "").replace("'", "").replace("'", "");

  }
    else if($('._1xHGtK._373qXS:eq('+ i +')').find('.Zhf2z-').length > 0){
    prod = $('._1xHGtK._373qXS:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

  }


  //oos
  if($('._1xHGtK._373qXS:eq('+ i +')').find('._3G6awp').length > 0){
    oos1 = $('._1xHGtK._373qXS:eq('+ i +')').find('._3G6awp:eq(0)').text();
    if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
      oos = 1;
    }
    else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
      oos = 1;
    }
    else if(oos1.toUpperCase().split("TEMPORARILY UNAVAILA").length > 1){
      oos = 1;
    }
       else if(oos1.toUpperCase().split("COMING SOO").length > 1){
      oos = 1;
    }
    else{
      oos = 0;
    }
  }
  else if($('._1xHGtK._373qXS:eq('+ i +')').find('._3G6awp').length > 0){
    oos1 = $('._1xHGtK._373qXS:eq('+ i +')').find('._3G6awp:eq(0)').text();
    if(oos1.toUpperCase().split("COMING SOON").length > 1){
      oos = 1;
    }
    else{
      oos = 0;
    }
  }
  else{
    oos = 0;
  }
 /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
    prod = prod + " " + PID;
  }*/
 PID = PID.trim();
if(PID != "" && price != "" && price != 0){
   arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
   // dropToSend.push(PID);
  }

} // for ends

}
}
      // added on 13th July 2019
if($('*[class^="IIdQZO"]').length > 0){
  var slider = $('*[class^="IIdQZO"]');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('*[class^="IIdQZO"]').length > 0){
      link = $('*[class^="IIdQZO"]')[i].querySelectorAll("a")[0].getAttribute("href").toString();
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_1vC4OE"]').length > 0){
          price = $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_1vC4OE"]')[0].innerText.trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        if($('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_2B_pmu"]').length > 0){
          prod = $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_2B_pmu"]')[0].innerText.trim().replace("'", "").replace("'", "").replace("'", "")+" "+$('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_2mylT6"]')[0].innerText.trim().replace("'", "").replace("'", "").replace("'", "");
        }

        //image
        if($('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_3togXc"]').length > 0 && $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_3togXc"]')[0].getAttribute("src")){
          image = $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_3togXc"]')[0].getAttribute("src").trim();
        }
      /*  if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/

        //oos
        if($('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]').length > 0){
          oos1 = $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]')[0].innerText;
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 2;
          }
          else{
            oos = 0;
          }
        }
        else if($('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="rIHMVr"]').length > 0){
          oos1 = $('*[class^="IIdQZO"]')[i].querySelectorAll('*[class^="rIHMVr"]')[0].innerText;
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }

   PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
          arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}


if($('*[class^="_1UoZ"]').length > 0){
  var slider = $('*[class^="_1UoZ"]');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('*[class^="_1UoZ"]').length > 0){
      link = $('*[class^="_1UoZ"]')[i].querySelectorAll("a")[0].getAttribute("href").toString();
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1vC4OE"]').length > 0){
          price = $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1vC4OE"]')[0].innerText.trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        if($('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_3wU53"]').length > 0){
          prod = $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_3wU53"]')[0].innerText.trim().replace("'", "").replace("'", "").replace("'", "");
        }

        //image
        if($('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1Nyyb"]').length > 0 && $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1Nyyb"]')[0].getAttribute("src")){
          image = $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1Nyyb"]')[0].getAttribute("src").trim();
        }
      /*  if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/

        //oos
        if($('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]').length > 0){
          oos1 = $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1GJ2ZM"]')[0].innerText;
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 2;
          }
          else{
            oos = 0;
          }
        }
        else if($('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="rIHMVr"]').length > 0){
          oos1 = $('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="rIHMVr"]')[0].innerText;
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }

   PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
          arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}

if($('.zZCdz4').length > 0){
  var slider = $('.zZCdz4');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('.zZCdz4:eq('+ i +') a').length > 0){
      link = $('.zZCdz4:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('.zZCdz4:eq('+ i +')').find('._2EOB0J').length > 0 && $('.zZCdz4:eq('+ i +')').find('._2EOB0J ._3RTCM2').length > 0){
          price = $('.zZCdz4:eq('+ i +')').find('._2EOB0J ._3RTCM2:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('.zZCdz4:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('.zZCdz4:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('.zZCdz4:eq('+ i +')').find('img').attr("src")){
          image = $('.zZCdz4:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('.zZCdz4:eq('+ i +')').find('img').attr("data-src")){
          image = $('.zZCdz4:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('.zZCdz4:eq('+ i +')').find('._1Jd8bY').length > 0){
          prod = $('.zZCdz4:eq('+ i +')').find('._1Jd8bY:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.zZCdz4:eq('+ i +')').find('._1ib7_Y').length > 0){
          prod = $('.zZCdz4:eq('+ i +')').find('._1ib7_Y a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.zZCdz4:eq('+ i +')').find('.OiPjke').length > 0){
          prod = $('.zZCdz4:eq('+ i +')').find('.OiPjke').text().trim().replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('.zZCdz4:eq('+ i +')').find('._1GJ2ZM').length > 0){
          oos1 = $('.zZCdz4:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('.zZCdz4:eq('+ i +')').find('.rIHMVr').length > 0){
          oos1 = $('.zZCdz4:eq('+ i +')').find('.rIHMVr:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
          //dropToSend.push(PID);
        }

    } // for ends

  }
}

if($('._2kSfQ4').length > 0){
  var slider = $('._2kSfQ4');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._2kSfQ4:eq('+ i +') a').length > 0){
      link = $('._2kSfQ4:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('._2kSfQ4:eq('+ i +')').find('._2EOB0J').length > 0 && $('._2kSfQ4:eq('+ i +')').find('._2EOB0J ._3RTCM2').length > 0){
          price = $('._2kSfQ4:eq('+ i +')').find('._2EOB0J ._3RTCM2:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('._2kSfQ4:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('._2kSfQ4:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('._2kSfQ4:eq('+ i +')').find('img').attr("src")){
          image = $('._2kSfQ4:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._2kSfQ4:eq('+ i +')').find('img').attr("data-src")){
          image = $('._2kSfQ4:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('._2kSfQ4:eq('+ i +')').find('._1Jd8bY').length > 0){
          prod = $('._2kSfQ4:eq('+ i +')').find('._1Jd8bY:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('._2kSfQ4:eq('+ i +')').find('._1ib7_Y').length > 0){
          prod = $('._2kSfQ4:eq('+ i +')').find('._1ib7_Y a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('._2kSfQ4:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('._2kSfQ4:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('._2kSfQ4:eq('+ i +')').find('._1GJ2ZM').length > 0){
          oos1 = $('._2kSfQ4:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('._2kSfQ4:eq('+ i +')').find('.rIHMVr').length > 0){
          oos1 = $('._2kSfQ4:eq('+ i +')').find('.rIHMVr:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}
//added on 19aprl 24
if($('.slAVV4').length > 0){
  var slider = $('.slAVV4');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('.slAVV4:eq('+ i +') a').length > 0){
      link = $('.slAVV4:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length>8)
      {
     seller="marketplace="+marketplace+"&lid="+lid;
   }
   else {
    continue;
   }
    if(PID != ""){
        //price
        if($('.slAVV4:eq('+ i +')').find('.hl05eU').length > 0 && $('.slAVV4:eq('+ i +')').find('.hl05eU  .Nx9bqj').length > 0){
          price = $('.slAVV4:eq('+ i +')').find('.hl05eU .Nx9bqj:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('.slAVV4:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('.slAVV4:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('.slAVV4:eq('+ i +')').find('img').attr("src")){
          image = $('.slAVV4:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('.slAVV4:eq('+ i +')').find('img').attr("data-src")){
          image = $('.slAVV4:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('.slAVV4:eq('+ i +')').find('.wjcEIp').length > 0){
          prod = $('.slAVV4:eq('+ i +')').find('.wjcEIp:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.slAVV4:eq('+ i +')').find('._1ib7_Y').length > 0){
          prod = $('.slAVV4:eq('+ i +')').find('._1ib7_Y a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('.slAVV4:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('.slAVV4:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('.slAVV4:eq('+ i +')').find('.vfSpSs').length > 0){
          oos1 = $('.slAVV4:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('.slAVV4:eq('+ i +')').find('.Y9obZf').length > 0){
          oos1 = $('.slAVV4:eq('+ i +')').find('.Y9obZf:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}

//for mobile type listing
//added on 19aprl 24
if($('._75nlfW').length > 0){
  var slider = $('._75nlfW');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._75nlfW:eq('+ i +') a').length > 0){
      link = $('._75nlfW:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('._75nlfW:eq('+ i +')').find('.hl05eU').length > 0 && $('._75nlfW:eq('+ i +')').find('.hl05eU  .Nx9bqj').length > 0){
          price = $('._75nlfW:eq('+ i +')').find('.hl05eU .Nx9bqj:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('._75nlfW:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('._75nlfW:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('._75nlfW:eq('+ i +')').find('img').attr("src")){
          image = $('._75nlfW:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._75nlfW:eq('+ i +')').find('img').attr("data-src")){
          image = $('._75nlfW:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('._75nlfW:eq('+ i +')').find('.KzDlHZ').length > 0){
          prod = $('._75nlfW:eq('+ i +')').find('.KzDlHZ:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('._75nlfW:eq('+ i +')').find('.KzDlHZ').length > 0){
          prod = $('._75nlfW:eq('+ i +')').find('.KzDlHZ a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('._75nlfW:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('._75nlfW:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('._75nlfW:eq('+ i +')').find('.hCKiGj').length > 0){
        prod =$('._75nlfW:eq('+ i +')').find('div.syl9yP:eq(0)').text()+" "+$('._75nlfW:eq('+ i +')').find('a.WKTcLC:eq(0)').Text().replace("'", "").replace("'", "").replace("'", "");

      }
      else if($('._75nlfW:eq('+ i +')').find('.XeoURe').length > 0){
        prod = $('._75nlfW:eq('+ i +')').find('.XeoURe a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

      }

        //oos
        if($('._75nlfW:eq('+ i +')').find('.vfSpSs').length > 0){
          oos1 = $('._75nlfW:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('._75nlfW:eq('+ i +')').find('.Y9obZf').length > 0){
          oos1 = $('._75nlfW:eq('+ i +')').find('.Y9obZf:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}
//for mobile type listing
//added on 3 dec 25
if($('.jIjQ8S').length > 0){
  var slider = $('.jIjQ8S');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('.jIjQ8S:eq('+ i +') a').length > 0){
      link = $('.jIjQ8S:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('.jIjQ8S:eq('+ i +')').find('.QiMO5r').length > 0 && $('.jIjQ8S:eq('+ i +')').find('.QiMO5r  .hZ3P6w').length > 0){
          price = $('.jIjQ8S:eq('+ i +')').find('.QiMO5r .hZ3P6w:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('.jIjQ8S:eq('+ i +')').find('.hZ3P6w').length > 0){
          price = $('.jIjQ8S:eq('+ i +')').find('.hZ3P6w:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('.jIjQ8S:eq('+ i +')').find('img').attr("src")){
          image = $('.jIjQ8S:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('.jIjQ8S:eq('+ i +')').find('img').attr("data-src")){
          image = $('.jIjQ8S:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('.jIjQ8S:eq('+ i +')').find('.RG5Slk').length > 0){
          prod = $('.jIjQ8S:eq('+ i +')').find('.RG5Slk:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.jIjQ8S:eq('+ i +')').find('.KzDlHZ').length > 0){
          prod = $('.jIjQ8S:eq('+ i +')').find('.KzDlHZ a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('.jIjQ8S:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('.jIjQ8S:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.jIjQ8S:eq('+ i +')').find('.XeoURe').length > 0){
          prod = $('.jIjQ8S:eq('+ i +')').find('.XeoURe a:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('.jIjQ8S:eq('+ i +')').find('.bgFu62').length > 0){
          oos1 = $('.jIjQ8S:eq('+ i +')').find('.fRrrYo:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('.jIjQ8S:eq('+ i +')').find('.Y9obZf').length > 0){
          oos1 = $('.jIjQ8S:eq('+ i +')').find('.Y9obZf:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}

//added on 3rd Dec 25
if($('.RGLWAk').length > 0){
  var slider = $('.RGLWAk');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('.RGLWAk:eq('+ i +') a').length > 0){
      link = $('.RGLWAk:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
    if(String(lid).length>8)
          {
         seller="marketplace="+marketplace+"&lid="+lid;
       }
       else {
        continue;
       }
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('.RGLWAk:eq('+ i +')').find('.QiMO5r').length > 0 && $('.RGLWAk:eq('+ i +')').find('.QiMO5r  .hZ3P6w').length > 0){
          price = $('.RGLWAk:eq('+ i +')').find('.QiMO5r .hZ3P6w:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('.RGLWAk:eq('+ i +')').find('.hZ3P6w').length > 0){
          price = $('.RGLWAk:eq('+ i +')').find('.hZ3P6w:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('.RGLWAk:eq('+ i +')').find('img').attr("src")){
          image = $('.RGLWAk:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('.RGLWAk:eq('+ i +')').find('img').attr("data-src")){
          image = $('.RGLWAk:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('.RGLWAk:eq('+ i +')').find('.pIpigb').length > 0){
          prod = $('.RGLWAk:eq('+ i +')').find('.pIpigb:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
        else if($('.RGLWAk:eq('+ i +')').find('.atJtCj').length > 0){
          prod = $('.RGLWAk:eq('+ i +')').find('.Fo1I0b:eq(0)').text().replace("'", "").replace("'", "").replace("'", "")+" "+$('.RGLWAk:eq('+ i +')').find('a.atJtCj:eq(0)').text().replace("'", "").replace("'", "").replace("'", "");

        }
          else if($('.RGLWAk:eq('+ i +')').find('.Zhf2z-').length > 0){
          prod = $('.RGLWAk:eq('+ i +')').find('a.Zhf2z-:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }

        //oos
        if($('.RGLWAk:eq('+ i +')').find('.bgFu62').length > 0){
          oos1 = $('.RGLWAk:eq('+ i +')').find('.fRrrYo:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAILA").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else if($('.RGLWAk:eq('+ i +')').find('.Y9obZf').length > 0){
          oos1 = $('.RGLWAk:eq('+ i +')').find('.Y9obZf:eq(0)').text();
          if(oos1.toUpperCase().split("COMING SOON").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
       /* if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
       PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
         arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}
if($('._3liAhj').length > 0){
  var slider = $('._3liAhj');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._3liAhj:eq('+ i +')').length > 0 && $('._3liAhj:eq('+ i +') a').length > 0){
      link = $('._3liAhj:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
        //price
        if($('._3liAhj:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('._3liAhj:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }

        //image
        // console.log("image2: "+$('._3liAhj:eq('+ i +')').html());
        if($('._3liAhj:eq('+ i +')').find('img').attr("src")){
          image = $('._3liAhj:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._3liAhj:eq('+ i +')').find('img').attr("data-src")){
          image = $('._3liAhj:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        if(image.split("data:image").length > 1){
          image = "";
        }
        // prod
        if($('._3liAhj:eq('+ i +')').find('._2cLu-l').length > 0){
          prod = $('._3liAhj:eq('+ i +')').find('._1kV-Zf:eq(0)').text().replace("'", "").replace("'", "").replace("'", "")+" "+$('._3liAhj:eq('+ i +')').find('._2cLu-l:eq(0)').attr("title").replace("'", "").replace("'", "").replace("'", "");

        }
        //oos
        if($('._3liAhj:eq('+ i +')').find('._1GJ2ZM').length > 0){
          oos1 = $('._3liAhj:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else if(oos1.toUpperCase().split("CURRENTLY UNAVAIL").length > 1){
            oos = 1;
          }
          else{
            oos = 0
          }
        }
        else{
          oos = 0;
        }
        /*if(isValidISBN(PID.toString()) && prod.trim() != ""){
          prod = prod + " " + PID;
        }*/
  PID = PID.trim();
     if(PID != "" && price != "" && price != 0){
       arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
         // dropToSend.push(PID);
        }

    } // for ends

  }
}
var slider = $('.product-unit');
var sliderLength = slider.length;
var link;
var price;
var prod = "";
var image = "";
var oos = 100;
for(i=0;i<sliderLength;i++){
  price = "";
  PID = "";
  prod = "";
  image = "";
  oos = 100;
  var link = $('.product-unit:eq(' + i + ')').find('a:eq(0)').attr("href");
  if(link != undefined){
    if(link.split("flipkart.com").length < 2){
      link = "flipkart.com" + link;
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(link != undefined){
      PID = returnPID(link);
      if($('.product-unit:eq(' + i + ')').find('.pu-title a').length > 0){
        prod = $('.product-unit:eq(' + i + ')').find('.pu-title a:eq(0)').attr("title").trim().replace("'", "").replace("'", "").replace("'", "");
      }
      if($('.product-unit:eq(' + i + ')').find('.pu-image img').length > 0){
        image = $('.product-unit:eq(' + i + ')').find('.pu-image img:eq(0)').attr("src").trim();
      }
      if(image.split("data:image").length > 1){
        image = "";
      }
      if($('.product-unit:eq(' + i + ')').find('.pu-status.oos').length > 0){
        oos = 1;
      }
      else{
        oos = 0;
      }

      if($('.product-unit:eq(' + i + ')').find('.more-listing-options .fk-bold').length > 0){
        price = $('.product-unit:eq(' + i + ')').find('.more-listing-options .fk-bold:eq(0)').text().trim();
        if(price.split("Rs.").length > 1){
          price = price.split("Rs.")[1];
        }
        if(price.split("Rs").length > 1){
          price = price.split("Rs")[1];
        }
        price = price.split(",").join("").trim();
      }
      else if($('.product-unit:eq(' + i + ')').find('.pu-final').length > 0){
       price = $('.product-unit:eq(' + i + ')').find('.pu-final').text().split(",").join("").trim();
       if(price.split("Rs.").length > 1){
        price = price.split("Rs.")[1];
      }
      else if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
    }
    else{
      price = "";
    }

    price = filter_price(price);
    if(isNaN(price)){
      price = 0;
    }

    /*if(isValidISBN(PID.toString()) && prod.trim() != ""){
      prod = prod + " " + PID;
    }*/
    PID = PID.trim();
     if(PID != "" && price != "" && price != 0)
  arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
    //dropToSend.push(PID);
  }
}
}
var slider = $('.fk-large-item-carousel');
var sliderLength = slider.length;
var link;
var price;
var prod = "";
var image = "";
var oos = 100;
for(i=0;i<sliderLength;i++){
  price = "";
  PID = "";
  prod = "";
  image = "";
  oos = 100;
  var link = $('.fk-large-item-carousel:eq(' + i + ')').find('a:eq(0)').attr("href");
  if(link.split("flipkart.com").length < 2){
    link = "flipkart.com" + link;
  }
  var marketplace="FLIPKART";
  var abc="";
    var urlParams1 = new URLSearchParams(link);
   abc=urlParams1.get('marketplace');
   if(abc=="GROCERY")
   marketplace="GROCERY";
  var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
   seller="marketplace="+marketplace+"&lid="+lid;
  if(link != undefined){
    PID = returnPID(link);
    if($('.fk-large-item-carousel:eq(' + i + ')').find('.fk-product-title').length > 0){
      var prod = $('.fk-large-item-carousel:eq(' + i + ')').find('.fk-product-title').text().trim().replace("'", "").replace("'", "").replace("'", "");
    }
    if($('.fk-large-item-carousel:eq(' + i + ')').find('.pp-img-box img').length > 0){
      var image = $('.fk-large-item-carousel:eq(' + i + ')').find('.pp-img-box img:eq(0)').attr('src').split(",").join("");
    }
    if(image.split("data:image").length > 1){
      image = "";
    }
    var price = $('.fk-large-item-carousel:eq(' + i + ')').find('.final-price').text().split(",").join("");
    price = filter_price(price);
    if(isNaN(price)){
      price = "";
    }

    /*if(isValidISBN(PID.toString()) && prod.trim() != ""){
      prod = prod + " " + PID;
    }*/
    PID = PID.trim();
     if(PID != "" && price != "" && price != 0)
    arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
    //dropToSend.push(PID);
  }
}


if($('.ccarousel-item .carousel-item').length > 0) {
  var slider = $('.ccarousel-item .carousel-item');
  var sliderLength = $('.ccarousel-item .carousel-item').length;
  var link = "";
  var price = "";
  var PID = "";
  var image = "";
  var oos = 100;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    prod = "";
    image = "";
    oos = 100;
    if($('.ccarousel-item .carousel-item:eq('+ i +')').find('a').length > 0){
      link = $('.ccarousel-item .carousel-item:eq('+ i +')').find('a').attr('href');
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }
    else{
      link = "";
      PID = "";
    }
    var marketplace="FLIPKART";
    var abc="";
      var urlParams1 = new URLSearchParams(link);
     abc=urlParams1.get('marketplace');
     if(abc=="GROCERY")
     marketplace="GROCERY";
    var lid=urlParams1.get('lid');
if(String(lid).length<8)
lid="";
     seller="marketplace="+marketplace+"&lid="+lid;
    if(PID != ""){
      if(PID != PID.toUpperCase()){
        PID = "";
      }
    }
    if(PID != ""){
      if($('.ccarousel-item .carousel-item:eq('+ i +') a:eq(0)').find('img').length > 0){
        image = $('.ccarousel-item .carousel-item:eq('+ i +') a:eq(0)').find('img').attr("src");
      }
      if(image.split("data:image").length > 1){
        image = "";
      }
      if($('.ccarousel-item .carousel-item:eq('+ i +')').find('.fk-price .final-price').length > 0){
        price = $('.ccarousel-item .carousel-item:eq('+ i +')').find('.fk-price:eq(0) .final-price').text();
        price = filter_price(price);
      }
      prod = $('.ccarousel-item .carousel-item:eq('+ i +')').find('a:eq(0)').attr("title").trim().replace("'", "").replace("'", "").replace("'", "");
    }
    else{
     price = "";
   }
   if(isNaN(price)){
    price = "";
  }
 PID = PID.trim();
     if(PID != "" && price != "" && price != 0)
   arrayToSend.push([PID,prod, image,price, oos,seller,pantrystat]);
    //dropToSend.push(PID);

}
}
  $s("#containerMainPTID").remove();
  var liam=window.location.href;
    var check = window.location.href;
         if(check.search("/itmea8ghjtghtb85")<0 )
         {
  if(1)
  {
    arrayToSend = JSON.stringify(arrayToSend);
    console.log("Flipkart Final Price HERE:"+arrayToSend);
      if((xx.search("&ptauto=1")<0)&&(xx.search("&pt=1")<0)&&(arrayToSend.length>0))
        {
    chrome.runtime.sendMessage({
        sksmode: "flipkart",
        pairs: arrayToSend
    }, function (response) {

      });
        }
}
   if(cPID.length!=0&&parseInt(cPrice)!=0)
      {

        if(!isNaN(parseInt(cPrice))&&(xx.search("&ptauto=1")<0)&&(xx.search("&pt=1")<0))
        {
   addPriceDropButton(cPID,cTitle,cPrice);
      plotFlipGraph(cPID,cTitle,cPrice);
        }

    }
         }

}

function plotFlipGraph(prodid,title,price){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTID").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTID").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    var pidFlipkart =prodid;
    var prod = title;
    var pr=price;
    var selector = [];
    var pwidth=0;
if($s('._2Cl4hZDYPeapixiVtu4JCR:eq(0)').length>0 || $s('h1:eq(0)').length>0)
pwidth=$s('body').width();
console.log("width"+pwidth+"final:"+(pwidth-512));
pwidth=pwidth-512;
if(pwidth>816)
{
  var proddesc=$s('._2tFX2QBT1y0sNHEhz8azKQ').attr('data-reactid');
    if (proddesc == "" || proddesc == undefined)
        {
                proddesc=$s('._2tFX2Q').attr('data-reactid');
        }
   var specs=$s('._2ixwsm-FxWc78shZIEMSV_').attr('data-reactid');
     if (specs == "" || specs == undefined)
        {
                specs=$s('._2ixwsm').attr('data-reactid');
        }
   console.log(specs+"ytr:"+proddesc);
   if(parseInt(specs)>parseInt(proddesc))
   {
  selector.push({selector: '._2tFX2QBT1y0sNHEhz8azKQ', attr: 'none', pos: 'before'});
   selector.push({selector: '._29BZlt', attr: 'none', pos: 'before'});
   selector.push({selector: '._2tFX2Q', attr: 'none', pos: 'before'});
     selector.push({selector: '._1HmYoV.hCUpcT:eq(3)', attr: 'none', pos: 'after'});
   }
  else
  {
    selector.push({selector: '._2ixwsm-FxWc78shZIEMSV_', attr: 'none', pos: 'before'});
      selector.push({selector: '._2ixwsm', attr: 'none', pos: 'before'});
        selector.push({selector: '._1HmYoV.hCUpcT:eq(3)', attr: 'none', pos: 'after'});
  }

}
 selector.push({selector: '.QSCKDh.eRsYMo:eq(0)', attr: 'none', pos: 'after'});
  selector.push({selector: '._1YokD2._2GoDe3:eq(0)', attr: 'none', pos: 'after'});
 selector.push({selector: '.ooJZfD._3FGKd2:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1HmYoV.hCUpcT:eq(3)', attr: 'none', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwfcQvQ03L8NUAL7Daj._3S6yHrmdTXP3x_Yr8gwHfh:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLXr8H_VoL47-NWb5f0:eq(0)', attr: 'none', pos: 'after'});
      selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '.DOjaWF.YJG4Cf:eq(0)', attr: 'none', pos: 'after'});

    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack,impposcssdata);
    var passBack1 = [{title: prod, siteName: 'Flipkart', price: pr, store:'flipkart',currency:'INR',ccode:'Rs.'}];
    passBack1 = JSON.stringify(passBack1);
    console.log("Graph Preparation:"+passBack1);
    prepareGraph(pidFlipkart, passBack1);

}
}
function addPriceDropButton(prodid,title,price){
  //console.log("before graph: "+$s("#containerMainPTID").length);
  $s("#containerMainPTDropB").remove();
  $s("#containerMainPTDropB1").remove();
  // console.log("after graph: "+$s("#containerMainPTID").length);
  if($s("#containerMainPTDropB").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    var pidFlipkart =prodid;
    var prod = title;
    var pr=price;
    var selector = [];
    var pwidth=0;
if($s('._2Cl4hZ:eq(0)').length>0)
pwidth=$s('body').width();
console.log("width"+pwidth+"final:"+(pwidth-512));
pwidth=pwidth-512;

    /*selector.push({selector: '._2ixwsm', attr: 'none', pos: 'before'});
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});*/
     selector.push({selector: 'div.L3_qT6:eq(0)', attr: 'none', pos: 'after'});
     selector.push({selector: 'div.dyC4hf:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: 'div.a7AaCC:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._1MVZfW ._3ZYEWO:eq(0)', attr: 'none', pos: 'after'});
     selector.push({selector: '._3iZgFn:eq(0)', attr: 'none', pos: 'after'});
     selector.push({selector: '._1JKm3V._1kYsnz:eq(0)', attr: 'none', pos: 'after'});
      selector.push({selector: '.wqoXAz.ABqeNJ:eq(0)', attr: 'none', pos: 'after'});
      selector.push({selector: 'div.C7fEHH:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
   var  impposcssdata="";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
        var passBack1 = [{title: prod, siteName: 'Flipkart', price: pr, store:'flipkart',pid:prodid,color:'#2874f0'}];
        passBack1 = JSON.stringify(passBack1);
    addPriceDropBase(passBack,impposcssdata,passBack1);




}
}
function returnPID(link){
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
    pid = pid.trim();

  }

  if(pid.split("?pid=").length > 1){
    pid = pid.split("?pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&pid=").length > 1){
    pid = pid.split("&pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
    pid = pid.trim();

  }
  if(pid.split("ppid=").length > 1){
    pid = pid.split("ppid=")[0];
    pid = pid.trim();

  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];
    pid = pid.trim();

  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  if(link == ""){
    pid = "";
  }

  return pid;

}
 function filter_price(pr){
  pr = String(pr);
  if(pr.split("Rs.").length > 1){
    pr = pr.split("Rs.")[1];
  }
  if(pr.split("Rs").length > 1){
    pr = pr.split("Rs")[1];
  }
  if(pr.split("INR").length > 1){
    pr = pr.split("INR")[1];
  }
  if(pr.split("Inr").length > 1){
    pr = pr.split("Inr")[1];
  }
  if(pr.split("RS.").length > 1){
    pr = pr.split("RS.")[1];
  }
  if(pr.split("₹").length > 1){
    pr = pr.split("₹")[1];
  }
    if(pr.split("RS").length > 1){
    pr = pr.split("RS")[1];
  }
  if(pr.split("R").length > 1){
    pr = pr.split("R")[1];
  }
  if(pr.split("`").length > 1){
    pr = pr.split("`")[1];
  }
  if(pr.split("MRP").length > 1){
    pr = pr.split("MRP")[1];
  }
  if(pr.split("mrp").length > 1){
    pr = pr.split("mrp")[1];
  }
  if(pr.split("/").length > 1){
    pr = pr.split("/")[0];
  }
  if(pr.split("â‚¹").length > 1){
    pr = pr.split("â‚¹")[1].trim();
  }
  if(pr.split("à¤°").length > 1){
    pr = pr.split("à¤°")[1].trim();
  }
  pr = pr.split(",").join("").trim().replace(",","");
  pr=pr.replace(/\,/g,'')
  pr = Number(pr);
    if(isNaN(pr)){
      price = 0;
    }
  return pr;

}
function getAvailability2(){
  var avail = 1;
  if($s('.top-section').length > 0 && $('.top-section').find('.out-of-stock').length > 0){
    avail = 0;
  }
  else if($s('.top-section').find('.listing-obsolete-status').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
    else if($s('._3xgqrA').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('.row._3FV-Hc').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
   else if($s('._3xgqrA').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("DISCONTINUED").length > 1){
    avail = -1;
  }
  return avail;
}
//window.setTimeout(plotFlipGraph, 5000);

function getProd(flag){
  var prod = "";

  if($('.top-section').length > 0){
    if($('.top-section').find('[itemprop="name"]').length > 0){
      prod = $('.top-section').find('[itemprop="name"]').text().trim();
    }
    else if($('.top-section').find('h1').length > 0){
      prod = $('.top-section').find('h1:eq(0)').text().trim();
    }
  }
   else if($('h1._35KyD6').length > 0){
    prod = $('h1._2J4LW6:eq(0)').text().trim()+" "+$('h1._35KyD6:eq(0)').text().trim();
  }
  else if($('._3eAQiD').length > 0){
    prod = $('._3eAQiD').text().trim();
  }
  else if($('._3eAQiDZVhw_jnZcZCyr4gi').length > 0){
    prod = $('._3eAQiDZVhw_jnZcZCyr4gi').text().trim();
  }
  else if($('h1').length > 0){
    prod = $('h1:eq(0)').text().trim();
  }
  if(prod == ""){
    if($('*[class^="_3eAQiD"]')){
      prod = $('*[class^="_3eAQiD"]').innerText;
      if(typeof(prod)!="undefined"){
        prod = prod.trim();
      }
      else {
        prod = "";
      }

    }
  }
  var cur_url = window.location.href;
  if(cur_url.split("/p/").length < 2){
    prod = "";
  }
  if(flag)
    return prod.toLocaleLowerCase();
  return prod;
}

function getImage(){
  var image = "";
  if($('.top-section').length > 0){
    if($('.top-section').find('.mainImage img').length > 0){
      image = $('.top-section').find('.mainImage img:eq(0)').attr('src').trim();
    }
  }
  else if($('.sfescn').length > 0){
    image = $('.sfescn').attr('src').trim();
  }
    else if($('.Yun65Y').length > 0){
    image = $('.Yun65Y').attr('src').trim();
  }
  else if($('.sfescnxBUTgA-fkyvj_xF').length > 0){
    image = $('.sfescnxBUTgA-fkyvj_xF').attr('src').trim();
  }
   else if($('._396cs4._2amPTt._3qGmMb._3exPp9').length > 0){
    image = $('._396cs4._2amPTt._3qGmMb._3exPp9').attr('src').trim();
  }
  if(image == "" && getProd() != ""){
    if($('img[class*="sfescn"]')){
      image = $('img[class*="sfescn"]').attr("src");
      if(typeof(image)!="undefined"){
        image = image.trim();
      }
      else {
        image = "";
      }

    }
  }
  if(image.split("data:image").length > 1 || image.split(".svg").length > 1){
    image  = "";
  }

  return image;
}

function getPriceN(){
  if($("._2oKbBr").length==0){
    price = "";
    price_sel = "";

    if($('.top-section').length > 0){
      if($('.top-section').find('.shop-section-wrap').length > 0){
        price = $('.top-section').find('.shop-section-wrap .selling-price:eq(0)').text().trim();
      }
    }
    price = filter_price(price);

    if($('.seller-table .t-row').find('.price-wrap .selling-price').length > 0){
      sel_len = $('.seller-table .t-row').length;
      for(i=1;i<sel_len;i++){
        if($('.seller-table .t-row:eq('+ i +')').find('.price-wrap .selling-price').length > 0){
          price_sel = $('.seller-table .t-row:eq('+ i +')').find('.price-wrap .selling-price').text().trim();
          price_sel = filter_price(price_sel);
          if( (price_sel != 0 && price_sel < price) || (price_sel != "" && price_sel < price) ){
            price = price_sel;
          }
        }
      }
    }
    if(isNaN(price)){
      price = 0;
    }
    if(price == "" || price == 0){
      if($('._18Zlgn').length > 0){
        price = $('._18Zlgn').text().trim();
        price = filter_price(price);
      }
      else if($('._1vC4OE._37U4_g').length > 0){
        price = $('._1vC4OE._37U4_g').text().trim();
        price = filter_price(price);
      }
            else if($('._30jeq3._16Jk6d').length > 0){
        price = $('._30jeq3._16Jk6d').text().trim();
        price = filter_price(price);
      }
       else if($('._1vC4OE._3qQ9m1').length > 0){
        price = $('._1vC4OE._3qQ9m1').text().trim();
        price = filter_price(price);
      }
      else if($('.Nx9bqj.CxhGGd').length > 0){
       price = $('.Nx9bqj.CxhGGd').text().trim();
       price = filter_price(price);
     }


      else if($('._1vC4OEv3kku6jwcqIfStG4._37U4_gnOsEFLxCAC4Sn1rO').length > 0){
        price = $('._1vC4OEv3kku6jwcqIfStG4._37U4_gnOsEFLxCAC4Sn1rO').text().trim();
        price = filter_price(price);
      }
      if(price == "" || price == 0 || isNaN(price)){
        price = $('h1').parent().parent().next().next().find("div").eq(1).find("div").eq(0).text();
        price = filter_price(price);
      }
    }
    if(price == "" || price == 0){
     if($('._1vC4OE._2Q57Ls').length > 0){
        price = $('._1vC4OE._2Q57Ls').text().trim();
        price = filter_price(price);
      }
    }
    if(price == "" || price == 0){
if($('._2JC05C.pEUB2N').length > 0){
 price = $('._30jeq3._3yRFQ5').text().trim();
 price = filter_price(price);
}
}
if(price == "" || price == 0)
{
  if($('.hZ3P6w.bnqy13').length > 0){
   price = $('.hZ3P6w.bnqy13').text().trim();
   price = filter_price(price);
 }
}

     price = filter_price(price);
    return price;
  }
  else {
    return 0;
  }
}
function getAvailability(){
  var avail = 1;
  if($('.top-section').length > 0 && $('.top-section').find('.out-of-stock').length > 0){
    avail = 0;
  }
  else if($('.top-section').find('.listing-obsolete-status').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
    else if($('._9-sL7L').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('._3xgqrA-m1EBBbNkZPYdNfi').text().toUpperCase().split("DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('._16FRp0').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  else if($('._16FRp0').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($('._16FRp0').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('._16FRp0').text().toUpperCase().split("DISCONTINUED").length > 1){
    avail = -1;
  }
      else if($s('._3xgqrA').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
     else if($s('._3xgqrA').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("TEMPORARILY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($s('._3xgqrA').text().toUpperCase().split("CURRENTLY UNAVAILABLE").length > 1){
    avail = -1;
  }
  return avail;
}
function getPIDN(){
  var pid = "";
  var pid1 = "";
  if($('#ourSearchKey_pid').length > 0 && $('#ourSearchKey_pid').text().trim() != ""){
    pid = $('#ourSearchKey_pid').text().trim();
  }
  else{
    var link = window.location.href;
    pid = link;

    if(pid.split("?pid=").length > 1){
      pid = pid.split("?pid=")[1].trim();
    }
    else if($('.write-review').length > 0){
      pid = $('.write-review').attr('href').trim();
    }
    else if($('.add-to-wishlist').length > 0){
      pid = $('.add-to-wishlist').attr('data-product-id').trim();
    }
    if(pid.split("?pid=").length > 1){
      pid = pid.split("?pid=")[1].trim();
    }
    if(pid.split("&pid=").length > 1){
      pid = pid.split("&pid=")[1].trim();
    }
    if(pid.split("#").length > 1){
      pid = pid.split("#")[0].trim();
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0].trim();
    }
  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  else{
    pid = pid.trim();
  }
  if(pid == ""){
    if($("#criteo-tags-div").length > 0){
      pid1 = $("#criteo-tags-div").html();
      if(pid1.split('src="').length > 1){
        pid1 = pid1.split('src="');
        pid1 = pid1[1];
        pid1 = pid1.split('"');
        pid1 = pid1[0];
        pid1 = decodeURIComponent(pid1);
        pid1 = pid1.split("&p=");
        pid1 = pid1[1];

        if(pid1 != undefined && pid1.split("&").length > 1){
          pid1 = pid1.split("&")[0].trim();

          if(pid1 == pid1.toUpperCase()){
            pid = pid1;
          }
        }
      }
    }
  }
  if(pid == ""){
    if($(".swINJg._3nrCtb").length == 1 && $(".swINJg._3nrCtb").parent().attr("href")){
      pid1 = $(".swINJg._3nrCtb").parent().attr("href");
      if(pid1.split("flipkart.com").length < 2){
        pid1 = "https://www.flipkart.com"+pid1;
        pid = returnPID(pid1);
      }
    }
  }
  if(pid == ""){
    if($("li._38I6QT a").length >0){
      pid1 = $("li._38I6QT a").attr("href");
      if(pid1.split("flipkart.com").length < 2){
        pid1 = "https://www.flipkart.com"+pid1;
        pid = returnPID(pid1);
      }
    }
  }
  return pid;
}
function getLIDN(url){
  var pid = "";
  var pid1 = "";
  if($('#ourSearchKey_pid').length > 0 && $('#ourSearchKey_pid').text().trim() != ""){
    pid = $('#ourSearchKey_pid').text().trim();
  }
  else{
    var link = url;
    pid = link;

    if(pid.split("?lid=").length > 1){
      pid = pid.split("?lid=")[1].trim();
    }
    else if($('.write-review').length > 0){
      pid = $('.write-review').attr('href').trim();
    }
    else if($('._3UAT2v._16PBlm').length > 0){
      pid = $('._3UAT2v._16PBlm').parent().attr('href').trim();
    }
    else if($('.add-to-wishlist').length > 0){
      pid = $('.add-to-wishlist').attr('data-product-id').trim();
    }
    if(pid.split("?lid=").length > 1){
      pid = pid.split("?lid=")[1].trim();
    }
    if(pid.split("&lid=").length > 1){
      pid = pid.split("&lid=")[1].trim();
    }
    if(pid.split("#").length > 1){
      pid = pid.split("#")[0].trim();
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0].trim();
    }
  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  else{
    pid = pid.trim();
  }


  return pid;
}
