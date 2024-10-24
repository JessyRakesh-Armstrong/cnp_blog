<template>
    <div class="flexbox">
        <Image :src="require('../assets/CNP_logo.png')" alt="Image" width="250" />
    </div>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
            </a>
        </template>
    </Menubar>
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
        Image,
        Menubar,
    },
    data() {
        return {
            CNPLOGO: '../assets/CNP_logo.png',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-link',
                    route: '/',
                    command: () => {
                      console.log(window.location.href)
                      this.$router.push({path: "/"});
                    }
                },
                {
                    label: 'About Us',
                    icon: 'pi pi-home',
                    route: '/about-us',
                    command: () => {
                      this.$router.push({path: '/about-us'});
                    }
                }
            ],
            itemstest: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    route: '/',
                    command: () => {
                        // this.goToPage('/');
                        // useRoute('/')
                    },
                },

                {
                    label: 'About Us',
                    icon: 'pi pi-info-circle',
                    route: '/about',
                    command: () => {
                        console.log("hit")
                        this.$router.push('/about/')
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
