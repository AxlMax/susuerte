import React from "react";
import { useLocation, Route, Switch} from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";
import HomeNavBar from "components/Navbars/HomeNavbar";

import routes from "routes.js";

const Home = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  window.google = undefined

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: require("../assets/img/brand/iot.png"),
          imgAlt: "..."
        }}
        layout = "/home"
      />
      <div className="main-content" ref={mainContent}>

        <HomeNavBar
            {...props}
            brandText={getBrandText(props.location.pathname)}
        />  

        <Switch>
          {getRoutes(routes)}
        </Switch>
      </div>
    </>
  );
};

export default Home;
