<template>
  <div>
    <button v-for="i in 7" :key="i" @click="showImage(i)">
      {{ i }}
    </button>

    <div class="imgArea">
      <img v-for="(item, index) in items" :key="index" :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {},
  methods: {
    showImage(i) {
      this.getData(i);
    },
    getData(i) {
      this.$axios
        .get(`https://dog.ceo/api/breeds/image/random/${i}`)
        .then((res) => {
          if (res.data.status == "success") {
            console.log(res);
            this.items = res.data.message;
            console.log(this.items);
          }
        });
    },
  },
};
</script>

<style>
.imgArea {
  display: flex;
  justify-content: center;
  margin: 20px;
}
img {
  width: 100px;
  margin: 10px;
}
</style>
