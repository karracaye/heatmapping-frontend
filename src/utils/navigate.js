import Dashboard from "@/pages/dashboard";
import Role from "@/pages/role";

export const navigate = (page) => {
    if (page == 'dashboard') return <Dashboard />;
    if (page == 'role') return <Role />;
}