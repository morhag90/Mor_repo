import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EeList } from "./ee/EeList";
import { EeCreate } from "./ee/EeCreate";
import { EeEdit } from "./ee/EeEdit";
import { EeShow } from "./ee/EeShow";
import { EeeeeList } from "./eeeee/EeeeeList";
import { EeeeeCreate } from "./eeeee/EeeeeCreate";
import { EeeeeEdit } from "./eeeee/EeeeeEdit";
import { EeeeeShow } from "./eeeee/EeeeeShow";
import { RrrrList } from "./rrrr/RrrrList";
import { RrrrCreate } from "./rrrr/RrrrCreate";
import { RrrrEdit } from "./rrrr/RrrrEdit";
import { RrrrShow } from "./rrrr/RrrrShow";
import { TttttList } from "./ttttt/TttttList";
import { TttttCreate } from "./ttttt/TttttCreate";
import { TttttEdit } from "./ttttt/TttttEdit";
import { TttttShow } from "./ttttt/TttttShow";
import { JfaeiphfadList } from "./jfaeiphfad/JfaeiphfadList";
import { JfaeiphfadCreate } from "./jfaeiphfad/JfaeiphfadCreate";
import { JfaeiphfadEdit } from "./jfaeiphfad/JfaeiphfadEdit";
import { JfaeiphfadShow } from "./jfaeiphfad/JfaeiphfadShow";
import { VsfefefeefsfeList } from "./vsfefefeefsfe/VsfefefeefsfeList";
import { VsfefefeefsfeCreate } from "./vsfefefeefsfe/VsfefefeefsfeCreate";
import { VsfefefeefsfeEdit } from "./vsfefefeefsfe/VsfefefeefsfeEdit";
import { VsfefefeefsfeShow } from "./vsfefefeefsfe/VsfefefeefsfeShow";
import { FsedgbbList } from "./fsedgbb/FsedgbbList";
import { FsedgbbCreate } from "./fsedgbb/FsedgbbCreate";
import { FsedgbbEdit } from "./fsedgbb/FsedgbbEdit";
import { FsedgbbShow } from "./fsedgbb/FsedgbbShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Ee"
          list={EeList}
          edit={EeEdit}
          create={EeCreate}
          show={EeShow}
        />
        <Resource
          name="Eeeee"
          list={EeeeeList}
          edit={EeeeeEdit}
          create={EeeeeCreate}
          show={EeeeeShow}
        />
        <Resource
          name="Rrrr"
          list={RrrrList}
          edit={RrrrEdit}
          create={RrrrCreate}
          show={RrrrShow}
        />
        <Resource
          name="Ttttt"
          list={TttttList}
          edit={TttttEdit}
          create={TttttCreate}
          show={TttttShow}
        />
        <Resource
          name="Jfaeiphfad"
          list={JfaeiphfadList}
          edit={JfaeiphfadEdit}
          create={JfaeiphfadCreate}
          show={JfaeiphfadShow}
        />
        <Resource
          name="Vsfefefeefsfe"
          list={VsfefefeefsfeList}
          edit={VsfefefeefsfeEdit}
          create={VsfefefeefsfeCreate}
          show={VsfefefeefsfeShow}
        />
        <Resource
          name="Fsedgbb"
          list={FsedgbbList}
          edit={FsedgbbEdit}
          create={FsedgbbCreate}
          show={FsedgbbShow}
        />
      </Admin>
    </div>
  );
};

export default App;
