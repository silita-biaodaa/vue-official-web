<template>
  <div class="productBig pt60">
    <narBar></narBar>
    <topBar :titleInfo="titleInfo"></topBar>
    <div class="pt30">
      <currentTab :productList="productList"></currentTab>
      <div :class="{hide : tabNav !== 0}" class="bg-fff current0">
        <div class="product_info">
          <barTitle :title="title"></barTitle>
          <div
            class="fs20 mt40 mb40"
          >标大大是一个专注于建筑行业的综合信息服务平台，平台上线四年时间，建立了强大的数据挖掘和大数据处理平台，使用尖端的机器学习和智能推荐引擎。我们构建了“全方位的信息聚合、精准细致的行业分类、高可读性移动端体验、自定义订阅收藏、权威公信信息源、公告出处链接跳转”一体化招标信息服务体系，致力于给企业提供一个及时、精准、无遗漏的招投标信息和企业信息获取和价值挖掘平台。</div>
          <div class="fs34 text-c user_title">让用户小成本中大标</div>
          <publicInfo class="pb40"></publicInfo>
        </div>
        <div class="biaodd_info pt80 pb40">
          <div class="biaodd_item">
            <div class="fs34 text-c mb80">评标专家都在用的招投标神器</div>
            <div class="dfrcb">
              <div class="biaodd_item_img">
                <img :src="img" alt />
              </div>
              <div class="item_info">
                <div class="fs16 f600 mb20">海量数据，实时更新</div>
                <div class="bottom_info mb40 fs14">
                  日均新增信息量上万条。
                  <span>500w+</span>建筑企业法务数据；
                  <span>10W+</span>湖南在建数据
                  <span>50W+</span>企业数据；
                  <span>200w+</span>业绩数据 ；
                  <span>400w+</span>建筑行业企业工商详情；
                  <span>300w+</span>建筑行业企业联系方式；
                  <span>430w+</span>企业注册人员；
                  <span>400w+</span>招标公告；
                  <span>320w+</span>中标公告。
                </div>
                <ul v-for="(item,i) in biaoddList" :key="i">
                  <li>
                    <div class="fs16 f600 mb20">{{item.title}}</div>
                    <ul class="mb40">
                      <li
                        v-for="(a,b) in item.itemList"
                        :key="b"
                        class="bottom_info fs14"
                      >{{a.info}}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pt80 pb80 service">
          <div class="core_service">
            <div class="text-c fs34 mb40">会员专属八大核心服务</div>
            <div class="item">
              <ul class="dfrcb">
                <div class="img1">
                  <img :src="img1" alt />
                </div>
                <div class="img2">
                  <img :src="img2" alt />
                </div>
                <div class="img3">
                  <img :src="img3" alt />
                </div>
                <li v-for="(item,index) in serviceList" :key="index" class="mt20">
                  <div :class="{'hideBox': index == 8}" class="li_item">
                    <div class="fs16 f600 pt20 pb10 pl20 pr20">{{item.title}}</div>
                    <div class="fs14 f400 pl20 pr20">{{item.content}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="CQ_code pt80 pb80">
          <div class="link_code">
            <div class="fs34 text-c mb80">各大市场均可下载</div>
            <div class="fs20 mb40">标大大App已上线苹果应用商店和各大安卓应用市场，欢迎下载使用～</div>
            <div class="dfrca">
              <div>
                <div class="code_item">
                  <img :src="img5" alt />
                </div>
                <div class="text-c fs20 mt30">App Store/安卓市场下载</div>
              </div>
              <div>
                <div class="code_item">
                  <img :src="img4" alt />
                </div>
                <div class="text-c fs20 mt30">关注公众号</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../assets/src/images/biaodd_bg3.png"),
      img1: require("../assets/src/images/biaodd_icon1.png"),
      img2: require("../assets/src/images/biaodd_icon2.png"),
      img3: require("../assets/src/images/biaodd_icon3.png"),
      img4: require("../assets/src/images/biaodd_code1.png"),
      img5: require("../assets/src/images/biaodd_code2.png"),
      current: 0,
      tabNav: 0,
      title: "标大大",
      biaoddList: [
        {
          title: "数据权威可靠",
          itemList: [
            {
              info: "标大大——已获得国家版权局颁发的计算机软件著作权。"
            },
            {
              info:
                "标大大平台信息均来源全国建筑市场监管公共服务平台、地方四库一平台、全国招投标监管网、地方招投标监管网、各级政府采购网，权威可靠。可用于企业投标信息参考、招投标业绩核实、信用评估等方面。"
            }
          ]
        },
        {
          title: "信息全面，你想查的这里都有",
          itemList: [
            {
              info: "查企业（可查询企业工商、法务、资质、业绩、中标）"
            },
            {
              info: "查在建（可查询湖南省内所有在建项目信息）"
            },
            {
              info:
                "查人员（可精准查询个人注册证书、个人业绩、不良记录、变更记录）"
            },
            {
              info:
                "查中标（可根据地区、中标金额、关键词筛选出您想要的中标公告）"
            },
            {
              info:
                "查招标（可根据地区、类型、招标金额、关键词筛选出您想要的招标公告）"
            },
            {
              info:
                "查法务（可查询全国建筑业，输入企业名称即可查询改公司是否有相关法务信息）"
            },
            {
              info: "查业绩（可查询全国住建、水利、交通行业）"
            }
          ]
        }
      ],
      productList: [
        {
          id: 0,
          title: "标大大",
          path: "/productBig"
        },
        {
          id: 1,
          title: "数据定制服务",
          path: "/dataService"
        },
        {
          id: 2,
          title: "日精进定课小程序",
          path: "/smallOrder"
        }
      ],
      serviceList: [
        {
          title: "全国业绩，组合查询",
          content:
            "涵盖全国住建部、水利部、交通部业绩，可根据项目竣工时间、项目金额、项目地区等组合查询。"
        },
        {
          title: "招、中标公告筛选",
          content:
            "提供全国各省的招、中标公告，会员可根据地区、项目类型、项目资质和评标办法等筛选条件查询出自己想要的信息。"
        },
        {
          title: "企业数据库",
          content:
            "提供300万+家企业的基本信息，包括企业工商信息、企业联系方式、分支机构、法务信息、资质信息、人员信息、业绩信息、中标信息、诚信信息。"
        },
        {
          title: "综合查询",
          content:
            "业绩等条件，查询出符合条件的建筑企业业绩信息，快捷方便，为用户提供个性化的信息查询服务。"
        },
        {
          title: "是否在建一查便知",
          content:
            "1、涵盖湖南省内所有在建信息。2、精准查询，只要输入姓名或者身份证号即可查询，数据真实可靠。"
        },
        {
          title: "客服经理一对一服务",
          content:
            "提供一对一的客服经理服务模式。在服务期间内为会员单位提供全方位立体式的服务，及时解决会员单位使用过程中遇到的问题和困难。"
        },
        {
          title: "首页企业推广",
          content:
            "将会员单位的广告上传到相关页面，整合标大大上下游企业之间的强强合作，充分促进会员单位之间的优势资源互补，并帮助宣传企业获得更多业务的合作机会。"
        },
        {
          title: "建筑企业综合评分排行榜",
          content:
            "只要政府更新建筑企业综合评分排行榜，标大大会在一周内给会员用户邮寄湖南省内前一百名企业评分纸质排行榜。"
        },
        {
          title: "",
          content: ""
        }
      ],
      titleInfo: {
        themem: "产品介绍",
        title: "Product Presentation"
        // companyInfo:
        //   "湖南思利他网络科技有限公司成立于2017年，前身是湖南耀邦。湖南思利他网络科技有限公司 成立于2017年，前身是湖南耀邦…"
      }
    };
  },
  methods: {
    handleClick(path, index) {
      this.$router.push({ path: path, query: { id: index } });
    }
  }
};
</script>
<style lang="less">
@import "../styles/global";
.productBig {
  .currentTab {
    .active {
      font-weight: 600;
    }
    .product_name li {
      height: 60px;
    }
    .line {
      width: 100px;
      height: 6px;
      border: none;
      background-color: #000000;
    }
  }
  .current0 {
    .product_info {
      width: @bg-width;
      min-width: @bg-width;
      margin: 0 auto;
      .user_title {
        margin-bottom: 80px;
      }
    }
    .biaodd_info {
      background-color: @bgColor;
      .biaodd_item {
        width: @bg-width;
        min-width: @bg-width;
        margin: 0 auto;
        .biaodd_item_img {
          width: 577px;
          height: 453px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .item_info {
        .bottom_info {
          width: 485px;
          span {
            color: @mainColor;
          }
        }
      }
    }
    .service {
      .core_service {
        width: @bg-width;
        min-width: @bg-width;
        margin: 0 auto;
        .item {
          position: relative;
          .img1 {
            width: 89px;
            height: 109px;
            position: absolute;
            top: -98px;
            right: 87px;
          }
          .img2 {
            width: 87px;
            height: 93px;
            position: absolute;
            bottom: 33px;
            left: -246px;
          }
          .img3 {
            width: 56px;
            height: 51px;
            position: absolute;
            right: -75px;
            bottom: 56px;
          }
          img {
            width: 100%;
            height: 100%;
          }
          ul > li {
            .li_item {
              width: 380px;
              height: 134px;
              border: 1px solid rgba(221, 223, 228, 1);
            }
            .hideBox {
              border: none;
            }
          }
        }
      }
    }
    .CQ_code {
      background: @bgColor;
      .link_code {
        width: @bg-width;
        min-width: @bg-width;
        margin: 0 auto;
        .code_item {
          width: 342px;
          height: 342px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    //覆盖子组件样式
    .publicInfo /deep/ .item_left {
      background: url(../assets/src/images/biaodd_bg1.png) no-repeat !important;
    }
    .publicInfo /deep/ .item_right {
      background: url(../assets/src/images/biaodd_bg2.png) no-repeat !important;
    }
  }
}
</style>