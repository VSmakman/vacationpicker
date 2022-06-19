import { createRouter, createWebHistory } from "vue-router";
import AddCountry from "@/components/AddCountry";
import VacationPicker from "@/components/vacationPicker";

const routes = [
    {
        path:'/',
        name: 'home',
        component: VacationPicker,
    },
    {
        path:'/add',
        name: 'add',
        component: AddCountry,
    },
]

const router = createRouter({
    history:createWebHistory(process.env.Base_URL), routes})

export default router;