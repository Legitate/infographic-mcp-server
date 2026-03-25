
//var ptid = localStorage.ptextid;


   chrome.storage.local.get(['ptextid','ptextauth'], (result) => {
     if(typeof(result.ptextid) == "undefined" || result.ptextid=="" || parseFloat(result.ptextid)==0 || result.ptextid==0|| isNaN(parseInt(result.ptextid))){
       var af = "pt";
       var cmp="pt";
       var extid=0;
       if(result.ptextid)
       extid=result.ptextid;
         var parameters = "extid=" + extid + "&affid=" + af+"&cmp="+cmp;
            //   var parameters = "pid=" + request.prodid+"&store="+request.store+"&extnid="+ result.ptextid+"&extnauth="+result.ptextauth;
               let fetchData = {
     method: 'POST',
     body: parameters,
     headers: new Headers({
       'Content-Type': 'application/x-www-form-urlencoded'
     })
   };
   fetch("https://api2.indiadesire.com/api.php?rquest=registerNewUser", fetchData)
   .then((response) => response.json())
   .then((responseData) => {

   //var data1=JSON.parse(responseData);
   chrome.storage.local.set({ptextid:responseData.userid});
     chrome.storage.local.set({ptextauth:responseData.extn1});
    chrome.storage.local.set({tokenID:responseData.token});
        callInstall();
    //  sendResponse({output: JSON.stringify(responseData),title:request.title,price:request.price});
   });
 }
    });



function callInstall(){
 chrome.storage.local.get(['first','ptextid','ptextauth'], (result) => {
if(typeof(result.first) == "undefined" && typeof(result.ptextid) != "undefined"){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var pid=result.ptextid;
var auth= result.ptextauth;

var d = new Date();
var n = d.toISOString();

  chrome.tabs.create({
   url : "https://pricetrackr.in/extension/install.aspx"
 });
   chrome.storage.local.set({first:"true"});

  chrome.runtime.reload();
}
});
}
if(chrome.runtime.setUninstallURL) {
  //  var text=getClientID();
    chrome.storage.local.get(['first','ptextid','ptextauth'], (result) => {
 var pid=result.ptextid;
 var auth= result.ptextauth;
 var text="https://pricetrackr.in/extension/uninstall.aspx?user="+pid+"&expo="+auth;
 chrome.runtime.setUninstallURL(text);
 });

} else {
  // Not yet enabled
}


