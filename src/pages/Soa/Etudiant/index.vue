<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">ETUDIANTS</h4>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="all_etudiants" table-header-color="green">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="NUMERO">{{ item.numeroetudiant }}</md-table-cell>
                                <md-table-cell md-label="NOM">{{ item.nom }}</md-table-cell>
                                <md-table-cell md-label="PRENOM">{{ item.prenom }}</md-table-cell>
                                <md-table-cell md-label="EMAIL">{{ item.email }}</md-table-cell>
                                <md-table-cell md-label="ACTIONS"><router-link :to="{name: 'etudiant.detail', params: {id: item.numeroetudiant}}"><i>detail</i></router-link></md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                    <md-card-footer>
                        <md-button type="submit" @click="addEtudiant" class="md-success">Add<md-icon>add</md-icon></md-button>
                    </md-card-footer>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      all_etudiants: [],
    }
  },

  mounted() {
    console.log("All FAculte called !!!");
    axios.get("http://localhost:8080/listEtudiant").then(response => {
      console.log(response.data);
      this.all_etudiants = response.data;
    });
  },

  methods: {
    addEtudiant(){
        this.$router.push({name: 'etudiant.add'})
    }
  }
}
</script>

