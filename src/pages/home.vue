<template>
  <div class="home">
    <div class="home_middle">
      <div class="dfrcb home_middle_title">
        <div class="color-fff">
          <div class="title_slogan">通过利他、实现共赢</div>
          <div class="fs18">我们期盼着能为每个建筑企业带来便利，帮他们提高公司效益实现共赢。</div>
          <div class="link_us text-c cp">联系我们</div>
        </div>
        <div>
          <img :src="img2" alt />
        </div>
      </div>
    </div>
    <div class="product_middle">
      <div class="product_info">
        <div class="product text-c">产品介绍</div>
        <div>
          <div class="select cp">
            <ul class="fs20 dfrca product_name">
              <li ref="li" v-for="(item,a) in productList" :key="a" @click="handleClick(item.id)">
                <a :class="{active : current == item.id}">
                  {{item.title}}
                  <div v-if="current == item.id" class="line"></div>
                </a>
              </li>
            </ul>
            <el-divider class="mb40"></el-divider>
            <div :class="{hide : current !== 0}">
              <publicInfo></publicInfo>
            </div>
            <div :class="{hide : current !== 1}">
              <div
                class="fs20 mb40"
              >根据用户要求采集建筑行业公众数据，然后对数据进行实时更新、清洗、解析、整理。达到相关数据可视化分析、数据平台搭建，帮助企业构建贴合自身业务的数据系统，帮助沉淀数据资产，轻松挖掘大数据价值。从而为企业经营、管理提供数据支撑。</div>
              <publicTable :tableInfo="tableInfo"></publicTable>
            </div>
            <div :class="{hide : current !== 2}">
              <publicProduct></publicProduct>
            </div>
            <div class="more_info fs20 text-c cp">
              了解更多
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service_area">
      <div class="service_area_title color-fff text-c">服务范围</div>
      <div class="left_img">
        <img :src="img4" alt />
      </div>
      <div class="right_img">
        <img :src="img3" alt />
      </div>
      <div class="service_area_info">
        <ul class="info_list">
          <li v-for="(item,i) in areaInfo" :key="i" class="info_title mb20 cp">
            <div class="fs20 color-fff ml30 mt30 mb30">{{item.title}}</div>
            <div class="pl30">
              <ul v-for="(a,b) in item.information" :key="b">
                <li class="color-fff fs14 mb10">{{a.info}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="info">
      <div class="text-c item-info">
        <div class="fs34">全新产品持续上新，期待与您的合作</div>
        <div class="info-item">
          <ul class="dfrca">
            <li>
              <span>123</span>项
              <div class="fs20">技术能力</div>
            </li>
            <li>
              <span>24</span>小时
              <div class="fs20">客服中心</div>
            </li>
            <li>
              <span>30W</span>+
              <div class="fs20">建筑行业人员使用</div>
            </li>
          </ul>
        </div>
        <div class="info-btn cp">立即体验</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../assets/src/images/punch.png"),
      img2: require("../assets/src/images/bg3.png"),
      img3: require("../assets/src/images/bg1.png"),
      img4: require("../assets/src/images/bg2.png"),
      activeName: "2",
      areaInfo: [
        {
          title: "大数据定制服务",
          information: [
            {
              info: "为建造行业提供专属、权威的数据定制开发"
            },
            {
              info: "帮助企业更精准"
            },
            {
              info: "更高效地做决策数据支撑"
            }
          ]
        },
        {
          title: "数据咨询服务",
          information: [
            {
              info: "整理、统计、分析建筑公众数据为建筑企业"
            },
            {
              info: "提供相关的数据咨询服务"
            }
          ]
        },
        {
          title: "网站定制服务",
          information: [
            {
              info: "为建造企业量身打造真正想要的网站"
            },
            {
              info: "让企业通过网站"
            },
            {
              info: "增加品牌知名度"
            },
            {
              info: "提升品牌影响力"
            }
          ]
        },
        {
          title: "App定制服务",
          information: [
            {
              info: "因为更懂建筑业，所以我们能为建筑企业开发更专业"
            },
            {
              info: "更符合需求的APP，真正帮助企业简化业务流程"
            },
            {
              info: "提高工作效率"
            }
          ]
        },
        {
          title: "微信小程序开发",
          information: [
            {
              info: "多样化风格设计"
            },
            {
              info: "企业与产品优势完美结合"
            },
            {
              info: "一对一专业服务"
            }
          ]
        },
        {
          title: "微信公众号",
          information: [
            {
              info: "微信公众号的开发能够为企业增加流量入口"
            },
            {
              info: "拓展营销渠道"
            },
            {
              info: "为企业宣传、业务开发拓展渠道"
            }
          ]
        }
      ],
      productList: [
        {
          id: 0,
          title: "标大大"
        },
        {
          id: 1,
          title: "数据定制服务"
        },
        {
          id: 2,
          title: "日精进小程序"
        }
      ],
      tableInfo:[
        {
          id: "0",
          name: "湖南水口山资产经营管理有限公司物业分离移交项目(EPC)",
          time: "2019年2月",
          area: "衡阳市",
          price: "8254.42",
        },
        {
          id: "1",
          name: "汝城经济开发区广东电子智能产业园基础设施和场地平整EPC 总承包",
          time: "2019年2月",
          area: "郴州市",
          price: "1000000.00",
        },
        {
          id: "2",
          name: "湘潭市雨湖区湘锰小学提质改造建设项目(一期)工程总承包 EPC施工",
          time: "2019年2月",
          area: "湘潭市",
          price: "700.00",
        },
        {
          id: "3",
          name: "爱劳渠黑臭水体基础治理工程总承包(EPC)项目",
          time: "2019年3月",
          area: "湘潭市",
          price: "12200.00",
        },
        {
          id: "4",
          name: "安化县东坪镇杨林含镉石煤开采区历史遗留污染环境治理EPC 项目",
          time: "2019年3月",
          area: "益阳市",
          price: "1550.00",
        },
        {
          id: "5",
          name: "湖南科技学院棚户区改造项目EPC",
          time: "2019年3月",
          area: "永州市",
          price: "9469.60",
        }
      ],
      current: 1
    };
  },
  methods: {
    handleClick(index) {
      this.current = index;
    }
  },
  created() {}
};
</script>
<style scoped lang="less">
@import "../styles/global";
@width: 100%;
@bg-black: #000000;
@bg-width: 1180px;
.home {
  width: 100%;
  .home_middle {
    background-color: @mainColor !important;
    height: 468px;
    .home_middle_title {
      width: @bg-width;
      height: 468px;
      margin: 0 auto;
    }
    .title_slogan {
      font-size: 38px;
      margin-bottom: 16px;
    }
    .link_us {
      width: 182px;
      height: 48px;
      line-height: 48px;
      border-radius: 24px;
      border: 1px solid #fff;
      margin-top: 42px;
    }
    img {
      width: 504px;
      height: 410px;
    }
  }
  .product_middle {
    padding: 80px 0;
    background-color: @bgColor;
    .product_info {
      width: @bg-width;
      margin: 0 auto;
      .product {
        margin-bottom: 80px;
        font-size: 34px;
        ul {
          color: #424040;
        }
      }
      .more_info {
        width: 222px;
        height: 56px;
        border-radius: 28px;
        line-height: 56px;
        border: 1px solid #dddfe4;
        color: @mainColor;
        margin: 0 auto;
      }
    }
    .active {
      font-weight: 600;
    }
    .product_name li {
      text-align: center;
      height: 60px;
    }
    .line {
      width: 100px;
      height: 6px;
      border: none;
      background-color: #000000;
      margin: 28px auto 0;
    }
  }
  .service_area {
    background-color: @mainColor;
    height: 765px;
    padding-top: 80px;
    position: relative;
    .left_img {
      position: absolute;
      bottom: 0;
      left: 65px;
    }
    .right_img {
      top: 0;
      right: 0;
      position: absolute;
    }
    .service_area_title {
      margin-bottom: 80px;
      font-size: 34px;
    }
    .service_area_info {
      margin: 0 auto;
      width: @bg-width;
      min-width: @bg-width;
      .info_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: @width;
        transition: all 2s ease-in-out; //这里表示动画的时间为2s
        .info_title {
          border-radius: 4px;
          height: 228px;
          width: 380px;
          background-color: #4468e5;
        }
        .info_title:hover {
          transform: scale(1.03, 1.07);
        }
      }
    }
  }
  .info {
    height: 748px;
    background: #ffffff url(../assets/src/images/bg4.png) no-repeat center;
    .item-info {
      width: 1000px;
      padding-top: 80px;
      min-width: 1000px;
      margin: 0 auto;
      .info-item {
        margin: 120px 0;
        ul > li {
          span {
            font-size: 72px;
          }
        }
      }
      .info-btn {
        width: 182px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #000000;
        border-radius: 24px;
        margin: 0 auto;
      }
    }
  }
}
</style>