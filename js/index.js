$(function () {
    $('.fadein div:gt(0)').hide();
    setInterval(function () {
      $('.fadein :first-child').fadeOut("slow").next('div').fadeIn("slow").end().appendTo('.fadein');
     }, 5000);
  });

function formatDt(dt_string) {
    var dt = new Date(dt_string);
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return y + '.' + m + '.' + d;
}
$(function(){

  //読み込み最大記事数
  var max_length = 15;
  var max_news = 3;
  var max_blog = 8;
  var news_len = 0;
  var blog_len = 0;

 $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
   q: "select * from rss where url='http://www.salon-de-kukka.com/blog/?mode=rss'",
   format: "json"
 }, function(json) {
   for (var i = 0; i < json.query.results.item.length; i++) {
     if(i == max_length) break;

     var entry = json.query.results.item[i];

     var title = entry.title;//記事タイトル
     var link = entry.link; //記事へのリンク
     var fulldate = entry.pubDate; //投稿日
     
     date = formatDt(fulldate);
         
     //お知らせ用htmlを整形
     if(title.indexOf("【お知らせ】") === 0){
     console.log(title);
       if(news_len < max_news){
         news_len++;
         var news_title = String(title).split('【お知らせ】').join('');
         $('#feed').append('<dl><small><dt>' + date + '</dt></small><dd><a class="normal_color" href="' + link  +'" target="_blank">' + news_title +'</dd></dl>');
         //$('#feed').append('<p><a href="' + link  +'" target="_blank">' + date + '　　　' + news_title + '</a></p>');
         //$('#feed').append('<li><span class="date">'+date+'</span>'+ '　　　' + '<a href="' + link  +'" target="_blank">'+news_title + '</a></li>');
       }
       
     //BLOGhtmlを整形
     }else{
         var reg = 'src="((?!https:\/\/stat100.ameba).)(.*?)(\.jpg|\.jpeg|\.gif|\.png|\/img_)(.*?)"';
         if(entry.encoded) {
             var imgsrc = entry.encoded.match(reg);
         } else {
             var imgsrc = entry.description.match(reg);
         }
         var dispImg = '';
         if(imgsrc) {
         var imgsrc = String(imgsrc).split('_m').join('');
             var dispImg = '<img ' + imgsrc + ' class="img-fluid" alt="">';
         }else{
         var dispImg = '<img src="img/logo.png" class="img-fluid" alt="">';
         }
        //Start 出力したいHTMLに成形する部分 
        var htmlstr = "";
        htmlstr += '<div class="grid-item col-6 col-sm-6 col-lg-4 p-2"><a class="card hoverable card-image" href="' + entry.link + '" target="_blank">';
        htmlstr += '<div class="view overlay hm-white-slight z-depth-1 flex-center">';
        htmlstr += dispImg;
        htmlstr += '<div class="mask flex-center rgba-black-light"><p class="white-text">' + date;
        htmlstr += '<br>' + title;
        htmlstr += '</p></div></div></a></div>';
        
        if(blog_len < max_blog){
          blog_len++;
          $('#feed_img').append(htmlstr);
        }
     }
   }
   var $gridindex = $('.grid-index');
   $gridindex.imagesLoaded(function(){
     $gridindex.masonry({
             itemSelector: '.grid-item',
             columnWidth: '.grid-sizer',
             percentPosition: true
     });
   });
 });
});


