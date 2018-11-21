<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>assignment</md-icon>
                        </div>
                        <h4 class="title">EC {{$route.params.id}}</h4>
                    </md-card-header>
                    <md-card-content>
                        <tabs
                            :tab-name="['EVALUATIONS', 'DATE EVALUATION']"
                            :tab-icon="['school', 'timer']"
                            class="page-subcategories"
                            nav-pills-icons
                            plain
                            color-button="success">

                            <!-- here you can add your content for tab-content -->
                            <template slot="tab-pane-1">
                            <slide-x-right-transition>
                                <div class="md-alignment-top-center">
                                    <md-table v-model="all_evaluations" table-header-color="green">
                                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                                            <md-table-cell md-label="EVALUATIONS">{{ item.libelleevaluation }}</md-table-cell>
                                        </md-table-row>
                                    </md-table>
                                </div>
                            </slide-x-right-transition>
                            </template>
                            <template slot="tab-pane-2">
                            <slide-x-right-transition>
                                <div class="md-layout md-alignment-top-center">
                                    <md-table v-model="all_evaluations" table-header-color="green">
                                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                                            <md-table-cell md-label="DATE">{{ item.dateevaluation }}</md-table-cell>
                                            <md-table-cell md-label="ACTIONS"><router-link :to="{name: 'evaluation.edit', params: {id: item.codeevaluation}}"><md-icon>edit</md-icon></router-link></md-table-cell>
                                        </md-table-row>
                                    </md-table>
                                </div>
                            </slide-x-right-transition>
                            </template>
                        </tabs>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { SlideXRightTransition, CollapseTransition } from 'vue2-transitions'
import { Collapse, Modal, Tabs } from '@/components'

export default {
    components: {
        Tabs,
        Modal,
        Collapse,
        SlideXRightTransition,
        CollapseTransition
    },
  data() {
    return {
      all_evaluations: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/evaluationByEc/?codeec='+ this.$route.params.id)
      .then(response => {
        this.all_evaluations = response.data;
      });
  }
};
</script>

<style>
</style>
