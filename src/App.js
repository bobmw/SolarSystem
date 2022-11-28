import DrawerMenu from "./components/DrawerMenu";
import SolarSystem from "./containers/SolarSystem";
import Provider from "./context";


export default function App() {
  return (
    <Provider>
      <DrawerMenu />
      <SolarSystem />
    </Provider>
  );
}
