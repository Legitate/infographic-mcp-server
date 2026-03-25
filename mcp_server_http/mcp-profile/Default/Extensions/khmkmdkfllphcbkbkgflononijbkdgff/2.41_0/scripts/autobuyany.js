
var winloc = window.location.href;
localStorage.jack="00";
localStorage.vivo="0";
$s = jQuery.noConflict();
//autocallsale();

var count, ti = 0;
if (winloc.search("&ptauto=1")>0)
{
 abh = winloc.split('&lid=')[1];
abh=abh.split('&')[0];
		date = new Date().getTime();
	fkautobuy1("flipkartautopt", "Flipkart Autobuy Any", date, "&ptauto=1","0.6",abh);
 }

chrome.runtime.sendMessage({
  icon : "yes"
}, function(response) {});
ptfkckout1 =0;
function fkautobuy1(cookie, mobile, date, stri, refresh,kid)
{
	date = new Date(date).getTime();
if(winloc.search(stri)> 0)
{


          chrome.storage.local.get(['PAYOPTIONS1'], (result) => {
        	//if(response.ptfkckout1 == "Yes") ptfkckout1 = 1;
           if(result.PAYOPTIONS1)
					 {
					 localStorage.payoption1=result.PAYOPTIONS1;
					 setCookie("payoption1", result.PAYOPTIONS1, 90000, "/checkout/init");
					 }

        });

          chrome.storage.local.get(['defaultquantity1'], (result) => {
        	//if(response.ptfkckout == "Yes") ptfkckout = 1;
           if(result.defaultquantity1)
					 {
					 localStorage.defaultquantity1=result.defaultquantity1;
					 setCookie("defaultquantity1", result.defaultquantity1, 90000, "/checkout/init");
					 }

        });

          chrome.storage.local.get(['IBPAYOPTIONS1'], (result) => {
        	//if(response.ptfkckout1 == "Yes") ptfkckout1 = 1;
           if(result.IBPAYOPTIONS1)
					 {
					 localStorage.ibpayoption1=result.IBPAYOPTIONS1;
					 setCookie("ibpayoption1", result.IBPAYOPTIONS1, 90000, "/checkout/init");
					 }

        });
            chrome.storage.local.get(['fkptco1'], (result) => {
        	if(result.fkptco1 == "Yes") ptfkckout1 = 1;
           if(result.fkptco1 == "Yes") ptfkbuy1(date,mobile,refresh,kid);
        });
}
}
if(getCookie("flipaptcomplete1"))
congratflippt1(10000);
function congratflippt1(msec)
{
		if(winloc.search("orderresponse?")>0){
			var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}
	   ele.style.background = "rgb(233, 30, 189)";
    document.getElementById("ptanotify").innerHTML = "Congratulations!! For successfully placing your order.. Please review our Chrome Extension Price Tracker at Chrome web Store(Link will open in new tab in <b>"+msec/1000+"</b> seconds)</br><a  style='color:black' href='https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https://chrome.google.com/webstore/detail/price-tracker-comparison/khmkmdkfllphcbkbkgflononijbkdgff' target='_blank' >Share PriceTrackrr with your friends</a>";

	//	setCookie("ptautomi", 1, 30);
	if(msec>0)
	 setTimeout(function() { congratflippt1(msec-1000);}, 1000);
	 else
	 {
	 setTimeout(function() { window.open("https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff/reviews", '_blank');}, 1000);
	 setTimeout(function() { ele.remove();}, 30000);
	 }
	}
	//alert("hi");
}
function fkcong(mobilename)
{

	if(1)
	{
		document.getElementById("ptanotify").innerHTML = "<center>Congratulations! Item is added in your cart .. Please proceed to order</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https://indiadesire.com' target='_blank' >Share Price Tracker with your friends & Family</a></center> ";
	}
	else setTimeout( function() { fkcong(mobilename)}, 1000);
}

function ptfkbuy1(mobdate, mobname,refresh,kid){
	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}

    cdate = new Date().getTime();
  //  console.log(new Date(getnextdate(mobdate)));
	 var tymleft=0;
    if(mobname != "One plus one")
    tymleft = getnextdate(mobdate) - cdate;
