/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月08日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */

var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var closealert = storage.closealert;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
  data = data.split(',');
  // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
  $('#state a img').attr('src', data[0]); //头图
  $('.submitButton').css('background-color', data[1]); //按钮bgc
  $('#inputText').attr('placeholder', data[2]);
  $('#form').attr('action', data[3]);
  $('#inputText').attr('name', data[4]);
  $('#Select').css('color', data[1]);
  $('.span').css('background-color', data[1]);
}

if (storage.night != undefined) {
  night = night.split(',');
  console.log(night);
  $('#main').css('background-color', night[0]); //主界面
  $('#menu').css('background-color', night[1]); //侧栏
  document.getElementById("night").innerHTML = night[2];
  li.css('background-color', night[3]);
  li.css('color', night[4]);
  blockquote.css('color', night[5]);
}

if (storage.bg != undefined) {
  bg = bg.split(',');
  $('#main').css('background-image', bg[0]);
}

if (storage.closealert != undefined) {
  closealert = closealert.split(',');
  if (closealert[0] == '4.0.9') {
    $('#alert').remove();
  }
}

// rgb to hex
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
// rgb to hex结束

// 添加书签
$(function() {
  var bookmark = {
    data: [{
      name: 'NGC660安全官网',
      link: 'https://www.ngc660.com',
      icon: 'img/ngc660_w.png',
    }, {
      name: 'NGC660安全论坛',
      link: 'http://www.ngc660.cn',
      icon: 'img/ngc660_n.png',
    }, {
      name: '掌控安全社区',
      link: 'https://bbs.zkaq.cn/',
      icon: 'img/zkz.png',
    }, {
      name: '先知安全社区',
      link: 'https://xz.aliyun.com/',
      icon: 'img/xianzhi.png',
    }, {
      name: 'FREEBUFF安全社区',
      link: 'https://www.freebuf.com/',
      icon: 'img/freebuff.png',
    }, {
      name: 'See Bug库',
      link: 'https://www.seebug.org/',
      icon: 'img/seebug-logo2.png',
    }]
  }
  for (var i = 0; i < bookmark.data.length; i++) {
    var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="' + bookmark.data[i].link + '"><div class="folder-item-box"><img class="folder-item-img" src="' + bookmark.data[i].icon + '" /><p>' + bookmark.data[i].name + '</p></div></a></li>'
    $('#folder ul').append(addList);
  }
})

//检查搜索框是否为空
function check() {
  var o = document.getElementById("inputText");
  var v = o.value;
  v = v.replace(/[ ]/g, "");
  if (v == '') {
    return false;
  }
}
//检查搜索框是否为空结束

//title问候语
var d = new Date();
var time = d.getHours();
if (time < 24) {
  document.getElementById("title").innerHTML = "NGC660安全导航 | Good evening";
}
if (time < 18) {
  document.getElementById("title").innerHTML = "NGC660安全导航 | Good afternoon";
}
if (time < 12) {
  document.getElementById("title").innerHTML = "NGC660安全导航 | Good morning";
}
if (time < 5) {
  document.getElementById("title").innerHTML = "NGC660安全导航 | Stay up late again";
}
//title问候语结束

//导航、引擎选择器
function select() {
  $('#folder').css('display') == 'block' ? ($('#folder').css('display', 'none'), $('#nav').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='img/search-change.svg?v=2ae7ab8'>") : ($('#nav').css('display', 'none'), $('#folder').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>");
}

// 天气插件
(function(a, h, g, f, e, d, c, b) {
  b = function() {
    d = h.createElement(g);
    c = h.getElementsByTagName(g)[0];
    d.src = e;
    d.charset = "utf-8";
    d.async = 1;
    c.parentNode.insertBefore(d, c)
  };
  a["SeniverseWeatherWidgetObject"] = f;
  a[f] || (a[f] = function() {
    (a[f].q = a[f].q || []).push(arguments)
  });
  a[f].l = +new Date();
  if (a.attachEvent) {
    a.attachEvent("onload", b)
  } else {
    a.addEventListener("load", b, false)
  }
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
  flavor: "bubble",
  location: "WX4FBXXFKE4F",
  geolocation: true,
  language: "auto",
  unit: "c",
  theme: "auto",
  token: "e14489a8-9a7e-477d-9c6c-b4b390175cca",
  hover: "enabled",
  container: "tp-weather-widget"
})
//更多资源请关注：三岁半资源网:sansuib.com
// 搜索提示词
class searchHint {
  constructor() {
    this.search = inputText;
    this.list = list;
    this.body = document.body;
    this.init();
  };
  init() {
    this.watchInput();
  };
  watchInput() {
    this.search.onkeyup = () => {
      if (this.search.value.length == 0) {
        this.list.innerHTML = '';
        return;
      }
      const script = document.createElement('script');
      script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
      this.body.appendChild(script);
      this.body.removeChild(script);
    }
  };
  showMsg(msg) {
    var href = $('#form').attr('action');
    var name = $('#inputText').attr('name');
    var v = $('#inputText').val();
    var str = '';
    for (var i = 0; i < msg.s.length; i++) {
      var sk = new Array();
      sk[i] = msg.s[i].replace(/\s*/g, ''); //去掉关键字空格
      str += '<a href=' + href + '?' + name + '=' + sk[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
    }
    this.list.innerHTML = str;
    if (str) { //有返回才显示#searchlist
      $('#searchlist').css("display", "block");
    }
    document.onkeydown = function(event) {
      if (event.keyCode == 8 && v.length == 1) {
        $('#searchlist').css("display", "none");
      }
    };
    $(document).click(function() { //点击其他地方隐藏#searchlist
      $('#searchlist').css("display", "none");
    });
  }
}
const jsonp = new searchHint();

//导航、引擎选择器结束

/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月08日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */