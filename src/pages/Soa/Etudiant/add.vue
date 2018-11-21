<template>
    <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>contacts</md-icon>
          </div>
          <h4 class="title">Basics Infos</h4>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Numero Etudiant</label>
            <md-input v-model="etudiant.numeroetudiant" type="text"></md-input>
          </md-field>
          <md-field>
            <label>Nom</label>
            <md-input v-model="etudiant.nom" type="text"></md-input>
          </md-field>
          <md-field>
            <label>Prenom</label>
            <md-input v-model="etudiant.prenom" type="text"></md-input>
          </md-field>
        </md-card-content>

      </md-card>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>mail_outline</md-icon>
          </div>
          <h4 class="title">Additionnals Infos</h4>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Email Adress</label>
            <md-input v-model="etudiant.email" type="email"></md-input>
          </md-field>
          <md-field>
            <label>Classe</label>
            <md-select v-model="etudiant.codeclasse">
                <md-option v-for="item in all_classe" :key="item.codeclasse" :value="item.codeclasse">{{item.libelleclasse}}</md-option>
            </md-select>
          </md-field>
          <md-field>
            <label>Promotion</label>
            <md-select v-model="etudiant.annee">
                <md-option v-for="item in all_promotion" :key="item.annee" :value="item.annee">{{item.annee}}</md-option>
            </md-select>
          </md-field>
        </md-card-content>
      </md-card>
      <md-button class="md-success" type="submit" @click="addEtudiant"><md-icon>add</md-icon>Add</md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            etudiant: {
                numeroetudiant: '',
                nom: '',
                prenom: '',
                email: '',
                codeclasse: '',
                annee: ''
            },
            all_classe: [],
            all_promotion: []
        }
    },
    mounted(){
        //Appel de la liste des classes:
        console.log('All Class called !!!')
        axios.get('http://localhost:8080/listClasse')
            .then(resp => {
                this.all_classe = resp.data
            })
        
        //Appel de la liste des Promotions:
        console.log('All Promotions called !!!')
        axios.get('http://localhost:8080/listPromotion')
            .then(resp => {
                this.all_promotion = resp.data
            })
    },
    methods:{
        addEtudiant(){
            axios.post('http://localhost:8080/saveEtudiant', {body: this.etudiant})
                .then(response => {
                    console.log(response.data)
                    this.$router.push({name: 'etudiant.index'})
                })
                .catch(err => console.error(err))
        }
    }
}
</script>

<style>

</style>
