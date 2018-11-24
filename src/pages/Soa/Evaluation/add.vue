<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-small-size-100">
                <form submit.prevent="addEvaluation">
                    <md-card>
                        <md-card-header class="md-card-header-icon md-card-header-green">
                            <div class="card-icon">
                            <md-icon>contacts</md-icon>
                            </div>
                            <h4 class="title">Basics Infos</h4>
                        </md-card-header>

                        <md-card-content>
                                <md-field>
                                    <label>Code Evaluation</label>
                                    <md-input type="text"></md-input>
                                </md-field>
                                <md-field>
                                    <label>Date Evaluation</label>
                                    <md-input type="text"></md-input>
                                </md-field>
                                <md-field>
                                    <label>Evaluation</label>
                                    <md-input type="text"></md-input>
                                </md-field>
                                <!-- <md-field>
                                    <label>Prenom</label>
                                    <md-input type="text"></md-input>
                                </md-field> -->
                        </md-card-content>
                        <md-card-footer>
                            <md-button class="md-success md-round" type="submit">Add</md-button>
                        </md-card-footer>
                    </md-card>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        addEvaluation(){
            console.log()
        }
    }
}
</script>

<style>

</style>
