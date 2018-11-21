<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">UE {{$route.params.id}}</h4>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="ec" table-header-color="green">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="EC">{{ item.libelleec }}</md-table-cell>
                                <md-table-cell md-label="COEFICIENT">{{ item.coef }} CREDITS</md-table-cell>
                                <md-table-cell md-label="EC">{{ item.quantumhoraire }} HEURES</md-table-cell>
                                <md-table-cell md-label="ACTIONS"><router-link :to="{name: 'ec.detail', params: {id: item.codeec}}"><md-icon>edit</md-icon></router-link></md-table-cell>
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
      all_ec: [],
      ec: []
    };
  },
  mounted() {
    axios.get("http://localhost:8080/listEc").then(response => {
      this.all_ec = response.data;
      for (var i = 0; i <= this.all_ec.length; i++) {
        if (this.all_ec[i].ue.codeue === this.$route.params.id) {
          this.ec.push(this.all_ec[i]);
        }
      }
    });
  }
};
</script>

<style>
</style>
