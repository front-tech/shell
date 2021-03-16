import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
// applications.forEach((app) => {
//   if (app.name === "@front-tech/inspire") {
//     return registerApplication({...app,
//       customProps: {
//         title: "RECOMMENDATIONS",
//         items: `[
//         {​​​​​
//         "id": 1,
//         "name": "Tractor Blue",
//         "url": "https://front-tech.github.io/products/",
//         "img": "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-blue-thumb.jpg"
//         }​​​​​,
//         {​​​​​
//         "id": 2,
//         "name": "Tractor Green",
//         "url": "https://front-tech.github.io/products/",
//         "img": "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-green-thumb.jpg"
//         }​​​​​,
//         {​​​​​
//         "id": 3,
//         "name": "Tractor Red",
//         "url": "https://front-tech.github.io/products/",
//         "img": "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-red-thumb.jpg"
//         }​​​​​]`,
//       }
//     });
//   } else {
//     return registerApplication;
//   }
// });

// applications.forEach((conf) => {
//   const mfeCustomConfig =
//     conf.name === "@front-tech/inspire"
//       ? {
//           customProps: {
//             title: "RECOMMENDATIONS",
//             items: JSON.stringify([
//               {
//                 id: 1,
//                 name: "Tractor Blue",
//                 url: "https://front-tech.github.io/products/",
//                 img:
//                   "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-blue-thumb.jpg",
//               },
//               {
//                 id: 2,
//                 name: "Tractor Green",
//                 url: "https://front-tech.github.io/products/",
//                 img:
//                   "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-green-thumb.jpg",
//               },
//               {
//                 id: 3,
//                 name: "Tractor Red",
//                 url: "https://front-tech.github.io/products/",
//                 img:
//                   "https://raw.githubusercontent.com/neuland/micro-frontends/master/0-model-store/images/tractor-red-thumb.jpg",
//               },
//             ]),
//           },
//         }
//       : {};
//   registerApplication({ ...conf, ...mfeCustomConfig });
// });
applications.forEach(registerApplication);
layoutEngine.activate();
start();
