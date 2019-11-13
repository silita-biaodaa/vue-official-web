<template>
  <div class="currentTab bg-fff">
    <div class="select cp">
      <ul class="fs20 dfrca product_name">
        <li ref="li" v-for="(item,a) in parentsList" :key="a" @click="handleClick(item.id)">
          <a :class="{active : current == item.id}">
            {{item.title}}
            <div v-if="current == item.id" class="line"></div>
          </a>
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
    }
  },
  data() {
    return {
      parentsList: [],
      current: 0
    };
  },
  methods: {
    handleClick(index) {
      this.current = index;
      this.$emit('childValue',this.current);
    }
  },
  created() {
    this.parentsList = this.$parent.productList;
  }
};
</script>
<style scoped lang="less">
@import "../styles/global";
.currentTab {
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
</style>