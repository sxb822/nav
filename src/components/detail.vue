<template>
  <div>
    <p>这是一段文字</p>
    <div v-html="a">
      <!-- <pre>{{a}}</pre> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: ""
    };
  },
  mounted() {
    const b = `




1.edweacvv
    2.fwf rfv  
    3.dfafdfg

      `;
    const html = `<pre></pre>`;
    this.a = `<pre>${b}</pre>`;
  }
};
</script>