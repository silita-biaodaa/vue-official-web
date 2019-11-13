<template>
  <!-- <iframe ref="iframe" id="bdIframe" :src="bdTokenUrl" frameborder="0" scrolling="no"></iframe> -->
  <div id="app">
    <narBar></narBar>
    <router-view />
    <div class="public_footer bg-black">
      <div class="weChat clear">
      <div class="fr cp" @click="returnTop">
        <div class="weChat_img dfrc">
          <img src="../src/assets/src/images/go_back.png" alt />
        </div>
      </div>
      <div class="weChat_us color-fff fs20 text-c cp">联系我们</div>
    </div>
      <div class="company_info">
        <div class="fs16">联系我们</div>
        <div class="dfrcb">
          <div class="company_footer">
            <div class="company_info_link fs14">
              <ul>
                <li>联系电话</li>
                <li>0731-85076077</li>
                <li>邮箱</li>
                <li>hnsilita@163.com</li>
              </ul>
              <ul>
                <li>商务合作电话</li>
                <li>17673646723</li>
                <li>工作时间</li>
                <li>8：30-19：30</li>
              </ul>
              <ul>
                <li>地址</li>
                <li>湖南省长沙市岳麓区杜鹃路768号金峰壹号院</li>
              </ul>
            </div>
          </div>
          <div class="CQ_code">
            <img src="../src/assets/src/images/CQ_code.png" alt />
            <div class="text-c">关注公众号</div>
          </div>
        </div>
      </div>
      <div class="text-c">© 2017 思利他, Inc. All rights reserved . 湘ICP备17019911号-1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    handleScroll (){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    returnTop () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    /**
     * iframe-宽高自适应显示
     */
    function showIframe(url, w, h) {
      //添加iframe
      var if_w = w;
      var if_h = h;
      $(
        "<iframe width='" +
          if_w +
          "' height='" +
          if_h +
          "' id=‘iFrame' name='iFrame' style='position:absolute;z-index:4;' frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true'></iframe>"
      ).prependTo("body");
      //iframe屏幕适应宽高设置
      var st = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距顶部的距离
      var sl = document.documentElement.scrollLeft || document.body.scrollLeft; //滚动条距左边的距离
      var ch = document.documentElement.clientHeight; //屏幕的高度
      var cw = document.documentElement.clientWidth; //屏幕的宽度
      var objH = $("#iFrame").height(); //浮动对象的高度
      var objW = $("#iFrame").width(); //浮动对象的宽度
      var objT = Number(st) + (Number(ch) - Number(objH)) / 2;
      var objL = Number(sl) + (Number(cw) - Number(objW)) / 2;
      $("#iFramee").css("left", objL);
      $("#iFrame").css("top", objT);
      $("#iFrame").attr("src", url);
    }
    window.addEventListener('scroll', this.handleScroll)
  }
};
</script>

<style lang="less">
@import "./styles/global";
@width: 100%;
@bg-black: #000000;
@min-width: 1180px;
#app {
  height: 100%;
  width: 100%;
  min-width: @min-width;
  .public_footer {
    position: relative;
    height: 390px;
    color: #b6b6b6;
    .company_info {
      width: 1180px;
      margin: 0 auto;
      font-weight: 400;
      padding-top: 80px;
      .company_footer {
        .company_info_link {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          ul {
            margin-right: 145px;
          }
          ul > li {
            margin-bottom: 16px;
          }
        }
      }
      .CQ_code {
        img {
          width: 126px;
          height: 126px;
          margin-bottom: 28px;
        }
      }
    }
  }
  .weChat {
    width: 154px;
     overflow: hidden;
     position: absolute;
     right: 60px;
     bottom: 180%;
    .weChat_img {
      width: 52px;
      height: 52px;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
      border: 1px solid rgba(221, 223, 228, 1);
      img {
        width: 24px;
        height: 24px;
      }
    }
    .weChat_us {
      margin-top: 100px;
      height: 52px;
      line-height: 52px;
      background: rgba(36, 76, 215, 1);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
      border: 1px solid rgba(221, 223, 228, 1);
    }
  }
}
</style>
