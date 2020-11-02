<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Books In Nutrition</v-flex
            >
        </v-layout>
        <v-layout row wrap class="book-categories">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://m.media-amazon.com/images/I/51taIoZHCPL.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                   
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">High protein vegan cookbook</h3>
                            <div>
                                This book has more about: Plant-Based Diet for Athletes, Plant-based Supplement and Food-Based Mistakes, Energy and Strength with Protein Diet
                                Health Benefits of Protein, Muscles and Proteins with Plant-based Diet, Plant-based Supplements and many more.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="green"
                            to="/join"
                            @click="showCategories('nutrition')"
                            data-cy="plansNutritionBtn"
                        >
                              BUY FROM AMAZON | $17.38</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://publish.jblearning.com/pic/thumbnails/1284136647.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                   

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Advanced Human Nutrition</h3>
                            <div>
                             This book is Written for the upper-level undergrad or graduate level majors course, Advanced Human Nutrition, Fourth Edition provides an in-depth overview of the human body and details why nutrients are important from a biochemical, physiological, and molecular perspective.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="green"
                            to="/join"
                            @click="showCategories('nutrition')"
                            data-cy="plansNutritionBtn"
                        >
                            BUY FROM AMAZON | $111.01
                           </v-btn
                        >
                         
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images-na.ssl-images-amazon.com/images/I/719ycpD9HgL.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Fortify your life</h3>
                            <div>
                               This book tells about how supplements fit into an overall nutrition picture. Integrative health physician walks you through key minerals and vitamins, gives simple instructions on how to read product labels, and talks about common nutrient deficiencies in our modern lives. 
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            to="/join"
                            color="green"
                            @click="showCategories('nutrition')"
                            data-cy="plansNutritionBtn"
                        >
                            BUY FROM AMAZON | $16</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<style scoped></style>
