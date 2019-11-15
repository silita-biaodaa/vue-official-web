<template>
  <div class="navBar">
    <div class="navbar">
      <div class="navbar_info">
        <a @click="jumpIndex" class="cp">
          <div class="navbar_top_left drc">
            <div class="img_logo">
              <img :src="img1" alt />
            </div>
          <div class="navbar_top_line bg-white ml20 mr20"></div>
          <div class="color-fff fs16">积善行 思利他</div>
        </div>
        </a>
        <div class="navbar_top_right">
          <ul class="drc color-fff fs16">
            <li
              class="cp option_list"
              v-for="(item,a) in optionList"
              :key="a"
              @mouseenter="handleClick(item.id,$event)"
              @mouseleave="leave()"
              :class="{showArrow: current == item.id}"
            >
              {{item.title}}
              <i
                class="el-icon-caret-bottom ml10"
                :class="{'hide': current == item.id}"
              ></i>
              <i
                class="el-icon-caret-top ml10"
                :class="{'hide': current !== item.id || current == null}"
              ></i>
              <ul class="option hide">
                <li
                  v-for="(i,j) in item.companyInfo"
                  :key="j"
                  class="text-c"
                  @mouseenter="handleOption(i.index)"
                  @mouseleave="leaveOption()"
                  @click="toParent(i.index)"
                  :class="{showArrow: Index == i.index}"
                >
                  <a class="color-fff" @click="jump(i.pathRef,i.index)">
                    {{i.name}}
                    <i class="el-icon-right ml10" :class="{'hide': Index !== i.index}"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: require("../assets/src/images/logo.png"),
      optionList: [
        {
          id: 0,
          title: "产品介绍",
          companyInfo: [
            {
              index: 0,
              name: "标大大",
              pathRef: "/productBig"
            },
            {
              index: 1,
              name: "数据定制服务",
              pathRef: "/dataService"
            },
            {
              index: 2,
              name: "日精进定课小程序",
              pathRef: "/smallOrder"
            }
          ]
        },
        {
          id: 1,
          title: "服务范围",
          companyInfo: [
            {
              index: 0,
              name: "建筑大数据定制大服务",
              pathRef: "/building"
            },
            {
              index: 1,
              name: "数据资讯服务",
              pathRef: "/advice",
            },
            {
              index: 2,
              name: "网站开发服务",
              pathRef: "/webDevelop"
            },
            {
              index: 3,
              name: "APP开发服务",
              pathRef: "/appDevelop"
            },
            {
              index: 4,
              name: "微信公众号开发服务",
              pathRef: "/weChatDevelop"
            },
            {
              index: 5,
              name: "小程序开发服务",
              pathRef: "/appletDevelop"
            }
          ]
        },
        // {
        //   id: 2,
        //   title: "团队介绍",
        //   companyInfo: [
        //     {
        //       index: 0,
        //       name: "团队介绍",
        //     },
        //     {
        //       index: 1,
        //       name: "团队优势"
        //     }
        //   ]
        // },
        {
          id: 3,
          title: "关于我们",
          companyInfo: [
            {
              index: 0,
              name: "公司简介",
              pathRef: "/companyInfo"
            },
            {
              index: 1,
              name: "发展历程",
              pathRef: "/history"
            },
            {
              index: 2,
              name: "企业文化",
              pathRef: "/culture"
            }
          ]
        }
      ],
      current: null,
      Index: null
    };
  },
  methods: {
    handleClick(index, e) {
      this.current = index;
    },
    leave() {
      this.current = null;
    },
    handleOption(i) {
      this.Index = i;
    },
    leaveOption() {
      this.Index = null;
    },
    toParent(i) {
        this.$emit('toChildren', i);
    },
    jump(path,index){
      if(this.$route.path !== path) {
        this.$router.push({ path: path, query: { id: index } });
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    jumpIndex() {
      if(this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style scoped lang="less">
@import "../styles/global";
@width: 100%;
@bg-black: #000000;
@min-width: 1180px;
.navBar {
  width: 100%;
  min-width: @min-width;
  position: fixed;
  top: 0;
  z-index: 20;
  .navbar {
    height: 60px;
    line-height: 60px;
    background-color: @bg-black;
    .navbar_info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: @min-width;
      margin: 0 auto;
    }
    .navbar_top_left {
      .img_logo {
        width: 100px;
        height: 50px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .navbar_top_line {
        height: 20px;
        width: 1px;
      }
    }
    .navbar_top_right {
      .option_list {
        margin-left: 60px;
        position: relative;
        .option {
          background-color: @bg-black;
          position: absolute;
          left: 50%;
          margin-left: -110px;
          z-index: 10;
          li {
            height: 50px;
            line-height: 50px;
            width: 210px;
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            a:hover {
                color: @mainColor;
            }
          }
        }
      }
      .option_list:hover {
        .option {
          display: block !important;
        }
      }
    }
  }
  .showArrow {
    color: @mainColor !important;
  }
}
</style>