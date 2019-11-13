<template>
  <div class="publicProduct">
    <div
      class="fs20"
    >日精进定课小程序由湖南崇德向善文化公司于2018年12月委托我司订制开发的一款小程序，小程序由湖南崇德向善文化公司委托开发，我司梳理需求点、设计、功能开发及后续的维护，2019年1月上线，至今已有粉丝上万，日活2000+。</div>
    <div class="product_function text-c mt40 mb50">产品功能</div>
    <div class="show_product">
      <ul class="dfrcb">
        <li class="drc" v-for="(item,i) in imagesUrl" :key="i">
          <div class="show_product_img bg-fff">
            <img :src="item.img" alt />
          </div>
          <div class="punch">
            <div class="fs20 f600">{{item.name}}</div>
            <div class="fs14 punch_info mt20">{{item.info}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagesUrl: [
        {
          img: require("../assets/src/images/punch.png"),
          name: "打卡",
          info: "支持输入及录音打卡，录音时间无上限"
        },
        {
          img: require("../assets/src/images/take.png"),
          name: "记录",
          info: "可查看群组所有成员的打卡记录"
        },
        {
          img: require("../assets/src/images/group.png"),
          name: "群组",
          info: "设置群组，便于同伴师友夹持，互相监督"
        },
        {
          img: require("../assets/src/images/punch_circle.png"),
          name: "打卡圈",
          info: "打卡内容会上传至打卡圈，支持点赞互动"
        },
        {
          img: require("../assets/src/images/setting.png"),
          name: "设置",
          info: "可设置打卡阅读的书籍及阅读的遍数"
        },
        {
          img: require("../assets/src/images/remind.png"),
          name: "提醒",
          info: "学员当天未打卡，微信公众号定时提醒学员打卡"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
@import "../styles/global";
.publicProduct {
  .product_function {
    font-size: 34px;
  }
  .show_product {
    ul > li {
      margin-bottom: 35px;
    }
    .show_product_img {
      width: 138px;
      height: 138px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      img {
        margin: 0 auto;
      }
    }
    .punch {
      margin-left: 32px;
      .punch_info {
        width: 200px;
      }
    }
  }
}
</style>