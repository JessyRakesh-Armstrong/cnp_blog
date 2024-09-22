<template>
    <Menubar :model="items"/>
</template>

<script>
import Menubar from 'primevue/menubar';
export default {
  name: 'nav-bar',
  components: {
    Menubar,
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