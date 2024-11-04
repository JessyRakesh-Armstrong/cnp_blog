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

            <a v-else v-ripple :href="item.url" :to="item.route" v-bind="props.action" @click="navigate">

            <router-link v-if="item.route" :to="item.route">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />

            </router-link>
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
                },
                {
                    label: 'About Us',
                    icon: 'pi pi-home',
                    route: '/about-us',
                  
                },
                {
                    label: 'Projects',
                    icon: 'pi pi-search pi-angle-down',
                    route: '/projects',
                    items: [
                        {
                            label: 'Basketball Choose Your Own Adventure',
                            icon: 'pi pi-fw pi-plus',
                            route: '/projects/basketball-mafia',
                        },
                        {
                            label: 'UC Basic Needs Student Dashboard',
                            icon: 'pi pi-fw pi-list',
                            route: '/projects/ucbn',
                        },
                        {
                            label: 'Coffee Companion',
                            icon: 'pi pi-fw pi-list',
                            route: '/projects/coffee-companion',
                        }
                    ]
                },
            ],
        }
    }
}
</script>
