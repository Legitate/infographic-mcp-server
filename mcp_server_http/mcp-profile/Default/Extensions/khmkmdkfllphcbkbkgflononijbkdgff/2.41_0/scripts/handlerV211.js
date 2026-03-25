tabID = 0;

 $abc = jQuery.noConflict();


function convertMonth(date){
  month = "";

  date = date.toUpperCase();
  if(date.split("JAN").length > 1){
    month = 1;
    mon = "JAN";
  }
  else if(date.split("FEB").length > 1){
    month = 2;
    mon = "FEB";
  }
  else if(date.split("MAR").length > 1){
    month = 3;
    mon = "MAR";
  }
  else if(date.split("APR").length > 1){
    month = 4;
    mon = "APR";
  }
  else if(date.split("MAY").length > 1){
    month = 5;
    mon = "MAY";
  }
  else if(date.split("JUN").length > 1){
    month = 6;
    mon = "JUN";
  }
  else if(date.split("JUL").length > 1){
    month = 7;
    mon = "JUL";
  }
  else if(date.split("AUG").length > 1){
    month = 8;
    mon = "AUG";
  }
  else if(date.split("SEP").length > 1){
    month = 9;
    mon = "SEP";
  }
  else if(date.split("OCT").length > 1){
    month = 10;
    mon = "OCT";

  }
  else if(date.split("NOV").length > 1){
    month = 11;
    mon = "NOV";

  }
  else if(date.split("DEC").length > 1){
    month = 12;
    mon = "DEC";

  }
  return month;
}

function convertMonthInt(date){
  date = parseInt(date);
  mon = date;
  if(date == 1){
    mon = "Jan";
  }
  else if(date == 2){
    mon = "Feb";
  }
  else if(date == 3){
    mon = "Mar";
  }
  else if(date == 4){
    mon = "Apr";
  }
  else if(date == 5){
    mon = "May";
  }
  else if(date == 6){
    mon = "Jun";
  }
  else if(date == 7){
    mon = "Jul";
  }
  else if(date == 8){
    mon = "Aug";
  }
  else if(date == 9){
  }
  else if(date == 10){
    mon = "Oct";

  }
  else if(date == 11){
    mon = "Nov";

  }
  else if(date == 12){
    mon = "Dec";

  }
  return mon;
}

function convertDate(date){
  //int mmt case
  date = date.toUpperCase();
  date.split("").length > 1
  if(date.split("JAN").length > 1){
    month = 1;
    mon = "JAN";
  }
  else if(date.split("FEB").length > 1){
    month = 2;
    mon = "FEB";
  }
  else if(date.split("MAR").length > 1){
    month = 3;
    mon = "MAR";
  }
  else if(date.split("APR").length > 1){
    month = 4;
    mon = "APR";
  }
  else if(date.split("MAY").length > 1){
    month = 5;
    mon = "MAY";
  }
  else if(date.split("JUN").length > 1){
    month = 6;
    mon = "JUN";
  }
  else if(date.split("JUL").length > 1){
    month = 7;
    mon = "JUL";
  }
  else if(date.split("AUG").length > 1){
    month = 8;
    mon = "AUG";
  }
  else if(date.split("SEP").length > 1){
    month = 9;
    mon = "SEP";
  }
  else if(date.split("OCT").length > 1){
    month = 10;
    mon = "OCT";

  }
  else if(date.split("NOV").length > 1){
    month = 11;
    mon = "NOV";

  }
  else if(date.split("DEC").length > 1){
    month = 12;
    mon = "DEC";

  }

  date1 = date.split(mon);
  date1 = date1[0];
  year = date.split(mon);
  year = year[1];

  return year+"-"+month+"-"+date1;

}

var xx = window.location.href;

  function setTabID(tabId){
 // console.log("Tab ID received is " + tabId);
  tabID = tabId;
}
function getTabID(){
   ////console.log("Tab ID process initiated");
   //var jsonArr = [{'sendTabID': 'TabIDRequested'}];
   //jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
    chrome.runtime.sendMessage({
        sendTabID: 'TabIDRequested'
    }, function (response) {
      setTabID(response.output);
      });
   //sendMessage(0, jsonArr, 0, setTabID, passBack);
 }

 getTabID();

