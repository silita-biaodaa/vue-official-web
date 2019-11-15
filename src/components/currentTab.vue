<template>
  <div class="currentTab bg-fff">
    <div class="select cp">
      <ul class="fs20 dfrcb product_name">
        <li ref="li" v-for="(item,a) in parentsList" :key="a" @click="handleClick(item.id,item.path)" class="center-tb-scatter fs16">
          <a :class="{active : current == item.path}">
            {{item.title}}
          </a>
          <div v-if="current == item.path" class="line"></div>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
  </div>
</template>
<script>
export default {
  props: {
    productList: {
      type: Array,
      default: ""
    },
  },
  data() {
    return {
      parentsList: [],
      current: ''
    };
  },
  methods: {
    handleClick(index,path) {
      this.current = path;
      if(this.$route.path !== path) {
        this.$router.push({ path: path, query: { id: index } });
      }
    }
  },
  created() {
    this.parentsList = this.$parent.productList;
    this.current = this.$route.path;
  }
};
</script>
<style scoped lang="less">
@import "../styles/global";
.currentTab {
  .active {
    font-weight: 600;
  }
  .product_name{
    width: 1180px;
    min-width: 1180px;
    margin: 0 auto;
    li {
      height: 60px;
    }
  }
  .line {
    width: 100px;
    height: 6px;
    border: none;
    background-color: #000000;
  }
}
</style>