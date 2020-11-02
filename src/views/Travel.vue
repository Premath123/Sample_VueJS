<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Books In Travel</v-flex
            >
        </v-layout>
        <v-layout row wrap class="book-categories">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://blog.thomascook.in/wp-content/uploads/2016/01/books1.jpg"
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
                            <h3 class="headline mb-0">Vagabonding</h3>
                            <div>
                               Written by Rolf Potts, this book is for those new to long-term travel. Rolf spent 10 years on the road, and his book contains valuable insights, interesting quotes, and a lot of practical information. From saving to planning to life on the road.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                           
                            block
                            color="green"
                            @click="showCategories('travel')"
                            data-cy="plansTravelBtn"
                        >
                              BUY FROM AMAZON | $2.40</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images-na.ssl-images-amazon.com/images/I/41j50cO1GVL._SX311_BO1,204,203,200_.jpg"
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
                            <h3 class="headline mb-0">Travel Fearlessely In India</h3>
                            <div>
                                This book takes a culturally minded look at women’s safety in the country and also informs women on how to minimize the risk of problems while they’re exploring the country by addressing and explaining cultural factors and mindsets.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="green"
                            to="/join"
                            @click="showCategories('travel')"
                            data-cy="plansTravelBtn"
                        >
                            BUY FROM AMAZON | $100
                           </v-btn
                        >
                         
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images-na.ssl-images-amazon.com/images/I/81ULWWH8EfL.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Lonely Planet India</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Lonely Planet India</h3>
                            <div>
                               Written by Sarina Singh
                               Lonely Guide India full of cultural insights, so you can immerse yourself as much as possible in the country's beauty, from ashrams to stunning architecture and gorgeous wildlife.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            to="/join"
                            color="green"
                            @click="showCategories('travel')"
                            data-cy="plansTravelBtn"
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
