(function() {
  var head = document.getElementsByTagName("head")[0];
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-L4XX3W7F4D');

  scriptTag.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L4XX3W7F4D');
  }

  head.insertBefore(scriptTag, head.children[1]);
})();
