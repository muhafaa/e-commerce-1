<template>
  <q-drawer v-model="open" bordered content-class="bg-grey-2">
    <q-list>
      <q-item-label header>Menu</q-item-label>

      <q-item clickable tag="a" to="/">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-black">Home</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable tag="a" @click="toCart">
        <q-item-section avatar>
          <q-icon name="shopping_cart" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-black">Keranjang</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable tag="a" to="/order-list" v-if="isLogin">
        <q-item-section avatar>
          <q-icon name="view_list" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-black">Daftar Pesanan</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: ['drawerOpen'],
  data() {
    return {
      open: this.drawerOpen
    }
  },
  watch: {
    drawerOpen(o, n) {
      this.open = this.drawerOpen
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    toCart() {
      if (!this.isLogin) {
        this.$q.notify({
          icon: 'error',
          progress: true,
          color: 'red',
          textColor: 'black',
          classes: 'glossy',
          message: 'Login untuk melanjutkan'
        })
        this.$router.push('/login')
      } else {
        this.$router.push('/cart')
      }
    }
  }
}
</script>

<style></style>