function getselfCookie(cvalue) {
    var name = cvalue + "=";
    var ca = "";
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {

        if (request.sksmode == "flippt") {
            var addmth = 0
            addmth = localStorage["flipadd"];
            sendResponse({
                output: addmth
            });
        }
        if(request.sendTabID == "TabIDRequested"){
        sendResponse({output: sender.tab.id});
      }
        if(request.message == "getSItem"){


                           var jsonarg=JSON.parse(request.rData);

                               for (var key in jsonarg) {

       jsonarg[key]=localStorage.getItem(key);
   }

        sendResponse({GottaGo:JSON.stringify(jsonarg)});
      }
    });
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.message === "getUrl") {
           sendResponse({output: chrome.runtime.getURL("css/ptrequired.css")});
}

        if (request.sksmode == "flippt") {
            var addmth = 0
              chrome.storage.local.get(['flipadd'], (result) => {
                addmth = result.flipadd;
                sendResponse({
                    output: addmth
                });
              });

        }
        if(request.sendTabID == "TabIDRequested"){
        sendResponse({output: sender.tab.id});
      }
        if(request.message == "getSItem"){
          var jsonarg=JSON.parse(request.rData);

              for (var key in jsonarg) {
  chrome.storage.local.get([key], (result) => {
      sendResponse({GottaGo:JSON.stringify(jsonarg)});
  });

}


   }



              if(request.mode == "saledate"){
 var key1=request.val;
                chrome.storage.local.get(['saledate'], (result) => {
                    sendResponse({saledata:result.saledate});
                });




      }
         if(request.mode == "defaultquantity"){


                           var key1=request.mode;

                           chrome.storage.local.get(['defaultquantity'], (result) => {
                            sendResponse({dquantity:result.defaultquantity});
                           });


      }
           if(request.mode == "defaultquantity1"){


                           var key1=request.mode;
                           chrome.storage.sync.get(['defaultquantity1'], (result) => {
                            sendResponse({dquantity:result.defaultquantity1});
                           });

      }
  if(request.mode == "saledate1"){


                           var key1=request.val;
                           chrome.storage.local.get([key1], (result) => {
                            sendResponse({saledata:result.key1,salecookie:getselfCookie("saletime"),salecookiecheck:getselfCookie("saletimecheck")});
                           });
      sendResponse({saledata:saledata,salecookie:getselfCookie("saletime"),salecookiecheck:getselfCookie("saletimecheck")});
      }
        if(request.mode == "salerefresh"){


               refreshsale();

        sendResponse({saledata:"1"});
      }
        if(request.clientID == "getclientID"){
            var client=getClientID();
        sendResponse({clientID:client});
      }
       if(request.getVer == "getversion"){
            var manifest_det = chrome.runtime.getManifest();
var manifest_version = manifest_det.version;
        sendResponse({getVers:manifest_version});
      }
       if(request.message == "setSItem"){
                        var jsonarg1=JSON.parse(request.rData);

                               for (var key1 in jsonarg1) {
  chrome.storage.local.set({key1:jsonarg1[key1]});


   }


        sendResponse({GottaGo:JSON.stringify(jsonarg1)});
      }
        if (request.requestMode == "graph") {

          chrome.storage.local.get(['ptextid','ptextauth'], (result) => {

                      var parameters = "pid=" + request.prodid+"&store="+request.store+"&extnid="+ result.ptextid+"&extnauth="+result.ptextauth;
                      let fetchData = {
            method: 'POST',
            body: parameters,
            headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
          fetch("https://api2.indiadesire.com/n/m/api.php?rquest=getProductPriceDataMN", fetchData)
          .then((response) => response.json())
          .then((responseData) => {


             sendResponse({output: JSON.stringify(responseData),title:request.title,price:request.price});
          });
           });

          //if(h.status == 200)
            return true;
            //console.log("data");



        }
        if (request.requestMode == "setpricedrop") {

            //console.log("data");
            chrome.storage.local.get(['ptextid','ptextauth','fcmUserID','tokenID'], (result) => {

              var parameters1 = "mobileno="+btoa(request.mobile)+"&extnid="+result.ptextid+"&extnauth="+result.ptextauth+"&gcm="+result.fcmUserID;
              var parameters2 = "&medium="+request.medium+"&minpricecheck="+request.minpricecheck+"&minprice="+request.minprice+"&cprice="+request.cprice;
              var parameters3 = "&prodid="+request.prodid+"&store="+request.store+"&email="+btoa(request.email)+"&token="+result.tokenID;
              parameters1=parameters1+parameters2+parameters3;
                        let fetchData = {
              method: 'POST',
              body: parameters1,
              headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            };
            fetch("https://api2.indiadesire.com/n/m/api.php?rquest=setPriceDropAlertM", fetchData)
            .then((response) => response.json())
            .then((responseData) => {


               sendResponse({output: JSON.stringify(responseData)});
            });
             });

            //if(h.status == 200)
              return true;


        }

           if (request.requestMode == "checkpricedropset") {
             chrome.storage.local.get(['ptextid','ptextauth'], (result) => {
               var parameters1 = "prodid="+request.prodid+"&store="+request.store+"&extnid="+result.ptextid+"&extnauth="+result.ptextauth;
                         let fetchData = {
               method: 'POST',
               body: parameters1,
               headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded'
               })
             };
             fetch("https://api2.indiadesire.com/n/m/api.php?rquest=CheckPriceDropAlertSetM", fetchData)
             .then((response) => response.json())
             .then((responseData) => {


                sendResponse({output: JSON.stringify(responseData)});
             });
              });
            //console.log("data");

            //if(h.status == 200)
              return true;


        }
         if (request.requestMode == "unsetpricedrop") {
           chrome.storage.local.get(['ptextid','ptextauth'], (result) => {

             var parameters1 = "prodid="+request.prodid+"&store="+request.store+"&extnid="+result.ptextid+"&extnauth="+result.ptextauth;
                       let fetchData = {
             method: 'POST',
             body: parameters1,
             headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded'
             })
           };
           fetch("https://api2.indiadesire.com/n/m/api.php?rquest=setPriceDropAlertUnsubM", fetchData)
           .then((response) => response.json())
           .then((responseData) => {


              sendResponse({output: JSON.stringify(responseData)});
           });
            });
            //console.log("data");

            //if(h.status == 200)
              return true;


        }
           if (request.requestMode == "verifymobile") {
             chrome.storage.local.get(['ptextid','ptextauth'], (result) => {

               var parameters1 = "data="+request.data+"&extnid="+result.ptextid+"&extnauth="+result.ptextauth;
                         let fetchData = {
               method: 'POST',
               body: parameters1,
               headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded'
               })
             };
             fetch("https://api2.indiadesire.com/n/m/api.php?rquest=verifyMobileM", fetchData)
             .then((response) => response.json())
             .then((responseData) => {


                sendResponse({output: JSON.stringify(responseData)});
             });
              });
            //console.log("data");

            //if(h.status == 200)
              return true;


        }
         if (request.requestMode == "verifyemail") {
           chrome.storage.local.get(['ptextid','ptextauth'], (result) => {

             var parameters1 = "data="+request.data+"&extnid="+result.ptextid+"&extnauth="+result.ptextauth;
                       let fetchData = {
             method: 'POST',
             body: parameters1,
             headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded'
             })
           };
           fetch("https://api2.indiadesire.com/n/m/api.php?rquest=verifyEmailM", fetchData)
           .then((response) => response.json())
           .then((responseData) => {


              sendResponse({output: JSON.stringify(responseData)});
           });
            });
            //console.log("data");

            //if(h.status == 200)
              return true;


        }



        if (request.autobuy) {
            sendResponse({
                output: getselfCookie(request.autobuy),
                ptfkckout: getselfCookie('fkptco')
            });
        }
             if (request.autobuy1) {
            sendResponse({
                output1: getselfCookie(request.autobuy1),
                ptfkckout1: getselfCookie('fkptco1')
            });
        }
            if (request.salebuy) {
                       var date = new Date();
                       	const dateTime = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts = Math.round(dateTime / 1000);
date.setTime(date.getTime() + (300000 * 1000));
document.cookie = "saletime="+ts+";expires=" + date;
            sendResponse({
                output: getselfCookie("saletime")
            });
        }

           if (request.salebuycheck) {
                       var date1 = new Date();
                       	const dateTime1 = Date.now();
//const timestamp = Math.floor(dateTime / 1000);
		var ts1 = Math.round(dateTime1 / 1000);
date1.setTime(date1.getTime() + (700000 * 1000));
document.cookie = "saletimecheck="+ts1+";expires=" + date1;
            sendResponse({
                output: getselfCookie("saletimecheck")
            });
        }


           if (request.sksmode == "getcookie") {
             chrome.cookies.getAll({
            'url': request.url,
           'name': request.cname
        },
        function (data) {

             sendResponse({
                cookievalue:JSON.stringify(data)
            });
        });

            return true;
        }
        if (request.sksmode == "duplicat") {
            //console.log(sender.tab.id);
            chrome.tabs.duplicate(sender.tab.id);
        }
        if (request.sksmode == "flipkart") {
            if (request.pairs) {
                sendPairs(request.pairs, "flipkart","Asia/Kolkata");
            }
        }
        if (request.sksmode == "snapdeal") {
            if (request.pairs) {
                sendPairs(request.pairs, "snapdeal","Asia/Kolkata");
            }
        }
        if (request.sksmode == "jiomart") {
            if (request.pairs) {
                sendPairs(request.pairs, "jiomart","Asia/Kolkata");
            }
        }
        if (request.sksmode == "nykaa") {
            if (request.pairs) {
                sendPairs(request.pairs, "nykaa","Asia/Kolkata");
            }
        }
        if (request.sksmode == "ajio") {
            if (request.pairs) {
                sendPairs(request.pairs, "ajio","Asia/Kolkata");
            }
        }
        if (request.sksmode == "reliancedigital") {
            if (request.pairs) {
                sendPairs(request.pairs, "reliancedigital","Asia/Kolkata");
            }
        }
        if (request.sksmode == "shopclues") {
            if (request.pairs) {
                sendPairs(request.pairs, "shopclues","Asia/Kolkata");
            }
        }
        if (request.sksmode == "paytm") {
            if (request.pairs) {
                sendPairs(request.pairs, "paytm","Asia/Kolkata");
            }
        }
        if (request.sksmode == "amazon") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazon","Asia/Kolkata");
            }
        }
         if (request.sksmode == "tatacliq") {
            if (request.pairs) {
                sendPairs(request.pairs, "tatacliq","Asia/Kolkata");
            }
        }
         if (request.sksmode == "myntra") {
            if (request.pairs) {
                sendPairs(request.pairs, "myntra","Asia/Kolkata");
            }
        }
            if (request.sksmode == "pepperfry") {
            if (request.pairs) {
                sendPairs(request.pairs, "pepperfry","Asia/Kolkata");
            }
        }
         if (request.sksmode == "jabong") {
            if (request.pairs) {
                sendPairs(request.pairs, "jabong","Asia/Kolkata");
            }
        }
           if (request.sksmode == "clovia") {
            if (request.pairs) {
                sendPairs(request.pairs, "clovia","Asia/Kolkata");
            }
        }
           if (request.sksmode == "purplle") {
            if (request.pairs) {
                sendPairs(request.pairs, "purplle","Asia/Kolkata");
            }
        }
          if (request.sksmode == "zivame") {
            if (request.pairs) {
                sendPairs(request.pairs, "zivame","Asia/Kolkata");
            }
        }
          if (request.sksmode == "croma") {
            if (request.pairs) {
                sendPairs(request.pairs, "croma","Asia/Kolkata");
            }
        }
          if (request.sksmode == "amazoncn") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazoncn","Asia/Shanghai");
            }
             }
             if (request.sksmode == "amazonfr") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonfr","Europe/Paris");
            }
             }
             if (request.sksmode == "amazonus") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonus","America/New_York");
            }}
            if (request.sksmode == "amazonuk") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonuk","Europe/London");
            }
            }if (request.sksmode == "amazones") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazones","Europe/Madrid");
            }
            }
            if (request.sksmode == "amazonmx") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonmx","America/Mexico_City");
            }
            }if (request.sksmode == "amazonjp") {
            if (request.pairs) {
                sendPairs(request.pairs, "amazonjp","Asia/Tokyo");
            }
            }

    });

