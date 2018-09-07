import Vue from 'vue'
import Router from 'vue-router'
const Studio = () => import('@/components/Studio')
const Institute = () => import('@/components/Institute')
const WorkStation = () => import('@/components/WorkStation')
const Home = () => import('@views/Home/Home')
const SpecialResource = () => import('@views/SpecialResource')
const TResource = () => import('@views/TResource')
const Information = () => import('@views/Information')
const Research = () => import('@views/Research')
const Characteristic = () => import('@views/Characteristic')
const News = () => import('@views/News')
const Topic = () => import('@views/Topic')
const MemberList = () => import('@views/MemberList')
const MessageBoard = () => import('@views/MessageBoard')
const DayLesson = () => import('@views/DayLesson')
const NotFound = () => import('@views/NotFound')
const ClassRoom = () => import('@views/ClassRoom')
const InstituteHome = () => import('@views/InstituteHome')
const ActivityCase = () => import('@views/ActivityCase')
const Article = () => import('@views/Article')
const StudioInformation = () => import('@views/StudioInformation')
const SubjectLeader = () => import('@views/SubjectLeader')
const BriefIntroduce = () => import('@views/BriefIntroduce')
const StudioList = () => import('@views/StudioList')
const Gather = () => import('@views/Gather/Gather')
const ActivityPage = () => import('@views/ActivityPage')

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'*',
      name:'notFound',
      component:NotFound
    },
    {
      path: '/institute/studio/:id',
      component: Studio,
      children:[
        {
          path:'',
          name:'Home',
          component:Home
        },
        {
          path:'resource',
          name:'resource',
          component:SpecialResource
        },
        {
          path:'t_resource',
          name:'t_resource',
          component:TResource
        },
        {
          path:'information',
          name:'information',
          component:Information
        },
        {
          path:'research',
          name:'research',
          component:Research,
        },
        {
          path:'research/:activityId',
          name:'activityPage',
          component:ActivityPage
        },
        {
          path:'characteristic',
          name:"characteristic",
          component:Characteristic
        },
        {
          path:'news',
          name:'news',
          component:News
        },
        {
          path:'topic',
          name:'topic',
          component:Topic
        },
        {
          path:'member',
          name:'member',
          component:MemberList
        },
        {
          path:'msgboard',
          name:'msgboard',
          component:MessageBoard
        },
        {
          path:'classroom',
          name:'classroom',
          component:ClassRoom
        },
        {
          path:'activitycase',
          name:'activitycase',
          component:ActivityCase
        },
        {
          path:'article',
          name:'article',
          component:Article
        },
        {
          path:'introduce',
          name:'introduce',
          component:BriefIntroduce
        },
        {
          path:'gather',
          name:'gather',
          component:Gather
        },
        {
          path:'curriculum',
          name:'curriculum',
          component:DayLesson
        }
      ]
    },
    // {
    //   path:'/institute',
    //   name:'institute',
    //   component:Institute,
    //   children:[
    //     {
    //       path:'home/:id?',
    //       name:'home',
    //       component:InstituteHome
    //     },
    //     {
    //       path:'daylesson',
    //       name:'daylesson',
    //       component:DayLesson
    //     },
    //     {
    //       path:'studioinformation',
    //       name:'studioinformation',
    //       component:StudioInformation
    //     },
    //     {
    //       path:'subjectleader',
    //       name:'subjectleader',
    //       component:SubjectLeader
    //     },
    //     {
    //       path:'list',
    //       name:'list',
    //       component:StudioList
    //     }
    //   ]
    // }
  ],
  scrollBehavior(to ,from , savedPosition){
    if(to.name==='msgboard'){
      return { x : 0 , y : 398 }
    }else{
      return { x :0 , y : 0 }
    }
  }
})
