<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Book Categories</v-flex
            >
        </v-layout>
        <v-layout row wrap class="book-categories">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/3OiYMgDKJ6k"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Motivational</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Motivational</h3>
                            <div>
                                Motivation is essential	to almost any aspect of	life and  Motivational Books strengthens the ambition, increases initiative and gives direction, courage, energy and the persistence to follow one's goals

                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['categories'].includes($route.name)">
                        <v-btn
                            outline
                            to="/motivational"
                            block
                            color="green"
                            @click="showCategories('motivational')"
                            data-cy="plansMotivationalBtn"
                        >
                            Select This Category</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/Dogd-bEoZQQ"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Nutrition</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                   

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Nutrition</h3>
                            <div>
                                No matter where you are on the health spectrum, these nutrition and fitness-forward books will inspire you to improve the quality of your life. ... and realistic take on diet and nutrition.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['categories'].includes($route.name)">
                        <v-btn
                            to="/nutrition"
                            outline
                            block
                            color="green"
                            @click="showCategories('nutrition')"
                            data-cy="plansNutritionBtn"
                        >
                            Select This Cattegory</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/FQ96bh4O1tY"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Travel</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Travel</h3>
                            <div>
                                Travel Books come in styles ranging from the documentary,to the
                                literary, as well as the journalistic, and from memoir to the
                                humorous to the serious.They are often associated with tourism. 
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['categories'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            to="/travel"
                            color="green"
                            @click="showCategories('travel')"
                            data-cy="plansTravelBtn"
                        >
                            Select This Category</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<style scoped></style>
