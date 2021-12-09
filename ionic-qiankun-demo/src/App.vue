<template>
  <ion-app>
    <ion-router-outlet v-show="$route.name"/>
    <!-- 子应用渲染区，用于挂载子应用节点 -->
    <section v-show="!$route.name" id="angularView"></section>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>