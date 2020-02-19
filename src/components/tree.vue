<template>
  <div>
    <template v-for="item in menuData">
      <el-submenu :index="item.id" v-if="item.children" :key="item.id">
        <template slot="title">{{item.name}}</template>
        <Tree :menuData="item.children"></Tree>
      </el-submenu>
      <el-menu-item :index="item.id" v-else :key="item.id">
        {{item.name}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    props: ['menuData'],
    name: 'Tree'
  }
</script>