function prepareGraph(pid, passBack1){
  // console.log("pidPrepare: "+pid);
  //if(userSetting!="notYet"){
    //if(userSetting[1].value==1){
     // var curPosition = getCurrentPosition(window.location.href);
  // console.log("curPostion: "+curPosition);
   var passbackdata=JSON.parse(passBack1);
  var jsonArr = [{'requestMode': 'graph','prodid':pid}];
  jsonArr = JSON.stringify(jsonArr);
   chrome.runtime.sendMessage({
        requestMode: 'graph',prodid:pid,title:passbackdata[0].title,price:passbackdata[0].price,store:passbackdata[0].store
    }, function (response) {
      plotGraph(response.output,response.title,response.price,passbackdata[0].currency,passbackdata[0].ccode);
      });
   /*
  chrome.runtime.sendMessage(jsonArr, function (response) {
      plotGraph(response.output);

      });*/

}

function addGraphBase(passBack,impposdata) {



      var passedData = JSON.parse(passBack);
      var selectors = JSON.parse(passedData[0].selectors);


      var addedToDOM = 0;
      //var imgSet = "settings.png";
      var csscustom=impposdata;

     var stringToAdd = '<div style="clear:both"></div><div id="containerMainPTID" class=" full-width" style=" background: #fff; min-width: 820px; max-width: 1070px; height: auto; margin: 0 auto; position: relative;padding:2px;'+csscustom+'"><div id="chart-logo1" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://indiadesire.com/" style="color: #0db2db;"><img src="'+chrome.runtime.getURL('images/logo/pt_logo-small.png')+'" style="vertical-align: sub;margin-left: 5px;"></a></div><div id="container2pt" class="contGraphMainptid"></div><div id="container3pt"></div><div id="container4pt" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/bug-icon.png')+'" style="vertical-align: middle;height: 15px;top: 0px;position: relative;">Report A Bug</a><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff/support" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/bulb-icon.png')+'" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Suggest Us Something</a><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/star-icon.png')+'" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Rate Us</a><input type="button" id="closeptgraph" value="Close Graph"></div><div id="container10pt"> </div></div><div style="clear:both">';
 //  var stringToAdd ="";
      for (n = 0; n < selectors.length; n++) {
         $c = jQuery.noConflict();
        if ($c(selectors[n].selector).length > 0 && addedToDOM == 0) {
          addedToDOM = 1;
          if (selectors[n].attr == "none") {
            if (selectors[n].pos == "after") {
              $c(selectors[n].selector).after(stringToAdd);
            }
            else {
              $c(selectors[n].selector).before(stringToAdd);
            }
          }
          else if (selectors[n].attr == "parent") {
            if (selectors[n].pos == "after") {
              $c(selectors[n].selector).parent().after(stringToAdd);
            }
            else {
              $c(selectors[n].selector).parent().before(stringToAdd);
            }
          }
           else if (selectors[n].attr == "current") {
            if (selectors[n].pos == "append") {
              $c(selectors[n].selector).append(stringToAdd);
            }

          }
        }
      }
    addClickEventsGraph();


}
function addClickEventsGraph(){
    $c('#closeptgraph').click(function(){
 $c('#containerMainPTID').css("display","none");
  });
}

