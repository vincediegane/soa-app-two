<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">ETUDIANT</h4><h3><badge class="left-badge" type="success">{{selected_etudiant.prenom}} </badge><badge class="left-badge" type="warning">&nbsp; {{selected_etudiant.nom}}</badge></h3>
                    </md-card-header>
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-small-size-100">
                                <h5>CLASSE : <badge class="left-badge" type="warning">{{selected_etudiant.classe.libelleclasse}}</Badge></h5>
                                <h5>PROMOTION : <badge class="left-badge" type="warning">{{selected_etudiant.promotion.annee}}</Badge></h5>
                            </div>
                            <div class="md-layout-item md-small-size-50">
                                <md-table  table-header-color="green">
                                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                                        <md-table-cell md-label="ANNEES">{{ item.annee }}</md-table-cell>
                                    </md-table-row>
                                </md-table>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Badge } from '@/components'

export default {
    components: {
        Badge
    },
    data(){
        return{
            selected_etudiant: {}
        }
    },
    mounted(){
        axios.get('http://localhost:8080/etudiant/'+this.$route.params.id)
            .then(response => {
                this.selected_etudiant = Object.assign({}, this.selected_etudiant, response.data)
            })
    }
}
</script>

<style>

</style>
