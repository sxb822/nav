<template>
  <div>
    <el-menu class="menu-Bar">
      <Tree :menuData="this.menuData"></Tree>
    </el-menu>
    <a href="./detail">跳转到详情</a>
  </div>
</template>

<script>
import Tree from "@/components/Tree";
export default {
  name: "HelloWorld",
  data() {
    return {
      menuData: []
    };
  },
  created() {
    this.$ajax
      .get("http://localhost:8080/static/data.json", {})
      .then(response => {
        console.log(response.data);
        this.menuData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    Tree: Tree
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-Bar:not(.el-menu--collapse) {
  width: 400px;
  min-height: 400px;
}
</style>
