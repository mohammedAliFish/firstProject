

import {createRouter, createWebHistory} from "vue-router";
import Home from '../pages/Home/Home';
import EmployeePage from "../pages/employee/EmployeePage";
import CompanyPage from "../pages/company/CompanyPage";



const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/employees", name: "Employees", component: EmployeePage },
  { path: "/companies", name: "Companies", component: CompanyPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
