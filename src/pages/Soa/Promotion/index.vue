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
                        <p align="center"><ring-loader style="margin-right: 80px;" class="md-layout-item md-size-50 mx-auto md-medium-size-50 md-small-size-50 md-xsmall-size-100" :loading="loading" :color="spinnerOptions.color" :size="spinnerOptions.size"></ring-loader></p>
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
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  components: {
    RingLoader
  },
  data() {
    return {
      allPromo: [],
      loading: false,
      spinnerOptions: {
        //color: '#3f51b5',
        color: "#04B404",
        height: "35px",
        width: "4px",
        margin: "2px",
        radius: "2px"
      }
    };
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      axios
        .get("http://localhost:8080/listPromotion")
        .then(resp => {
          this.allPromo = resp.data;
        })
        .catch(err => console.error(err))
        .then(() => {
          this.loading = false;
        });
    }, 2000);
  }
};
</script>

<style>
</style>
