<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">EVALUATIONS</h4>
                        <p align="center"><ring-loader style="margin-right: 80px;" class="md-layout-item md-size-50 mx-auto md-medium-size-50 md-small-size-50 md-xsmall-size-100" :loading="loading" :color="spinnerOptions.color" :size="spinnerOptions.size"></ring-loader></p>
                    </md-card-header>
                    <md-card-content>
                        <md-table v-model="allEvaluation" table-header-color="green">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="Evaluation">{{ item.libelleevaluation }}</md-table-cell>
                                <md-table-cell md-label="Date Evaluation">{{ item.dateevaluation }}</md-table-cell>
                                <md-table-cell md-label="ACTIONS"><router-link :to="{name: 'evaluation.detail', params: {id: item.codeevaluation}}"><md-icon>edit</md-icon></router-link></md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
                <md-button class="md-success" @click="addNewEvaluation">Add</md-button>
            </div>
            <!-- Modal Copy To Clipboard -->
            <modal v-if="showAddEvaluationModal" @close="cancelAddEvaluation">
            <template slot="header">
                <h4 class="modal-title">Add Evaluation</h4>
                <md-button class="md-simple md-just-icon md-round modal-default-button" @click="cancelAddEvaluation">
                <md-icon>clear</md-icon>
                </md-button><br>
                <p align="center">???</p>
            </template>

            <template slot="body">
                <div class="instruction">
                    <form class="md-layout-item md-xlarge-size-80 md-large-size-90">
                    <div class="md-layout">
                            <div
                            class="md-layout-item md-layout md-xlarge-size-50 md-large-size-50 md-medium-size-100 md-small-size-100 md-xsmall-size-100">
                                <div class="md-layout-item md-size-100 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                                    <md-field>
                                        <label>Code Evaluation</label>
                                        <md-input type="text" v-model="evaluation.codeevaluation" />
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                                    <md-field>
                                        <label>Date Evaluation</label>
                                        <md-input type="text" v-model="evaluation.dateevaluation" />
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                                    <md-field>
                                        <label>Evaluation</label>
                                        <md-input type="text" v-model="evaluation.libelleevaluation" />
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                                    <md-field>
                                        <label for="ec">Element Constitutif</label>
                                        <md-select name="ec" id="ec" v-model="evaluation.codeec">
                                            <md-option v-for="ec in allEc" :key="ec.codeec" :value="ec.codeec">
                                                {{ec.libelleec}}
                                            </md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </template>

            <template slot="footer">
                <md-button class="md-success md-round" @click="addEvaluation">Add</md-button>
                <md-button class="md-danger md-round" @click="cancelAddEvaluation">Cancel</md-button>
            </template>
            </modal>
        <!-- //End Copy ClipBoard Modal -->
        </div>
    </div>
</template>

<script>
import axios from "axios";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import { Collapse, Modal, Tabs } from "@/components";

export default {
  components: {
    RingLoader,
    Modal
  },
  data() {
    return {
      loading: false,
      spinnerOptions: {
        //color: '#3f51b5',
        color: "#04B404",
        height: "35px",
        width: "4px",
        margin: "2px",
        radius: "2px"
      },
      allEvaluation: [],
      evaluation: {
        codeevaluation: '',
        dateevaluation: '',
        libelleevaluation: '',
        codeec: ''
      },
      allEc: [],
      showAddEvaluationModal: false,
      modalLoading: false
    };
  },
  mounted() {
    this.loading = true;
    // All EC :
    axios.get("http://localhost:8080/listEc").then(res => {
      this.allEc = res;
    });

    setTimeout(() => {
      axios
        .get("http://localhost:8080/listEvaluation")
        .then(response => {
          this.allEvaluation = response.data;
        })
        .catch(err => {
          console.error(err);
        })
        .then(() => {
          this.loading = false;
        });
    }, 2000);
  },
  methods: {
    addNewEvaluation() {
      this.showAddEvaluationModal = true;
    },
    cancelAddEvaluation() {
      this.showAddEvaluationModal = false;
    },
    addEvaluation() {
        setTimeout(() =>
            this.modalLoading = true,
            axios.post('http://localhost:8080/saveEvaluation',
            {body: this.evaluation})
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.error(err)
                })
                .then(() => {
                    this.modalLoading = false
                })
        , 2000);
    }
  }
};
</script>

<style>
</style>