else tymleft = getnextdate(mobdate) - cdate;
var nexttime=getnextdate(mobdate);
	var d = new Date(nexttime);
     //  console.log(mobdate);
		 var tymleft1=tymleft-603900000;
   if (tymleft < 220000 || tymleft > 586800000) {
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    /*	if(refresh){
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}
    	else
    	*/


    	document.getElementById("ptanotify").innerHTML = "we are trying to add the item in your cart";
		 setCookie("flippt1", 1, 30, "/checkout/init");
		 	//setTimeout(function() {trycallapi(kid);}, 2000);
    setTimeout(function() {trycallapi(kid);trycallapi(kid);location.reload();}, 30);
  /*
 if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
       else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        //$s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                             //   $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
        // $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');
                                        //$s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
                                                        $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
				     else if($s('._1oaFsP form button:visible').length){
       // $s('._1oaFsP form').attr('method','post');
                           //     $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');
                                        //$s('._1oaFsP button').click();
                                                        $s('._1oaFsP form').submit();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }

        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC:visible').length &&
$s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC:enabled').length){
              //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                       //         $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
       //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        //                                $s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
         $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
					else if($s('button._2AkmmA.GLibOq._7UHT_c:visible').length)
		    {
		    //	iiu =3;
		    	$s('button._2AkmmA.GLibOq._7UHT_c').click();
		    }
				 else if($s('._1oaFsP ._16LyaZ._7UHT_c:visible').length &&
$s('._1oaFsP button._16LyaZ._7UHT_c:enabled').length){
                //$s('._1oaFsP form').attr('method','post');
                //                $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

                                   //     $s('._1oaFsP button').click();
         $s('._1oaFsP form').submit();
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
 else if($s('._1k1QCg._3QNwd7 button._2AkmmA:eq(1):visible').length &&
$s('._1k1QCg._3QNwd7 button._2AkmmA:eq(1):enabled').length){
	$s('._1k1QCg._3QNwd7').append("<form></form>");
                $s('._1k1QCg._3QNwd7 form').attr('method','post');
                               $s('._1k1QCg._3QNwd7 form').attr('action','/checkout/init');
       $s('._1k1QCg._3QNwd7 form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        $s('._1k1QCg._3QNwd7 form').submit();
				// $s('._1k1QCg._3QNwd7 button._2AkmmA').trigger('click');
                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                //fkcong(mobname);
        }
                                else if($s('._1oaFsPYYPWzUFBC7uHKYRx .col-6-12 button[type="submit"]').length){
       // $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('method','post');
                  //              $s('._1oaFsPYYPWzUFBC7uHKYRx form').attr('action','/checkout/init');
       //  $s('._1oaFsPYYPWzUFBC7uHKYRx form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

       // $s('._1oaFsPYYPWzUFBC7uHKYRx button').click();
        $s('._1oaFsPYYPWzUFBC7uHKYRx form').submit();

                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
				            else if($s('._1oaFsP .col-6-12 button[type="submit"]').length){
       // $s('._1oaFsP form').attr('method','post');
                //                $s('._1oaFsP form').attr('action','/checkout/init');
        // $s('._1oaFsP form').append('<input type="hidden" name="eids" value="'+kid+'" data-reactid="122"><input type="hidden" name="otracker" value="" data-reactid="123"><input type="hidden" name="domain" value="physical" data-reactid="124">');

        //$s('._1oaFsP button').click();
        $s('._1oaFsP form').submit();

                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;

               setTimeout(function() {ptfkbuy1(mobdate, mobname, refresh,kid);}, 100);

    }
    */

	/*	if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx form button').click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs:visible').length && $s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._36SmAs:enabled').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs').click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;
               setTimeout(function() {ptfkbuy1(mobdate, mobname, refresh);}, 100);

    }*/

	}





		else
		{
				ele.remove();
		}


}
onct =0;