function plotGraph(priceData,title,price1,currency,ccode)
  {
      var dataString = [];
      var dataString1 = [];
       var datas=[];
     var today = new Date();
     var tom1=new Date();
     tom1.setDate(tom1.getDate() + 1);
     var tom2=new Date();
     tom2.setDate(tom2.getDate() + 2);
     var tom3=new Date();
     tom3.setDate(tom3.getDate() + 3);
     var tom4=new Date();
     tom4.setDate(tom4.getDate() + 4);
 var dd = today.getDate();
 var mm = today.getMonth();
 var yyyy = today.getFullYear();
 var dataset = JSON.parse(priceData);
  var curDateString = yyyy + "-" + mm + "-" + dd;
 if(dataset.length==0)
 {
   datas[0] = {};
   datas[0].datec=yyyy + "-" + (mm+1) + "-" + dd;
  datas[0].prevlowprice=price1;
   dataset[0] = {};
  dataset[0].averageprice=price1;
  dataset[0].lowestprice=price1;
  dataset[0].highprice=price1;
 }
 else
  datas=dataset[0].pricedata;
 var aprice=dataset[0].averageprice;
  var lprice=dataset[0].lowestprice;
  if(lprice==0)
  lprice=aprice;
  var hprice=dataset[0].highprice;
 //var passbackdata=JSON.parse(passback);
 //console.log("Plot Graph Reciveed:"+datas.length);
 var pointFound = 0;
 var flagPrice=1;
 var currentPrice=price1;


 for(k=0;k<datas.length;k++){
  var dateC = datas[k].datec;
  var price = datas[k].prevlowprice;
     //console.log("Date:" + dateC+"price: "+price);
   // dateC2 = dateC.split(" ")[0];
   var  dateS = dateC.split("-");
    year = dateS[0];
    month = dateS[1]-1;
    date = dateS[2];

    if(flagPrice===0){
      currentPrice = price;
      if(currentPrice==="" || currentPrice===0 || currentPrice === undefined){
        flagPrice = 0;
      }
      else {
        flagPrice = 1;
      }
    }
    // console.log("FlagPrice is " + flagPrice);
    // console.log("Place 3 " + price);
    if(flagPrice==1 && parseInt(dd)==parseInt(date) && parseInt(mm)==parseInt(month) && parseInt(yyyy)==parseInt(year)){
      price = parseInt(currentPrice);
      pointFound = 1;
    }

    if(month===0){
      //month = 12;
    }

    dataString.push([Date.UTC(parseInt(year), parseInt(month) , parseInt(date)), parseInt(price)]);

    // console.log("Place 1 " + price);
  }
  if(pointFound===0 && flagPrice===1){
    dataString.unshift([Date.UTC(parseInt(yyyy), parseInt(mm) , parseInt(dd)), parseInt(currentPrice)]);
    console.log("current price " + parseInt(currentPrice));
  }
  if(parseInt(currentPrice)&&(datas.length>150))
  {
    dataString.unshift([Date.UTC(parseInt(tom1.getFullYear()), parseInt(tom1.getMonth()) , parseInt(tom1.getDate())), null]);
  dataString.unshift([Date.UTC(parseInt(tom2.getFullYear()), parseInt(tom2.getMonth()) , parseInt(tom2.getDate())), null]);


  }
  else if(parseInt(currentPrice)&&(datas.length>20))
  {
    dataString.unshift([Date.UTC(parseInt(tom1.getFullYear()), parseInt(tom1.getMonth()) , parseInt(tom1.getDate())), null]);



  }

//dataString = dataString + "]";
var ToSend = JSON.stringify(dataString);
for(k=dataString.length-1;k>=0;k--)
 dataString1.push(dataString[k]);
//console.log("Final Chart " + ToSend);
console.log("Final Chart Asc:" + JSON.stringify(dataString1));
var prodName=title;
var siteName=getsiteName();
 $ = jQuery.noConflict();
if($('.contGraphMainptid1').length>0){
  //console.log("Plot Container2 was found");

    $ = jQuery.noConflict();
    var width1= $("#containerMainPTID1").width();
   // width1=((width1*74)/100);
  $('.contGraphMainptid1').highcharts('StockChart',{
    chart: {
 backgroundColor: '#f7f7ed',
      type: 'spline',
      zoomType: 'x'
    },
    navigator: {
              enabled: false
          },
      scrollbar: {
                    enabled: false
                },
    rangeSelector: {
           selected: 5
       },
    title: {
      text: 'Should I order ' + prodName + " now ?"
    },
    subtitle: {
      text: '<span style="font-size:15px;font-weight:bold;color:#0079ed;">Average Price:Rs.'+aprice+'    </span><span style="font-size:15px;font-weight:bold;color:green;">Lowest Price:Rs.'+lprice+'</span>    <span style="font-size:15px;font-weight:bold;color:red;">Highest Price:Rs.'+hprice+'</span>'
    },
    xAxis: {
      type: 'datetime',
        crosshair: true,
                dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
              }
            },
            yAxis: {
                crosshair: true,
              title: {
                text: 'Price ('+currency+')'
              },
               opposite: false,
              labels: {
      align: 'right',
      x: -4
    },
              min: 0
            },
            tooltip: {
             valueDecimals: 2,
              formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%A %B %e %Y', this.x) +'<br/> '+ccode+ this.y;
              }
            },  credits: {
                        enabled: false
                    },
                    plotOptions: {
                      series: {
              marker: {
                  enabled:(dataString1.length<50) ? true:false,
                  lineWidth: 2.5,
                  lineColor: null // inherit from series
              }
          }
                },
            series: [{
              name: siteName + ' Price',
              data: dataString1,
              lineWidth: 2.5

            }],
             exporting: {
                        enabled: true
                    },
          });
        window.dispatchEvent(new Event('resize'));
        //  $(window).resize();
        setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