function sendPairs(data, store,ctimezone) {
  chrome.storage.local.get(['ptextid','ptextauth'], (result) => {
    var parameters = "extnid="+result.ptextid+"&extnauth="+result.ptextauth+"&data=" + encodeURIComponent(data) + "&store=" + store+"&ctimezone="+ctimezone+"&version="+chrome.runtime.getManifest().version+"&useragent="+navigator.userAgent+"&platform="+navigator.platform;
              let fetchData = {
    method: 'POST',
    body: parameters,
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  fetch("https://api.indiadesire.com/v10/api.php?rquest=uploadData", fetchData)
  .then((response) => response.json())
  .then((responseData) => {


     var abc=JSON.stringify(responseData);
  });
   });
       // console.log("Success1");

}
chrome.gcm.onMessage.addListener(gcmmessage);
chrome.instanceID.onTokenRefresh.addListener(ontokenRefresh);
function getrandomId() {
    var random = Math.floor(Math.random() * 800719929436992) + 1;
    return random.toString();
}
function gcmmessage(message) {
    var gcmmsg1 = message.data;
    gcmmsg = gcmmsg1;
    var image = message.data["gcm.notification.image"];
    popupnotification( message.data["gcm.notification.title"],  message.data["gcm.notification.body"],  message.data["click_action"], image);
}
function popupnotification(title, detail, link, image) {
  var listofnoti = [];
  type = "basic";
 // if(image) type = "image";
    var opt = {
        type: type,
        title: title,
        message: detail,
        iconUrl: image,
        priority: 100,
        requireInteraction:true
    };
    var linkPass = link;
    var ranid = getrandomId();
    chrome.notifications.create(ranid, opt, function(id) {
        listofnoti.push({
            notifcationID: id,
            URL: link
        });
    });
}
function notifyClicked(notifyID) {
    for (i = 0; i < listofnoti.length; i++) {
        if (listofnoti[i].notifcationID == notifyID) {
            window.open(listofnoti[i].URL);
            chrome.notifications.clear(notifyID);
        }
    }
}
chrome.notifications.onClicked.addListener(notifyClicked);
var PROJECT_ID = "911129401840";
 chrome.storage.local.get(['fcmUserID','ptextid','ptextauth','fcmEnable'], (result) => {
if ((result.fcmUserID == undefined || result.fcmUserID == "" || typeof(result.fcmUserID) =="undefined" || typeof(result.fcmEnable) == "undefined") && result.ptextid && result.ptextauth) {
    //chrome.gcm.register(PROJECT_ID, registerGcmUser);
    chrome.instanceID.getToken({authorizedEntity:PROJECT_ID, scope: "FCM"}, registerGcmUser);
     chrome.storage.local.set({fcmEnable:"true"});


}else {
    //sendToServer(localStorage.pushToken);
}
});
function registerGcmUser(fcmUserID) {
    saveToServer(fcmUserID);
}
function ontokenRefresh() {
  chrome.instanceID.getToken({authorizedEntity:PROJECT_ID, scope: "FCM"}, ontokenRefreshFinal)
  //var fcmUserID=
   // saveToServer(fcmUserID);
}
function ontokenRefreshFinal(fcmUserID) {
    saveToServer(fcmUserID);
}

function saveToServer(fcmUserID) {
  chrome.storage.local.get(['ptextid','ptextauth'], (result) => {
    if (fcmUserID != "") {
    var parameters = "extnid="+result.ptextid+"&extnauth="+result.ptextauth+"&gcmuserid=" + fcmUserID;
              let fetchData = {
    method: 'POST',
    body: parameters,
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  fetch("https://api.indiadesire.com/api.php?rquest=storeGcmUserID", fetchData)
  .then((response) => response)
  .then((responseData) => {

 chrome.storage.local.set({fcmUserID:fcmUserID});

  });
}
   });

}
