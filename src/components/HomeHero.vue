<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black brown--text text-xs-center">
                Book Bound
            </div>
           
            <div class="display-1 font-weight-bold brown--text text-xs-center">
               Chase knowledge through the Pages of a Book
            </div>
            <v-btn fab class="mt-5 black darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0FRJ2SCuY4k');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
