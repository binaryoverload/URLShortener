<template>
  <div class="home">
    <Button @click="clicks = 0">Reset clicks</Button>
    <Button @click="clicks++">{{ clicks }} clicks</Button>
    <InputBox v-model="email"></InputBox>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";
import InputBox from "@/components/InputBox.vue";

export default {
  name: "Home",
  data() {
    return {
      email: "",
      clicks: 0
    }
  },
  components: {
    Button,
    InputBox
  }
};
</script>