$s('body').on("click","#flippt1", function(){
	setCookie("flippt1", 1, 30, "/checkout/init");
	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._7UHT_c6I0rNPYxrgQM_qC').click();
});
if(getCookie('flippt1')){
	iiu =0;
	abc=1;
 	setCookie("flippt1", 1, 30, "/checkout/init");
	setCookie("flipaptcomplete1", 1, 250, "/");
//	alert(localStorage.payoption);
    var address = window.setInterval( function(){
			$s = jQuery.noConflict();
			var payopt1=getCookie('payoption1');
			var paynopt1=getCookie('ibpayoption1');
    	if($s('.modal-content button:visible').length){
    		console.log(3);
    		$s('.modal-content button:visible').click();
    		clearInterval(address);
    		window.history.back();
    	}
			else if($s('button._2AkmmA._14mFQy._7UHT_c:visible').length)
			{
				iiu = 0;
		    	$s('button._2AkmmA._14mFQy._7UHT_c').click();
			}
    	else if($s('span.add_address_btn:visible').length && iiu ==0)
		    {
		    	iiu = 1;
		    	$s('.select_btn.btn.btn-white').click();
		    }
        else if($s('button._2KpZ6l.RLM7ES._3AWRsL').length && iiu ==0)
      {
        iiu =3; // for acont
        $s('button._2KpZ6l.RLM7ES._3AWRsL').click();

      }

				else if($s('button._2AkmmA._I6-pD._7UHT_c:visible').length && iiu ==0)
		    {
		    	iiu =3;
		    	$s('button._2AkmmA._I6-pD._7UHT_c').click();
		    }
        else if($s('button.QqFHMw.FA45gW._7Pd1Fp:visible').length && iiu ===0)
      {
        iiu = 3;
        $s('button.QqFHMw.FA45gW._7Pd1Fp').click();
      }
        else if($s('button._2KpZ6l._1seccl._3AWRsL').length && iiu ==3)
      {
        iiu = 4; //for ncont
        $s('button._2KpZ6l._1seccl._3AWRsL').click();
      }
      else if($s('button._2KpZ6l._1uR9yB._3dESVI').length && iiu ==4)
    {
      iiu = 4; //for ncont
      $s('button._2KpZ6l._1uR9yB._3dESVI').click();
    }
					else if($s('button._2AkmmA._2Q4i61._7UHT_c:visible').length && iiu ==3)
		    {
		    	iiu = 4;
		    	$s('button._2AkmmA._2Q4i61._7UHT_c').click();
		    }
        else if($s('button._2AkmmA._2Q4i61._7UHT_c:visible').length && iiu ==3)
      {
        iiu = 4;
        $s('button._2AkmmA._2Q4i61._7UHT_c').click();
      }
      else if($s('button.QqFHMw.VuSC8m._7Pd1Fp:visible').length && iiu ==3)
    {
      iiu = 4;
      $s('button.QqFHMw.VuSC8m._7Pd1Fp').click();
    }
    else if($s('button.QqFHMw._0ofT-K.M5XAsp:visible').length && iiu ==4)
  {
    iiu = 4;
    $s('button.QqFHMw._0ofT-K.M5XAsp').click();
  }

		else if(iiu ==1 && $s('a.btn-continue:visible').length)
		    {
		    	document.getElementsByClassName('btn-continue')[0].click();
		    //	clearInterval(address);
				iiu=2;
		    }
					else if(iiu ==2 && $s("li[data-aid='PaymentOption_Cash on Delivery']").length)
		    {
		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					document.getElementsByClassName('CodPm')[0].click();
		    	clearInterval(address);
		    }
					else if(iiu ==4 && $s("input#NET_OPTIONS").length && payopt1=="NET_OPTIONS")
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input#NET_OPTIONS').click();
					iiu=7;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
						else if(iiu ==4 && $s("input#COD").length && payopt1=="COD")
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input#COD').click();
					iiu=10;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
				/*else if(iiu==10 && $s("img.AVMILy").attr('src'))
				{
					var img64=$s("img.AVMILy").attr('src');
					//uploaddata(img64);
					console.log("image: "+img64);
					iiu=11;
					//$s("._16qL6K._366U7Q").value="abcd";
				}
					else if(iiu==11 && $s("img.AVMILy").attr('src'))
				{
					//var img64=$s("img.AVMILy").attr('src');
					//console.log("image: "+img64);
					/if(abc)
					setTimeout(function() {result();}, 2000);
					if(localStorage.jack!=="00")
					{
					//	$s("._16qL6K._366U7Q").focus();
						//$s("._16qL6K._366U7Q").val(localStorage.jack);
				//	$s("._16qL6K._366U7Q").attr("value",localStorage.jack);
						//$s("._16qL6K._366U7Q").attr("id","ptcaptcha");
					//$s("._16qL6K._366U7Q").focus();
					//$s("._16qL6K._366U7Q").focus();
		 var copyFrom = document.createElement("textarea");
  copyFrom.textContent =  localStorage.jack;
	 var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
	 body.removeChild(copyFrom);
	$s( "div.JqLGrF" ).before("<span style='color:green;font-weight:bold;'>Captcha Copied to Clipboard: "+localStorage.jack+" Paste in the required field and confirm your order</span></br>");
				//	$s( "._16qL6K._366U7Q" ).change();

				//	$s( "._16qL6K._366U7Q" ).keypress();
					//$s("._16qL6K._366U7Q").trigger($s.Event("keypress", { keyCode: 12 }));
					//	$s("._16qL6K._366U7Q").text(localStorage.jack);
					localStorage.jack="00";
					iiu=12;
					abc=0;
					}

				//	clearInterval(address);_2AkmmA _23FrK1 _7UHT_c
				}*/
					else if (iiu ==10 && $s("button._2AkmmA._23FrK1._7UHT_c").length)
				{
					//$s('button._2AkmmA._23FrK1._7UHT_c').click();
					clearInterval(address);
				}
					else if(iiu ==4 && $s("input#UPI").length && payopt1=="PHONEPE")

		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
         setInterval(function(){
                console.log("trying to click PHONEPE");
                $s("Label[for='UPI']").click();
                $s("Label[for='PHONEPE']").click();
                $s("Label[for='PHONEPE'] button").click(); //click will redirect to phonepe
                $s("Label[for='PHONEPE'] button").remove(); //remove button after clicking
            }, 300);

					iiu=8;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
					else if(iiu ==4 && $s("input.vn9L2C").length && payopt1=="GIFTCARD")

		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					$s('input.vn9L2C').click();
					iiu=13;
					//$s('input#HDFC').click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
        else if(iiu ==4 && $s("input._30VH1S").length && payopt1=="GIFTCARD")

      {

        //$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
        $s('input._30VH1S').click();
        iiu=13;
        //$s('input#HDFC').click();
        //document.getElementsById('PHONEPE').click();
        //clearInterval(address);
      }
					else if (iiu ==13 && $s("button._2AkmmA._3jZEfz._7UHT_c").length)
				{
					$s('button._2AkmmA._3jZEfz._7UHT_c').click();
					clearInterval(address);
				}
        else if (iiu ==13 && $s("button._2KpZ6l._1OU8xT._3AWRsL").length)
      {
        $s('button._2KpZ6l._1OU8xT._3AWRsL').click();
        clearInterval(address);
      }
      else if (iiu ==13 && $s("button.QqFHMw.G6r9rE._7Pd1Fp").length)
    {
      $s('button.QqFHMw.G6r9rE._7Pd1Fp').click();
      clearInterval(address);
    }
					else if(iiu ==7 && $s("input#"+paynopt1).length)
		    {

		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					//$s('input#NET_OPTIONS').click();
					iiu=6;
				$s('input#'+paynopt1).click();
					//document.getElementsById('PHONEPE').click();
		    	//clearInterval(address);
		    }
				else if (iiu ==6 && $s("button._2AkmmA._2BikcQ._7UHT_c").length)
				{
					$s('button._2AkmmA._2BikcQ._7UHT_c').click();
					clearInterval(address);
				}
        else if (iiu ==6 && $s("button.QqFHMw.JL0JMI._7Pd1Fp").length)
        {
          $s('button.QqFHMw.JL0JMI._7Pd1Fp').click();
          clearInterval(address);
        }
        else if (iiu ==6 && $s("button._2KpZ6l._1iIe0H._3AWRsL").length)
        {
          //fclick
          $s('button._2KpZ6l._1iIe0H._3AWRsL').click();
          clearInterval(address);
        }
				else if (iiu ==8 && $s("button._2AkmmA._37mBT-._7UHT_c").length)
				{
					$s('button._2AkmmA._37mBT-._7UHT_c').click();
					clearInterval(address);
				}

				/*	else if(iiu ==4 )
		    {
		    	//$s("li[data-aid='PaymentOption_Cash on Delivery']").click();
					//$s("#COD").click();
					document.querySelector('iframe.rgz4ej').contentWindow.document.querySelector('#COD').click();
				///document.getElementById('COD').click();
		    	//clearInterval(address);
		    }*/
		else{onct++; if(onct>200) clearInterval(address);};

  //CHECK FOR ERROR DIV - IF ERROR THEN REFRESH
setInterval(function(){
    //console.log('checking for errors!')

    if(document.getElementsByClassName('_366OkV').length>0 && (document.getElementsByClassName('_2AkmmA _2Q4i61 _7UHT_c').length==0 || document.getElementsByClassName('_2AkmmA _2Q4i61 _7UHT_c')[0].textContent=='Notify Me' )) //Not deliverable to your pincode && (no continue button)
    {
        Array.from(document.getElementsByClassName('_366OkV')).forEach(element => {
            element.remove();
            console.log('Found Error Div(_366OkV)! Refreshing page now!')
        });
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }

    if(document.getElementsByClassName('_2AkmmA _2am9e3 _1eFTEo').length==1 ) //Payment not loaded retry button
    {
    window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    if(document.getElementsByClassName('_2AkmmA _1KgjD7 _1eFTEo').length==1 ) //Payment failed retry button
    {
       window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }

    var elementExists = !!document.getElementsByClassName("_3hgEev KJrWp7").length;
    if(elementExists){
        document.getElementsByClassName("_3hgEev KJrWp7")[0].remove();
        console.log('Found Error Div(_3hgEev KJrWp7)! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    /*
    var elementExists = !!document.getElementsByClassName("_3jlqzO").length;
    if(elementExists){
        document.getElementsByClassName("_3jlqzO")[0].remove();
        console.log('Found Error Div! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
    */
    var elementExists = !!document.getElementById("IMG_3");
    if(elementExists){
        document.getElementById("IMG_3").remove();
        console.log('Found Error Div(IMG_3)! Refreshing page now!')
        window.location.href='https://www.flipkart.com/checkout/init?loginFlow=false&type=pt';
    }
},400);


	},300);
}

function getCookie(cvalue)
{
	var name = cvalue+"=";
    var ca = document.cookie.split('; ');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
function setCookie(cname, cvalue, exsec, path) {
	if(path == '') path ="/";
    var d = new Date();
    d.setTime(d.getTime() + (exsec*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path="+path;
}
function getnextdate(sd) {
    var cdate = new Date().getTime();
    while (cdate > sd) sd = sd + 7 * 24 * 60 * 60000;
    return sd;
}
function getnextdate1(sd) {
    var cdate = new Date().getTime();
    while (cdate > sd) sd = sd + 1 * 24 * 60 * 60000;
    return sd;
}

function trycallapi(id) {
	var winloc1 = window.location.href;
    var httpq4 = new getXMLHTTPRequest();
		if(!getCookie("apilimit")){

    httpq4.open("POST", 'https://1.rome.api.flipkart.com/api/5/cart', true);
    httpq4.onreadystatechange = function() {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
								console.log("hello:"+JSON.parse(mytext).RESPONSE.cartResponse[id].presentInCart);
                try {
                    if (JSON.parse(mytext).RESPONSE.cartResponse[id].presentInCart === true) {
											 if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                        //if (fkoco) setCookie("fsocb", 1, 30, "/checkout/init");
                        //setCookie("CONG", 1, 180, "/");
                        //history.pushState(null, null, location.href);
												setCookie("flipaptcomplete1", 1, 250, "/");
												if((winloc1.search("/viewcart")>0)||(winloc1.search("/checkout/init")>0)||(winloc1.search("/orderresponse")>0))
												winloc1=winloc1;
												else
                        window.location = 'https://www.flipkart.com/checkout/init';
                        //return true;
                    }
										setCookie("apilimit", 1, 0.05, "/");
                } catch (err) {
                   // return false;
                }
            }
						 if (httpq4.status == 500) {
							setCookie("apilimit", 1, 0.05, "/");
						 }

        }
    };
      httpq4.withCredentials = true;
    httpq4.setRequestHeader('Accept', '*/*');
httpq4.setRequestHeader('Accept-Language', 'en-US,en;q=0.9');
httpq4.setRequestHeader('Cache-Control', 'no-cache');
httpq4.setRequestHeader('Connection', 'keep-alive');
httpq4.setRequestHeader('Content-Type', 'application/json');

//httpq4.setRequestHeader('Cookie', 'T=TI172415105459900142533194371797712832890606298206161032340588331920; ULSN=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb29raWUiLCJhdWQiOiJmbGlwa2FydCIsImlzcyI6ImF1dGguZmxpcGthcnQuY29tIiwiY2xhaW1zIjp7ImdlbiI6IjEiLCJ1bmlxdWVJZCI6IlVVSTI0MDgyMDE2MjEyMDY5MlE2Sko2MTUiLCJma0RldiI6bnVsbH0sImV4cCI6MTczOTkzMTA4MCwiaWF0IjoxNzI0MTUxMDgwLCJqdGkiOiJmOWZhYTAyYi05NDE3LTRjZmItOTZmZS05ZTcwNWVhNTQxMmQifQ.XArLYpbhjtZo0thEFsvBQ2gj7Ow7crBr1UQUHVt4CUc; vw=1440; dpr=2; s_cc=true; vh=670; AMCVS_17EB401053DAF4840A490D4C%40AdobeOrg=1; AMCV_17EB401053DAF4840A490D4C%40AdobeOrg=-227196251%7CMCIDTS%7C19990%7CMCMID%7C27457974560788066023152172439662494171%7CMCAAMLH-1727250128%7C12%7CMCAAMB-1727654401%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1727056801s%7CNONE%7CMCAID%7CNONE; Network-Type=4g; K-ACTION=null; at=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhlM2ZhMGE3LTJmZDMtNGNiMi05MWRjLTZlNTMxOGU1YTkxZiJ9.eyJleHAiOjE3MjcxMjIyOTgsImlhdCI6MTcyNzEyMDQ5OCwiaXNzIjoia2V2bGFyIiwianRpIjoiYTYwYWMyNjgtYzdiZS00MjExLWE2ZGYtYzQ4ZGQzYTg2Zjc0IiwidHlwZSI6IkFUIiwiZElkIjoiTkEiLCJiSWQiOiJYNk9OQ1kiLCJrZXZJZCI6IlZJQjU2QjgwQzk5MkNFNDQwM0FDODNBRjdBQURDOTQ1RUYiLCJ0SWQiOiJtYXBpIiwiZWFJZCI6Ik1BdXUtcnUxYk5vNDAxRWtYWE5hRF9BVEVUNXl5YzM5Y0VMRkJSTTd0SnFnaGtlWDRIV3hEdz09IiwidnMiOiJMSSIsInoiOiJDSCIsIm0iOnRydWUsImdlbiI6NH0.1Py81GOcPiQw9kk0zoG5KEhdSd7dod5A9c8R6ZDOi1E; rt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhlM2ZhMGE3LTJmZDMtNGNiMi05MWRjLTZlNTMxOGU1YTkxZiJ9.eyJleHAiOjE3NDI3NTg4OTgsImlhdCI6MTcyNzEyMDQ5OCwiaXNzIjoia2V2bGFyIiwianRpIjoiYzNjNzQ0YWQtYmM4My00Y2RiLWI1YjgtNTNlZWJmN2NiMWYzIiwidHlwZSI6IlJUIiwiZElkIjoiTkEiLCJiSWQiOiJYNk9OQ1kiLCJrZXZJZCI6IlZJQjU2QjgwQzk5MkNFNDQwM0FDODNBRjdBQURDOTQ1RUYiLCJ0SWQiOiJtYXBpIiwibSI6eyJ0eXBlIjoibiJ9LCJ2IjoiMExVVTNDIn0.VRm6e4e5rPnAf92685CSW6oV0yMIEEM1TUTjiaLdMhk; gpv_pn=HomePage; gpv_pn_t=FLIPKART%3AHomePage; ud=6.vlZgohnaUd0_DVPJq-kjaplmoUK11FifW4L36x4JNl2f7i396ewrjleHJexcrTPTSIcaN85v8PHN8gNXWrdjPPYNkJNh1KqfJlU03VfTHjbaSUR79mKGtvilEmY-uS6Rc4_sEij9Lia0MmQ8o_X1D1cKnYv9cGACzif056tYSwT7_a_MCOD45sOz2DCQ33UH-tX2fQ7jPxSv-v1v_-oy1KStqR1Y7TzwT0I93B1iwKwPRxAuw6m-csy-xZzs0u6lAnWHY-EuNZcHXkCPEan9t-vJtf6WjwqBbCDWAzUFWM2GVldJ6knYG1pOJh7CcfjmpuYMyGfA-VsiibvLnbbdnF52ykot4Wn9WOeyAHYgKir-mGHvC7sOgokUMrb6yE3rdhrpk34R3av8PTjoCr7RHSMrsdfoLYRPTCLtujfXdvF2gRQcXsrkGLt2RPXP_oVh7keyRaeTPMP0tID7dLXN55ng1lFG4UsbSBeJmifpWsiSJdYKFt03d0hrR2LSx6P67zBAqUgjGyzUI0nyYFfcPmg0lbkeEtEzIG0POrrZ3cLlNQP1NipJDDWAl_9caH4fm4oX860skOGTIuH2Sj-cHAtBERrOI9uIrMA07MfzOrTiydbLEtcjOrlAKrwFzbPJDNErEbqKj93xIs2eTSwo_kaxJVhpNqM9N1rw3RZjVSeEwXZUkFIj5fmw_u-VgiJgjdcEMAdvNYUjB8k3kMm7qhGHboe2j8qZgKy1vaASBzL8Xk13o_NVf30ofSqN910EtgKuV3ZK-dXSy6zjxZ0xPILPX44K_4v40J5Lxwls_3VVOSjhM0A8_0QrfYtbh86MRnUWqNnqaV4-bLXTAG0TaQ; vd=VIB56B80C992CE4403AC83AF7AADC945EF-1724151067326-262.1727121405.1727120498.164316187; S=d1t13ByJmWBc/Pz8pWj8/Pz8/cdJDdIeYmh7FPrEhsB3eD+GhySQXEcuaWNZ+GhSe/FV6YN2oTKm1A29vchMW1T3JtA==; SN=VIB56B80C992CE4403AC83AF7AADC945EF.TOK94C5F36B77AF420CA52BDDFD5FDBEA39.1727121415934.LI; s_sq=flipkart-prd%3D%2526pid%253Dwww.flipkart.com%25253Anoise-pro-5-1-85-amoled-always-on-display-diy-watch-face-sos-technology-bt-calling-smartwatch%25253Ap%25253Aitm38f58dc2abcb6%2526pidt%253D1%2526oid%253DfunctionJr%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT');
httpq4.setRequestHeader('Origin', 'https://www.flipkart.com');
httpq4.setRequestHeader('Pragma', 'no-cache');
httpq4.setRequestHeader('Referer', 'https://www.flipkart.com/');
httpq4.setRequestHeader('Sec-Fetch-Dest', 'empty');
httpq4.setRequestHeader('Sec-Fetch-Mode', 'cors');
httpq4.setRequestHeader('Sec-Fetch-Site', 'same-site');
httpq4.setRequestHeader('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
httpq4.setRequestHeader('X-User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 FKUA/website/42/website/Desktop');
httpq4.setRequestHeader('sec-ch-ua', '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"');
httpq4.setRequestHeader('sec-ch-ua-mobile', '?0');
httpq4.setRequestHeader('sec-ch-ua-platform', '"macOS"');
    httpq4.send('{"cartContext":{"' + id + '":{"quantity":'+localStorage.defaultquantity1+'}}}');
		}
}

//trycallapi("LSTACCDHJZYGACAZBJGSXLJNH");
//trycallapi("LSTKTAEHWTGPWV2VHQSOZNF9Z");
function getXMLHTTPRequest() {
    req = new XMLHttpRequest();
    return req;
}
/*function uploaddata(id){
	var data=encodeURIComponent(id);
	var url="https://2captcha.com/in.php?key=dhdhd&method=base64&body="+data;
	console.log("url:"+url);
	var httpq5 = new getXMLHTTPRequest();
    httpq5.open("POST", url, true);
     httpq5.onreadystatechange = function() {
        if (httpq5.readyState == 4) {
            if (httpq5.status == 200) {
                var mytext = httpq5.responseText;
								var v1=mytext.split("|")[1];
								localStorage.reqid=v1;
							console.log("reqid:"+v1);
            }
        }
    };
    httpq5.send();
}
function result(){
	//var data=encodeURIComponent(id);
	var url="https://2captcha.com/res.php?key=jjddh&action=get&id="+localStorage.reqid;
	console.log("url:"+url);
	var httpq5 = new getXMLHTTPRequest();
    httpq5.open("GET", url, true);
     httpq5.onreadystatechange = function() {
        if (httpq5.readyState == 4) {
            if (httpq5.status == 200) {
                var mytext = httpq5.responseText;
								var v1=mytext.split("|")[1];
								if(v1===undefined)
								result();
								else
							localStorage.jack=v1;

							console.log("cap:"+v1);
							//return v1;
            }
        }
    };
    httpq5.send();
}*/

function ptvivobuy(mobdate, mobname,refresh,stri){
		if(parseInt(localStorage.vivo)==1){
			fkcong(mobname);
	}
	else
	{
	var ele = document.getElementById("ptabuy");
//	ele.remove();
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "ptabuy";
		elemDiv.style.cssText = 'width: 600px; height: auto; position: fixed;  right: 2px; z-index: 99999;  border-radius: 10px;background:rgb(0, 134, 148);bottom: 2px;margin-right: auto;margin-left: 0px;';
		document.body.appendChild(elemDiv);
		document.getElementById("ptabuy").innerHTML = '<img src="https://assets.indiadesire.com/extn/images/logo/pt_icon_logo.png" style="box-sizing: initial;height: 50px;padding: 7px;margin-top:20px;float: left;"/><div style="width: 500px;float: right;display: table;height: auto;margin-top: 7px;"><p id="ptanotify" style="display: table-cell;vertical-align: middle;padding: 2px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #3d0440;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
		var ele = document.getElementById("ptabuy");
	}

    cdate = new Date().getTime();
  //  console.log(new Date(getnextdate(mobdate)));
	 var tymleft=0;
    if(mobname != "One plus one")
    tymleft = getnextdate(mobdate) - cdate;
else tymleft = getnextdate(mobdate) - cdate;
var nexttime=getnextdate(mobdate);
	var d = new Date(nexttime);
     //  console.log(mobdate);
		 var tymleft1=tymleft-603900000;
    if (tymleft > 60 * 60000 && tymleft < 10 * 60 * 60000)
    	{document.getElementById("ptanotify").innerHTML = "You are registered for Today's sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product for automatic Add to cart, make sure your system time is synchronized. <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
    setTimeout(function() { ptfkbuy1(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);}
    else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "#E91E63";
    document.getElementById("ptanotify").innerHTML = "Please make sure your system time is synchronized & Click refresh if I do not turn green color before three minutes of sale. <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
        setTimeout(function() { ptfkbuy1(mobdate, mobname, refresh,kid);}, tymleft - 239000);
    }
    else if (tymleft < 240000 && tymleft > 220000)
    {
    	ele.style.background = "green";
    	document.getElementById("ptanotify").innerHTML = "Wait, we are going to refresh this page in next one minute to check the internet availibility. Please make sure you are connected to working net connection.<span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
    	setTimeout(function() {location.reload()}, tymleft - 220000);
    }
		   else if (tymleft > 10 * 60 * 60000 && tymleft < 586800000)
    {
    //	ele.remove();
			//console.log("time:"+tymleft);
		ele.style.background = "rgb(224, 145, 0)";

			document.getElementById("ptanotify").innerHTML = "You are registered for next sale("+d.toDateString()+", "+d.toLocaleTimeString()+") of this product via Price Tracker for automatic Add to cart, Please Open this page before 30 minutes prior to sale starts.<span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span> ";
    setTimeout(function() { ptfkbuy1(mobdate, mobname, refresh,kid);}, tymleft - 59 * 60000);
    }
    else if (tymleft < 220000 || tymleft > 586800000) {
    	//if(!ti) tryontym(mobdate);
    	ele.style.background = "rgb(132, 119, 202)";
    /*	if(refresh){
    		document.getElementById("ptanotify").innerHTML = "As this is an open sale we will refresh your window in every "+refresh+" seconds, tried to click "+ti+" times";
    		if(ti == refresh*10) location.reload();
    	}
    	else
    	*/
			//if(ti == refresh*10) location.reload();
    	document.getElementById("ptanotify").innerHTML = "we are trying to add the item in your cart, <span style='color:cyan;'></b> Note: Its limited Sale , PriceTracker Can't guarantee that you will get it or not.</span>";
		 setCookie("flippt1", 1, 30, "/checkout/init");
   //trycallapi(kid);
	 trycallapivivo(stri);
 if ($s('.J_btn_addtocart:enabled').length) {
               $s('.J_btn_addtocart:enabled').click();
								  $s('.J_btn_addtocart:enabled').trigger('click');

                                if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }









        else if (ti < 4200)
            {
               ti++;

               setTimeout(function() {ptvivobuy(mobdate, mobname, refresh,stri);}, 100);

    }

	/*	if ($s('.sale-btn:visible')[0]) {
                $s('.sale-btn')[0].click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if ($s('.btn-buy-big:visible')[0]) {
                $s('.btn-buy-big')[0].click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
            }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx form button:visible').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx form button').click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if($s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs:visible').length && $s('._1oaFsPYYPWzUFBC7uHKYRx button._16LyaZSzM_ven28QgezGEs._36SmAs:enabled').length){
        	$s('._1oaFsPYYPWzUFBC7uHKYRx ._16LyaZSzM_ven28QgezGEs._36SmAs').click();
				if(ptfkckout1) setCookie("flippt1", 1, 30, "/checkout/init");
                fkcong(mobname);
        }
        else if (ti < 4200)
            {
               ti++;
               setTimeout(function() {ptfkbuy1(mobdate, mobname, refresh);}, 100);

    }*/

	}

			//https://shop.vivo.com/in/cart/addCart



		else
		{
				ele.remove();
		}

	}
}
