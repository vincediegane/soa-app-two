import DashboardLayout from '@/pages/Dashboard/Layout/DashboardLayout.vue'
/* import AuthLayout from '@/pages/Dashboard/Pages/AuthLayout.vue'*/

// Dashboard pages
import Dashboard from '@/pages/Dashboard/Dashboard.vue'

// Classes 
import ClasseIndex from '../pages/Soa/Classe/index'
import ClasseAdd from '../pages/Soa/Classe/add'
import ClasseEdit from '../pages/Soa/Classe/edit'
import ClasseDetail from '../pages/Soa/Classe/detail'

// Promotions
import PromotionIndex from '../pages/Soa/Promotion/index'
import PromotionAdd from '../pages/Soa/Promotion/add'
import PromotionEdit from '../pages/Soa/Promotion/edit'
import PromotionDetail from '../pages/Soa/Promotion/detail'

// Etudiants
import EtudiantIndex from '../pages/Soa/Etudiant/index'
import EtudiantAdd from '../pages/Soa/Etudiant/add'
import EtudiantEdit from '../pages/Soa/Etudiant/edit'
import EtudiantDetail from '../pages/Soa/Etudiant/detail'

// Evaluations
import EvaluationIndex from '../pages/Soa/Evaluation/index'
import EvaluationAdd from '../pages/Soa/Evaluation/add'
import EvaluationEdit from '../pages/Soa/Evaluation/edit'
import EvaluationDetail from '../pages/Soa/Evaluation/detail'

// UEs
import UEIndex from '../pages/Soa/UE/index'
import UEAdd from '../pages/Soa/UE/add'
import UEEdit from '../pages/Soa/UE/edit'
import UEDetail from '../pages/Soa/UE/detail'

// ECs
import ECIndex from '../pages/Soa/EC/index'
import ECAdd from '../pages/Soa/EC/add'
import ECEdit from '../pages/Soa/EC/edit'
import ECDetail from '../pages/Soa/EC/detail'

const routes = [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home'
  },
  {
    path: '/',
    component: DashboardLayout,
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        components: {
          default: Dashboard
        }
      },
      // CLASSES :
      {
        path: '/classe',
        name: 'classe.index',
        component: ClasseIndex
      },
      {
        path: '/classe/add',
        name: 'classe.add',
        component: ClasseAdd
      },
      {
        path: '/classe/:id/edit',
        name: 'classe.edit',
        component: ClasseEdit
      },
      {
        path: '/classe/:id/detail',
        name: 'classe.detail',
        component: ClasseDetail
      },
      // PROMOTIONS :
      {
        path: '/promotion',
        name: 'promotion.index',
        component: PromotionIndex
      },
      {
        path: '/promotion/add',
        name: 'promotion.add',
        component: PromotionAdd
      },
      {
        path: '/promotion/:id/edit',
        name: 'promotion.edit',
        component: PromotionEdit
      },
      {
        path: '/promotion/:id/detail',
        name: 'promotion.detail',
        component: PromotionDetail
      },
      // ETUDIANTS :
      {
        path: '/etudiant',
        name: 'etudiant.index',
        component: EtudiantIndex
      },
      {
        path: '/etudiant/add',
        name: 'etudiant.add',
        component: EtudiantAdd
      },
      {
        path: '/etudiant/:id/edit',
        name: 'etudiant.edit',
        component: EtudiantEdit
      },
      {
        path: '/etudiant/:id/detail',
        name: 'etudiant.detail',
        component: EtudiantDetail
      },
      // EVALUATIONS :
      {
        path: '/evaluation',
        name: 'evaluation.index',
        component: EvaluationIndex
      },
      {
        path: '/evaluation/add',
        name: 'evaluation.add',
        component: EvaluationAdd
      },
      {
        path: '/evaluation/:id/edit',
        name: 'evaluation.edit',
        component: EvaluationEdit
      },
      {
        path: '/evaluation/:id/detail',
        name: 'evaluation.detail',
        component: EvaluationDetail
      },
      // UE :
      {
        path: '/ue',
        name: 'ue.index',
        component: UEIndex
      },
      {
        path: '/ue/add',
        name: 'ue.add',
        component: UEAdd
      },
      {
        path: '/ue/:id/edit',
        name: 'ue.edit',
        component: UEEdit
      },
      {
        path: '/ue/:id/detail',
        name: 'ue.detail',
        component: UEDetail
      },
      // ECs :
      {
        path: '/ec',
        name: 'ec.index',
        component: ECIndex
      },
      {
        path: '/ec/add',
        name: 'ec.add',
        component: ECAdd
      },
      {
        path: '/ec/:id/edit',
        name: 'ec.edit',
        component: ECEdit
      },
      {
        path: '/ec/:id/detail',
        name: 'ec.detail',
        component: ECDetail
      }
    ]
  }
];

export default routes
