<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Books In Motivational Category</v-flex
            >
        </v-layout>
        <v-layout row wrap class="book-categories">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://kbimages1-a.akamaihd.net/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg"
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
                            <h3 class="headline mb-0">The Alchemist</h3>
                            <div>
                              This book encourages each of us to listen to our hearts, recognize our unique opportunities in life, and pursue our passions. This story, dazzling in its powerful simplicity and inspiring wisdom.The Alchemist presents a simple fable, based on simple truths and places it in a highly unique situation and has inspired a devoted following around the world. 
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            to="/join"
                            block
                            color="green"
                            @click="showCategories('motivational')"
                            data-cy="plansMotivationalBtn"
                        >
                              BUY FROM AMAZON | $9.98</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images-na.ssl-images-amazon.com/images/I/61xPDmYV7SL.jpg"
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
                            <h3 class="headline mb-0">Learning How to Fly: Life Lessons for the Youth</h3>
                            <div>
                               Dr. A. P. J. Abdul Kalam had a great belief in the power of the youth. He met over 21 million children and young people in India and outside and spoke to them about the power of knowledge, ambition, moral behavior and the need to bring about change in society.  
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="green"
                            to="/join"
                            @click="showCategories('motivational')"
                            data-cy="plansMotivationalBtn"
                        >
                            BUY FROM AMAZON | $1.95
                           </v-btn
                        >
                         
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images-na.ssl-images-amazon.com/images/I/61oKmy-Cr6L.jpg"
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
                            <h3 class="headline mb-0">The Power of a positive attitude</h3>
                            <div>
                            This book provides handy tips for overcoming negative attitude, managing stress, and coping with burnout, and expounds on how converting negative thinking to positive action can bring about a change in life. The power of a positive attitude will help you uncover your hidden abilities and achieve success.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            to="/join"
                            color="green"
                            @click="showCategories('motivational')"
                            data-cy="plansMotivationalBtn"
                        >
                            BUY FROM AMAZON | $49</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<style scoped></style>
