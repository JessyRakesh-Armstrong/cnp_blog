<template>
    <div class="flexbox">
        <Image :src="require('../assets/CNP_logo.png')" alt="Image" width="250" />
    </div>
        <Menubar :model="items"/>
</template>
<style scoped>
.flexbox {
    display: flex;
}
</style>

<script>
import Image from 'primevue/image';
import Menubar from 'primevue/menubar';
export default {
  name: 'nav-bar',
  components: {
    Menubar,
    Image
  },
  data() {
    return {
    items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => {
            // this.goToPage('/');
          },
        },
        
        {
          label: 'About Us',
          icon: 'pi pi-info-circle',
          command: () => {
            // this.goToPage('/about');
          },
        },
        {
          label: 'Projects',
          icon: 'pi pi-shopping-cart',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              command: () => {
                // this.goToPage('/products/new');
              }
            },
            {
              label: 'List',
              icon: 'pi pi-fw pi-list',
              command: () => {
                // this.goToPage('/products');
              }
            }
          ]
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          command: () => {
            // this.goToPage('/contact');
          },
        }
      ]
    }
  }
}
</script>