//$(window).resize();
       }, 5000);
      /*    Highcharts.chart('contGraphMainptid', {
                chart: {
                  zoomType: 'x'
                },
                title: {
                  text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                  text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                  type: 'datetime'
                },
                yAxis: {
                  title: {
                    text: 'Exchange rate'
                  }
                },
                legend: {
                  enabled: false
                },
                plotOptions: {
                  area: {
                    fillColor: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                      },
                      stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                    },
                    marker: {
                      radius: 2
                    },
                    lineWidth: 1,
                    states: {
                      hover: {
                        lineWidth: 1
                      }
                    },
                    threshold: null
                  }
                },

                series: [{
                  type: 'area',
                  name: siteName + ' Price',
                  data: dataString1,
                  lineWidth: 0.5,
                }]
              });*/
    $('.contGraphMainptid').highcharts('StockChart',{
    chart: {
 backgroundColor: '#f7f7ed',
      zoomType: 'x',
      type: 'spline'
    },
    navigator: {
              enabled: false
          },
      scrollbar: {
                    enabled: false
                },
    rangeSelector: {
           selected: 5
       },
    title: {
      text: 'Should I order ' + prodName + " now ?"
    },
    subtitle: {
      text: '<span style="font-size:15px;font-weight:bold;color:#0079ed;">Average Price:Rs.'+aprice+'    </span><span style="font-size:15px;font-weight:bold;color:green;">Lowest Price:Rs.'+lprice+'</span>    <span style="font-size:15px;font-weight:bold;color:red;">Highest Price:Rs.'+hprice+'</span>'
    },
    xAxis: {
      type: 'datetime',
      crosshair: true,
                dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
              }
            },
            yAxis: {
                crosshair: true,
              title: {
                text: 'Price ('+currency+')'
              },
               opposite: false,
              labels: {
      align: 'right',
      x: -4
    },
              min: 0
            },
            tooltip: {
             valueDecimals: 2,
              formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%A %B %e %Y', this.x) +'<br/> '+ccode+ this.y;
              }
            },  credits: {
                        enabled: false
                    },
                    plotOptions: {
                      series: {
              marker: {
                enabled:(dataString1.length<50) ? true:false,
                  lineWidth: 3,
                  lineColor: null // inherit from series
              }
          }
        },
            series: [{
              name: siteName + ' Price',
              data: dataString1,
              lineWidth: 2.5,


            }],
             exporting: {
                        enabled: true
                    },
          });
  window.dispatchEvent(new Event('resize'));
  //  $(window).resize();
            setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        //    $(window).resize();
           }, 5000);
  }
  }
  function addPriceDropBase(passBack,impposdata,passBack1) {
    chrome.runtime.sendMessage({
        message: 'getUrl'
    }, function (response) {

      var link = document.createElement("link");
         link.href = response.output;
         link.type = "text/css";
         link.rel = "stylesheet";
           document.getElementsByTagName("head")[0].appendChild(link);
      });


      var passedData = JSON.parse(passBack);
      var passedData1 = JSON.parse(passBack1);
      var selectors = JSON.parse(passedData[0].selectors);


      var addedToDOM = 0;
      //var imgSet = "settings.png";
      var csscustom=impposdata;
      var priceint=parseInt(passedData1[0].price)-1;

      var stringToAdd1 ='&nbsp;&nbsp;&nbsp;<div id="containerMainPTDropB1" style="all:initial;" ><input type="image" id="pt-pricebuttonPH" style="margin-left:auto;" src="'+chrome.runtime.getURL('images/checkpricegraph.png')+'" value="Show Price Graph"><div id="pt-myModalPH" style="display:none;" class="pt-modalPH"><div class="pt-modal-contentPH" style="border-radius:25px;"><div style="background-color:'+passedData1[0].color+'!important" class="pt-modal-header"><span class="pt-closePH">&times;</span><div style="font-size:20px;padding:5px;">Price History for '+passedData1[0].title+' on '+passedData1[0].siteName+'</div></div><div style="clear:both"></div><div id="containerMainPTID1" class="full-width" style=" background: #fff;height:100%; margin: 0 auto; position: relative;padding:2px;'+csscustom+'"><div id="chart-logo12" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://indiadesire.com/" style="color: #0db2db;"><img src="'+chrome.runtime.getURL('/images/logo/pt_logo-small.png')+'" style="vertical-align: sub;margin-left: 5px;"></a></div><div id="container2pt" class="contGraphMainptid1"></div><div id="container3pt"></div><div id="container4pt" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/bug-icon.png')+'" style="vertical-align: middle;height: 15px;top: 0px;position: relative;">Report A Bug</a><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/bulb-icon.png')+'" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Suggest Us Something</a><a href="https://chrome.google.com/webstore/detail/price-tracker-20-price-gr/khmkmdkfllphcbkbkgflononijbkdgff" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="'+chrome.runtime.getURL('images/star-icon.png')+'" style="vertical-align: middle;height: 16px;top: 0px;position: relative;">Rate Us</a></div><div id="container10pt"> </div></div></div></div>';
        var stringToAdd ='<br><div id="containerMainPTDropB" style="all:initial;" ><input type="image" id="pt-pricebutton" style="margin-left:auto;" src="'+chrome.runtime.getURL('images/pricedropbutton.png')+'" value="Set Price Drop Alert"><div id="pt-myModal" style="display:none;" class="pt-modal"><div class="pt-modal-content" style="border-radius:25px;"><div style="background-color:'+passedData1[0].color+'!important" class="pt-modal-header"><span class="pt-close">&times;</span><div style="font-size:20px;padding:5px;">Set Price Drop Alert for '+passedData1[0].title+' on '+passedData1[0].siteName+'</div></div><div class="pt-modal-body"><div style="font-size:11px;color:grey;">Set Price drop alert: so whenever price drops of the product registered , you will get alert via sms/email.</div><div id="ptalready" style="font-size:12px;color:#009E78;"></div><div><b>Current Price: </b>&#8377;'+passedData1[0].price+'</div><div style="font-size:15px;"><input type="checkbox" id="pt-pricedropbyvalue" name="pricedropvalue" value="1" >&nbsp;&nbsp;Send alert when price is less than &nbsp;&nbsp;<input name="pricedropbyvaleset"  style="width:110px;" id="pt-pricedropbyvaleset" min="1" max="'+priceint+'" pid="'+passedData1[0].pid+'" store="'+passedData1[0].store+'" class="ptinput" PlaceHolder="e.g. 123" type="number"  onblur="javascript: if (parseInt(this.value) > parseInt(this.max)) this.value = parseInt(this.max);if (parseInt(this.value) < parseInt(this.min)) this.value = parseInt(this.min);" disabled></div></br><div><b>Subscribe alert on:&nbsp;</b><input id="ptalerttype1" class="ptrg" type="radio" name="ptalertmedia" value="1">&nbsp;Mobile&nbsp;<input type="radio" id="ptalerttype2" class="ptrg" name="ptalertmedia" value="2" checked="checked">&nbsp;Email&nbsp;<input type="radio" id="ptalerttype3" class="ptrg" name="ptalertmedia" value="3">&nbsp;Both&nbsp;</div></br><div style="display:none;" id="pt-mobileform"><b>Mobile No:&nbsp;</b><input type="number" style="width:150px;" id="pt-mobileno" class="ptinput" maxlength="10" PlaceHolder="e.g. 9XXXXXXXXX" ><img class="pt-mobilecheck" style="max-width:40px;max-height:40px;" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="\>&nbsp;<input type="number" style="width:130px;" id="pt-mobilenootp" class="ptinput displaynone" PlaceHolder="Enter SMS OTP" maxlength="6" >&nbsp;<input type="button" id="ptmobileverify" value="Verify" class="displaynone"><span class="pt-mobileload"></span></div></br><div style="display:block;" id="pt-emailform"><b>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input type="email" style="width:150px;" id="pt-email" class="ptinput" PlaceHolder="e.g. foo@abc.com" ><img class="pt-emailcheck" style="max-width:40px;max-height:40px;" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="\>&nbsp;<input type="number" style="width:130px;" id="pt-emailotp" class="ptinput displaynone" PlaceHolder="Enter Email OTP" maxlength="6">&nbsp;<input type="button" id="ptemailverify" value="Verify" class="displaynone"><span class="pt-emailload"></span></div><div id="pterrormsg" style="color:red;"></div><div id="pterrormsg1" style="color:red;"></div></br><center><input type="button" id="submitptpricedrop" value="Subscribe for Price Drop Alert"><span class="pt-submitload"></span><input type="button" id="unsubscribeptpricedrop" value="UnSubscribe Price Drop Alert" style="display:none;"><span class="pt-unsubmitload"></span></center></div><div class="pt-modal-footer"><div>Price Drop Alert Subscription Service<span style="float:right;">Powered By &nbsp;&nbsp;<a target="_blank" href="https://indiadesire.com/" style="color: #0db2db;"><img  id="ptpoweredby" style="height:18px;" src="'+chrome.runtime.getURL('images/logo/pt_logo-small.png')+'" style="vertical-align: sub;margin-left: 5px;"></a></span></div></div></div></div></div>';
      for (n = 0; n < selectors.length; n++) {
         $d = jQuery.noConflict();
        if ($d(selectors[n].selector).length > 0 && addedToDOM == 0) {
          addedToDOM = 1;
          if (selectors[n].attr == "none") {
            if (selectors[n].pos == "after") {
              $d(selectors[n].selector).after(stringToAdd1);
              $d(selectors[n].selector).after(stringToAdd);
            }
            else {
             $d(selectors[n].selector).before(stringToAdd1);
              $d(selectors[n].selector).before(stringToAdd);
            }
          }
          else if (selectors[n].attr == "parent") {
            if (selectors[n].pos == "after") {
              $d(selectors[n].selector).parent().after(stringToAdd1);
              $d(selectors[n].selector).parent().after(stringToAdd);
            }
            else {
               $d(selectors[n].selector).parent().before(stringToAdd1);
              $d(selectors[n].selector).parent().before(stringToAdd);
            }
          }
           else if (selectors[n].attr == "current") {
            if (selectors[n].pos == "append") {
               $d(selectors[n].selector).append(stringToAdd);
              $d(selectors[n].selector).append(stringToAdd1);
            }

          }
          addClickEvents();
        }
      }
          var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
       chrome.runtime.sendMessage({
        requestMode: 'checkpricedropset',prodid:prodid,store:store
    }, function (response) {
       var datas = JSON.parse(response.output);
     var stat=parseInt(datas.checkptstatus);
     if(stat==1)
     {
      var minpricecheck= parseInt(datas.minpricecheck);
      //$("input[name='pricedropvalue']").val(datas.minpricecheck);
        if(minpricecheck==1)
      $d("input[name='pricedropvalue']").trigger('click');
      $d("#pt-pricedropbyvaleset").val(datas.minprice);
       var mode= parseInt(datas.mode);
      $d("#ptalerttype"+mode).trigger('click');
      $d("#pt-mobileno").val(datas.mobile);
   $d("#pt-email").val(datas.email);
      $d("#pt-pricebutton").attr('src',chrome.runtime.getURL('images/ptactive3.png'));
      $d("#submitptpricedrop").attr('value','Modify Price Drop Alert Data');
      $d("#ptalready").text('You are already Tracking/Watching Price of this product. You can Modify or Unsubscribe Price Tracking.');
        var verified=parseInt(datas.verified);
   if(verified==1)
   $d('.pt-mobilecheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
    var everified=parseInt(datas.everified);
       if(everified==1)
   $d('.pt-emailcheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
      $d("#unsubscribeptpricedrop").show();
     }
     if(stat===0)
     {
       $d("#pt-mobileno").val(datas.mobile);
   $d("#pt-email").val(datas.email);
   var verified1=parseInt(datas.verified);
   if(verified1==1)
   $d('.pt-mobilecheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
    var everified1=parseInt(datas.everified);
       if(everified1==1)
   $d('.pt-emailcheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
     }
    //alert(datas.checkptstatus);
      });


}
function addClickEvents(){
 $d('#pt-pricebutton').click(function(){
 $d('#pt-myModal').css("display","block");
  });
  $d('#pt-pricebuttonPH').click(function(){
 $d('#pt-myModalPH').css("display","block");
  window.dispatchEvent(new Event('resize'));
  });
    $d('.pt-closePH').click(function(){
 $d('#pt-myModalPH').css("display","none");
  });
  $d('.pt-close').click(function(){
 $d('#pt-myModal').css("display","none");
  });
  $d("#pt-pricedropbyvalue").change(function() {
    if(this.checked) {
      $d("#pt-pricedropbyvaleset").removeAttr('disabled');
        //Do stuff
    }
    else
    {
      $d("#pt-pricedropbyvaleset").attr('disabled','disabled');
    }
});
   $d('#submitptpricedrop').click(function(){
 setPriceDrop();
  });
     $d('#unsubscribeptpricedrop').click(function(){
 setPriceDropUnsubscribe();
  });
         $d('#ptmobileverify').click(function(){
 verifyMobileOtp();
  });
             $d('#ptemailverify').click(function(){
 verifyEmailOtp();
  });
  $d("input[name=ptalertmedia]:radio").change(function () {
 var radioValue = $d("input[name=ptalertmedia]:checked").val();
if (radioValue==1) {
      $d('#pt-mobileform').css('display','block');
            $d('#pt-emailform').css('display','none');
        }
if (radioValue==2){

            $d('#pt-mobileform').css('display','none');
              $d('#pt-emailform').css('display','block');
        }
       if (radioValue==3) {

            $d('#pt-mobileform').css('display','block');
              $d('#pt-emailform').css('display','block');
        }
                    });
    /*$('body').click(function(event){
          if( $(event.target).closest("#pt-myModal").length < 0 ) {
        return false;
    }

       //if(event.target.id == "")
 $('#pt-myModal').css("display","none");

  });*/
}
function calltoPriceDropPopup()
{

}
function setPriceDrop(){
   ////console.log("Tab ID process initiated");
   //var jsonArr = [{'sendTabID': 'TabIDRequested'}];
   //jsonArr = JSON.stringify(jsonArr);pt-mobileno
     $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       $d('#submitptpricedrop').attr("style","display: none;");
      $d('.pt-submitload').addClass('pt-submitting');
   var passBack = [];
   var medium=$d("input[name='ptalertmedia']:checked").val();
    var minpricecheck=$d("input[name='pricedropvalue']:checked").val();
    var minprice=$d("#pt-pricedropbyvaleset").val();
    var cprice=parseInt($d("#pt-pricedropbyvaleset").attr('max'))+1;
    var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
   var mobilen=$d("#pt-mobileno").val();
   var email=$d("#pt-email").val();
  // alert(medium+":"+minpricecheck+":"+minprice+":"+cprice+":"+email);
   //alert(mobilen);
   passBack = JSON.stringify(passBack);
    chrome.runtime.sendMessage({
        requestMode: 'setpricedrop',mobile:mobilen,medium:medium,minpricecheck:minpricecheck,minprice:minprice,cprice:cprice,prodid:prodid,store:store,email:email
    }, function (response) {
       var datas = JSON.parse(response.output);
     var smss=parseInt(datas.sms);
        var emails=parseInt(datas.email);
          var mode=parseInt(datas.mode);
        if(smss==1)
        {
           $d('.pt-mobilecheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
            $d("#pt-mobileno").val(mobilen);
          if(emails==1)
        {
   $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
        }
        }
        else if(mode==1||mode==3)
        {
           $d('#ptmobileverify').removeClass('displaynone');
            $d("#pt-mobilenootp").removeClass('displaynone');
              $d('#ptmobileverify').addClass('displayinline');
            $d("#pt-mobilenootp").addClass('displayinline');
              $d('.pt-mobilecheck').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
             $d("#pt-mobileno").val(mobilen);
                $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
          $d("#pterrormsg1").text('Please Verify the OTPs(One Time Password).');
        }
           if(emails==1)
        {
           $d('.pt-emailcheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
            $d("#pt-email").val(email);
                if(smss==1)
        {
   $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
        }
        }
        else if(mode==2||mode==3)
        {
           $d('#ptemailverify').removeClass('displaynone');
            $d("#pt-emailotp").removeClass('displaynone');
              $d('#ptemailverify').addClass('displayinline');
            $d("#pt-emailotp").addClass('displayinline');
            $d('.pt-emailcheck').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
              $d("#pt-email").val(email);
                        $d("#pterrormsg").attr('style','color:#4CAF50;');
        $d("#pterrormsg").text('You have successfully Subscribed for the Price Drop Alert Service.');
          $d("#pterrormsg1").text('Please Verify the OTPs(One Time Password).');
        }
         $d('.pt-submitload').removeClass('pt-submitting');
         $d("#submitptpricedrop").attr('style','display:inline-block;');
            $d("#submitptpricedrop").attr('value','Modify Price Drop Alert Data');
      $d("#ptalready").text('You are now Tracking/Watching Price of this product. You can Modify or Unsubscribe Price Tracking.');
        $d("#unsubscribeptpricedrop").show();

    // alert(response.output);
      });
   //sendMessage(0, jsonArr, 0, setTabID, passBack);
 }
 function setPriceDropUnsubscribe()
 {
     $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
    $d('#unsubscribeptpricedrop').attr("style","display: none;");
      $d('.pt-unsubmitload').addClass('pt-unsubmitting');
   var prodid=$d("#pt-pricedropbyvaleset").attr('pid');
    var store=$d("#pt-pricedropbyvaleset").attr('store');
       chrome.runtime.sendMessage({
        requestMode: 'unsetpricedrop',prodid:prodid,store:store
    }, function (response) {
      var datas = JSON.parse(response.output);
     var ptunsub=parseInt(datas.ptunsub);
     if(ptunsub==1)
     {
       $d('#unsubscribeptpricedrop').addClass('displaynone');
         $d("#pt-pricebutton").attr('src',chrome.runtime.getURL('images/pricedropbutton.png'));
      $d("#submitptpricedrop").attr('value','Subscribe for Price Drop Alert');
      $d("#ptalready").text('');
      $d("#pterrormsg1").text('You have Unsubscribed for Price Drop Alert of this Product.');
     }
      $d('.pt-unsubmitload').removeClass('pt-unsubmitting');
     //alert(response.output);
      });
 }
  function verifyMobileOtp()
 {
    $d('#ptmobileverify').removeClass('displayinline');
       $d('#ptmobileverify').addClass('displaynone');
      $d('.pt-mobileload').addClass('pt-loading');
       $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       /* setTimeout(function () {
        $('.pt-mobileload').removeClass('pt-loading');
        $('#ptmobileverify').show();

      }, 5000);*/
           var vdata=$d("#pt-mobilenootp").val();

         chrome.runtime.sendMessage({
        requestMode: 'verifymobile',data:vdata
    }, function (response) {
      var datas = JSON.parse(response.output);
     var stat=parseInt(datas.ptmobile);
     if(stat==1)
     {
       $d('#ptmobileverify').removeClass('displayinline');
            $d("#pt-mobilenootp").removeClass('displayinline');
             $d('#ptmobileverify').addClass('displaynone');
            $d("#pt-mobilenootp").addClass('displaynone');
         $d('.pt-mobileload').removeClass('pt-loading');

         $d('.pt-mobilecheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
         $d("#pterrormsg").attr('style','color:#4CAF50;');
         $d("#pterrormsg").text('You have succcessfully verified your Mobile No.');

     }
     else
     {
       $d("#pterrormsg").attr('style','color:red;');
      $d("#pterrormsg").text('You have entered Incorrect SMS OTP.');
       $d('.pt-mobileload').removeClass('pt-loading');
        $d('#ptmobileverify').addClass('displayinline');
     }


      });
 }
   function verifyEmailOtp()
 {
    $d('#ptemailverify').removeClass('displayinline');
     $d('#ptemailverify').addClass('displaynone');
      $d('.pt-emailload').addClass('pt-loading');
         $d("#pterrormsg").text('');
        $d("#pterrormsg1").text('');
       /* setTimeout(function () {
        $('.pt-emailload').removeClass('pt-loading');
        $('#ptemailverify').show();

      }, 5000);*/
            var vdata=$d("#pt-emailotp").val();
         chrome.runtime.sendMessage({
        requestMode: 'verifyemail',data:vdata
    }, function (response) {

       var datas = JSON.parse(response.output);
     var stat=parseInt(datas.ptemail);
     if(stat==1)
     {
       $d('#ptemailverify').removeClass('displayinline');
            $d("#pt-emailotp").removeClass('displayinline');
            $d('#ptemailverify').addClass('displaynone');
            $d("#pt-emailotp").addClass('displaynone');
         $d('.pt-emailload').removeClass('pt-loading');
         $d('.pt-emailcheck').attr('src',chrome.runtime.getURL('images/ptcheckmark.png'));
         $d("#pterrormsg").attr('style','color:#4CAF50;');
          $d("#pterrormsg").text('You have succcessfully verified your Email.');
     }
      else
     {
       $d("#pterrormsg").attr('style','color:red;');
      $d("#pterrormsg").text('You have entered Incorrect Email OTP.');
        $d('.pt-emailload').removeClass('pt-loading');
        $d('#ptemailverify').addClass('displayinline');

     }
      });
 }
 function returnResource(name){
  return chrome.runtime.getURL(name);
}
