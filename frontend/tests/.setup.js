// fichier de config pour Mocha

// utilisation des ESM (EcmaScript Modules = import/export)
require("@babel/register")();
// on ignire les imports des fichiers .scss
require("ignore-styles");
// config pour Enzyme => test des composants React
const enzyme = require("enzyme");
// adapter pour React 16
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });