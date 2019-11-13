<template>
  <div class="publicTable mb40">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      align="center"
      :header-cell-style="tableHeaderColor"
    >
      <el-table-column prop="number" label="序号" width="100px" align="center"></el-table-column>
      <el-table-column prop="name" label="项目名称" width="599px" align="center"></el-table-column>
      <el-table-column prop="time" label="招标时间" width="140px" align="center"></el-table-column>
      <el-table-column prop="area" label="项目地区" width="140px" align="center"></el-table-column>
      <el-table-column prop="price" label="项目金额（万元）" width="200px" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableInfo: {
      type: Array,
      default: ""
    },
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #DDDFE4;font-weight: 700;color: #000";
      }
    }
  },
  created() {
      this.tableData = this.$parent.tableInfo;
  }
};
</script>
<style scoped lang="less">
</style>