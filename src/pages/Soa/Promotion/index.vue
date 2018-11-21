<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">PROMOTIONS</h4>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="allPromo" table-header-color="green">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="ANNEES">{{ item.annee }}</md-table-cell>
                                <md-table-cell md-label="ACTIONS"><router-link :to="{name: 'promotion.detail', params: {id: item.annee}}"><md-icon>edit</md-icon></router-link></md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      allPromo: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/listPromotion")
      .then(resp => {
        this.allPromo = resp.data;
      })
      .catch(err => console.error(err));
  }
};
</script>

<style>
</style>
