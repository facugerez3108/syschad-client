import MainContainer from "../../../components/main/main-container";
import Layout from "../../../layout/layout";
import UserTable from "./components/user-table";
import { Heading } from "../../../components/ui/heading";

const UserList = () => {
  return (
    <Layout>
      <MainContainer>
        <Heading title="Gestión de Alumnos" description="Gestiona los alumnos desde aquí."/>
        <UserTable />
      </MainContainer>
    </Layout>
  );
};

export default UserList;
